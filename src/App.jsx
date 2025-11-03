import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./component/login";
import Dashboard from "./component/dashboard";
import AddEmployee from "./component/addemproyee";
import EmployeeList from "./component/emproyelist";
import Navbar from "./component/navbar";
import SearchEmployee from "./component/empsearch";
import UpdateEmployee from "./component/empupdate";
import AttendanceForm from "./component/attendencemark";
import AttendanceList from "./component/attendencerecord";
import EmpRecord from "./component/recordbyemp";
import ApplyLeave from "./component/leaveapply";
import EmpLeaveRecord from "./component/empleave";
import LeaveList from "./component/leavelist";
import Applyjob from "./component/addjob";
import Joblist from "./component/joblisting";
import Jobapply from "./component/applyjob";
import Applicationlist from "./component/applicationlist";
import ProtecteXd from "./auth/varify";

function AppContent() {
  const location = useLocation();


const hideNavbar = location.pathname === "/login" || location.pathname === "/";


  return (
    <>
      {!hideNavbar && <Navbar />}
    
      <Routes>
         <Route path="https://hrmsfrontend-1.onrender.com/" element={<Login />} />   
        <Route path="https://hrmsfrontend-1.onrender.com/login" element={<Login />} />
        <Route path="https://hrmsfrontend-1.onrender.com/dashboard" element={<ProtecteXd><Dashboard /></ProtecteXd>    } />
        <Route path="https://hrmsfrontend-1.onrender.com/addemproyee" element={<ProtecteXd><AddEmployee /></ProtecteXd>} />
        <Route path="https://hrmsfrontend-1.onrender.com/emproyeelist" element={<ProtecteXd><EmployeeList /></ProtecteXd>} />
         <Route path="https://hrmsfrontend-1.onrender.com/searchemproyee" element={<ProtecteXd><SearchEmployee/></ProtecteXd> } />
         <Route path="https://hrmsfrontend-1.onrender.com/updateemproyee" element={<ProtecteXd><UpdateEmployee/></ProtecteXd> } />
         <Route path="https://hrmsfrontend-1.onrender.com/mark" element={<ProtecteXd><AttendanceForm/></ProtecteXd> } />
          <Route path="https://hrmsfrontend-1.onrender.com/record" element={<ProtecteXd><AttendanceList/></ProtecteXd> } />
          <Route path="https://hrmsfrontend-1.onrender.com/byemp" element={<ProtecteXd><EmpRecord/></ProtecteXd> } />
          <Route path="https://hrmsfrontend-1.onrender.com/applyleave" element={<ProtecteXd><ApplyLeave/></ProtecteXd> } />
          <Route path="https://hrmsfrontend-1.onrender.com/empleave" element={<ProtecteXd><EmpLeaveRecord/></ProtecteXd> } />
           <Route path="https://hrmsfrontend-1.onrender.com/leavelist" element={<ProtecteXd><LeaveList/></ProtecteXd> } />
           <Route path="https://hrmsfrontend-1.onrender.com/addjob" element={<ProtecteXd><Applyjob/></ProtecteXd>} />
            <Route path="https://hrmsfrontend-1.onrender.com/listjob" element={<ProtecteXd><Joblist/></ProtecteXd>} />
              <Route path="https://hrmsfrontend-1.onrender.com/jobapply" element={<ProtecteXd><Jobapply/></ProtecteXd>} />
         <Route path="https://hrmsfrontend-1.onrender.com/applicationlist" element={<ProtecteXd><Applicationlist/></ProtecteXd>} />
              



      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
