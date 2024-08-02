import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [Value, setValue] = useState("");

  const handleEqual = () => {
    try {
      const result = evaluate(Value);
      setValue(String(result));
    } catch (error) {
      setValue("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={Value}/>
          </div>
          <div>
            <input type="button" value="AC" onClick={e => setValue('')}/>
            <input type="button" value="DE" onClick={e => setValue(Value.slice(0, -1))}/>
            <input type="button" value="." onClick={e => setValue(Value + e.target.value)}/>
            <input type="button" value="/" onClick={e => setValue(Value + e.target.value)}/>
          </div>

          <div>
            <input type="button" value="7" onClick={e => setValue(Value + e.target.value)}/>
            <input type="button" value="8" onClick={e => setValue(Value + e.target.value)}/>
            <input type="button" value="9" onClick={e => setValue(Value + e.target.value)}/>
            <input type="button" value="*" onClick={e => setValue(Value + e.target.value)}/>
          </div>

          <div>
            <input type="button" value="4" onClick={e => setValue(Value + e.target.value)}/>
            <input type="button" value="5" onClick={e => setValue(Value + e.target.value)}/>
            <input type="button" value="6" onClick={e => setValue(Value + e.target.value)}/>
            <input type="button" value="+" onClick={e => setValue(Value + e.target.value)}/>
          </div>

          <div>
            <input type="button" value="1" onClick={e => setValue(Value + e.target.value)}/>
            <input type="button" value="2" onClick={e => setValue(Value + e.target.value)}/>
            <input type="button" value="3" onClick={e => setValue(Value + e.target.value)}/>
            <input type="button" value="-" onClick={e => setValue(Value + e.target.value)}/>
          </div>

          <div>
            <input type="button" value="00" onClick={e => setValue(Value + e.target.value)}/>
            <input type="button" value="0" onClick={e => setValue(Value + e.target.value)}/>
            <input type="button" value="=" className="equal" onClick={handleEqual}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;





/* <input type="button" value="=" className="equal" onClick={e => setValue(eval(Value))}/>   // eval is not secure for real time application instead of this we are using 'evaluate' function of mathjs library */

