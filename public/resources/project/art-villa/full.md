# Art Villa

![](../resources/project/art-villa/image.png)

The Art Villa Application is a social media web application designed for artists to be able to
post their artwork online. It is meant to be a full-fledge web application involving the dependencies
required for an enterprise website. It is built using ReactJS and ExpressJS.

&nbsp;

&nbsp;

# Technologies Utilized

Throughout the development of this web application, I incorporated various frontend/backend technologies
including:

- **Javascript React**: Invoked the use of React components.
- **Semantic UI**: Invoked Semantic UI as a framework on top of React for components.
- **Express JS**: Invoked an Express Backend API.
- **Bcrypt**: Invoked Bcrypt to encrypt password data.
- **Knex**: Invoked Knex as an ORM between Express and MySQL.
- **AWS RDS MySQL**: Invoked an AWS RDS MySQL database for data operations.
- **AWS EC2**: Invoked an AWS EC2 instance to act as an access point to the RDS database.

&nbsp;

&nbsp;

# Practices Utilized

Throughout the development of this web application, I incorporated various coding practices including:

- **EC2 Account Setup**: Set up root user and non-ubuntu user accounts. SSH as non-ubuntu user with PEM key.
- **Sudo Logging**: Use sudo to log all EC2 commands when root was not necessary.
- **RDS No-Public Access**: Set up a private RDS. Only connected to RDS by SSH tunneling through EC2.

&nbsp;

&nbsp;

## Progress Completed

This project is still in its early stages. I have designed the style stubs for the frontend interface
and have set up API functionality for the Post data entity. I have set up connections
to the MySQL database hosted on AWS RDS, via SSH tunneling through an EC2 instance. Currently, I am working on
implementing login with sessions.

&nbsp;

&nbsp;

## Github Repositories

[https://github.com/kyleuniversities/art-villa](https://github.com/kyleuniversities/art-villa)
