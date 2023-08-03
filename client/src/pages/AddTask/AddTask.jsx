import React, { useState } from 'react';
import axios from 'axios';
import './AddTask.css';

const AddTask = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://task-68kw.onrender.com/api/v1/add', formData);
      alert('Task added successfully');
      setFormData({ title: '', description: '', status: 'pending' });
    } catch (error) {
      console.error(error);
      alert('Error adding Task');
    }
  };

  return (
    <div className="contact_right">
      <form>
        <h2>Add Task</h2>
        <ul>
          <li>
            <label htmlFor="name">
              <span>Name <span className="required-star">*</span></span>
            </label>
            <input
              type="text"
              id="name"
              name="title"
              required
              onChange={handleChange}
              value={formData.title}
            />
          </li>

          <li>
            <label htmlFor="description">
              <span>Description <span className="required-star">*</span></span>
            </label>
            <input
              type="text"
              required
              name="description"
              onChange={handleChange}
              value={formData.description}
            />
          </li>
          <input type="hidden" name="status" value={formData.status} />
          <li>
            <input type="submit" onClick={handleSubmit} value="Add Task" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default AddTask;
