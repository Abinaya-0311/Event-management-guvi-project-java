package com.example.demoEventManagement.Repositories;

import com.example.demoEventManagement.Entities.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration,Long>
{
}
