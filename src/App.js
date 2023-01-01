import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { GoldPrice } from "./GoldPrice";
import Charts from "./Charts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";

function App() {
  let [apiData, setApiData] = useState({});

  var myHeaders = new Headers();
  myHeaders.append("x-access-token", "goldapi-ps6l1uatlc74dxgu-io");
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  function apiCall(){
  fetch("https://www.goldapi.io/api/XAU/INR", requestOptions)
    .then(response => response.json())
    .then(result => setApiData(result))
    .catch(error => console.log('error', error));
  }

  useEffect(() => {apiCall()},[]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element= {<GoldPrice apiData={apiData}/>} />
        <Route path="/chart" element={<Charts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
