import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "@/components/TodoCard";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useBoardStore } from "@/store/BoardStore";
import { useModalStore } from "@/store/ModelStore";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};
const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: "To Do",
  Inprogress: "In Progress",
  done: "Done",
};

export default function Column({ id, todos, index }: Props) {
  const [searchString] = useBoardStore((state) => [state.searchString]);
  let [openModal] = useModalStore((state) => [state.openModal]);
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable type="card" droppableId={index.toString()}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`p-2 rounded-2xl shadow-2xl ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/80"
                }`}
              >
                <h2 className="flex justify-between font-bold text-xl p-2">
                  {idToColumnText[id]}
                  <span className="text-gray-500 bg-green-200 rounded-full px-2 py-2 text-sm font-normal">
                    {!searchString
                      ? todos.length
                      : todos.filter((todo) =>
                          todo.title
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                        ).length}
                  </span>
                </h2>

                <div className="space-y-2 pr-0.5 max-h-[70vh] overflow-y-scroll">
                  {todos.map((todo, index) => {
                    if (
                      searchString &&
                      !todo.title
                        .toLowerCase()
                        .includes(searchString.toLowerCase())
                    )
                      return null;
                    return (
                      <Draggable
                        key={todo.$id}
                        draggableId={todo.$id}
                        index={index}
                      >
                        {(provided) => (
                          <TodoCard
                            todo={todo}
                            index={index}
                            id={id}
                            innerRef={provided.innerRef}
                            draggableProps={provided.draggableProps}
                            dragHandleProps={provided.dragHandleProps}
                          />
                        )}
                      </Draggable>
                    );
                  })}

                  {provided.placeholder}
                </div>
                <div className="flex items-end justify-end p-2">
                    <button
                      onClick={openModal}
                      className="text-green-500 hover:text-green-600"
                    >
                      <PlusCircleIcon className="h-10 w-10" />
                    </button>
                  </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}
