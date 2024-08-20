import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [numbers,setNumbers]=useState(false)
  let [specialChar,setSpecialChar]=useState(false)
  let [passwordlen,setPasswordLen]=useState(10)
  let[fPass,setFPass]=useState('')
  let createPassword=()=>{
    let finalPass=''
    let charSet=''
    if(uppercase || lowercase || numbers || specialChar){
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(numbers) charSet+=NC;
      if(specialChar) charSet+=SC;
      //password generating logic
      for(let i=0;i<passwordlen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setFPass(finalPass)
    }
    else{
      alert('Please Check one CheckBox')
    }

  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fPass)
  }
  return(
    <>
      <div className='passwordBox'>
        <h3>Password Generator</h3>
        <div className='passwordBoxin'>
          <input type='text' readOnly value={fPass} /> <button onClick={copyPass}>Copy</button>
        </div>
        <div className='passLength'>
          <label>Password Length</label>
          <input type='number' value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)} min='8' max='20' />
        </div>
        <div className='passLength'>
          <label>Include Uppercase Letters</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
        </div>
        <div className='passLength'>
          <label>Include Lowercase Letters</label>
          <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
        </div>
        <div className='passLength'>
          <label>Include Numbers</label>
          <input type='checkbox' checked={numbers} onChange={()=>setNumbers(!numbers)}/>
        </div>
        <div className='passLength'>
          <label>Include Special Characters</label>
          <input type='checkbox' checked={specialChar} onChange={()=>setSpecialChar(!specialChar)}/>
        </div>
        <button className='btn' onClick={createPassword}>Generate Password</button>

      </div>
    </>
  )
  }

export default App;
