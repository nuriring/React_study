//액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT' //인풋 값을 변경함
const INSERT = 'todos/INSERT' //새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE' //todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE' //todo를 제거함

//액션 생성 함수 만들기
//파라미터가 필요, 전달받은 파라미터는 액션 객체 안에 추가 필드로 들어감
export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
})


//insert 함수는 액션 객체를 만들 때 파라미터 외에 사전에 이미 선언 되어 있는 id라는 값에도 의존함 
let id=3 //insert가 호출될 때마다 1씩 더해짐
//해당 액션 생성함수는 호출될때마다 id에 1씩 더해줌 -> 해당 id 값을 todo 객체가 고유값으로가짐
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false
  }
})

export const toggle = id => ({
  type: TOGGLE,
  id
})

export const remove = id => ({
  type: REMOVE,
  id
})

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

function todos(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      }
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      }
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id===action.id ? {...todo, done: !todo.done} : todo)
      }
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    default:
      return state
    }

}

export default todos