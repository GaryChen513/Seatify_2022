import React, { useState, useEffect } from "react";
import { Nav } from "reactstrap";

import Navbar from "./Navbar";
import Home from "./Home";
import Book from "./Book";
import Form from "./Form";
import About from "./About";

import Background from "../video/background.mp4";
import "./view.css";

const RequestContext = React.createContext();

function View() {
  const [page, setPage] = useState(0);
  const [request, setRequest] = useState({}); // {seat_id: time_booked}

  useEffect(() => {}, [request]);

  function onRequest(id, occupiedTime) {
    const new_request = { ...request };
    new_request[id] = occupiedTime;
    setRequest(new_request);
  }

  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Background} type="video/mp4" />
      </video>
      <RequestContext.Provider value={{ request, onRequest }}>
        <Navbar setPage={setPage} />
        {page === 0 ? <Home setPage={setPage} /> : null}
        {page === 1 ? <Book setPage={setPage} onRequest={onRequest} /> : null}
        {page === 2 ? (
          <Form setPage={setPage} request={request} setRequest={setRequest} />
        ) : null}
        {page === 3 ? <About setPage={setPage} /> : null}
      </RequestContext.Provider>
    </div>
  );
}

export { View, RequestContext };
