<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Nestjs Blog API

This is a simple API for creating blog posts including user authentication with JWT token. The API is documented with Swagger.

## Tech stack

- NestJS
- PostgreSQL
- Prisma
- Swagger
- Docker

## Usage

- Close the repo:

```bash
gh repo clone Kei-K23/nestjs-blog-api
```

- Navigate to the cloned directory:

```bash
cd nestjs-blog-api
```

- Install dependencies:

```bash
npm install
```

- Start the PostgreSQL database with Docker:

```bash
docker-compose up -d
```

- Apply database migrations:

```bash
npx prisma migrate dev
```

- Start the project locally:

```bash
npm run start:dev
```

**Make sure to change `.env` variables with your own ones.**
