import React from 'react';
import Courses from './components/Courses';

import AllCourses  from './components/AllCourses';
import Forms from './components/Forms';

class AllPage extends React.Component {
 render(){
  return (
    <div class="ui two column grid">
        <div class="row"> 
          <div class="six wide column">  
            {<Courses />}
            {<AllCourses />}
          </div>
          <div class="ten wide column">
            {<Forms />}
          </div>
        </div>
    </div>
  );
}
}

export default AllPage;