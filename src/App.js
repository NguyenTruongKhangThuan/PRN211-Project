import React, { useState } from "react";
import "./App.css";
import { VscExclude, VscTriangleLeft } from "react-icons/vsc";

function App() {

  const [modal, setModal] = useState(false);

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

    let AC = shuffle([1890, 2250, 2610]);
    let Camera = shuffle([1850, 2210, 2570]);
    let Zonk = shuffle([1770, 2130, 2490]);
    let PS = shuffle([1810, 2170, 2530]);
    let Headset = shuffle([1750, 2110, 2470]);
    let Drone = shuffle([1630, 1990, 2350]);
    let ROG = shuffle([1570, 1930, 2290]);

    let results = shuffle([
      AC[0],
      Camera[0],
      Zonk[0],
      PS[0],
      Headset[0],
      Drone[0],
      ROG[0],
    ]);

    if (AC.includes(results[0])) SelectItem = "Air Conditioner";
    if (Camera.includes(results[0])) SelectItem = "Camera Sport Action";
    if (Zonk.includes(results[0])) SelectItem = "Zonk";
    if (PS.includes(results[0])) SelectItem = "PlayStation 4 Slim";
    if (Headset.includes(results[0])) SelectItem = "Headset Gaming";
    if (Drone.includes(results[0])) SelectItem = "Drone Mini";
    if (ROG.includes(results[0])) SelectItem = "Laptop ASUS ROG";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = `rotate(${results[0]}deg)`;
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
            <div className="box1">
              <span className="font span1">
                <h5>Smart TV</h5>
              </span>
              <span className="font span2">
                <h5>ASUS ROG</h5>
              </span>
              <span className="font span3">
                <h5>Air Conditioner</h5>
              </span>
              <span className="font span4">
                <h5>Speak Portable</h5>
              </span>
              <span className="font span5">
                <h5>Playstation 4 Slim</h5>
              </span>
            </div>
            <div className="box2">
              <span className="font span1">
                <h5>Zonk</h5>
              </span>
              <span className="font span2">
                <h5>Headset Gaming</h5>
              </span>
              <span className="font span3">
                <h5>Ipad Mini 5</h5>
              </span>
              <span className="font span4">
                <h5>Camera</h5>
              </span>
              <span className="font span5">
                <h5>Drone Mini</h5>
              </span>
            </div>
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
