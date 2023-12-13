package com.chinmay.controller;

import com.chinmay.entity.Customer;
import com.chinmay.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(value = "http://localhost:3000", allowCredentials = "true")

@RequestMapping("/customer")
@RestController
public class CustomerController {
    @Autowired
    CustomerService servicee;
    @PostMapping(value = "/save", consumes = {"application/json"})
    public ResponseEntity<String> save(@RequestBody Customer customer) {
        String msg = servicee.add(customer);
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }
    @GetMapping(value = "/get", produces = "application/json")
    public List<Customer> findallCustomers() {
        return servicee.getallCustomers();
    }
    @DeleteMapping(value="/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id)
    {
        servicee.delete(id);
        return new ResponseEntity<>("Customer Deleted", HttpStatus.OK);
    }
    @PutMapping(value = "/update/{id}", consumes = "application/json")
    public ResponseEntity<String> update(@PathVariable("id") Long id, @RequestBody Customer customer) {
        String msg = servicee.update(id, customer);
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }


}
