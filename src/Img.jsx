import React from "react";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";

function Images() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: 40
        }}
      >
        <div style={{marginRight: 10}}>
          <img
            src={img1}
            alt="Hotel"
            height={410}
            width={550}
            style={{ objectFit: "cover"}}
            
          />
        </div>
        <div 
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div  style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <div>
              <img
                src={img2}
                alt="Hotel"
                height={200}
                width={250}
                style={{ objectFit: "cover", marginBottom: 5, marginRight: 5}}
              />
            </div>
            <div>
              <img
                src={img3}
                alt="Hotel"
                height={200}
                width={250}
                style={{ objectFit: "cover", marginTop: 5, marginRight: 5}}
              />
            </div>
          </div>
          <div  style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <div>
              <img
                src={img4}
                alt="Hotel"
                height={200}
                width={250}
                style={{ objectFit: "cover" , marginBottom: 5, marginLeft: 5}}
              />
            </div>
            <div>
              <img
                src={img5}
                alt="Hotel"
                height={200}
                width={250}
                style={{ objectFit: "cover", marginTop: 5, marginLeft: 5}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Images;
