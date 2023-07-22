import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ReservationsPage from "./ReservationsPage";

const Reservations = ({ availableTimes, updateTimes }) => {
  return (
    <div>
      <Navbar />
      <ReservationsPage availableTimes={availableTimes} updateTimes={updateTimes} />
      <Footer />
    </div>
  );
};

export default Reservations;
