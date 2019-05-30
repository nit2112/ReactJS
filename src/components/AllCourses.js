import { connect } from 'react-redux';
import  React  from 'react';
import { delCourse } from '../actions/RestActions';



class AllCourses extends React.Component {

   AllCourse =() => {
      return this.props.courses.map( (course,index) => {
       return (
        <div className="ui centered card" key={index}>
            <div className="content">
                <div className="middle aligned content">
                    <div className="header left">
                    <ul>{index} : { course } </ul>
                    </div>
                    <div className="extra content">
                        <span className="right floated trash icon" onClick={()=>{this.props.delCourse(course)}}>
                            <i className="trash icon"></i>
                        </span>
                    </div>
                    </div>
            </div>
        </div>         
       )
       });
   }
   
    render() {

      return (
        <div className="ui basic content left aligned segment">
          {this.AllCourse()}
        </div>
      );
    }
  }

const mapStateToProps = state => {
    const { courses } = state.counter;
    return { courses};
}

export default connect(mapStateToProps,{delCourse})(AllCourses);