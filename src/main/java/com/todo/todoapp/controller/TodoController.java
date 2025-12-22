package com.todo.todoapp.controller;

import com.todo.todoapp.entity.Todo;
import com.todo.todoapp.service.TodoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "*")
public class TodoController {

    private final TodoService service;

    public TodoController(TodoService service) {
        this.service = service;
    }

    // ✅ DISPLAY TASKS
    @GetMapping
    public List<Todo> getTodos() {
        return service.getAllTodos();
    }

    // ✅ ADD TASK
    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return service.addTodo(todo);
    }

    // ✅ UPDATE TASK
    @PutMapping("/{id}")
    public void toggleTodo(@PathVariable Long id) {
        service.toggleTodo(id);
    }

    // ✅ DELETE TASK
    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        service.deleteTodo(id);
    }
}
