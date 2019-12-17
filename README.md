# API Documentation

**You can view the deployed (Heroku) backend here:**

**[Production Deployment](https://)** <br/>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/)

## Getting started

To get this project up and running locally:

1. Clone this repo
2. Make sure you have docker install
3. Run `docker-compose up -d to start all services`.

4. Create a `.env` file in the root of the project with the following environment variables:

```
MONGO_DB_URI=mongodb://db/mongo-db-services
JWT_SECRET=<generated string>
```

## Backend Frameworks

**My rationale in choosing the frameworks i used:**

### Express

- I used Express as it is a familiar framework.
- It is modular and has great authentication, cookies, and sessions libraries.

### NodeJS

- Excellent third-party library support through NPM
- It has a large and robust open-source community and great support on Stack Overflow and other platforms for trouble-shooting.

### MongoDB

- Greater freedom in schema design during prototyping and ideation. Also a greater familiarity with JSON-like object
- Greater scalability with sharding and load-balancing with future product cycles and user growth.
- First-party, pre-installed servers available for free through MongoDB.

## API Spec

### Authentication

## Login

`POST /api/v1/auth/login`
Example request body:

```source-json
{
    "username": "",
    "password": "",
}
```

Example response body:

```source-json
{
    "success": true,
    "message": "Log in successful",
    "body": {
        "fullName": "",
        "email": "",
        "username": "",
        "id": "",
        "token": ""
    }
}
```

### Registration:

`POST /api/v1/auth/register`

Endpoint request body

```source-json
{
    "firstName": "",
    "lastName": "",
    "password": "",
    "email": "",
    "username": ""
     "token": ""
}
```

### User

`POST /api/v1/users`

Example request body:

```source-json
{
   "name": ""
}
```

Example response body:

```source-json
{
   success": true,
    "message": "",
    user: [{}]
}
```

### User

`GET /api/v1/users`

Example response body:

```source-json
{
   success": true,
    "message": "",
    users: [{}]
}
```

### Update user

`PATCH /api/v1/users/:id`

Endpoint request body

```source-json
{
    "name": "",
}
```

Example response body:

```source-json
{
   success": true,
    "message": "",
    users: [{}]
}
```

### Delete user

`DELETE /api/v1/users/:id`

Example response body:

```source-json
{
   success": true,
    "message": "User deleted successfully",
}
```

=======================

### Task

`POST /api/v1/users/:userId/tasks/:taskId`

Example request body:

```source-json
{
   "description": "",
   "state": "",
   "userId": ""
}
```

Example response body:

```source-json
{
   success": true,
    "message": "New task created successfully",
    tasks: [{}]
}
```

### Tasks

`GET /api/v1/users/:userId/tasks/:taskId`

Example response body:

```source-json
{
   success": true,
    "message": "",
    tasks: [{}]
}
```

### Update task

`PATCH /api/v1/users/:userId/tasks/:taskId`

Endpoint request body

```source-json
{
    any valid body schema
}
```

Example response body:

```source-json
{
   success": true,
    "message": "",
    tasks: [{}]
}
```

### Delete task

`DELETE /api/v1/users/:userId/tasks/:taskId`

Example response body:

```source-json
{
   success": true,
    "message": "Task deleted successfully",
}
```
