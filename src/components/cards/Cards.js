import React from "react";
import styles from "./Cards.module.css";
import { Link } from "react-router-dom";
const Cards = ({ results, page  }) => {
  let display;

  if (results) {
    display = results.map((element) => {
      let { id, name, image, species, status } = element;

      return (
        <Link style={{textDecoration:"none"}} to={`${page}${id}`} key={id} className="col-4 mb-5 position-relative text-black">
          <div className={`${styles.cards} mt-1`}>
            <img src={image} className={`${styles.img} img-fluid`}></img>
            {/* //info about character */}
            <div style={{padding: "15px"}} className="content">
              {/* name */}
              <div className="fs-6 fw-bold mb-3">{name}</div>
              {/* species */}
              <div className="">
                <div className="fs-7">Species:</div>
                <div className="fs-5">{species}</div>
              </div>
            </div>
          </div>
          {/* IIFE start here */}
          {(() => {
            if(status === "Dead"){
                return(
                <div className={`${styles.badge} position-absolute badge bg-danger`}>
                    {status}
              </div>
                );
            }
            else if(status === "Alive"){
                return(
                    <div className={`${styles.badge} position-absolute badge bg-success`}>
                        {status}
                </div>
                );
            }
            else{
                return(
                    <div className={`${styles.badge} position-absolute badge bg-warning`}>
                    {status}
              </div>
                )
            }
          })()}
          {/* IIFE end here */}
        </Link>
      );
    });
  } else {
    display = "Nothing found. Are you sure that you typed correct?";
  }

  return <>{display}</>;
};

export default Cards;
