import './App.css';
import React, { useState } from 'react';

function App() {
  const [input,setInput] = useState('');

  const [list,setList] = useState([]);


  const handleChange = (e) =>{


    setInput(e.target.value);


  };

  const handleClick = () => {

    setList([...list,input])

  setInput("");

  };

  const handleTrash = (index) => {
    setList((prevList) => prevList.slice(0, index).concat(prevList.slice(index + 1)));

  }
  

  return (
    <>
    <main className='Container'>
    <div className ='to-do-container'>
        <section className='input-display'>

        <input type='text' placeholder='Enter Something...' onChange={handleChange} className='input-field'/>

        <button className='btn' onClick={handleClick}>+</button>

        </section>
        <section className='display-to-do'>
          <ul>

{
  list.map((items,index)=>{
    return (
      <li key={index}>
        {items}
        <i class="fa-solid fa-trash"  onClick={()=>handleTrash(index)}></i>
      </li>
    )
  })
}

          </ul>
        </section>
      </div>

    </main>
     
      
    </>
  );
}

export default App;
