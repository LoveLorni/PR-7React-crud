import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [records, setRecords] = useState([]);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    age: '',
    job: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addRecord = () => {
    if (currentRecord !== null) {
      
      const updatedRecords = [...records];
      updatedRecords[currentRecord] = formData;
      setRecords(updatedRecords);
    } else {
    
      setRecords([...records, formData]);
    }
    resetForm();
  };

  const editRecord = (index) => {
    setCurrentRecord(index);
    setFormData(records[index]);
  };

  const deleteRecord = (index) => {
    setRecords(records.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setFormData({ lastname: '', firstname: '', age: '', job: '', address: '' });
    setCurrentRecord(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">React CRUD Example</h1>

      {/* Add/Edit Form */}
      <div className="mb-4">
        <div className="row g-3">
          <div className="col-md-2">
            <input
              type="text"
              name="lastname"
              className="form-control"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="firstname"
              className="form-control"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              name="age"
              className="form-control"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="job"
              className="form-control"
              placeholder="Job"
              value={formData.job}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100" onClick={addRecord}>
              {currentRecord !== null ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Age</th>
            <th>Job</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{record.lastname}</td>
                <td>{record.firstname}</td>
                <td>{record.age}</td>
                <td>{record.job}</td>
                <td>{record.address}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editRecord(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteRecord(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No data available. Please add a record.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
