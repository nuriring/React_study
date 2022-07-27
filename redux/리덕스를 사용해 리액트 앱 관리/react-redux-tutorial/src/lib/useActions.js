import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

//액션 생성 함수를 액션을 디스패치하는 함수로 변환함
//액션 객체를 만들고, 이를 스토어에 디스패치하는 작업을 해주는 함수를 자동으로 만들어 줌
//첫 번째 파라미터는 액션 생성 함수로 이루어진 배열, 두번째 파라미터는 deps 배열 이 배열 안에 들어 있는 원소가 바뀌면 액션을 디스패치하는 함수를 새로 만듦
export default function useActions(actions, deps) {
  const dispatch = useDispatch()
  return useMemo(
    () => {
      if(Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch))
      }
      return bindActionCreators(actions, dispatch)
    },
    deps ? [dispatch, ...deps] : deps
  )
}