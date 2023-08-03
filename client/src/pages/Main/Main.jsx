import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <section className="section section-hero">
        <div className="container">
          <div className="hero-data">
            <h1 className="primary-heading">
              Add,Manage And Organize Tasks
            </h1>
            <p className="para">
              Task Manager helps individuals, teams, or organizations efficiently manage,
              organize, and track their tasks, projects, and activities.
            </p>
            <div className="main-buttons">
              <Link
                className="btns"
                to="/Tasks"
                style={{ marginRight: "10px" }}
              >
                View Tasks
              </Link>
              <Link className="btns" to="/addTask">
                Add Tasks
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://img.freepik.com/free-vector/time-management-marketers-teamwork_335657-3008.jpg?w=2000"
              alt="image"
              className="image"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
