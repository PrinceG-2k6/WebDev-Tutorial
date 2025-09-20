import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css';
import User from './myComp/Props/User';
import College from './myComp/Props/College';
import Student from './myComp/Props/student';
import Wrapper from './myComp/Pass/Wrapper';

function App() {
  let obj1 ={
    name:"Prince",
    age:"19"
  };
  let obj2 ={
    name:"Adii",
    age:"20"
  };
  let obj3 ={
    name:"Om",
    age:"21"
  };
  let collegeName =['IET' , 'IIT','NIT'];
  const [stu,setStu]=useState();
  return (<>
  {/* <College name={collegeName}/> */}
  {stu && <Student name={stu}/>}
  <button onClick={()=>setStu("Bhaskar")}>update student</button>
    <User name={obj1}/>
    
    <User name={obj2}/>
    
    <User name={obj3}/>
    <Wrapper color="orange">
      <h1>Hello,This is 1 child</h1>
    </Wrapper>
    <Wrapper>
      <h1>Hello,This is 2 child</h1>
      <h1>Thank You</h1>
    </Wrapper>
    </>
  )
}

export default App
