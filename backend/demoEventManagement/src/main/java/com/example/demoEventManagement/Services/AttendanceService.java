package com.example.demoEventManagement.Services;

import com.example.demoEventManagement.Entities.Attendance;
import com.example.demoEventManagement.Entities.Event;
import com.example.demoEventManagement.Entities.User;
import com.example.demoEventManagement.Repositories.AttendanceRepository;
import com.example.demoEventManagement.Repositories.EventRepository;
import com.example.demoEventManagement.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AttendanceService
{
    private final AttendanceRepository attendanceRepository;
    private final UserRepository userRepository;
    private final EventRepository eventRepository;

    @Autowired
    public AttendanceService(AttendanceRepository ar,UserRepository ur,EventRepository er)
    {
        attendanceRepository=ar;
        userRepository=ur;
        eventRepository=er;
    }

    // Mark attendance for a user in an event
    public Attendance markAttendance(String userEmail, Long eventId) {
        User user = userRepository.findByEmail(userEmail);
        Event event = eventRepository.findById(eventId).orElse(null);

        if(user == null || event == null) return null;

        // Check if attendance already exists
        Attendance existing = attendanceRepository.findByUserAndEvent(user, event);
        if(existing != null) return existing;

        Attendance attendance = new Attendance();
        attendance.setUser(user);
        attendance.setEvent(event);
        attendance.setAttendedAt(LocalDateTime.now());
        attendance.setPresent(true);
        attendanceRepository.save(attendance);

        return attendanceRepository.save(attendance);
    }

    // Get all attendance for a user
    public List<Attendance> getAttendanceByUser(String userEmail) {
        User user = userRepository.findByEmail(userEmail);
        if(user == null) return null;
        return attendanceRepository.findByUser(user);
    }

    // Get all attendance for an event (admin view)
    public List<Attendance> getAttendanceByEvent(Long eventId) {
        Event event = eventRepository.findById(eventId).orElse(null);
        if(event == null) return null;
        return attendanceRepository.findByEvent(event);
    }

    // Optional: mark absent explicitly
    public Attendance markAbsent(String userEmail, Long eventId) {
        User user = userRepository.findByEmail(userEmail);
        Event event = eventRepository.findById(eventId).orElse(null);
        if(user == null || event == null) return null;
        Attendance attendance = new Attendance();
        attendance.setUser(user);
        attendance.setEvent(event);
        attendance.setAttendedAt(LocalDateTime.now());
        attendance.setPresent(true);
        attendanceRepository.save(attendance);

        return attendanceRepository.save(attendance);
    }
}
