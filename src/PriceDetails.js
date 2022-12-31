import React from 'react'

export default function PriceDetails({apiData}) {
  const {timestamp, price_gram_18k, price_gram_20k, price_gram_21k, price_gram_22k, price_gram_24k} = apiData;
  return (
    <div className="p-3 m-0 border-0 bd-example priceDetailContainer">
      <h2 className="header">Gold price one gram</h2>

          <label className="form-label">
            1. Price 18 <span style = {{color:'grey', fontSize: "13px"}}>kt</span> : Rs. {price_gram_18k} /-
          </label>
          <label className="form-label">
            2. Price 20 <span style = {{color:'grey', fontSize: "13px"}}>kt</span> : Rs. {price_gram_20k} /-
          </label>
          <label className="form-label">
            3. Price 21 <span style = {{color:'grey', fontSize: "13px"}}>kt</span> : Rs. {price_gram_21k} /-
          </label>
          <label className="form-label">
            4. Price 22 <span style = {{color:'grey', fontSize: "13px"}}>kt</span> : Rs. {price_gram_22k} /-
          </label>
          <label className="form-label">
            5. Price 24 <span style = {{color:'grey', fontSize: "13px"}}>kt</span> : Rs. {price_gram_24k} /-
          </label>

    </div>
  )
}
