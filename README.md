# Tasks API

REST API для управления задачами с использованием базы данных PostgreSQL и ORM Prisma по принципу разделения на репозитории / сервисы / контроллеры / роуты.

## Стек

- Node.js / TypeScript
- Express 5
- PostgreSQL
- Prisma (ORM)
- Docker

## Запуск

```bash
git clone <repo>
cd tasks-api
npm install
```

Запустить PostgreSQL:

```bash
docker compose up -d
```

Применить миграции и сгенерировать клиент:

```bash
npx prisma migrate dev
npx prisma generate
```

Запустить сервер:

```bash
npm run dev
```

Сервер запустится на `http://localhost:3000`

## Переменные окружения

Создай `.env` в корне:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/tasks"
```

## Эндпоинты

| Метод | Путь | Описание |
|-------|------|----------|
| GET | /tasks | Получить все задачи |
| GET | /tasks/:id | Получить задачу по id |
| POST | /tasks | Создать задачу |
| PATCH | /tasks/:id/toggle | Переключить статус done |
| DELETE | /tasks/:id | Удалить задачу |

### POST /tasks — тело запроса

```json
{
  "title": "Название задачи"
}
```

## Структура проекта

```
src/
  controllers/   — обработка req/res, вызов сервисов
  services/      — бизнес-логика
  repositories/  — запросы к БД через Prisma
  routes/        — регистрация эндпоинтов
  types/         — TypeScript интерфейсы
  errors/        — кастомные классы ошибок
  lib/           — инициализация Prisma клиента
  app.ts         — настройка Express
  server.ts      — запуск сервера
prisma/
  schema.prisma  — схема БД
```
