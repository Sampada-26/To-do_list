# 📝 Full Stack To-Do Application

A simple **Full Stack To-Do List Web Application** built using **Spring Boot**, **H2 database**, and **Vanilla HTML, CSS, JavaScript**.

This project is beginner-friendly and demonstrates how a frontend communicates with a backend REST API and stores data in a real database.

---

## 🚀 Features

- Add new to-do items
- View all to-dos
- Mark to-do as completed / uncompleted
- Delete to-do items
- Persistent storage using H2 database
- RESTful API using Spring Boot

---

## 🛠️ Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- H2 database
- Maven

### Frontend
- HTML
- CSS
- JavaScript (Fetch API)

---

## 📂 Project Structure
```text
todoapp
└── src/main/java/com/todo/todoapp
    ├── TodoappApplication.java
    ├── controller
    │    └── TodoController.java
    ├── entity
    │    └── Todo.java
    ├── repository
    │    └── TodoRepository.java
    └── service
         └── TodoService.java

└── src/main/resources
    ├── application.properties
    └── static
         ├── index.html
         ├── style.css
         └── script.js
```
