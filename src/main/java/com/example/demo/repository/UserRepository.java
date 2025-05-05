package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByPhone(String phone); // ✅ Used for login & password reset

    Optional<User> findByResetToken(String token); // ✅ Used for password reset

	Optional<User> findByEmail(String emailOrPhone);
}
