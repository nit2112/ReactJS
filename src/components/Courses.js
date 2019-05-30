import { connect } from 'react-redux';
import  React  from 'react';
import { addCourse } from '../actions/RestActions';


class Courses extends React.Component {

    state = {
        add:true,
        value:'',
        fieldErrors:{}
    }

    addCours = () =>{
        this.setState({add:true});
    }

    addingCourse= () => {
      const fieldErrors = this.validate(this.state.value);
      this.setState({ fieldErrors });
      // evt.preventDefault();
  
      if (Object.keys(fieldErrors).length) return;
        this.props.addCourse(this.state.value);
        this.setState({value:""});
    }

    validate(course) {
      const errors = {};
      if (course === '') errors.course = 'Course Required';
      return errors;
    }

    handleChange =(event)=> {
        this.setState({value: event.target.value});
      }
  
    addCourse =()=>{
        if(this.state.add) {
    return (
        <div className="ui centered card">
        <div className="content">
          <div className="ui form">
            <div className="field">
              <label>Course</label>
              <input type="text" placeholder= 'Enter Course Name ' value={this.state.value} onChange={this.handleChange}/>
            </div>
            <div className="ui two bottom attached buttons">
              <button className="ui basic blue button" onClick={this.addingCourse}>
                Add Course
              </button>
              <button className="ui basic red button" onClick={()=>{this.setState({add:false})}}>
                Cancel
              </button>
            </div>
            <span style={{ color: 'red' }}>{ this.state.fieldErrors.course }</span>

          </div>
        </div>
      </div>
     )
  }
}
   
    render() {

      return (
        <div className="ui basic content left aligned segment">
          <button className="ui basic button icon" onClick={this.addCours}>
            Courses <i className="plus icon"></i>
          </button>
          {this.addCourse()}
        </div>
      );
    }
  }

const mapStateToProps = state => {
    const { counter } = state.counter;
    return { counter};
}

export default connect(mapStateToProps,{addCourse})(Courses);