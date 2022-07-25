import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  }

  myRef = null //ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor')
  }

  //props로 받아온 값을 state에 동기화시키는 용도로 사용, 컴포넌트가 마운트될 때와 업데이트될 때 호출됨
  static getDerivedStateFromProps(nextProps, prevState){
    console.log('getDerivedStateFromProps')
    //조건에 따라 특정 값 동기화
    if(nextProps.color !== prevState.color) {
      return { color: nextProps.color}
    }
    return null //state를 변경할 필요가 없다면 null을 반환
  }

  // 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행함
  // 이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리
  componentDidMount(){
    console.log('componentDidMount')
  }

  //props 또는 satte를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드
  // 해당 메서드는 반드시 true 값 또는 false 값을 반환
  // 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 default로 true값을 반환
  // 이 메서드가 false 값을 반환하면 업데이트 과정은 여기서 중지
  // 이 메서든 안에서 현재 props와 state는 this.props와 this.state로 접근하고, 새로 설정될 props 또는 state는 nextProps와 nextState로 접근할 수 있음
  shouldComponentUpdate(nextProps, nextState)
  {console.log('shouldComponentUpdate', nextProps, nextState) 
  // 숫자의 마지막 자리가 4면 리렌더링 하지 않습니다.
  return nextState.number % 10 !== 4}

  //컴포넌트를 dom에서 제거할 때 실행
  //componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야 함
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  //render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
  // 이 메서드에서 반환하는 값은 componentDidUpdate에서 세번 째 파라미터인 snapshot 값으로 전달받을 수 있음
  // 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용 => 예시 스크롤바 위치 유지
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    if(prevProps.color !== this.props.color) {
      return this.myRef.style.color
    }
    return null
  }

  //리렌더링을 완료한 후 실행
  // 업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 무방
  // prevProps 또는 prevState를 사용해서 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있음
  // getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot값을 전달 받을 수 있음
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate', prevProps, prevState)
    if(snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot)
    }
  }
  render() {
    console.log('render')

    const style = {
      color: this.props.color
    }
    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={ref => this.myRef=ref}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;