package com.chinmay.service;

import com.chinmay.entity.User;

import java.util.Optional;

public interface UserService {

    User signup(String username, String password);

   Boolean signin(String username, String password);
}