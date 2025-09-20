import React from 'react'

const EventFunction = () => {
    function ask(){
        alert("How are you");
    }
    function fruit(name){
        alert(name);
    }
  return (
    <div>
      <button className='Btn' onClick={ask}>
        verify
      </button>
      <button className='Btn' onClick={()=>fruit("apple")}>
        fruit 1
      </button>
      <button className='Btn' onClick={()=>fruit("banana")}>
        fruit 2
      </button>
    </div>
  )
}

export default EventFunction
