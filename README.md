# Sistema de Tarefas (To-Do List)

Sistema simples de gerenciamento de tarefas com backend Node.js, frontend HTML/CSS/JS e PostgreSQL.

## 🚀 Tecnologias

- Backend: Node.js + Express
- Frontend: HTML, CSS, JavaScript
- Banco de Dados: PostgreSQL
- Containerização: Docker
- Monitoramento: Zabbix + Grafana

## 📋 Pré-requisitos

- Docker e Docker Compose instalados
- Git instalado
- Postman (para testes de API)

## 🔧 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/todo-app.git
cd todo-app
```

2. Inicie os containers:
```bash
docker-compose up -d
```

3. Acesse as aplicações:
- Frontend: http://localhost:8080
- Backend API: http://localhost:3000
- Zabbix: http://localhost:8081 (usuário: Admin, senha: zabbix)
- Grafana: http://localhost:3001 (usuário: admin, senha: admin)

## 📡 Endpoints da API

- `GET /api/tasks` - Lista todas as tarefas
- `GET /api/tasks/:id` - Busca tarefa por ID
- `POST /api/tasks` - Cria nova tarefa
- `PUT /api/tasks/:id` - Atualiza tarefa
- `DELETE /api/tasks/:id` - Deleta tarefa
- `GET /health` - Health check

## 🧪 Testando com Postman

Importe a collection disponível em `postman/todo-api.json`
```

### 6.2 Criar `.gitignore`
```
node_modules/
.env
*.log
.DS_Store