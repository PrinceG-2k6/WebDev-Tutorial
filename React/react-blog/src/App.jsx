import Header from './myComp/Header';
import EventFunction from './myComp/EventFunction';
// import { createElement } from 'react';
import { useState } from 'react';
import Counter from './myComp/Counter';
import ElseIf from './myComp/ElseIf';
function App(){
  const name ="Prince Gupta";
  const [fruit,setFruit]=useState("apple");
    const handleFruit=()=>{
        setFruit("Banana");
    };
  return (<>
    <Header/>
    <h1>Hello, From {name}</h1>
    <EventFunction/>

    <div>
      <h1>State in React js</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change Fruit</button>

    </div>
    <Counter/>
    <ElseIf display={false}/>
    </>)

  // return createElement("div",{id:"rootdiv"},createElement("h1",{id:"heading"},"This is Heading Tag"));
  
}

export default App