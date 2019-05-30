import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import Counter from './Counter';
import Courses from './components/Courses';
import store from './store';
import AllCourses  from './components/AllCourses';
import Forms from './components/Forms';
import AllPage from './AllPage';

function App() {
  return (
    <Provider store={store}>       
       <AllPage />
    </Provider>
  );
}

export default App;
