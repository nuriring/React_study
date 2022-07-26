// import Counter from "./Counter";
// const App = () => {
//   return <Counter />
// }
// export default App
// import React, {useState} from "react";
// import Info from "./Info";

// const App = () => {
//   const [visible, setVisible] = useState(false)
//   return (
//     <div>
//       <button
//       onClick={() => {
//         setVisible(!visible)
//       }}
//       >
//         {/* 내용이 보이면(visible == true) 숨기기가 떠야하니까 */}
//         {visible ? '숨기기' : '보이기'} 
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   )
// }

// export default App

import Average from "./Average";

const App = () => {
  return <Average />
}

export default App