# NestJS Learning Journey: Student Management Basics

A beginner-friendly NestJS learning repository built from scratch while exploring the framework step by step. This project documents my first phase of learning NestJS and includes simple examples of controllers, services, modules, dependency injection, and CRUD-style API handling.

## Project Overview

This repository represents the first phase of my NestJS learning journey.

So far, the app includes a root controller/service example and a separate `products` feature module that demonstrates how NestJS applications are structured. The products feature uses in-memory storage and exposes basic CRUD-style endpoints so the project can be used as a hands-on learning reference.

## Features Implemented

- Project setup using Nest CLI
- Bootstrap with `NestFactory`
- Modules
- Controllers
- Services
- Providers
- Dependency Injection
- Routing
- GET, POST, PUT, PATCH, and DELETE endpoints
- Route parameters using `@Param()`
- Query parameters using `@Query()`
- Request body handling using `@Body()`
- Request object access using `@Req()`
- Basic in-memory data storage for products
- CRUD-style product operations
- Exception handling with `NotFoundException`
- Unit test and e2e test scaffolding from the Nest starter template

## Folder Structure

```text
student-management/
├── eslint.config.mjs
├── nest-cli.json
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
│   └── products/
│       ├── products.controller.ts
│       ├── products.model.ts
│       ├── products.module.ts
│       └── products.service.ts
└── test/
    ├── app.e2e-spec.ts
    └── jest-e2e.json
```

### What the important files do

- `src/main.ts` starts the NestJS application.
- `src/app.module.ts` is the root module and imports the products feature module.
- `src/app.controller.ts` contains small root-route examples for hello response, query handling, and request inspection.
- `src/app.service.ts` returns the default `Hello World!` response.
- `src/products/products.module.ts` groups the products controller and service into one feature module.
- `src/products/products.controller.ts` defines the HTTP routes for product operations.
- `src/products/products.service.ts` contains the product business logic and in-memory storage.
- `src/products/products.model.ts` defines the product data shape used in the app.
- `src/app.controller.spec.ts` contains a unit test for the root controller.
- `test/app.e2e-spec.ts` contains a basic end-to-end test for the default route.

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

In simple terms:

- The client sends a request.
- The controller receives the request and decides which service method to call.
- The service performs the logic or data handling.
- The controller returns the final response to the client.

## API Endpoints

### Root Routes

| HTTP Method | Endpoint | Purpose | Example Request Body |
|---|---|---|---|
| GET | `/` | Returns the default `Hello World!` response | Not applicable |
| GET | `/` | Demonstrates reading a query parameter with `name` | Not applicable |
| GET | `/:id` | Demonstrates route params, query params, and request headers | Not applicable |

### Products Routes

| HTTP Method | Endpoint | Purpose | Example Request Body |
|---|---|---|---|
| GET | `/products` | Get all products from in-memory storage | Not applicable |
| GET | `/products/:id` | Get a single product by ID | Not applicable |
| POST | `/products` | Create a new product | `{"title":"Phone","description":"Smartphone","price":500}` |
| PUT | `/products/:id` | Replace an existing product by ID | `{"title":"Updated Phone","description":"Updated description","price":600}` |
| PATCH | `/products/:id` | Partially update an existing product by ID | `{"price":650}` |
| DELETE | `/products/:id` | Delete a product by ID | Not applicable |

### Notes

- Product data is stored only in memory.
- Restarting the server resets the stored products.
- If a product is not found, the service throws `NotFoundException`.

## How to Run the Project

### Clone the repository

```bash
git clone <repository-url>
cd student-management
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run start:dev
```

### Build for production

```bash
npm run build
```

### Run production mode

```bash
npm run start:prod
```

### Run in watch mode

```bash
npm run start:dev
```

## Installation Commands

```bash
npm install
npm run start:dev
```

## Technologies Used

This repository currently uses:

- NestJS
- Node.js
- TypeScript
- Express via `@nestjs/platform-express`
- RxJS
- Jest
- Supertest
- ESLint
- Prettier
- ts-jest
- ts-node

## Important NestJS Concepts Learned

### Modules

Modules organize the application into feature areas. `AppModule` is the root module, and `ProductsModule` groups the product-related code.

### Controllers

Controllers handle incoming HTTP requests and decide which service method should run.

### Services

Services contain the actual logic. In this project, `ProductsService` manages the in-memory product list.

### Providers

Providers are injectable classes that NestJS can create and share. Services are one of the most common provider types.

### Dependency Injection

NestJS injects the needed service into a controller through the constructor, so the controller does not create the service manually.

### Decorators

Decorators such as `@Controller()`, `@Get()`, `@Post()`, `@Put()`, `@Patch()`, `@Delete()`, `@Param()`, `@Query()`, `@Body()`, and `@Req()` connect code to HTTP behavior.

### Routing

Routing maps HTTP methods and URL paths to controller methods.

### DTOs

DTOs are not implemented yet in this repository. The current code uses the `Product` model directly.

### Exception Handling

`NotFoundException` is thrown when a product ID does not exist.

## Learning Notes

This repository teaches the basics of:

- NestJS application structure
- Separation of controller and service responsibilities
- Dependency injection in a real project
- REST-style routing
- Reading request data from params, query strings, and request bodies
- Simple in-memory CRUD logic
- Handling missing records with proper exceptions

It is a good starting point before moving on to validation, DTOs, authentication, and database integration.

## Future Scope

The next topics that would fit naturally into this project are:

- Validation Pipes
- DTO Validation
- Middleware
- Guards
- Interceptors
- Database Integration
- Authentication
- JWT
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
│   └── products/
│       ├── products.controller.ts
│       ├── products.model.ts
│       ├── products.module.ts
│       └── products.service.ts
└── test/
    ├── app.e2e-spec.ts
    └── jest-e2e.json
```

## Tests

This project currently includes:

- a unit test for the root controller
- a basic end-to-end test for the default route

Run them with:

```bash
npm run test
npm run test:e2e
npm run test:cov
```

## Summary

This repository is a beginner-friendly NestJS learning project focused on the framework fundamentals. It currently demonstrates how to structure a NestJS app, split logic into modules and services, and handle basic API requests with in-memory data.
