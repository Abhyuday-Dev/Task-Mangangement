import { BiEditAlt } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import "./TaskCard.css";

const TaskCard = ({ task, handleTaskDelete, handleEditClick }) => {
  const { _id, title, description, status } = task;

  const handleDelete = () => {
    handleTaskDelete(_id);
  };
    
  const handleEdit = () => {
    handleEditClick(_id);
  };

  return (
    <div className="task-container">
      <div className="title" style={{ color: status !== "Done" ? "red" : "green" }}>{title}</div>
      <div className="description">{description}</div>
      <div className="bottom">
        <div className="icons">
          <p onClick={handleEdit}>
            <BiEditAlt style={{ color: "blue" }}/>
          </p>
          <p onClick={handleDelete}>
            <AiFillDelete style={{ color: "brown" }} />
          </p>
        </div>
        <div className="status">
          <p style={{ fontSize: "1rem" }}>Status:</p>
          {status !== "Done" ? (
            <RxCross2 style={{ color: "red" }} />
          ) : (
            <IoMdCheckmarkCircleOutline style={{ color: "green" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
