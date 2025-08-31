package com.example.demoEventManagement.Repositories;

import com.example.demoEventManagement.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long>
{
    User findByEmail(String email);
}
