import { createAction, handleActions } from "redux-actions"

//액션타입 정의, 대문자
//모듈이름/액션이름 -> 액션 이름이 충돌되지 않도록
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

//액션 생성 함수
//export 는 여러개를 내보낼 수 있음
// export const increase = () => ({ type: INCREASE })
// export const decrease = () => ({ type: DECREASE })

//createAction을 사용하면 아래처럼 간단하게 액션 생성 함수 선언 가능
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

//counter 모듈의 초기 상태와 리듀서 함수 생성
const initialState = {
  number: 0
}

//handleActions 함수의 첫 번째 파라미터는 각 액션에 대한 업데이트 함수, 두 번째 파라미터에는 초기 상태
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({number: state.number + 1 }),
    [DECREASE]: (state, action) => ({number: state.number - 1 }),
  },
  initialState, 
)


// function counter(state = initialState, action){
//   switch(action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1
//       }
//     case DECREASE:
//       return{
//         number: state.number - 1
//       }
//       default:
//         return state
//   }
// }

//export default는 단 한개만 내보낼 수 있음
export default counter
