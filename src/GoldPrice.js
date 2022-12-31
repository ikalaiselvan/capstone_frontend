import { useState } from "react";
import React from "react";

export function GoldPrice({ apiData }) {
  const {
    timestamp,
    price_gram_18k,
    price_gram_20k,
    price_gram_21k,
    price_gram_22k,
    price_gram_24k,
  } = apiData;

  // convert timestamp to readable date time formate
  const unixTimestamp = timestamp;
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString();
  // console.log(humanDateFormat);

  const [value, setValue] = useState("");
  const [input, setInput] = useState("");
  const [ans, setAnswer] = useState(0);

  const handleSubmit = () => {
    if (value === "18") {
      setAnswer(+input * price_gram_18k);
    }
    if (value === "20") {
      setAnswer(+input * price_gram_20k);
    }
    if (value === "21") {
      setAnswer(+input * price_gram_21k);
    }
    if (value === "22") {
      setAnswer(+input * price_gram_22k);
    }
    if (value === "24") {
      setAnswer(+input * price_gram_24k);
    }
  };

  return (
    <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItem: "center",
        }}
      >
        <div
          style={{
            width: "650px",
            height: "400px",
            textAlign: "center",
            boxShadow: "0 0 10px 10px gold",
            margin: "30px",
            borderRadius: "10px",
          }}
        >
          <h2 style={{fontWeight:"bolder", marginTop: "10px"}}>GOLD RATE CALCULATOR</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItem: "center",
            }}
          >
            <label
              style={{ width: "95%", margin: "10px", textAlign: "start" }}
              htmlFor="goldType"
            >
              1. Select Gold Purity (Karat)
            </label>
            <select
              style={{ width: "95%", margin: "10px" }}
              className="form-select"
              id="goldType"
              onChange={(event) => {
                setValue(event.target.value);
              }}
            >
              <option defaultValue>Select Gold purity </option>
              <option value="18">18 kt</option>
              <option value="20">20 kt</option>
              <option value="21">21 kt</option>
              <option value="22">22 kt</option>
              <option value="24">24 kt</option>
            </select>
            <label
              style={{ width: "95%", margin: "10px", textAlign: "start" }}
              htmlFor="exampleInputEmail1"
            >
              2. Enter the Gold Weight in grams
            </label>
            <input
              style={{ width: "95%", margin: "10px" }}
              type="Number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="inputHelp"
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="totalPrice">
              <label
                style={{ background: "transparent" }}
                className="form-label"
              >
                Gold Rate in Indian Rupee (₹) :{" "}
              </label>{" "}
              <br />
              <span style={{ background: "transparent", color: "gold", textShadow: "black" }}>
                Rs. {ans ? ans.toFixed(2) : 0} /-
              </span>
            </div>
            <div className="butFlex">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleSubmit()}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "650px",
            height: "400px",
            textAlign: "center",
            boxShadow: "0 0 10px 10px gold",
            margin: "30px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "10px"
          }}
        >
          <h1 Style={{fontWeight:"bolder"}}>Gold price one gram</h1>
          <label
            style={{ width: "95%", margin: "10px", fontSize: "20px", fontWeight: "bold", color: "orange", textShadow:"0 0 2px red"}}
            htmlFor="goldType"
          >
            1. Price 18{" "}
            <span style={{ color: "yellow", fontSize: "13px" }}>kt</span> : Rs.{" "}
            {price_gram_18k} /-
          </label>
          <label className="form-label" 
          style={{ width: "95%", margin: "10px", fontSize: "20px", fontWeight: "bold", color: "orange", textShadow:"0 0 2px red"}}>

            2. Price 20{" "}
            <span style={{ color: "yellow", fontSize: "13px" }}>kt</span> : Rs.{" "}
            {price_gram_20k} /-
          </label>
          <label className="form-label"
          style={{ width: "95%", margin: "10px", fontSize: "20px", fontWeight: "bold", color: "orange", textShadow:"0 0 2px red"}}>
            3. Price 21{" "}
            <span style={{ color: "yellow", fontSize: "13px" }}>kt</span> : Rs.{" "}
            {price_gram_21k} /-
          </label>
          <label className="form-label"
          style={{ width: "95%", margin: "10px", fontSize: "20px", fontWeight: "bold", color: "orange", textShadow:"0 0 2px red"}}>
            4. Price 22{" "}
            <span style={{ color: "yellow", fontSize: "13px" }}>kt</span> : Rs.{" "}
            {price_gram_22k} /-
          </label>
          <label className="form-label"
          style={{ width: "95%", margin: "10px", fontSize: "20px", fontWeight: "bold", color: "orange", textShadow:"0 0 2px red"}}>
            5. Price 24{" "}
            <span style={{ color: "yellow", fontSize: "13px" }}>kt</span> : Rs.{" "}
            {price_gram_24k} /-
          </label>
        </div>
      </div>
  );
}
