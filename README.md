 Pré-requisitos

- Docker e Docker Compose instalados
- Git instalado
- Postman (para testes de API)

 Como Executar

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
Frontend: http://18.220.2.122:8080/
Backend (dependendo da porta real): http://18.220.2.122/
Zabbix: http://18.220.2.122:8081/
Grafana: http://18.220.2.122:3001/

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

