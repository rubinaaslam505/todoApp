import { useEffect, useState } from "react";
import Modal from "./Modal";
import Navbar from "./Navbar";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }, []);

  
  const saveToLS = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  
  const handleAdd = () => {
    if (!todo.trim()) return;
    const newTodos = [...todos, { id: Date.now(), todo, isCompleted: false }];
    setTodos(newTodos);
    saveToLS(newTodos);
    setTodo("");
  };

  
  const handleCheckbox = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
    saveToLS(newTodos);
  };

 
  const handleComplete = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: true } : item
    );
    setTodos(newTodos);
    saveToLS(newTodos);
  };

  
  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  
  const handleSaveEdit = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, todo: editText } : item
    );
    setTodos(newTodos);
    saveToLS(newTodos);
    setEditId(null);
    setEditText("");
  };

  
  const handleDeleteClick = (id) => {
    setItemToDelete(id);
    setIsModalOpen(true);
  };

  
  const handleConfirmDelete = () => {
    const newTodos = todos.filter((t) => t.id !== itemToDelete);
    setTodos(newTodos);
    saveToLS(newTodos);
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  return (
    <>
      

      <div className="max-w-3x2 mx-auto my-8 rounded-xl bg-violet-100 px-2 py-2 min-h-[80vh]">
        <h2 className="text-xl font-bold mb-5">Add a Todo</h2>

        
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter your task"
            className="flex-1 border px-3 py-2 rounded focus:ring-2 focus:ring-violet-400"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-900 hover:bg-violet-800 text-white px-6 py-2 rounded font-bold"
          >
            Save
          </button>
        </div>

        
        {todos.length === 0 ? (
          <p className="text-gray-500">No Todos to display</p>
        ) : (
          <div className="flex flex-col gap-3">
            {todos.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-3 rounded shadow"
              >
               
                {editId === item.id ? (
                  <div className="flex flex-1 gap-2">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="border px-2 py-1 flex-1"
                    />
                    <button
                      onClick={() => handleSaveEdit(item.id)}
                      className="bg-green-700 px-3 py-1 text-white rounded"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between items-center w-full">
                    
                    <div className="flex items-center gap-2 flex-1">
                      <input
                        type="checkbox"
                        checked={item.isCompleted}
                        onChange={() => handleCheckbox(item.id)}
                        className="w-5 h-5"
                      />
                      <span
                        className={
                          item.isCompleted
                            ? "line-through text-gray-400"
                            : ""
                        }
                      >
                        {item.todo}
                      </span>
                    </div>

                   
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(item.id, item.todo)}
                        className="bg-gray-800 px-3 py-1 text-white rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDeleteClick(item.id)}
                        className="bg-red-800 px-3 py-1 text-white rounded"
                      >
                        Delete
                      </button>

                      {!item.isCompleted && (
                        <button
                          onClick={() => handleComplete(item.id)}
                          className="bg-green-800 hover:bg-green-700 px-3 py-1 text-white rounded"
                        >
                          Complete
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="text-center p-4 w-50 mx-10">
            <h3 className="text-lg font-bold mb-2">Confirm Delete</h3>
            <p className="text-gray-500 mb-4 justify-between">
              Are you sure you want to delete this todo?
            </p>
            <div className="flex gap-3 justify-between">
              <button
                onClick={handleConfirmDelete}
                className="w-full bg-red-700 text-white py-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-gray-300 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Todos;
