import { createAction, handleActions } from "redux-actions";

const START_LOADING = 'loading/START_LOADING'
const FINISH_LOADING = 'loading/FINISH_LOADING'

//요청을 위한 액션 타입을 payload로 설정함 
export const startLoading = createAction(
  START_LOADING,
  requestType => requestType
)

export const finishLoading = createAction(
  FINISH_LOADING,
  requestType => requestType
)

const initialState = {}

const loading = handleActions({
  [START_LOADING] : (state, action) => ({
    ...state,
    [action.payload]: true
  }),
  [FINISH_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: false
  })
},
initialState)

/* 요청이 시작될 때 디스패치할 액션
{
  type: 'loading/START_LOADING',
  payload: 'sample/GET_POST'
}

위 액션이 디스패치되면 loading 리듀서가 관리하고 있는 상태에서 sample/GET_POST 값을 true로 설정
만약 기존에 sample/GET_POST 필드가 존재하지 않으면 새로 값을 설정

요청이 끝나면 다음 액션을 디스패치
{
  type: 'loading/FINISH_LOADING',
  payload: 'sample/GET_POST
}
기존에 true로 설정했던 값을 다시 false로 전환
*/


export default loading