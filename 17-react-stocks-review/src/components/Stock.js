import React from 'react'


const Stock = ({ stock, clickAction}) => {
  const {name, ticker, price, id} = stock

  return(
  <div onClick={() => clickAction(stock)}>
    <div  className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{`${ticker}: ${price}`}</p>
      </div>
    </div>
  </div>
)}

export default Stock
