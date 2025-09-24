import React from 'react'
import { useState } from 'react';

const useToggle = (defaultVal) => {
    const [value,setValue] = useState(defaultVal);

    function ToggleValue(val){
        if(typeof val !="boolean"){
            setValue(!value)
        }
        else{
            setValue(val)
        }
    }
  return[value ,ToggleValue];
}

export default useToggle
