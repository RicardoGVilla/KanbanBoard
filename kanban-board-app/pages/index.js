import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import {
  ChevronDownIcon,
  PlusIcon,
  DotsVerticalIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <Layout>
      <div className="p-10 flex flex-col h-screen">
        {/* Board header */}
        <div className="flex flex-initial justify-between">
          <div className="flex items-center">
            <h4 className="text-4xl font-bold text-gray-600">Studio Board</h4>
            <ChevronDownIcon
              className="w-9 h-9 text-gray-500 rounded-full
            p-1 bg-white ml-5 shadow-xl"
            />
          </div>

          <ul className="flex space-x-3">
            <li>
              <Image
                src="https://randomuser.me/api/portraits/men/75.jpg"
                width="36"
                height="36"
                objectFit="cover"
                className=" rounded-full "
              />
            </li>
            <li>
              <Image
                src="https://randomuser.me/api/portraits/men/76.jpg"
                width="36"
                height="36"
                objectFit="cover"
                className=" rounded-full "
              />
            </li>
            <li>
              <Image
                src="https://randomuser.me/api/portraits/men/78.jpg"
                width="36"
                height="36"
                objectFit="cover"
                className=" rounded-full "
              />
            </li>
            <li>
              <button
                className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center
                rounded-full"
              >
                <PlusIcon className="w-5 h-5 text-gray-500" />
              </button>
            </li>
          </ul>
        </div>

        {/* Board columns */}
         {ready && ( 
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-4 gap-5 my-5"></div>


          </DragDropContext>

          

         )}
      </div>
    </Layout>
  );
}
