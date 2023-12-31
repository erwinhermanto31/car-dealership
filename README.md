# car-dealership

This is a simple car dealership application where users can register, record cars, and query cars with filtering and sorting.

## Instructions to Run the Code

1. **Clone the Repository:**

````bash
git clone https://github.com/erwinhermanto31/car-dealership
cd car-dealership

2. **Install Docker:**
https://docs.docker.com/engine/install/

3. **Setup project:**
```make start
`http://localhost:3000` to access API

4. **Generate swagger docs:**
```make validate-swagger
http://localhost:3000/api-docs to access API doc

5. **Running Unit:**
```make test

## Main Technical Decisions

## Express.js:

- Chose Express.js as the web framework for its simplicity and flexibility.

## PostgreSQL and Sequelize:

- Used PostgreSQL as the relational database.
- Employed Sequelize as the ORM for database interactions.

## Separation of Concerns:

- Adopted a modular structure with services and controllers to promote code organization and maintainability.

## Swagger Documentation:

- Integrated Swagger for API documentation.
- Access Swagger UI at [http://localhost:3000/api-docs](http://localhost:3000/api-docs) after running the application.

## Relevant Comments about the Project

## Business Rules:

- Implemented business rules for user registration, recording cars, and querying cars with filtering and sorting.

## Testing:

- Wrote unit tests for services using Jest to ensure code reliability.

## Swagger Documentation:

- Documented API endpoints using Swagger to facilitate understanding and usage.

## Docker Compose:

- Included a Docker Compose file for easy setup of the PostgreSQL database.

## Separation of Services:

- Separated user and car services to adhere to the principle of separation of concerns.

Feel free to explore the codebase and make any necessary adjustments based on your specific needs.
````
