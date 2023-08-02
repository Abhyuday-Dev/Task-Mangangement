import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateForm.css";

const UpdateForm = ({ taskId, handleEditCancel, fetchData }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
  });

  useEffect(() => {
    console.log("taskId:", taskId);
    fetchTaskData();
  }, [taskId]);

  const fetchTaskData = async () => {
    try {
      console.log("Fetching task data for taskId:", taskId);
      const response = await axios.get(
        `http://localhost:8000/api/v1/getTask/${taskId}`
      );
      const { _id, title, description, status } = response.data.task;
      console.log("Fetched data:", response.data.task);
      setFormData({ _id, title, description, status });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:8000/api/v1/updateTask/${taskId}`,
        formData
      );
      alert("Task updated successfully");
      handleEditCancel();
      fetchData();
    } catch (error) {
      console.error(error);
      alert("Error updating Task");
    }
  };

  return (
    <div className="update-form">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="title">Task:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        />

        <div className="buttons">
          <button type="submit">Update</button>
          <button type="button" onClick={handleEditCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
