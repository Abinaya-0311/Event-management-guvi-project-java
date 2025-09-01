package com.example.demoEventManagement.Services;

import com.example.demoEventManagement.Entities.Event;
import com.example.demoEventManagement.Entities.Ticket;
import com.example.demoEventManagement.Entities.User;
import com.example.demoEventManagement.Repositories.EventRepository;
import com.example.demoEventManagement.Repositories.TicketRepository;
import com.example.demoEventManagement.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class TicketService
{
    private final TicketRepository ticketRepository;
    private final UserRepository userRepository;
    private final EventRepository eventRepository;
    private final JavaMailSender mailSender;

    @Autowired
    public TicketService(TicketRepository tr,UserRepository ur,EventRepository er,JavaMailSender jr)
    {
        ticketRepository=tr;
        userRepository=ur;
        eventRepository=er;
        mailSender=jr;
    }

    // Book a ticket
    public Ticket bookTicket(String userEmail, Long eventId) {
        User user = userRepository.findByEmail(userEmail);
        Event event = eventRepository.findById(eventId).orElse(null);

        if(user == null || event == null) return null;

        Ticket ticket = new Ticket();
        ticket.setBookingId(UUID.randomUUID().toString());
        ticket.setUser(user);
        ticket.setEvent(event);
        ticket.setBookingDate(LocalDateTime.now());

        Ticket savedTicket = ticketRepository.save(ticket);


        // Send email confirmation
        sendTicketConfirmationEmail(user, savedTicket);

        return savedTicket;
    }

    // Get all tickets for a user
    public List<Ticket> getTicketsByUser(String userEmail) {
        User user = userRepository.findByEmail(userEmail);
        if(user == null) return null;
        return ticketRepository.findByUser(user);
    }

    // Cancel ticket
    public String cancelTicket(Long ticketId) {
        if(ticketRepository.existsById(ticketId)){
            ticketRepository.deleteById(ticketId);
            return "Ticket cancelled successfully";
        }
        return "Ticket not found";
    }

    // Send email confirmation
    private void sendTicketConfirmationEmail(User user, Ticket ticket){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(user.getEmail());
        message.setSubject("Event Ticket Confirmation");
        message.setText("Hello " + user.getName() + ",\n\n" +
                "Your ticket has been booked successfully!\n" +
                "Ticket ID: " + ticket.getBookingId() + "\n" +
                "Event: " + ticket.getEvent().getEventName() + "\n" +
                "Event Date: " + ticket.getEvent().getEventDate() + "\n" +
                "Booking Date: " + ticket.getBookingDate() + "\n\n" +
                "Thank you!");
        mailSender.send(message);
    }
}
