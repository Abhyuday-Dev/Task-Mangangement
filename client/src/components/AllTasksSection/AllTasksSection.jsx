import React from 'react';
import TaskCard from '../TaskCard/taskCard';
import "./AllTasksSection.css";

const AlltasksSection = ({ data, handleTaskDelete, handleEditClick }) => {
  return (
    <div className="task-section">
      {data && data.tasks && data.tasks.length > 0 ? (
        data.tasks.map((item) => (
          <TaskCard
            key={item._id}
            task={item}
            handleTaskDelete={handleTaskDelete}
            handleEditClick={handleEditClick}
          />
        ))
      ) : (
        <div>No tasks found.</div>
      )}
    </div>
  );
};

export default AlltasksSection;
