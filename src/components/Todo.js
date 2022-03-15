import React, { useState, useEffect } from 'react';


export function ToDo () {

  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  function addtask(e) {
    e.preventDefault();
    setList([...list, task])
    setTask('')
  }

  function deleteTask(e) {
    const index = list.indexOf(e.target.value)
    const listTemp = [...list]
    listTemp.splice(index-1, 1)
    console.log(listTemp)
    setList(listTemp)
  }

  function listing() {
    return (
        <div>
        {list.map((ele) => 
          <p key={ele}> {ele} |  <button onClick={deleteTask}> Suppprimer</button></p> 
        )} 
        </div>
    )
  }


  useEffect(() => {
    // storing input list
    localStorage.setItem("myList", JSON.stringify(list));
  }, [list]);

  // useEffect(() => {
  //   localStorage.getItem("myList", JSON.parse(list));
  // }, [list])
  

  return(
   <div>
      <form>
        <input 
        value={task} 
        type="text" 
        placeholder=" Que Faire ?"
        onChange={e => setTask(e.target.value)} 
        />

        <button onClick={addtask}>Ajouter</button>
      </form>
      <div>
        {listing()}
      </div>
    </div>
  )
}