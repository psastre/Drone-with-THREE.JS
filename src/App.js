import {init} from "./utils/initDroneLayer.js"
import {useEffect} from "react";

function App() {
  useEffect(()=>{
    init()
    
  },[])

  return (
    <div className="App">
      <div className="hero">
        <h1 className="title"> Drone Class</h1>
        <p className="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laboriosam voluptatum placeat explicabo saepe modi porro beatae necessitatibus, commodi alias quaerat qui illum odio assumenda est quos labore sit velit.</p>
        <p>
          <button className="btn">Look our plans</button>
          
        </p>
      </div>
      <div className="plans">
        <div className="container plans1">
          <h2>Basico</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus sequi repellendus assumenda, libero error nobis quis iure dolore unde a numquam cum deserunt veritatis non totam laboriosam nulla obcaecati!</p>
        </div>
        <div className="container plans2">
          <h2>Premium</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus sequi repellendus assumenda, libero error nobis quis iure dolore unde a numquam cum deserunt veritatis non totam laboriosam nulla obcaecati!</p>
        </div>
        <div className="container plans3">
          <h2>Member</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus sequi repellendus assumenda, libero error nobis quis iure dolore unde a numquam cum deserunt veritatis non totam laboriosam nulla obcaecati!</p>

        </div>
      </div>
   
    </div>
    
  );
}

export default App;
