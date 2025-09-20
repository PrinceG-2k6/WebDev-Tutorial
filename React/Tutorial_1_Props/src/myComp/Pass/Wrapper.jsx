import React from 'react'

function Wrapper({children,color="Green"}){
  return (<>
    <div style={{color:color,border:"2px solid black"}}>
      {children}
    </div>
    </>
  )
}

export default Wrapper
