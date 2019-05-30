import React from 'react';
import { connect } from 'react-redux';

import { delCourse ,addStudent ,delStudent } from '../actions/RestActions';

class Forms extends React.Component {

     state= {
          fields: {},
          fieldErrors: {},
          people: [],
        }
    
      onFormSubmit =(evt)=> {
        const people = [ ...this.state.people ];
        const person = this.state.fields;
        const fieldErrors = this.validate(person);
        this.setState({ fieldErrors });
        evt.preventDefault();
    
        if (Object.keys(fieldErrors).length) return;
        people.push(person);
        this.setState({ people, fields: {} });
        this.props.addStudent(people);
        // this.setState({fields:{}});
      }
    
    
      onInputChange=(evt) => {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({ fields });
      }
    
      validate(person) {
        const errors = {};

        if (!person.name) errors.name = 'Name Required';
        if (!person.email) errors.email = 'Email Required';
        if (!person.skills) errors.course = 'Course Required';  
        if (isNaN(person.age)) errors.age = 'Invalid Age';
        if (isNaN(person.roll_number)) errors.roll_number = 'Invalid RollNumber';      

        // if (person.email ) errors.email = 'Invalid Email';
        return errors;
      }

      selecteBox =() =>{
        // debugger
        return this.props.courses.map((c,index) =>{
        return (
          <option value={c}>{c}</option>
        )
      });
      }
    
      render() {
    
        return (
          <div class="ui basic content left aligned segment">
            <h1>Sign Up</h1>
    
            <form onSubmit={this.onFormSubmit} class="ui form">
            <div class="two fields">
            <div class="field">
              {/* <label>Name</label> */}
              <input
                placeholder='Name'
                name='name'
                value={this.state.fields.name}
                onChange={this.onInputChange}
              />
            </div>
            </div>
              <span style={{ color: 'red' }}>{ this.state.fieldErrors.name }</span>
    
              <br />
              <div class="two fields">
                <div class="field">
              <input
                placeholder='Email'
                name='email'
                value={this.state.fields.email}
                onChange={this.onInputChange}
              />
             </div>
            </div>
              <span style={{ color: 'red' }}>{ this.state.fieldErrors.email }</span>
    
              <br />
              <div class="two fields">
                <div class="field">
              <input
                placeholder='Age'
                name='age'
                value={this.state.fields.age}
                onChange={this.onInputChange}
              />
             </div>
            </div>
              <span style={{ color: 'red' }}>{ this.state.fieldErrors.age }</span>
    
              <br />
              <div class="two fields">
                <div class="field">
              <input
                placeholder='Roll Number'
                name='roll_number'
                value={this.state.fields.roll}
                onChange={this.onInputChange}
              />
             </div>
            </div>
              <span style={{ color: 'red' }}>{ this.state.fieldErrors.roll_number }</span>
    
              <br />
              <div class="two fields">
              <div class="field">
              <select name="skills" multiple="" class="ui fluid dropdown" 
                   value={this.state.fields.course} onChange={this.onInputChange}>
                      <option value="">Courses</option>
                      {this.selecteBox()}
              </select>
              <span style={{ color: 'red' }}>{ this.state.fieldErrors.course }</span>
              </div>
              </div>
              <div class="field">
                 <input type='submit' class="ui button" value="Add Student" />
              </div>
            </form>
    
            <div class="ui basic content segment">
              <h3>Students</h3>
              <div class="ui list">
              <div class="ui six column grid">
                     <div class="row">
                        <div class="column">Name</div>
                        <div class="column">Email</div>
                        <div class="column">Age</div>
                        <div class="column">Roll Number</div>
                        <div class="column">Course</div>
                        {/* <div className="column"> </div> */}
                     </div>
                  </div>
                { this.props.student.map((stu, i) =>
                  // <li key={i}>{name} ({ email })</li>
                  <div class="item" key={i}>
                  <div class="ui six column grid">
                     <div class="row">
                        <div class="column">{stu.name}</div>
                        <div class="column">{stu.email}</div>
                        <div class="column">{stu.age}</div>
                        <div class="column">{stu.roll_number}</div>
                        <div class="column">{stu.skills}</div>
                        <div className="extra content">
                          <span className="right floated trash icon" onClick={()=>{this.props.delStudent(stu.name)}}>
                              <i className="trash icon"></i>
                          </span>
                        </div>
                     </div>
                  </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
    
   }
}
 
 const mapStateToProps = state => {
     const { student, courses } = state.counter;
     return { student ,courses };
 }
 
 export default connect(mapStateToProps,{ addStudent,delStudent})(Forms);