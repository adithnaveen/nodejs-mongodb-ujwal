import {addNewEmployee, getAllEmployees, getEmployeeById} from '../controllers/employee-controller';


const routes =(app) => {
    app.route("/employee")
        .post((req, resp, next) => {
            // if you want to have loggers you can have 
            // or some security checks
            console.log("hey i'm middleware for post");
            next();
        }, addNewEmployee)
        .get(getAllEmployees);

    app.route("/employee/:employeeID")
        .get(getEmployeeById);
}

export default routes;
