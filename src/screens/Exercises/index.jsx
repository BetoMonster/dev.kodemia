import React, { useState } from "react";
/*
export default function Exercises() {
  const [USD, setUSD] = useState(0);
  const [MXN, setMXN] = useState(0);

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
          <div className="col p-5">
            <form>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="USDInput">
                  USD
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="USDInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter USD"
                  value={Number(USD).toFixed(2)}
                  onChange={(event) => {
                    setUSD(event.target.value);
                    setMXN(event.target.value * 19.84);
                  }}
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="MXNInput">
                  MXN
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="MXNInput"
                  placeholder="Enter MXN"
                  value={Number(MXN).toFixed(2)}
                  onChange={({ target: { value } }) => {
                    setUSD(value / 19.84);
                    setMXN(value);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
*/

export default function Exercises() {
  const [cardNumber, setCardNumber] = useState("1111222233334444");
  const [cardName, setCardName] = useState("NOMBRE");
  const [cardCVC, setCardCVC] = useState(123);
  const [cardDate, setCardDate] = useState("00/00");

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="d-flex col-10 col-md-4 bg-dark rounded  align-items-center px-0">
          <div className="col p-4">
            <form>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="USDInput">
                  Card Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardInput"
                  aria-describedby="emailHelp"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(event) => {
                    setCardNumber(event.target.value);
                  }}
                  maxlength="16"
                  size="16"
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="MXNInput">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Name"
                  value={cardName}
                  onChange={({ target: { value } }) => {
                    setCardName(value);
                  }}
                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="form-group col-5">
                  <label className="text-white" htmlFor="MXNInput">
                    CVC
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="CVCInput"
                    placeholder="Name"
                    value={cardCVC}
                    onChange={({ target: { value } }) => {
                      setCardCVC(value);
                    }}
                  />
                </div>

                <div className="form-group col-6">
                  <label className="text-white" htmlFor="MXNInput">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateInput"
                    placeholder="Date"
                    value={cardDate}
                    onChange={({ target: { value } }) => {
                      setCardDate(value);
                    }}
                  />
                </div>
              </div>
              <div className="card my-3 bg-secondary">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h1>Bank</h1>
                    <h2>VISA</h2>
                  </div>
                  <p>
                    {cardNumber.substring(0, 4) +
                      "-" +
                      cardNumber.substring(4, 8) +
                      "-" +
                      cardNumber.substring(8, 12) +
                      "-" +
                      cardNumber.substring(12, 16)}
                  </p>
                  <p>{cardName}</p>
                  <div className="d-flex justify-content-between">
                    <span>{cardCVC}</span>
                    <span>{cardDate}</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
