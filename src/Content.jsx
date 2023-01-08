import React from "react";

function Content() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>Hotel Vishal @ Airport</h3>
          <p>
            1575/80, Main Bazar Rd, Chuna Mandi, Paharganj, New Delhi, Delhi
            110055
            <a
              href="https://goo.gl/maps/2vM7h5VJ1EPsLfq3A"
              style={{ marginLeft: 10 }}
            >
              View Map
            </a>
          </p>
          <h6>+91-7654564545, 01123562123</h6>
          <p>
            <ul>
              <li style={{ float: "left" }}>Free Parking</li>
              <li style={{ float: "left", marginLeft: 30 }}>Conference Room</li>
              <li style={{ float: "left", marginLeft: 30 }}>ATM</li>
              <li style={{ float: "left", marginLeft: 30 }}>Swimming Pool</li>
              <li style={{ float: "left", marginLeft: 30 }}>Play Area</li>
            </ul>
          </p>
          <br />
          <br />
          <p>
            Located in Delhi 5.5km from Rashtrapati Bhavan, Hotel Vishal @
            Airport provides accomodation with a restaurent, free private
            parking and a fitness centre. This 3-star hotel offers a Swimming
            Pool, an ATM, a concierge service and free Wi-Fi. The accomodation
            feature a 24-hour front desk, room service and currency exchange for
            guests.
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.625897274621!2d77.21004471455986!3d28.64097229045081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd6855555555%3A0x999c9c680402f288!2sVishal%20Hotel!5e0!3m2!1sen!2sin!4v1673189480348!5m2!1sen!2sin"
          width={200}
          height={200}
          style={{ border: 0 }}
          allowfullscreen=""
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <hr />
      <h4>Property Rules</h4>
      <p>Check-in: 12PM Check-out: 12PM</p>
      <div style={{ display: "flex", flexDirection: "row"}}>
        <div style={{width: "50%"}}>
            <ul>
                <li>Guests with fever are not allowed</li>
                <li>Guests from containement zone are not allowed</li>
                <li>Guests below 18 years of age are not allowed at the property</li>
                <li>PAN Card and Non-Government ID are not accepted as ID proof(s)</li>
                <li>Aadhaar, Driving License and Govt. ID are allowed as ID proof(s)</li>
                <li>Property staff is trained on hygiene guidelines</li>
                <li>Pets are not allowed</li>
                <li>Outside food is not allowed</li>
                <li>Smoking within the premises is not allowed</li>
                <li>Quarantine protocols are being followed as per local govt. authourities</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Pets are not allowed</li>
                <li>Outside food is not allowed</li>
                <li>Smoking within the premises is not allowed</li>
                <li>Does not allows private parties or events</li>
                <li>Quarantine protocols are being followed as per local govt. authourities</li>
            </ul>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Content;
