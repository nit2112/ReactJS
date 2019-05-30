import { connect } from 'react-redux';
import  React  from 'react';
import { increase } from './actions/RestActions';


class Counter extends React.Component {
    // state = { count: 0 }; // remove this
  
    increment = () => {
        this.props.increase();
    };
  
    decrement = () => {
      /*
      // Also remove this
      this.setState({
        count: this.state.count - 1
      });
      */
     console.log('decrement');
    };
  
    render() {
        debugger
      return (
        <div className="counter">
          <h2>Counter</h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span className="count">{
              // Replace state:
              //// this.state.count
              // With props:
              this.props.counter
            }</span>
            <button onClick={this.increment}>+</button>
          </div>
        </div>
      );
    }
  }

const mapStateToProps = state => {
    const { counter } = state.counter;
    return { counter};
}

export default connect(mapStateToProps,{increase})(Counter);