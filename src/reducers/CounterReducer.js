import { INCREASE , DECREASE,ADDCOURSE ,DELCOURSE , ADDSTUDENT ,DELSTUDENT} from '../actions/types';

const IINITAL_STATE = {
    counter:null,
    courses:['Java'],
    student:[],
}

export default (state = IINITAL_STATE,action) => {
    switch(action.type) {
        case INCREASE :
          return { ...state, counter: state.counter+1};
        
        case DECREASE:
          return { ...state, counter: state.counter-1};

        case ADDCOURSE:
           let c = state.courses;
           var courses;

           let yes =state.courses.indexOf(action.payload);
           if(yes == -1) {
              courses = c.concat(action.payload);
           } else {
             courses = c;
           }
          return { ...state, courses};
        
        case DELCOURSE:
            let cou = state.courses;        
            var courses=[]
            cou.map( (course,index) =>{
               if(course !== action.payload){
                  courses = courses.concat(course);
               }
               
            })
            
            return { ...state, courses};

        case ADDSTUDENT:
            return { ...state, student: action.payload };

        case DELSTUDENT:
            var student=[];
            state.student.map((stu,index)=>{
                if(stu.name !== action.payload) {
                student = student.concat(stu);
                }
            });  
            return { ...state, student: student };
        
        default:
            return state;          
    }
}