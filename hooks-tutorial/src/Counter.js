import React, {useReducer} from 'react';

function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch(action.type){
    case'INCREMENT':
      return {value: state.value +1}
    case 'DECREMENT':
      return {value: state.value -1}
    default:
    //아무것도 해당되지 않을 때 기존 상태 반환
      return state
  }
}
const Counter = () => {
  //useState 함수가 호출되면 배열을 반환, 배열의 첫번째 원소는 상태 값, 두번째 원소는 상태를 설정하는 함수, 이 함수에 파라미터를 넣어서 호출 시 전달받은 파라미터로 값이 바뀌고 컴포넌트가 정상적으로 리렌더링
  
  //첫 번째 파라미터에 리듀서 함수, 두 번째 파라미터에 해당 리듀서의 기본값
  //state는 현재 가리키고 있는 상태 dispatch는 액션을 발생시키는 함수 => 함수 안에 파라미터로 액션 값을 넣어주면 dispatch(action) 리듀서함수가 호출됨
  const [state, dispatch] = useReducer(reducer, {value:0}) //useState 함수의 파라미터에는 상태의 기본값

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.  
      </p>
      <button onClick={() => dispatch({type:'INCREMENT'})}>+1</button>
      <button onClick={() => dispatch({type:'DECREMENT'})}>-1</button>
    
    </div>
  );
};

export default Counter;