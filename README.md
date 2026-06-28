# Student Management API - NestJS Learning Journey

A professional and beginner-friendly NestJS learning project built from scratch. This repository captures my learning journey so far and includes practical examples of modules, controllers, services, dependency injection, CRUD APIs, DTO validation, custom and built-in pipes, and middleware.

## Project Overview

This project is the first phase of learning NestJS.

So far, the codebase contains:

- A user-focused application controller and service layer for middleware-driven examples
- A `products` feature with in-memory CRUD operations
- An `auth` feature controller showing DTO validation and pipe usage
- A `user` flow that demonstrates middleware, request logging, user creation, and in-memory user storage
- Both built-in and custom pipe experiments for request transformation and validation
- Several middleware examples, including active and experimental ones

## Features Implemented

- NestJS project setup using Nest CLI
- Application bootstrap with `NestFactory`
- Module-based architecture
- Controllers and Services
- Providers and Dependency Injection
- Routing with decorators
- CRUD-style product endpoints (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`)
- Route parameters with `@Param()`
- Query parameters with `@Query()`
- Request body handling with `@Body()`
- Raw request access with `@Req()`
- Exception handling with `NotFoundException`
- Basic in-memory data storage for products
- Basic in-memory data storage for users
- DTO definition with `class-validator` decorators
- Built-in pipes:
  - `ValidationPipe`
  - `ParseArrayPipe`
- Custom pipe implementation (`phoneAuth`)
- Middleware implementation and registration on the `user` route
- Password hashing with `bcrypt` inside middleware

## Folder Structure

```text
student-management/
├── .gitignore
├── eslint.config.mjs
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.dto.ts
│   │   └── customPipe/
│   │       └── phoneAuth.ts
│   ├── middlewares/
│   │   ├── content_type/
│   │   │   └── content_type.middleware.ts
│   │   ├── login.middleware.ts
│   │   ├── token.middleware.ts
│   │   └── user-logging/
│   │       └── user-logging.middleware.ts
│   ├── services/
│   │   └── user/
│   │       └── user.service.ts
│   └── products/
│       ├── products.controller.ts
│       ├── products.model.ts
│       ├── products.module.ts
│       └── products.service.ts
│   └── userDTO/
│       └── user.dto.ts
└── test/
    ├── app.e2e-spec.ts
    └── jest-e2e.json
```

### Important Files Explained

- `src/main.ts`: Application entry point; creates and starts the NestJS server.
- `src/app.module.ts`: Root module; wires `AppController`, `AuthController`, and imports `ProductsModule`.
- `src/app.controller.ts`: Learning routes for users, request handling, and the remaining controller examples.
- `src/app.service.ts`: Basic service returning the hello message.
- `src/products/products.module.ts`: Groups product controller/service as a feature module.
- `src/products/products.controller.ts`: Product API routes.
- `src/products/products.service.ts`: Product business logic and in-memory storage.
- `src/products/products.model.ts`: Product model class.
- `src/auth/auth.controller.ts`: Auth registration endpoints with pipes.
- `src/auth/auth.dto.ts`: DTO with validation rules for auth input.
- `src/auth/customPipe/phoneAuth.ts`: Custom pipe experiment for phone/param processing.
- `src/middlewares/user-logging/user-logging.middleware.ts`: Middleware that normalizes and stores users.
- `src/middlewares/login.middleware.ts`: Example middleware that logs the current date.
- `src/middlewares/token.middleware.ts`: Example middleware that validates an authorization token.
- `src/middlewares/content_type/content_type.middleware.ts`: Example middleware that checks request content type.
- `src/services/user/user.service.ts`: In-memory user store used by middleware and controller.
- `src/userDTO/user.dto.ts`: DTO for user data stored by middleware.
- `src/app.controller.spec.ts`: Unit test example.
- `test/app.e2e-spec.ts`: End-to-end test example.

## How NestJS Works

```text
Client
↓
Controller
↓
Service
↓
Response
```

### Simple Request Flow

- The client sends an HTTP request.
- Middleware can run before the controller and can inspect or modify the request.
- A controller method receives the request.
- The controller calls a service (if business logic is needed).
- The service processes data and returns a result.
- The controller sends the response back to the client.

## API Endpoints

### User Routes

| HTTP Method | Endpoint | Purpose | Example Request Body |
|---|---|---|---|
| POST | `/user` | Trigger the user creation flow protected by middleware | `{"name":"John","password":"secret123"}` |
| GET | `/user` | Return the in-memory users list | Not applicable |

### Products Routes

| HTTP Method | Endpoint | Purpose | Example Request Body |
|---|---|---|---|
| GET | `/products` | Fetch all products | Not applicable |
| GET | `/products/:id` | Fetch a single product by ID | Not applicable |
| POST | `/products` | Add a new product | `{"title":"Phone","description":"Smartphone","price":500}` |
| PUT | `/products/:id` | Replace an existing product | `{"title":"Updated Phone","description":"Updated description","price":600}` |
| PATCH | `/products/:id` | Partially update an existing product | `{"price":650}` |
| DELETE | `/products/:id` | Delete product by ID | Not applicable |

### Auth Routes

| HTTP Method | Endpoint | Purpose | Example Request Body |
|---|---|---|---|
| GET | `/auth/register/:id` | Demonstrate custom pipe with route param input | Not applicable |
| POST | `/auth/register` | Validate request body using DTO + `ValidationPipe` and custom pipe | `{"email":"demo@example.com","password":"abc123","phone":"9876543210"}` |

## How to Run the Project

### 1) Clone Repository

```bash
git clone <repository-url>
cd student-management
```

### 2) Install Dependencies

```bash
npm install
```

### 3) Start Development Server

```bash
npm run start:dev
```

### 4) Build for Production

```bash
npm run build
```

### 5) Run Production Build

```bash
npm run start:prod
```

### 6) Watch Mode

```bash
npm run start:dev
```

## Installation Commands

```bash
npm install
npm run start:dev
```

## Technologies Used

- NestJS (`@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`)
- Node.js
- TypeScript
- Express (through Nest platform adapter)
- RxJS
- bcrypt
- `class-validator`
- `class-transformer`
- Jest
- Supertest
- ESLint
- Prettier

## Important NestJS Concepts Learned

### Modules

Modules organize related code. `AppModule` is the root module and `ProductsModule` is a feature module.

### Controllers

Controllers define routes and receive HTTP requests.

### Services

Services keep business logic separate from controllers.

### Providers

Providers are classes managed by NestJS dependency injection (for example, services).

### Dependency Injection

NestJS injects service instances into controllers via constructor injection.

### Decorators

Decorators like `@Controller()`, `@Get()`, `@Post()`, `@Body()`, and `@Param()` define API behavior declaratively.

### Routing

Routes map HTTP methods and URLs to controller methods.

### DTOs

DTOs are implemented. `authDto` validates `email`, `password`, and `phone` input for registration.

### Pipes

Pipes are implemented in both forms:

- Built-in: `ValidationPipe` and `ParseArrayPipe`
- Custom: `PhoneAuthPipe` in the auth feature

### Middleware

Middleware is implemented for the `user` route. `UserLoggingMiddleware` logs requests, normalizes the user name, hashes the password, and stores the user in memory.

### Exception Handling

`NotFoundException` is used in products service when a product is not found.

## Learning Notes

A beginner can learn the following from this repository:

- How a NestJS app is structured and bootstrapped
- Why modules/controllers/services are separated
- How dependency injection improves maintainability
- How to build CRUD routes quickly without a database
- How to validate incoming request payloads with DTO + `ValidationPipe`
- How to create and apply custom pipes
- How built-in parse pipes can transform incoming request values
- How middleware can intercept requests before they reach a controller
- How middleware can modify request data and perform pre-processing
- How bcrypt can be used for password hashing in a learning project

## Current Progress

The repository currently shows progress in these areas:

- CRUD feature module: `products`
- Validation and custom pipes: `auth`
- Middleware and request preprocessing: `user` flow
- Request parsing examples and controller/service structure

## Future Scope

Likely next topics for this project:

- Global validation configuration and transformation options
- Better custom pipe patterns and reusable validation pipes
- Guards
- Interceptors
- Database integration
- Authentication with JWT (production-style)
- Authorization strategies
- TypeORM or Prisma
- MongoDB

## Project Tree

```text
student-management/
├── .gitignore
├── eslint.config.mjs
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.dto.ts
│   │   └── customPipe/
│   │       └── phoneAuth.ts
│   ├── middlewares/
│   │   ├── content_type/
│   │   │   └── content_type.middleware.ts
│   │   ├── login.middleware.ts
│   │   ├── token.middleware.ts
│   │   └── user-logging/
│   │       └── user-logging.middleware.ts
│   ├── products/
│   │   ├── products.controller.ts
│   │   ├── products.model.ts
│   │   ├── products.module.ts
│   │   └── products.service.ts
│   ├── services/
│   │   └── user/
│   │       └── user.service.ts
│   └── userDTO/
│       └── user.dto.ts
└── test/
    ├── app.e2e-spec.ts
    └── jest-e2e.json
```

## Tests

Run available tests with:

```bash
npm run test
npm run test:e2e
npm run test:cov
```

## Summary

This repository now covers NestJS fundamentals plus an introduction to validation and pipes. It is a strong beginner foundation before moving toward production-ready patterns like guards, interceptors, database persistence, and JWT-based auth.
