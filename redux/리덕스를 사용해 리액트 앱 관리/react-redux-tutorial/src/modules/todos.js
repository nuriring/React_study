import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

//액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT' //인풋 값을 변경함
const INSERT = 'todos/INSERT' //새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE' //todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE' //todo를 제거함

//액션 생성 함수 만들기
//파라미터가 필요, 전달받은 파라미터는 액션 객체 안에 추가 필드로 들어감
// export const changeInput = input => ({
//   type: CHANGE_INPUT,
//   input
// })
export const changeInput = createAction(CHANGE_INPUT, input => input)

//초기상태 및 리듀서 만들기
//객체에 한개 이상의 값이 들어가므로 불변성 유지 필요
//배열에 변화를 줄 때는 배열 내장 함수 사용
const initialState = {
  input:"",
  todos:[
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true
    },
    {
      id:2,
      text: '리액트와 리덕스 사용하기',
      done: false
    }

  ]
}

//insert 함수는 액션 객체를 만들 때 파라미터 외에 사전에 이미 선언 되어 있는 id라는 값에도 의존함 
let id=3 //insert가 호출될 때마다 1씩 더해짐
//해당 액션 생성함수는 호출될때마다 id에 1씩 더해줌 -> 해당 id 값을 todo 객체가 고유값으로가짐
// export const insert = text => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false
//   }
// })
export const insert = createAction(INSERT, text => ({
  id: id++,
  text, //insert의 경우 todo 객체를 액션 객체 안에 넣어주어야함, 파라미터에 text를 넣으면 todo 객체가 반환되는 함수를 넣음
  done: false
}))

export const toggle = createAction(TOGGLE, id => id)
export const remove = createAction(REMOVE, id=> id)

//객체 비구조화 할당 문법으로 acation 값의 payload이름을 새로 설정해서 action.payload가 정확히 어떤 값을 의미하는지 파악가능
const todos = handleActions(
    {
    [CHANGE_INPUT]: (state, {payload: input}) => produce(state, draft => {
      draft.input = input
    }),
    [INSERT]: (state,{ payload: todo}) => produce(state, draft => {
      draft.todos.push(todo)
    }),
    [TOGGLE]: (state, { payload: id}) => 
      produce(state, draft => {
        const todo = draft.todos.find
        (todo => todo.id === id)
        todo.done = !todo.done
      }),
    [REMOVE]: (state, { payload: id}) => 
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id===id)
          draft.todos.splice(index, 1)
      }),
    },
    initialState,
    )

  export default todos
