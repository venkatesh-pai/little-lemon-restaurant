import React, { useEffect } from "react";
import "../styles/ReservationsContent.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function ReservationsPage({ availableTimes, updateTimes }) {
  useEffect(() => {
    console.log("ReservationsPage/availableTimes:");
    console.log(availableTimes);
  }, [availableTimes]);

  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required("Full name is a required field!"),
    email: yup
      .string()
      .required("Email is a required field!")
      .email("Email is not valid!"),
    telephone: yup
      .string()
      .required("Telephone is a required field!")
      .matches(/^\d{10}$/, "Phone number must match the form 0000000000"),
    guests: yup
      .number()
      .transform((value, originalValue) =>
        originalValue.trim() === "" ? undefined : value
      )
      .nullable()
      .required("Please specify number of guests per table!")
      .test(
        "is-number",
        "Invalid number of guests entered",
        (value) => !isNaN(value)
      )
      .min(1, "There must be at least 1 guest!"),
    reservationdate: yup
      .string()
      .required("Please select a date!")
      .test("is-future-date", "Past dates are not allowed.", function (value) {
        const selectedDate = new Date(value);
        const currentDate = new Date();
        return selectedDate > currentDate;
      }),
    reservationtime: yup.string().required("Please select time!"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.table(data);
    navigate("/reservation-success");
  };

  const reservationDateChanged = (newDate) => {
    updateTimes(newDate);
  };

  return (
    <div className="res-content-wrapper">
      <div className="res-content-container">
        <div className="text">
          <h2>Indulge in the ideal blend of tradition and opulence.</h2>
          <p>
            Little Lemon is dedicated to delivering an unparalleled luxurious
            experience infused with a hint of tradition. We take immense pride
            in ensuring our customers are treated to the utmost excellence.
          </p>
          <p>
            Reserve a table with us and immerse yourself in this extraordinary
            encounter.
          </p>
        </div>
        <div className="form">
          <h1>Reserve a Table</h1>
          <p>
            Please fill in the details and submit form to book your reservation
            at Little Lemon.
          </p>
          <form onSubmit={handleSubmit(formSubmit)} aria-label="Reservation Details">
            <fieldset>
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  {...register("name")}
                />
                <span className="error-message">{errors.name?.message}</span>
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="text@email.com"
                  name="email"
                  {...register("email")}
                />
                <span className="error-message">{errors.email?.message}</span>
              </div>
              <div className="field">
                <label htmlFor="telephone">Telephone</label>
                <input
                  type="tel"
                  placeholder="0000000000"
                  name="telephone"
                  {...register("telephone")}
                />
                <span className="error-message">
                  {errors.telephone?.message}
                </span>
              </div>
              <div className="field occasion">
                <label htmlFor="occasion">Occasion (optional)</label>
                <div className="options">
                  <select name="occasion" {...register("occasion")}>
                    <option value="select">Select occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                  </select>
                </div>
              </div>
              <div className="field guest">
                <label htmlFor="guests">Guests</label>
                <input
                  type="number"
                  placeholder="2"
                  name="guests"
                  {...register("guests")}
                />
                <span className="error-message">{errors.guests?.message}</span>
              </div>
              <div className="field">
                <label htmlFor="reservationdate">Date</label>
                <input
                  type="date"
                  name="reservationdate"
                  {...register("reservationdate")}
                  onChange={(e) => reservationDateChanged(e.target.value)}
                />
                <span className="error-message">
                  {errors.reservationdate?.message}
                </span>
              </div>
              <div className="field">
                <label htmlFor="reservationtime">Time</label>
                <div className="options">
                  <select name="reservationtime" {...register("reservationtime")}>
                    <option value="select">Select time</option>
                    {availableTimes.map((available) => (
                      <option key={available} value={available}>
                        {available}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="error-message">
                  {errors.reservationtime?.message}
                </span>
              </div>
              <button className="reserve-btn" type="submit">
                Reserve
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReservationsPage;
