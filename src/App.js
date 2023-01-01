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
  
  // let apiData = {
  //   ask: 150017.7,
  //   bid: 150007.7,
  //   ch: -290.8,
  //   chp: -0.19,
  //   currency: "INR",
  //   exchange: "IDC",
  //   high_price: 150168.9,
  //   low_price: 149918.1,
  //   metal: "XAU",
  //   open_price: 150087,
  //   open_time: 1672185600,
  //   prev_close_price: 150298.5,
  //   price: 150007.7,
  //   price_gram_18k: 3617.1447,
  //   price_gram_20k: 4019.0496,
  //   price_gram_21k: 4220.0021,
  //   price_gram_22k: 4420.9546,
  //   price_gram_24k: 4822.8595,
  //   symbol: "FX_IDC:XAUINR",
  //   timestamp: 1672200530,
  // };

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
