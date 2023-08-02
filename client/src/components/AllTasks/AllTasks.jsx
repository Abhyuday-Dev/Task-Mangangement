// AllTasks.js
import React, { useState, useEffect } from 'react';
import axios from "axios";
import AlltasksSection from '../AllTasksSection/AlltasksSection';
import UpdateForm from '../UpdateForm/UpdateForm';
import "./AllTasks.css";

const AllTasks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editTaskId, setEditTaskId] = useState(null); // Change to editTaskId

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/allTasks");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleTaskDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/deleteTask/${id}`);
      console.log("Task deleted");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (taskId) => {
    setEditTaskId(taskId); // Use setEditTaskId instead of setEditBookId
  };

  const handleEditCancel = () => {
    setEditTaskId(null); // Use setEditTaskId instead of setEditBookId
  };

  return (
    <div className="tasks">
      <h4>{editTaskId ? 'Update Task' : 'All Tasks'}</h4>
      <div className="books-display">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {editTaskId ? (
              <UpdateForm
                taskId={editTaskId} // Use taskId instead of bookId
                handleEditCancel={handleEditCancel}
                fetchData={fetchData}
              />
            ) : (
              <AlltasksSection
                data={data}
                handleTaskDelete={handleTaskDelete}
                handleEditClick={handleEditClick}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllTasks;
