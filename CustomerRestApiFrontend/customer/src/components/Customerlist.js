import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
function CustomerList() {
  const [customerList, setCustomerList] = useState([]);
  const naviagte=useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/customer/get');
      setCustomerList(response.data);
    } catch (error) {
      console.error('Error fetching customer list:', error);
    }
  };

  const handleUpdate = (customerId) => {
    localStorage.setItem("customerId",customerId);
    naviagte("/updatecustomer");
   
    console.log(`Update customer with ID ${customerId}`);
  };
  const handleDelete = (customerId) => {
    axios.delete(`http://localhost:8080/customer/delete/${customerId}`)
        .then(response => {
            console.log(`Customer with ID ${customerId} deleted successfully.`);
            fetchData();
          
        })
        .catch(error => {
            console.error(`Error deleting customer with ID ${customerId}:`, error);
        });  
};
  return (
    <div className='py-2 my-2 mx-2'>
      <h2 className='text-center py-4'>Customer List</h2>
      <table border="1" className='table table-bordered text-center'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Street</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.street}</td>
              <td>{customer.address}</td>
              <td>{customer.city}</td>
              <td>{customer.state}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <button className='btn btn-warning' onClick={() => handleUpdate(customer.id)}>Update</button>
                <button className='btn btn-danger mx-2' onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    <Link to={"/addcustomer"} >  <button className='btn btn-primary'>Add Customer</button></Link>
    </div>
  );
}

export default CustomerList;
