import React, { useState } from "react";
import "./App.css";

// const cars = ['./images/interior-back.jpeg',
// './images/interior-front.jpeg',
// './images/exterior-back.jpeg',
// './images/exterior-front.jpeg']

const cars = [
  {
    id: 1,
    path: "./images/interior-back.jpeg",
  },
  {
    id: 2,
    path: "./images/interior-front.jpeg",
  },
  {
    id: 3,
    path: "./images/exterior-back.jpeg",
  },
  {
    id: 4,
    path: "./images/exterior-front.jpeg",
  },
];
function App() {

  const [carImages, setCarImages] = useState(cars);
  const [selectedCar, setSelectedCar] = useState(carImages[2]);
  
  const back = () => {
    console.log(carImages.filter((car) => car.id === selectedCar.id - 1)[0]);
  };

  return (
    <div className="App">
      <img src={selectedCar.path} />
      {selectedCar.id === 1 ? (<button disabled>Back</button>) : (<button onClick={back}>Back</button>)}
      {selectedCar.id === 4 ? (<button disabled>Next</button>) : (<button onClick={() => console.log("yes")}>Next</button>)}
    </div>
  );
}
export default App;