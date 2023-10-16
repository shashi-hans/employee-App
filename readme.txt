Prerequisites and required applications
    1.Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. You should have basic understanding of nodejs.
    2.ExpressJS is one of the most trending web frameworks for node.js. It is built on top of node.js http module, and adds support for routing, middleware, view system etc. It is very simple and minimal, unlike other frameworks.
    3.MySQL is an open-source relational database management system. Its name is a combination of “My”, the name of co-founder Michael Widenius’s daughter, and “SQL”, the abbreviation for Structured Query Language.
    4.Postman is an API(application programming interface) development tool which helps to build, test and modify APIs.It has the ability to make various types of HTTP requests(GET, POST, PUT, PATCH etc.).

node v18 used 
    nvm use 18

Create packagae json file
    npm init

Command to Install dependencies
    npm install express body-parser mysql 
    npm install --save-dev nodemon

API End Points
    1.GET /api/v1/employees: will give all employees stored in database
    2.GET /api/v1/employees/<employee_id>: will give a specific employee with employee_id.
    3.POST /api/v1/employees : create a employee
    4.PATCH /api/v1/employees/<employee_id>: update a employee partially
    5.DELETE /api/v1/employees/<employee_id>: delete a employee
    6.PUT /api/v1/employees/<employee_id>: update a employee completely
