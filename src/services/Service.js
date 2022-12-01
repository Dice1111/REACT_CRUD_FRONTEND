import axios from "axios";

const EMPLOYEE_URL = "http://localhost:3006/users";

class Service{
    getEmployee(){
        return axios.get(EMPLOYEE_URL);
    }

    createEmployee(){
        return axios.post(EMPLOYEE_URL);
    }

    getEmployeeByID(employeeID){
        return axios.get(EMPLOYEE_URL + '/' + employeeID);
    }

    updateEmployee(employee, employeeID){
        return axios.put(EMPLOYEE_URL + '/' + employeeID,employee);
    }

    deleteEmployee(employeeID){
        return axios.delete(EMPLOYEE_URL + '/' + employeeID);
    }
}

export default new Service();