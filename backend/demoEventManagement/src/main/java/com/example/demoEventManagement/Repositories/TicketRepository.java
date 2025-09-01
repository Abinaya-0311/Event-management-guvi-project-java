package com.example.demoEventManagement.Repositories;

import com.example.demoEventManagement.Entities.Event;
import com.example.demoEventManagement.Entities.Ticket;
import com.example.demoEventManagement.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket,Long>
{
    List<Ticket> findByUser(User user);

    List<Ticket> findByEvent(Event event);

    Ticket findByBookingId(String bookingId);
}
