package com.todo.todoapp.controller;


import com.todo.todoapp.entity.Todo;
import com.todo.todoapp.service.TodoService;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/todos")
public class TodoController {


    private final TodoService service;


    public TodoController(TodoService service) {
        this.service = service;
    }


    @GetMapping
    public List<Todo> getTodos() {
        return service.getAllTodos();
    }


    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return service.addTodo(todo);
    }


    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        service.deleteTodo(id);
    }


    @PutMapping("/{id}")
    public Todo toggleTodo(@PathVariable Long id) {
        return service.toggleTodo(id);
    }
}