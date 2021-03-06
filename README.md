# Basic micro-service project based on NEST framework

The project architecture is based on node.js and TypeScript languages and uses the NestJS framework. This project includes a Graphq Server, a REST API Gateway, and four back-end microservices.



## Architecture Overview

The Graphql server receives network requests from the outside and gets the data by calling the API gateway. The backend microservices provide their respective data to the API gateway, which is eventually aggregated to the Graphql server and returned to the client.

All the services included in this project can be deployed and run independently, but for simplicity of testing, a single configuration file is used and deployed to the same network environment. You can modify the configuration file and deployment scheme if necessary.



## Architecture diagram

![image-20211126110955498](/Users/fire/Library/Application Support/typora-user-images/image-20211126110955498.png)



## System Introduction

The system is similar to a recruitment platform, the basic elements of the company, users, positions. Their relationship is as follows:
1. A user belongs to only one company;
2. A user can have two roles (user and admin).
3. Admin can create, delete and modify positions for the company;
4. Both user and admin can view positions in the company;

In addition, all operations except login operations require user login. Therefore, it has a system with permission module, while other micro-service modules, such as user module, company module and position module, all need to connect to the database to persist data. MongoDB is selected here.
Because this service focuses on the design of the system, mainly sent the authority module and position module. You need to use preset company and user data for login and query.
Database backup path: /dump



## REST API Desgin

### Auth

| Method | API    | Payload                                             | Return                                                       | Authorization | GraphQL                                                      |
| ------ | ------ | --------------------------------------------------- | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| POST   | /login | {<br />username:string,<br />password:string<br />} | { <br />_id:string<br/>    name:string<br/>    username:string<br/>    role:string<br/>    companyId:string<br/>    access_token:string  <br /> } | false         | mutation {<br/>login(username:"mark",password:"mark"){<br/>    _id<br/>    name<br/>    username<br/>    role<br/>    companyId<br/>    access_token<br/>  }<br/>} |



### Company

| Method |              API               | Payload | Return                                                       | Authorization | GraphQL                                                      |
| :----: | :----------------------------: | ------- | ------------------------------------------------------------ | :-----------: | ------------------------------------------------------------ |
|  GET   | /company?companyId={companyId} |         | { <br />_id:string<br/>    name:string<br/>  address:string<br/> } |     true      | query{<br/>  viewCompanyById(companyId:"619dfc0b53eb55078f6ccceb"){<br/>    _id<br/>    name<br/>    address<br/>  }<br/>} |



### Vacancy

| Method | API                              | Payload                                                      | Return                                                       | Authorization | GraphQL                                                      |
| :----: | -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | :-----------: | ------------------------------------------------------------ |
|  GET   | /vacancy?vacancyId={vacancyId}   |                                                              | { <br />_id:string<br/>    title:string<br/>  description:string<br/>expiredAt:string<br/> } |     true      | query{<br/>  viewVacancyById(vacancyId:"619fc8ecef51ab7478ff719b"){<br/>    _id<br/>    title<br/>    description<br/>    expiredAt<br/>  }<br/>} |
|  GET   | /vacancies?companyId={companyId} |                                                              | [{<br/>    _id<br/>    title<br/>    description<br/>    expiredAt<br/>  }] |     true      | viewVacancies(companyId:"619dfc0b53eb55078f6ccceb"){<br/>    _id<br/>    title<br/>    description<br/>    expiredAt<br/>    companyId<br/>  }<br/>} |
|  POST  | /vacancy                         | {<br />title:string,<br />description:string<br /><br />expiredAt:string<br /><br />companyId:string<br />} | { <br />_id:string<br/>    title:string<br/>  description:string<br/>expiredAt:string<br/>companyId:string<br/> } | true & admin  | mutation{<br/>  createVacancy(vacancy:{<br/>    title:"woker"<br/>    description:"???50 a day"<br/>    expiredAt:"2021-12-20"<br/>    companyId:"619dfc0b53eb55078f6ccceb"<br/>  }){<br/>    _id<br/>    title<br/>    description<br/>    expiredAt<br/>    companyId<br/>  }<br/>} |
|  PUT   | /vacancy                         | {<br />title:string,<br />description:string<br /><br />expiredAt:string<br /><br />_id:string<br />} | {<br />statusCode:number<br />message:string<br />}          | true & admin  | mutation{<br/>  updateVacancy(vacancy:{<br/>    _id:"619fc8ecef51ab7478ff719b"<br/>    description:"??????8000"<br/>    title:"??????"<br/>    expiredAt:"2020-01-20"<br/>  }) {<br/>    message<br/>    statusCode<br/>  }<br/>} |
| DELETE | /vacancy?vacancyId={vacancyId}   |                                                              | {<br />statusCode:number<br />message:string<br />}          | true & admin  | mutation{<br/>  deleteVacancy(vacancyId:"619e11b25519f504b4bca9df"){<br/>    statusCode<br/>    message<br/>  }<br/>} |



## Operation method

### Environmental requirements:

1. Node.js	???????????? v16.13.0

2. Npm 	???????????? v8.1.0

3. TypeScript	????????????v 4.4.4

4. MongoDb     ???????????? v4.0.27



Operation method:

1. Download Git source (https://github.com/cocfire/nest-ph-test.git)

2. Run bash in the root directory of the project
3. Restore the MongoDB database: $mongorestore
Install dependency: $NPM install
$NPM run start (or NPM run start:prod)

Note: Ensure that mongodb is running



## Config description

### config file

The service access path and port configuration are recorded in the. Env file and can be modified as required



## the default values

Graphql - Server: http://localhost:3000/graphql

Api - Gateway: http://localhost:4000



## dedication

Time reason system is relatively simple, will continue to improve, please look forward to!

