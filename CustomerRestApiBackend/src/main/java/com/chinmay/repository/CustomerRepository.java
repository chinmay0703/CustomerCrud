package com.chinmay.repository;

import com.chinmay.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface CustomerRepository  extends JpaRepository<Customer, Long> {

}
