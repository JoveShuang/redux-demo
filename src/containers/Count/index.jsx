import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'

class Count extends Component {
    increment = () => {
        const { value } = this.selectNumber
        this.props.increment(+value)
    }

    decrement = () => {
        const { value } = this.selectNumber
        this.props.decrement(+value)
    }

    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(+value)
        }
    }

    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.incrementAsync(+value, 1500)
    }

    render() {
        return (
            <div>
                <h2>我是CONUT组件, 下方组件总人数为：{this.props.personNum}</h2>
                <h3>当前求和为：{this.props.count}</h3>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>
                <button onClick={this.incrementAsync}>当前求和异步加</button>
            </div>
        )
    }
}

export default connect(
    state => ({
        count: state.count,
        personNum: state.person.length
    }),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)