// import React from "react";
// import { useDispatch } from "react-redux";
// import { deleteTodo, setTodo } from "./todosReducer";
// export default function TodoItem({ todo, deleteTodo, setTodo }: {
//     todo: { id: string; title: string };
//     deleteTodo: (id: string) => void;
//     setTodo: (todo: { id: string; title: string }) => void;
//   }) {
//     return (
//       <li key={todo.id} className="list-group-item">
//         <button onClick={() => deleteTodo(todo.id)}
//                 id="wd-delete-todo-click"> Delete </button>
//         <button onClick={() => setTodo(todo)}
//                 id="wd-set-todo-click"> Edit </button>
//         {todo.title}
//       </li>
//     );
//   }

  import React from "react";
  import { useDispatch } from "react-redux";
  import { deleteTodo, setTodo } from "./todosReducer";
  interface Todo {
    id: string;
    title: string;
  }
  export default function TodoItem({ todo }: { todo: Todo }) {
    const dispatch = useDispatch();
    return (
      <li key={todo.id} className="list-group-item">
        <button onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"> Delete </button>
        <button onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click"> Edit </button>
        {todo.title}
      </li>
    );
  }
  