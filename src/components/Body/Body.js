import React, { useEffect, useState } from "react";
import axios from "axios";
import "./body.css";

function Body() {
  const [items, setItems] = useState([]);
  const [showDescription, setShowDescription] = useState(null); //used to change the state of button and show description

  const handleClick = (index) => {
    setShowDescription(showDescription === index ? null : index);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemslist = items.map((obj, index) => {
    return (
      <>
        <div className="main">
          <div className="box ID">
            <p>
              <b>ID</b>
            </p>
            <div className="idname">{obj.id}</div>
          </div>

          <div className="box name">
            <p>
              <b>CONTACT</b>
            </p>
            <div className="contactName">{obj.name}</div>
          </div>

          <div className="box city">
            <p>
              <b>CITY</b>
            </p>
            <div className="cityName">{obj.address.city}</div>
          </div>

          <div className="box state">
            <p>
              <b>STATE</b>
            </p>
            <div className="stateName">{obj.address.street}</div>
          </div>

          <button className="button" onClick={() => handleClick(index)}>
            {showDescription === index ? "Hide Details" : "View Details"}
          </button>
        </div>
        {showDescription === index && (

          <div className="description">
            <p>
              <b>Description</b>
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              maiores officiis odit, assumenda suscipit nobis provident rem modi
              officia cum natus dicta aliquid, fugit nihil ipsam omnis aperiam
              eius iure iste iusto. Ducimus, cupiditate sit facere ut eius
              dolorum iusto ullam repellat dolore molestias delectus. Quidem ea
              magnam doloremque nisi.
            </p>

            <div className="info">
              <div className="contact">
                <div className="contactName">
                  <p>
                    <b>Contact Person</b>
                  </p>
                  <div className="name">{obj.name}</div>
                </div>

                <div className="designation">
                  <p>
                    <b>Designation</b>
                  </p>
                  <div className="work">{obj.company.bs}</div>
                </div>
                
                <div className="mail">
                  <p>
                    <b>Email</b>
                  </p>
                  <div className="email">{obj.email}</div>
                </div>
                
                <div className="phone">
                  <p>
                    <b>Phones</b>
                  </p>
                  <div className="number">{obj.phone}</div>
                </div>
              </div>
              
              <div className="location">
                <div className="address">
                  <p>
                    <b>Address</b>
                  </p>
                  <p>{obj.address.suite}</p>
                </div>

                <div className="cities">
                  <p>
                    <b>City</b>
                  </p>
                  <div className="cityName">{obj.address.city}</div>
                </div>

                <div className="states">
                  <p>
                    <b>State</b>
                  </p>
                  <div className="stateName">{obj.address.street}</div>
                </div>

                <div className="country">
                  <p>
                    <b>Country</b>
                  </p>
                  <p>INDIA</p>
                </div>
              </div>
              <div className="address"></div>
            </div>
          </div>
        )}
      </>
    );
  });

  return (
    <div className="content">
      {itemslist}
    </div>
  )
}

export default Body;
