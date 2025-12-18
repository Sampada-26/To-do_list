package com.todo.todoapp.service;


import com.todo.todoapp.entity.Todo;
import com.todo.todoapp.repository.TodoRepository;
import org.springframework.stereotype.Service;


import java.util.List;


@Service
public class TodoService {


    private final TodoRepository repository;


    public TodoService(TodoRepository repository) {
        this.repository = repository;
    }


    public List<Todo> getAllTodos() {
        return repository.findAll();
    }


    public Todo addTodo(Todo todo) {
        return repository.save(todo);
    }


    public void deleteTodo(Long id) {
        repository.deleteById(id);
    }


    public Todo toggleTodo(Long id) {
        Todo todo = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found"));
        todo.setCompleted(!todo.isCompleted());
        return repository.save(todo);
    }
}