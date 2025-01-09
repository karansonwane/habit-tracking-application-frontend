import React from 'react'
import { useState } from 'react'
export default function Practice() {

    const [name,setName] =useState('');

  return ( 
  <>
  <h1 className='n'>{name}</h1>

    <form >
        <input type='text' onClick={(e)=>{setName((e.target.value))}}></input>
        <button >Submit</button>
    </form>
</>

  )
}


