import { connect } from 'react-redux'
import CountUI from '../../components/Count'
import { createIncrement, createDecrement, createIncrementAsync } from '../../redux/count_action'

function mapStateToProps(state) {
    return {
        count: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: data => {
            dispatch(createIncrement(data))
        },
        decrement: data => {
            dispatch(createDecrement(data))
        },
        incrementAsync: (data, time) => {
            dispatch(createIncrementAsync(data, time))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)


