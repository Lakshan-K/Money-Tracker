import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const[datetime,setDatetime] = useState('');
  const[description, setDescription] = useState('');

  function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL;
    console.log(url)
    fetch(url, {

      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({name, description, datetime})
    }).then(response => {
      response.json().then(json => {

        console.log('result', json);
      })
    })
    
  }
  return (
  <main>
    <h1>$400<span>.00</span></h1>
    <form onSubmit = {addNewTransaction} >
      <div className = "basic">
      <input type ="text" 
        value = {name} 
        onChange = {ev => setName(ev.target.value)}
        placeholder = {'-$500 new samsung tv'}/>

      <input value = {datetime} onChange = {ev => setDatetime(ev.target.value)}
       type = "datetime-local"/>

      </div>

      <div className = "description">
      <input value={description} 
        onChange = {ev => setDescription(ev.target.value)}
        type = "text" placeholder = {'description'} />
      </div>

      <button  type = "submit">Add new transaction</button>
      
     </form>

     <div className = "transactions">
        <div className = "transaction">
          <div className = "left">
            <div className = "name">New Samsung TV</div>
            <div className = "description">It was time for a new TV.</div>
          </div>
          <div className = "right">
            <div className ="price red">-$500</div>
            <div className = "datetime">2023-11-04</div>
          </div>
        </div>

        <div className = "transaction">
          <div className = "left">
            <div className = "name">Created a Website for my Client</div>
            <div className = "description">Website Created by Lakshan!</div>
          </div>
          <div className = "right">
            <div className ="price green">+$999</div>
            <div className = "datetime">2023-11-04</div>
          </div>
        </div>

        <div className = "transaction">
          <div className = "left">
            <div className = "name">iPhone 15</div>
            <div className = "description">Needed the hottest phone of 2023!</div>
          </div>
          <div className = "right">
            <div className ="price red">-$1300</div>
            <div className = "datetime">2023-11-04</div>
          </div>
        </div>

     </div>

  </main>
    );
}

export default App;
