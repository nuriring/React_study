import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false
  }

  // 컴포넌트 렌더링 도중에 에러가 발생했을 때 엡이 먹통이 되지 않고 오류 UI를 보여줄 수 있게 함
  componentDidCatch(error,info) {
    this.setState({
      error: true
    })
    //error는 파라미터에 어떤 에러가 발생했는지 알려주고, info 파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 줌
    //오류 발생 시 서버 API를 호출하여 따로 수집할 수 있음
    //그러나 컴포넌트 자신에게 발생하는 에러를 잡아낼 수 없고, 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있음
    console.log({error,info})
  }
  render() {
    if (this.state.error) return <div>에러가 발생했습니다!</div>
    return this.props.children 
  }
}

export default ErrorBoundary;