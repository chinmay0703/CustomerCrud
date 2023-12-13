package com.chinmay.service;
import com.chinmay.entity.User;
import com.chinmay.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.Optional;
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;

    }
    @Override
    public User signup(String username, String password) {
        // Check if the username is available

        // Create a new user
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        return userRepository.save(user);
    }
    @Override
    public Boolean signin(String username, String password) {
        // Find the user by username
        Optional<User> userOptional = userRepository.findByUsernameAndPassword(username, password);

        return userOptional.isPresent();
    }
}

