import React, {useState} from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([{id: 1, text: '눈사람'}, {id: 2, text: '얼음'}, {id: 3, text:'눈'}, {id: 4, text: '바람'}])
  const [inputText, setInputText] = useState('')
  const [nextId, setNextId] = useState(5) //새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value)
  const onClick = () => {
    //concat은 push함수와는 달리 기존 배열 자체를 변경하는 것이 아닌, 새로운 배열을 만들어 줌 => 리액트에서 상태를 업데이트할 때 기존 상태를 그대로 두면서 새로운 값을 설정해야 불변성이 유지됨
    const nextNames = names.concat({
     id: nextId, // nextId 값을 id로 설정하고
     text: inputText 
    })
    setNextId(nextId + 1)// nextId 값에 1을 더해 준다
    setNames(nextNames) // names 값을 업데이트한다.
    setInputText('') //inputText를 비운다.
  }

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id)
    setNames(nextNames)
    console.log(id)
  }

  const nameList = names.map(name => (<li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>))

  return (
    <div>
      <input value={inputText} onChange={onChange}/>
      <button onClick={onClick}>추가</button>

      <ul>
        {nameList}
      </ul>
    </div>
  );
};

export default IterationSample;