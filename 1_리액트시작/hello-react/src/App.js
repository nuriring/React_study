
// import './App.css';



// // App이라는 함수 컴포넌트 생성
// function App() {
//   // const name = '리액트';

//   /*
//   삼항연산자
//   return (
//     <>
//       { name === '리액트' ? (
//         <h1>리액트입니다</h1>
//       ) : (
//        null
//       )}
//     </>
//   );
//   */
  
//   //&&연산자
//   /*
//   return (
//     <>
//       { name === '리액트' && 
//         <h1>리액트입니다</h1>}
//     </>
//   );
//   */
  
//   // const name = undefined
//   // return name || '값이 undefined입니다'

//   //  const name = '리액트';
//   //  const style = {
//   //   backgroundColor: 'black',
//   //   color: 'aqua',
//   //   fontSize: '48px',
//   //   fontWeight: 'bold',
//   //   padding: 16
//   //  };

//   //  }
//   //  return <div>{name}</div>;
  
//     const name = '리액트'
//     return <div className='react'>{name}</div>

// }

// export default App;

//3장 컴포넌트
import Counter from "./Counter";

const App = () => {
  return <Counter />;
}

export default App;

