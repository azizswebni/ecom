import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Carousel.css";
export default function Carousel() {
  const [backimg, setBackimg] = useState("CarousselMen");
  return (
    <>
      <div className={backimg}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setBackimg("CarousselMen");
          }}
          className="scale-in-center"
        >
          Men
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={() => {
            setBackimg("CarousselChild");
          }}
          className="scale-in-center"
        >
          Child
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setBackimg("CarousselWomen");
          }}
          className="scale-in-center"
        >
          women
        </Button>
      </div>
    </>
  );
}
