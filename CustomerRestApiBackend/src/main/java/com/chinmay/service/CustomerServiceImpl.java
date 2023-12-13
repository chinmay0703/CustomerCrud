package com.chinmay.service;

import com.chinmay.entity.Customer;
import com.chinmay.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CustomerServiceImpl implements  CustomerService{
    @Autowired
    final CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public String add(Customer customer) {
        customerRepository.save(customer);
        return null;
    }

    @Override
    public List<Customer> getallCustomers() {

        return customerRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        customerRepository.deleteById(id);
    }

    @Override
    public String update(Long id, Customer updatedcustomer) {
        Optional<Customer> existingCustomerOptional = customerRepository.findById(id);

        if (existingCustomerOptional.isPresent()) {
            Customer existingCustomer = existingCustomerOptional.get();
            existingCustomer.setAddress(updatedcustomer.getAddress());
            existingCustomer.setCity(updatedcustomer.getCity());
            existingCustomer.setEmail(updatedcustomer.getEmail());
            existingCustomer.setPhone(updatedcustomer.getPhone());
            existingCustomer.setState(updatedcustomer.getState());
            existingCustomer.setFirst_name(updatedcustomer.getFirst_name());
            existingCustomer.setLast_name(updatedcustomer.getLast_name());
            existingCustomer.setStreet(updatedcustomer.getStreet());
            customerRepository.save(existingCustomer);
        } else {
            throw new RuntimeException("Customer not found with ID: " + id);
        }
        return null;
    }
}
