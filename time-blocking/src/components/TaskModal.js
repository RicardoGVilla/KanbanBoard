import React from "react";
import "./TaskModal.css";

const TaskModal = ({ task, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="task-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{task.content}</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-content">
          <div>
            <strong>📅 Task date:</strong> Apr 14, 12:00am
          </div>
          <div>
            <strong>⏱ Estimated time:</strong> Click to edit
          </div>
          <div>
            <strong>🕒 Actual time:</strong> Click to edit (Start timer)
          </div>
          <div>
            <strong>🏷 Label:</strong> Select a label
          </div>
          <div>
            <strong>🔁 Repeats:</strong> Does not repeat
          </div>
          <div className="modal-section">
            <strong>📝 Notes:</strong>
            <textarea placeholder="Add any notes to the task" />
          </div>
          <div className="modal-section">
            <strong>📌 Subtasks:</strong>
            <button className="add-subtask-btn">+ Add subtask</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
