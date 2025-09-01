package com.example.demoEventManagement.Repositories;

import com.example.demoEventManagement.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long>
{
    User findByEmail(String email);

    boolean existsByEmail(String email);

}
