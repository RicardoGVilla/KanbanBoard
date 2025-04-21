import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskModal from './TaskModal';
import './KanbanBoard.css';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState([
    {
      id: 'mon-apr-14',
      title: 'Mon Apr 14',
      cards: [
        { id: '1', content: 'gym' },
        { id: '2', content: 'groceries' }
      ]
    },
    {
      id: 'tue-apr-15',
      title: 'Tue Apr 15',
      cards: [
        { id: '3', content: 'laundry' }
      ]
    },
    {
      id: 'wed-apr-16',
      title: 'Wed Apr 16',
      cards: []
    }
  ]);

  const [selectedCard, setSelectedCard] = useState(null);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = columns.find(col => col.id === source.droppableId);
    const destinationColumn = columns.find(col => col.id === destination.droppableId);

    const sourceCards = [...sourceColumn.cards];
    const [movedCard] = sourceCards.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceCards.splice(destination.index, 0, movedCard);
      setColumns(columns.map(col =>
        col.id === sourceColumn.id ? { ...col, cards: sourceCards } : col
      ));
    } else {
      const destCards = [...destinationColumn.cards];
      destCards.splice(destination.index, 0, movedCard);
      setColumns(columns.map(col => {
        if (col.id === sourceColumn.id) return { ...col, cards: sourceCards };
        if (col.id === destinationColumn.id) return { ...col, cards: destCards };
        return col;
      }));
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {columns.map((column) => (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided) => (
                <div
                  className="kanban-column"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h3>{column.title}</h3>
                  <div className="cards">
                    {column.cards.map((card, index) => (
                      <Draggable key={card.id} draggableId={card.id} index={index}>
                        {(provided) => (
                          <div
                            className="kanban-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            onClick={() => setSelectedCard(card)}
                          >
                            {card.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {selectedCard && (
        <TaskModal
          task={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </>
  );
};

export default KanbanBoard;
