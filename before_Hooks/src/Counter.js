import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    }
    render() {
        const { number, fixedNumber } = this.state //state를 조회할 때, this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
            </div>
            
        );
    }
}

export default Counter;