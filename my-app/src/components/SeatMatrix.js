import React, { useState, useEffect, useContext } from "react";
import Seat from "./Seat";
// import level from "../script/Seed.js"; // dummy data
import { sliceArray } from "../utils";
import "./Seat.css";
import { RequestContext } from "../views";

const SeatMatrix = (props) => {
  const { seats, cur_time, cur_floor } = props;
  const { request, onRequest } = useContext(RequestContext);

  useEffect(() => {}, [request]);

  const default_seat_num = cur_floor * 32;

  const generateSeats = (arr, start, end) => {
    return (
      <div className="row">
        {sliceArray(arr, start, end).map((seat, index) => {
          let isDisabled = false;
          if (!(seat._id in request)) {
            const cur_index = index + start;

            if (Math.floor((cur_index - 1) / 4) === Math.floor(cur_index / 4)) {
              isDisabled =
                isDisabled || checkDisable(seats[cur_index - 1], cur_time);
            }
            if (Math.floor((cur_index + 1) / 4) === Math.floor(cur_index / 4)) {
              isDisabled =
                isDisabled || checkDisable(seats[cur_index + 1], cur_time);
          }}

          return (
            <Seat
              seat={seat}
              cur_time={cur_time}
              onRequest={onRequest}
              isDisabled={isDisabled}
              key={seat.table_num}
            />
          );
        })}
      </div>
    );
  };

  function checkDisable(seat, cur_time) {
    if (seat.occupiedTime.includes(cur_time)) return true;
    const id = seat._id;
    if (id in request && request[id].includes(cur_time)) return true;

    return false;
  }

  return (
    <div className="floor-complex">
      <div className="row floor-layout">
        <div className="col col-md-3">
          {generateSeats(seats, 0, 4)}
          {generateSeats(seats, 4, 8)}
        </div>

        <div className="col col-md-4">
          {generateSeats(seats, 8, 12)}
          {generateSeats(seats, 12, 16)}
          {generateSeats(seats, 16, 20)}
          {generateSeats(seats, 20, 24)}
        </div>

        <div className="col col-md-3">
          {generateSeats(seats, 24, 28)}
          {generateSeats(seats, 28, 32)}
        </div>
      </div>
    </div>
  );
};

export default SeatMatrix;
