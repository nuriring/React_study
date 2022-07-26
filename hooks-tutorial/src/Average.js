import React,{ useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중..')
  if(numbers.length === 0) return 0
  const sum = numbers.reduce((a,b) => a+b)
  return sum / numbers.length
}
const Average = () => {
  const [list,setList] = useState([])
  const [number, setNumber] = useState("")
  const inputEI = useRef(null) //useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킴
  const onChange = useCallback(e => {
    setNumber(e.target.value)
  },[]) //컴포넌트가 처음 렌더링될 때만 함수 생성, 비워놓으면 컴포넌트가 랜더링될 때 만들었던 함수를 재사용
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number))
    setList(nextList)
    setNumber("")
    inputEI.current.focus()
  }, [number, list]) //number 혹은 list가 바뀌었을 때만 함수 생성, 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두번째 파라미터에 포함, 기존의 number와 list를 조회해서 nextList를 생성

  const avg = useMemo(() => getAverage(list), [list])
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEI}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (<li key={index}>{value}</li>))}
      </ul>
      <div>
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
};

export default Average;