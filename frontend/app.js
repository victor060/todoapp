const API_URL = 'http://localhost:3000/api';

// Carregar tarefas ao iniciar
document.addEventListener('DOMContentLoaded', loadTasks);

// Adicionar tarefa ao pressionar Enter
document.getElementById('taskInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

async function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '<div class="loading">Carregando tarefas...</div>';

    try {
        const response = await fetch(`${API_URL}/tasks`);
        const result = await response.json();

        if (result.success && result.data.length > 0) {
            taskList.innerHTML = result.data.map(task => createTaskHTML(task)).join('');
        } else {
            taskList.innerHTML = '<div class="empty-state">Nenhuma tarefa cadastrada. Adicione uma nova tarefa acima!</div>';
        }
    } catch (error) {
        taskList.innerHTML = '<div class="empty-state">Erro ao carregar tarefas. Verifique se o backend está rodando.</div>';
        console.error('Erro:', error);
    }
}

function createTaskHTML(task) {
    return `
        <div class="task-item ${task.completed ? 'completed' : ''}">
            <input type="checkbox" 
                   class="task-checkbox" 
                   ${task.completed ? 'checked' : ''} 
                   onchange="toggleTask(${task.id}, ${!task.completed})">
            <span class="task-title">${task.title}</span>
            <div class="task-actions">
                <button class="btn-delete" onclick="deleteTask(${task.id})">Deletar</button>
            </div>
        </div>
    `;
}

async function addTask() {
    const input = document.getElementById('taskInput');
    const title = input.value.trim();

    if (!title) {
        alert('Digite uma tarefa!');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        });

        const result = await response.json();

        if (result.success) {
            input.value = '';
            loadTasks();
        } else {
            alert('Erro ao adicionar tarefa');
        }
    } catch (error) {
        alert('Erro ao conectar com o servidor');
        console.error('Erro:', error);
    }
}

async function toggleTask(id, completed) {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed })
        });

        if (response.ok) {
            loadTasks();
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

async function deleteTask(id) {
    if (!confirm('Deseja realmente deletar esta tarefa?')) return;

    try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            loadTasks();
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}