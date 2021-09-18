import React, { useState } from "react";
import "./App.css";

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
    setSelectedCar(carImages.filter((car) => car.id === selectedCar.id - 1)[0]);
  };

  const next = () => {
    setSelectedCar(carImages.filter((car) => car.id === selectedCar.id + 1)[0]);
  };

  return (
    <div className="App">
      <img src={selectedCar.path} />
      {selectedCar.id === carImages[carImages.length - 1].id ? (<button disabled>Back</button>) : (<button onClick={back}>Back</button>)}
      {selectedCar.id === 4 ? (<button disabled>Next</button>) : (<button onClick={next}>Next</button>)}
    </div>
  );
}
export default App;

// useState("carter");

// function useState(value) {
//   return [value, () => console.log("carter")]
// }

// const result = useState("carter")

// const myFunc = result[1]

// myFunc()