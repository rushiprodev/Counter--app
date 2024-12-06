
import { useState } from "react";
import "./App.css"

function App() {

const[count , setcount]=useState(0);

  function decrementHandler(){
  setcount(count-1);

    
  }

  function increaseHandler(){
    setcount(count+1);
  
      }
  function resetHandler(){
        setcount(0);
      
          }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-10  items-center justify-center bg-[#344151]">
      <div className="text-blue-500 text-2xl">Increment & Decrement </div>
    <div className="flex flex-row bg-white justify-center gap-12 py-3 text-[25px] rounded-sm text-[#344151]">
      
        <button onClick={decrementHandler} className="text-center border-r-2 w-20  text-5xl border-[#bfbfbf] pb-2"> 
          -
        </button>
      
      <div className="font-bold gap-12 text-4xl pt-2">
        {count}
      </div>
    
        <button onClick={increaseHandler} className="text-center border-l-2 w-20  text-5xl border-[#bfbfbf] pb-2 " >
          +
        </button>
    
      </div>
      <button onClick={resetHandler} className="bg-blue-500 text-lg px-5 py-2 text-white rounded-sm">Reset</button>
    </div>
  );
}

export default App;
