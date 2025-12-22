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

    // DISPLAY
    public List<Todo> getAllTodos() {
        return repository.findAll();
    }

    // ADD
    public Todo addTodo(Todo todo) {
        return repository.save(todo);
    }

    // DELETE
    public void deleteTodo(Long id) {
        repository.deleteById(id);
    }

    // UPDATE (toggle completed)
    public Todo updateTitle(Long id, String newTitle) {
        Todo todo = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found"));
        todo.setTitle(newTitle);
        return repository.save(todo);
    }

}
