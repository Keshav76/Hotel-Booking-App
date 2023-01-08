import React, { useState } from "react";
import background from "./images/hotelRoomInterior.jpg";

function Booking() {
  const [vis, setVis] = useState(false);
  const [rooms, setRooms] = useState(0);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);

  const btnStyle = {
    width: 30,
    padding: 0,
    height: 30,
    marginLeft: 10, 
    marginRight: 10,
    borderRadius: "50%"
  }

  return (
    <div
      style={{
        padding: 1,
        height: "90vh",
        backgroundImage: `url(${background})`,
        overflow: "hidden",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        filter: "opacity(80%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 10,
          background: "white",
        }}
      >
        <div style={{ margin: "5px", marginLeft: 20 }}>
          <label><h6>Check In</h6></label>
          <input
            type="date"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "20%",
              border: "none",
              transform: "translateY(2px)",
              marginLeft: 3,
            }}
          />
        </div>

        <div style={{ margin: "5px", marginLeft: 20 }}>
          <label><h6>Check Out</h6></label>
          <input
            type="date"
            style={{
              width: "20px",
              marginLeft: 3,
              height: "20px",
              borderRadius: "20%",
              border: "none",
              transform: "translateY(2px)",
            }}
          />
        </div>

        <div
          style={{
            margin: "5px",
            marginLeft: 20,
            marginRight: 20,
            cursor: "pointer",
          }}
          onClick={() => setVis(!vis)}
        >
          <h6>Rooms: {rooms} | Adults: {adult} | Children: {child}</h6>
        </div>
      </div>
      <div style={{}}>
        <div className="btn btn-success" ><h6>Check Availability</h6></div>
      </div>
      {vis && (
        <div
          style={{
            background: "white",
            position: "absolute",
            transform: "translate(50px, 80px)",
            width: "230px",
            //   padding: 20,
            //   boxSizing: "border-box"
          }}
        >
          <div style={{ display: "flex", margin: 10 }}>
            <h6 style={{ marginRight: 30 }}>Rooms: </h6>
            <div style={{right: 20, position: "absolute"}}>
              <button  style={btnStyle}
                onClick={() => {
                  setRooms(rooms - 1);
                }}
              >
                -
              </button>
              {rooms}
              <button style={btnStyle}
                onClick={() => {
                  setRooms(rooms + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div style={{ display: "flex", margin: 10 }}>
            <h6 style={{ marginRight: 30 }}>Adults: </h6>
            <div style={{right: 20, position: "absolute"}}>
              <button style={btnStyle}
                onClick={() => {
                  setAdult(adult - 1);
                }}
              >
                -
              </button>
              {adult}
              <button style={btnStyle}
                onClick={() => {
                  setAdult(adult + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div style={{ display: "flex", margin: 10 }}>
            <h6 style={{ marginRight: 30 }}>Children: </h6>
            <div style={{right: 20, position: "absolute"}}>
              <button style={btnStyle}
                onClick={() => {
                  setChild(child - 1);
                }}
              >
                -
              </button>
              {child}
              <button style={btnStyle}
                onClick={() => {
                  setChild(child + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
