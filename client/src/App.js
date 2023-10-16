import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import "./App.css";

import ShowEmployeeList from "./components/employee-list";
import AddEmployee from "./components/add-employee";
import UpdateEmployeeInfo from "./components/update-employee-info";
import ShowEmployeeDetails from "./components/employee-details";

const App = ()=> {
    return (
      <div>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<ShowEmployeeList />} />
              <Route path="/create-employee" element={<AddEmployee />} />
              <Route path="/edit-employee/:id" element={<UpdateEmployeeInfo />} />
              <Route path="/show-employee/:id" element={<ShowEmployeeDetails />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }

export default App;
