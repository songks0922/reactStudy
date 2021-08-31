import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
export default function App() {
  return (
    <>
      <p>안녕</p>
      <Counter />
      {ReactDOM.createPortal(
        <div>
          <p>안녕하세요</p>
          <p>실전 리액트 프로그래밍입니다.</p>
        </div>,
        document.getElementById('someting'),
      )}
    </>
  );
}
// export default function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [currentId, setCurrentID] = useState(1);
//   const [desc, setDesc] = useState('');
//   const [showOdd, setshowOdd] = useState(false);
//   function onAdd() {
//     const todo = { id: currentId, desc };
//     setCurrentID(currentId + 1);
//     setTodoList([...todoList, todo]);
//   }
//   function onDelete(e) {
//     const id = Number(e.target.dataset.id);
//     const newTodoList = todoList.filter((todo) => todo.id !== id);
//     setTodoList(newTodoList);
//   }
//   function onServeToServer() {}
//   console.log(todoList);
//   return (
//     <div>
//       <h3>할 일 목록</h3>
//       <ul>
//         {todoList
//           .filter((_, index) => (showOdd ? index % 2 === 0 : true))
//           .map((todo) => (
//             <li key={todo.id}>
//               <span>{todo.desc}</span>
//               <button data-id={todo.id} onClick={onDelete}>
//                 삭제
//               </button>
//             </li>
//           ))}
//       </ul>
//       <input
//         type="text"
//         value={desc}
//         onChange={(e) => {
//           setDesc(e.target.value);
//         }}
//       />
//       <button onClick={onAdd}>추가</button>
//       <button onClick={() => setshowOdd(!showOdd)}>
//         홀수 아이템만 보기 on/off
//       </button>
//       <button onClick={onServeToServer}>서버에 저장</button>
//     </div>
//   );
// }
