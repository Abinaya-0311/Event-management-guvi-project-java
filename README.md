# 🎉 Event Management System

## 📌 Overview  
The **Event Management System** is a full-stack web application built using **Spring Boot** and **MySQL**.  
It provides administrators the ability to create, manage, and delete events through a simple web-based dashboard.  

This project demonstrates **CRUD operations (Create, Read, Update, Delete)** with proper REST API integration and a clean frontend interface.

---

## 🚀 Features  
- ✅ Create new events with **Name, Location, and Date**  
- ✅ View all events stored in the database  
- ✅ Delete events with a single click  
- ✅ Retrieve event details by ID  
- ✅ REST API integration with **Spring Boot & JPA**

---

## 🛠️ Tech Stack  
- **Backend** → Spring Boot (REST APIs)  
- **Frontend** → HTML, CSS, JavaScript (fetch API calls)  
- **Database** → MySQL (JPA/Hibernate)  
- **Build Tool** → Maven  

---

## 📂 Project Structure  
src/main/java/com/example/eventmanagement
│── controllers # REST controllers for handling API requests
│── entities # Event entity mapped to database
│── repositories # JPA repositories for DB operations
│── services # Business logic layer

yaml
Copy code

---

## 🔗 API Endpoints  
| Method | Endpoint          | Description              |
|--------|------------------|--------------------------|
| GET    | `/events`        | Fetch all events         |
| POST   | `/events`        | Create a new event       |
| GET    | `/events/{id}`   | Fetch event by ID        |
| DELETE | `/events/{id}`   | Delete event by ID       |

---

## 📊 Database Schema  

**Table: events**  

| Column     | Type        | Description             |  
|------------|------------|-------------------------|  
| id         | BIGINT (PK)| Auto-generated event ID |  
| event_name | VARCHAR    | Name of the event       |  
| location   | VARCHAR    | Location of the event   |  
| event_date | DATE       | Date of the event       |  

---

## 🖥️ How It Works  
1. Admin opens the **Admin Dashboard** in the browser.  
2. Admin enters event details and clicks **Create**.  
3. Event gets saved into the **MySQL database** through REST API.  
4. Events are dynamically displayed using **fetch API**.  
5. Admin can delete events when needed.  

---

## 🎯 Future Enhancements  
- Add **user authentication** (Admin, HR, Employee roles)  
- Allow users to **register/join events**  
- Add **event notifications/reminders**  
- Implement **update/edit event functionality**  

---

## 📷 Screenshots  
LOGIN.html:
<img width="1880" height="930" alt="Screenshot 2025-09-07 140854" src="https://github.com/user-attachments/assets/d130b07d-4b81-4323-88a4-c39438d4ad08" />

SIGNUP.html:
<img width="1887" height="942" alt="Screenshot 2025-09-07 141000" src="https://github.com/user-attachments/assets/2953dd96-c29d-487d-997b-98faadc1a6f1" />

USER-DASHBOARD.html:
<img width="1919" height="892" alt="Screenshot 2025-09-07 141400" src="https://github.com/user-attachments/assets/5d764e2b-238e-452b-b845-4c6b9a5f7b02" />

ADMIN-DASHBOARD.html:
<img width="1919" height="893" alt="Screenshot 2025-09-07 141505" src="https://github.com/user-attachments/assets/79c60b3a-b850-4d8c-a93c-54fcd4924799" />
---

## ⚡ Getting Started  

### Prerequisites  
- Java 17+  
- Maven  
- MySQL  

### Steps to Run  
1. Clone the repository:  
   git clone https://github.com/your-username/event-management-system.git
   cd event-management-system

2.Configure your MySQL database in application.properties:
###properties
spring.datasource.url=jdbc:mysql://localhost:3306/eventdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

3.Run the Spring Boot application:
    mvn spring-boot:run
4.Open admin-dashboard.html in a browser to access the dashboard.
