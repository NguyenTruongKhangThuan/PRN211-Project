import React, { useState, useEffect } from "react";
import "./App.css";
import { VscExclude, VscTriangleLeft } from "react-icons/vsc";
import { getLockerAPI } from "./api/assignmentAPI";

function App() {

  const [modal, setModal] = useState(false);
  const [lockers,setLockers] = useState([]);

  useEffect(() => {
    refreshLockersList();
  },[])

  const refreshLockersList = async() => {
    await getLockerAPI()
      .then((data) => {
        setLockers(data)
        
      })
      .catch((error) => window.alert(error))
  }

  const toggleModal = () => {
    setModal(!App);
  };

  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function spin() {
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectItem = "";

    const shuffleArray = shuffle(lockers);

    const array = [
      { value: 70},
      { value: 35},
      { value: 0},
      { value: 310},
      {value: 285},
      {value: 250},
      {value: 210},
      {value: 180},
      {value: 130},
      {value: 105},
    ]
    if(shuffleArray.length > 0)
     SelectItem = shuffleArray[0].prize

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = `rotate(${array[shuffleArray[0].id - 1].value + 1800 + 100}deg)`;
    element.classList.remove("animate");
    setTimeout(function () {
      element.classList.add("animate");
    }, 5000);

    setTimeout(function () {
      alert("Your reward is: " + SelectItem);
    }, 5500);

    setTimeout(function () {
      box.style.setProperty("transition", "initial");
      box.style.transform = "rotate(90deg)";
    }, 6000);
  }

  return (
    <>
      <div className="container">
        <div className="mainbox" id="mainbox">
          <div className="box" id="box">
            {lockers.length > 0 && (
              <>
                <div className="box1">
                  <span className="font span-1">
                    <h5>{lockers[0].prize}</h5>
                  </span>
                  <span className="font span-2">
                    <h5>{lockers[1].prize}</h5>
                  </span>
                  <span className="font span-3">
                    <h5>{lockers[2].prize}</h5>
                  </span>
                  <span className="font span-4">
                    <h5>{lockers[3].prize}</h5>
                  </span>
                  <span className="font span-5">
                    <h5>{lockers[4].prize}</h5>
                  </span>
                </div>
                <div className="box2">
                  <span className="font span-1">
                    <h5>{lockers[5].prize}</h5>
                  </span>
                  <span className="font span-2">
                    <h5>{lockers[6].prize}</h5>
                  </span>
                  <span className="font span-3">
                    <h5>{lockers[7].prize}</h5>
                  </span>
                  <span className="font span-4">
                    <h5>{lockers[8].prize}</h5>
                  </span>
                  <span className="font span-5">
                    <h5>{lockers[9].prize}</h5>
                  </span>
                </div>
              </>
            )}
            <button className="spin" onClick={spin}>
              SPIN
            </button>
          </div>
        </div>
        <div className="arrow">
          <VscTriangleLeft size={75}></VscTriangleLeft>
        </div>
      </div>
    </>
  );
}

export default App;
