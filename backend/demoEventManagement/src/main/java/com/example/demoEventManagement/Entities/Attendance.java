package com.example.demoEventManagement.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "attendance")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Attendance {

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public LocalDateTime getAttendedAt() {
        return attendedAt;
    }

    public void setAttendedAt(LocalDateTime attendedAt) {
        this.attendedAt = attendedAt;
    }

    public boolean isPresent() {
        return present;
    }

    public void setPresent(boolean present) {
        this.present = present;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // User who attended
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Event attended
    @ManyToOne
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    // Timestamp when the user attended
    private LocalDateTime attendedAt;

    // Optional: boolean flag to mark present/absent (default true when marking attendance)
    private boolean present;
}