package com.chinmay.service;

import com.chinmay.entity.Customer;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface CustomerService {
    public String add(Customer customer);
    public List<Customer> getallCustomers();
    public void delete(Long id);
    public String update(Long id, Customer customer);

}
