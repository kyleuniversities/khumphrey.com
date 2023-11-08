# Quizzical

![](../resources/project/quizzical/image.png)

The Quizzical Application is a Springboot web application designed for users to be able to quiz
themselves by making their own quizzes. The app was developed using Typescript React for
the frontend and Springboot for the backend. I have undertaken this project to help myself become
more experienced with the Springboot framework.

&nbsp;

&nbsp;

# Technologies Utilized

Throughout the development of this web application, I incorporated various frontend/backend technologies
including:

- **Typescript React**: Invoked the use of React components.
- **Semantic UI**: Invoked Semantic UI as a framework on top of React for components.
- **Spring Boot**: Invoked an Spring Boot Backend API.
- **MySQL Connector Java**: Invoked MySQL Connector Java to connect to RDS Database
- **AWS RDS MySQL**: Invoked an AWS RDS MySQL database for data operations.
- **AWS EC2**: Invoked an AWS EC2 instance to act as an access point to the RDS database.

&nbsp;

&nbsp;

# Practices Utilized

Throughout the development of this web application, I incorporated various coding practices including:

- **Spring Boot Object Module Structure**: Set up module sections for Controller, Model, Service, and Repository classes.
- **EC2 Account Setup**: Set up root user and non-ubuntu user accounts. SSH as non-ubuntu user with PEM key.
- **Sudo Logging**: Use sudo to log all EC2 commands when root was not necessary.
- **RDS No-Public Access**: Set up a private RDS. Only connected to RDS by SSH tunneling through EC2.

&nbsp;

&nbsp;

## Progress Completed

This project is still in its early stages. I have designed the style stubs for the frontend interface
and have set up CRUD API functionality for the Question data entity. I have set up connections
to the MySQL database hosted on AWS RDS, via SSH tunneling through an EC2 instance. Currently, I am
working on implementing login with Spring Security using Spring Session.

&nbsp;

&nbsp;

## Github Repositories

[https://github.com/kyleuniversities/quizzical-frontend-app](https://github.com/kyleuniversities/quizzical-frontend-app)

[https://github.com/kyleuniversities/quizzical-api-app](https://github.com/kyleuniversities/quizzical-api-app)
