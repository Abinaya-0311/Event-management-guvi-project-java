package com.example.demoEventManagement.Repositories;

import com.example.demoEventManagement.Entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event,Long>
{
}
