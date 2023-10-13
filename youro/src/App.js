import './App.css';
import DoctorSignup from './views/Doctor-Signup';
import SignupforFamilyMember from './views/Signup-For-FamilyMember';
import Signupformyself from './views/Signup-For-Myself';
import Signupoptions from './views/Signupoptions';
import Patientaddress from './views/PatientAddress';
import Login from './views/login';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AdminSignup from './views/Admin-Signup';
import PrivacyPolicy from './views/PrivacyPolicies';
import Policy from './views/legal/policy';
import Telehealth from './views/legal/telehealth';
import Terms from './views/legal/termsConditions';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from './views/Home';
import PatientView from './views/Patient UI/PatientView';
import DoctorHomePage from './views/Doctor UI/Doctor-HomePage';
import AdminHomePage from './views/Admin UI/Admin-HomePage';
import AdminPatientList from './views/Admin UI/Admin-PatientList';
import DoctorProfile from './views/Doctor UI/DoctorProfile';
import DoctorAppointments from './views/Doctor UI/Doctor-appointment';
import ViewProfile from './views/Doctor UI/View-Profile';
import DoctorChat from './views/Doctor UI/Doctor-Chat';


export const uTypes = {
  user : 'PATIENT',
  doctor : 'PROVIDER',
  admin : 'ADMIN'
};
export const subscriptionStatus = {
  active : 'ACTIVE',
  inActive : 'INACTIVE'
}
function App() {
  return ( 
    <>
     <Router>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signupoptions/>}></Route>
        <Route path='/signupmyself' element={<Signupformyself/>}></Route>
        <Route path='/signupforfamilymember' element={<SignupforFamilyMember/>}></Route>
        <Route path='/signupprovider' element={<DoctorSignup/>}></Route>
        <Route path='/adminsignup' element={<AdminSignup/>}></Route>
        <Route path='/policy' element={<Policy/>}></Route>
        <Route path='/telehealth-consent' element={<Telehealth/>}></Route>
        <Route path='/terms-conditions' element={<Terms/>}></Route>
        <Route path='/patient-ui' element={<PatientView/>}></Route>
        <Route path='/doctor-ui' element={<DoctorHomePage/>}></Route>
        <Route path='/admin-doctors' element={<AdminHomePage/>}></Route>
        <Route path='/admin-patients' element={<AdminPatientList/>}></Route>
        <Route path='/doctor-profile' element={<DoctorProfile/>}></Route>
        <Route path='/doctor-appointment' element={<DoctorAppointments/>}></Route>
        <Route path='/doctor-view-profile' element={<ViewProfile/>}></Route>
        <Route path='/doctor-chat' element={<DoctorChat/>}></Route>
     </Routes>
    </Router>
    
    </>
  );
}

export default App;
