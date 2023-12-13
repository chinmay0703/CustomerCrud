import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UpdateCustomer() {
    const customerId = localStorage.getItem('customerId');
    const [customerData, setCustomerData] = useState({
        first_name: '',
        last_name: '',
        street: '',
        address: '',
        city: '',
        state: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        
        const fetchAllCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/customer/get');
               
                const customerToUpdate = response.data.find(customer => customer.id === parseInt(customerId));
                if (customerToUpdate) {
                    setCustomerData(customerToUpdate);
                }
            } catch (error) {
                console.error('Error fetching customers:', error.message);
            }
        };

        fetchAllCustomers();
    }, [customerId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/customer/update/${customerId}`, customerData);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className='container col-sm-8 align-item-center'>
            <h1 className='text-center py-3'>Update Customer</h1>

            <form className='group py-3'>
                <div className='row'>
                    <div className='col-6'>
                        <label htmlFor='first_name'>First Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='first_name'
                            name='first_name'
                            value={customerData.first_name}
                            onChange={handleChange}
                        />
                        <label htmlFor='street'>Street</label>
                        <input
                            type='text'
                            className='form-control'
                            id='street'
                            name='street'
                            value={customerData.street}
                            onChange={handleChange}
                        />
                        <label htmlFor='city'>City</label>
                        <input
                            type='text'
                            className='form-control'
                            id='city'
                            name='city'
                            value={customerData.city}
                            onChange={handleChange}
                        />
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            name='email'
                            value={customerData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-6'>
                        <label htmlFor='last_name'>Last Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='last_name'
                            name='last_name'
                            value={customerData.last_name}
                            onChange={handleChange}
                        />
                        <label htmlFor='address'>Address</label>
                        <input
                            type='text'
                            className='form-control'
                            id='address'
                            name='address'
                            value={customerData.address}
                            onChange={handleChange}
                        />
                        <label htmlFor='state'>State</label>
                        <input
                            type='text'
                            className='form-control'
                            id='state'
                            name='state'
                            value={customerData.state}
                            onChange={handleChange}
                        />
                        <label htmlFor='phone'>Phone</label>
                        <input
                            type='text'
                            className='form-control'
                            id='phone'
                            name='phone'
                            value={customerData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <Link to="/customerlist">
                    <button type='button' className='btn btn-primary my-3 w-100' onClick={handleSubmit}>
                        Update Customer
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default UpdateCustomer;
