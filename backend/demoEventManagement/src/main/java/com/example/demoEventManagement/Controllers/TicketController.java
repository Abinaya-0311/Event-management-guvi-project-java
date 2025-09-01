package com.example.demoEventManagement.Controllers;

import com.example.demoEventManagement.Entities.Ticket;
import com.example.demoEventManagement.Services.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/tickets")
public class TicketController
{
    private final TicketService ticketService;

    @Autowired
    public TicketController(TicketService ts)
    {
        ticketService=ts;
    }


    // Book ticket
    @PostMapping("/book")
    public Ticket bookTicket(@RequestBody Map<String, String> payload) {
        String email = payload.get("userEmail");
        Long eventId = Long.parseLong(payload.get("eventId"));
        return ticketService.bookTicket(email, eventId);
    }

    // Get tickets for a user
    @GetMapping("/mine")
    public List<Ticket> getMyTickets(@RequestParam String email) {
        return ticketService.getTicketsByUser(email);
    }

    // Cancel ticket
    @DeleteMapping("/{ticketId}")
    public String cancelTicket(@PathVariable Long ticketId) {
        return ticketService.cancelTicket(ticketId);
    }
}
