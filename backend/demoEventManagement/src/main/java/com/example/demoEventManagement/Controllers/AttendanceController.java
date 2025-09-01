package com.example.demoEventManagement.Controllers;

import com.example.demoEventManagement.Entities.Attendance;
import com.example.demoEventManagement.Services.AttendanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/attendance")
public class AttendanceController
{
    private final AttendanceService attendanceService;

    @Autowired
    public AttendanceController(AttendanceService at)
    {
        attendanceService=at;
    }

    // Mark attendance for a user
    @PostMapping("/mark")
    public Attendance markAttendance(@RequestBody Map<String, String> payload) {
        String email = payload.get("userEmail");
        Long eventId = Long.parseLong(payload.get("eventId"));
        return attendanceService.markAttendance(email, eventId);
    }

    // Get attendance for a specific user
    @GetMapping("/user")
    public List<Attendance> getUserAttendance(@RequestParam String email) {
        return attendanceService.getAttendanceByUser(email);
    }

    // Get attendance for a specific event (admin)
    @GetMapping("/event/{eventId}")
    public List<Attendance> getEventAttendance(@PathVariable Long eventId) {
        return attendanceService.getAttendanceByEvent(eventId);
    }
}
