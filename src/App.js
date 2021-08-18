import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#f15025').all(8)); // 100 divided by 8 ... will give us how many colors
  const [error, setError] = useState(false);


  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(8)  // 100 divided by 8 ... will give us how many colors
      setList(colors);
    } catch (error) {
      setError(true)
      console.log(error.message);
    }
  }


  const renderColors = ()=> list.map((color, index)=>{
    return <SingleColor key={index} index={index} {...color} hexColor={color.hex} />
  })

  return(
    <>
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input value={color} type="text" className={`${error ? 'error':null}`}
              onChange={(e)=>setColor(e.target.value)}
              placeholder="type a color , example: #f15025"/>
        <button className="btn" type="submit">Submit</button>
      </form>
    </section>
    <section className="colors">
      {renderColors()}
    </section>
    </>
  )
}

export default App
