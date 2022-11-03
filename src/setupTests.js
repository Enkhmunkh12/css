// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
// import { useState } from "react";

// function App() {
    // const [list, setList] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//     const [searchValue, setSearchValue] = useState('');

//     console.log(list.filter((todo) => todo.includes(searchValue)))

//     return (
//       <div className="App">
//         <h1>TodoList</h1>
//         <div className='content-container'>
//           <input value={inputValue} className='input' placeholder='Input' onChange={(e) => setInputValue(e.target.value)} />
//           <br></br>
//           <input value={searchValue} className='input' placeholder='Search' onChange={(e) => setSearchValue(e.target.value)} />

//           <Button className="button1" onClick={() => { setList([...list, inputValue]); setInputValue('') }} value="Add" />
//         </div>

//         <div className='tasks'>
//           {list.filter((todo) => todo.toLowerCase().includes(searchValue.toLowerCase())).map((todo, index) => <Text value={todo} index={index} list={list} setList={setList} />)}
//         </div>
//       </div>
//     );
//   }

//   function Text({ value, index, list, setList }) {
//     const deleteTodo = () => {
//       const newList = list.filter((cur) => cur !== value);
//       setList(newList);
//     }

//     return (
//       <div className='task-container'>
//         <input className='checkbox' type={'checkbox'} />
//         <p>{`Task # ${index + 1} ${value}`}</p>

//         <Button className="button1" onClick={deleteTodo} value="Delete" />
//       </div>
//     )
//   }

//   function Button(props) {
//     return <button className={props.className} onClick={props.onClick}>{props.value}</button>
//   }

//   export default App;

//   .body{
//     margin: 0;
//    }
//    .signup{
//      margin-left:450px;
//    }
//    .name{
//      margin-left: 300px;
//    }
//    .email{
//      margin-left: 300px;
//    }
//    .input{
//      margin-left: 450px;
//    }
//    .submit{

//    }
//    .border{
//      width: 600px;
//      height: 600px;
//      border: 4px solid black;
//      background-color: chocolate;
//    }
