import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import ConfirmedBooking from "./components/ConfirmedBooking";
import OrderOnline from "./components/OrderOnline";
import { Route, Routes } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api.js";

function App() {
  const [availableTimesForReservation, setAvailableTimesForReservation] = useState([]);

  useEffect(() => {
    initializeTimes();
  }, []);

  const initializeTimes = () => {
    const today = new Date();
    const availableTimeSlots = fetchAPI(today);
    setAvailableTimesForReservation(availableTimeSlots);
  };

  const updateTimes = (newDate) => {
    const availableTimeSlots = fetchAPI(newDate);
    setAvailableTimesForReservation(availableTimeSlots);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/reservations"
          element={<Reservations availableTimes={availableTimesForReservation} updateTimes={updateTimes} />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/reservation-success" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
