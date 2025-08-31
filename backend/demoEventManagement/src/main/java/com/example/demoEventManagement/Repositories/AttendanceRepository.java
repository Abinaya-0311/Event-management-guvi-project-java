package com.example.demoEventManagement.Repositories;

import com.example.demoEventManagement.Entities.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance,Long>
{
}
