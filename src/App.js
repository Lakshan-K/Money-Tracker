import './App.css';

function App() {
  return (
  <main>
    <h1>$400<span>.00</span></h1>
    <form>
      <div className = "basic">
      <input type ="text" placeholder = {'+200 nwe samsung tv'}/>
      <input type = "datetime-local"/>
      </div>

      <div className = "description">
      <input type = "text" placeholder = {'description'} />
      </div>

      <button type = "submit">Add new transaction</button>
      
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
            <div className = "name">Purchased a Website for my Business</div>
            <div className = "description">Taking my business to the next level!</div>
          </div>
          <div className = "right">
            <div className ="price">-$999</div>
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
