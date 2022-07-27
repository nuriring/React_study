import React, {useCallback} from 'react'
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../modules/counter'
// import { bindActionCreators } from 'redux';

//connect 함수 대신 useSelector를 사용해서 counter.number 값을 조회
const CounterContainer = () => {
  const number = useSelector(state => state.counter.number)
  const dispatch = useDispatch()
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch])
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch])
  return (
  < Counter
  number={number}
  onIncrease={onIncrease}
  onDecrease={onDecrease}/> )

}
// state : 현재 스토어가 지니고 있는 상태
// const mapStateToProps = state => ({
//   number: state.counter.number,
// })

// //store의 내장 함수 dispatch를 파라미터로 받음
// const mapDispatchToProps = dispatch => ({
//   //모듈에서 액션생성 함수를 import해서 넣어줌 
//   increase: () => {
//     dispatch(increase())
//   },
//   decrease: () => {
//     dispatch(decrease())
//   }
// })

//두번째 파라미터를 아예 객체 형태로 넣어주면 connect 함수가 내부적으로 bindActionCreators 작업을 대신해 줌
export default CounterContainer


