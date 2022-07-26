// import React, {useState, useEffect} from 'react';
// import React, {useReducer} from 'react';
// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value
//   }
// }

import useInputs from "./useInputs"
const Info = () => {

const [state, onChange] = useInputs({
  name:"",
  nickname:""
})
const { name, nickname } = state
// const Info = () => {
  // const [name, setName] = useState('')
  // const [nickname, setNickname] = useState('')
  // //컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정함
  // //클래스형 컴포넌트의 compontDidMount와 componentDidUpdate를 합친 형태

  // useEffect(() => {
    // console.log('렌더링이 완료되었습니다!')
    // console.log({
    //   name,
    //   nickname
    // })
  //   console.log("마운트 될 때만 실행됩니다")
  // },[]) //함수의 두번째 파라미터로 비어 있는 배열을 넣어줌
  // 특정 값이 업데이트 될 때만 실행
  // console.log(nickname)
  // }, [nickname])

  //컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리 함수를 반환해주어야함
//   console.log('effect')
//   // console.log(name)
//   return () => {
//     // console.log('clean up')
//     console.log('unmount')
//   }
// }, [])
  // const Info = () => {
  //   const [state, dispatch] = useReducer(reducer, {
  //     name:"",
  //     nickname:""
  //   })
  //   const {name, nickname} = state
  //   const onChange = e => {
  //     dispatch(e.target)
  //   }
  return (
    <div>
      <div>
        <input name={name} value={name} onChange={onChange}/>
        <input name={nickname} value={nickname} onChange={onChange}/>
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b>{nickname}
        </div>
      </div>
    </div>
  );
}

export default Info;