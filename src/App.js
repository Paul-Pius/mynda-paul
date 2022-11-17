import "./App.css";

import Onboarding1 from "./pages/splash pages/Onboarding1";
import Onboarding2 from "./pages/splash pages/Onboarding2";
import Onboarding3 from "./pages/splash pages/Onboarding3";
import Roles from "./pages/splash pages/Roles";
import Signup from "./pages/employer/signup/Signup";
import Login from "./pages/employer/login/Login";
import HomePage from "./pages/employer/home/Home";
import Message from "./pages/employer/message_and_notification/Message";
import Notification from "./pages/employer/message_and_notification/Notification";
import ServiceCategory from "./pages/employer/service_category/ServiceCategory";
import Agency from "./pages/employer/agencies/Agency";
import MyndaForm from "./pages/mynda/createmynda/MyndaPage";
import AboutYourself from "./pages/mynda/aboutyou/AboutYourself";
import LabHomePage from "./pages/laboratory/home/LabHomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LabHomePage from "./pages/laboratory/home/LabHomePage";
import AddEducation from "./pages/mynda/addEdu/AddEdu";
import EditWorkX from "./pages/mynda/editWorkEx/EditWorkX";
import WorkExperience from "./pages/mynda/workExperience/WorkExperience";
import VerifyOTP from "./pages/mynda/verify/VerifyNumber";
import UploadProof from "./pages/mynda/uploadProof/UploadProof";
import TermsCondition from "./pages/mynda/terms/Terms";
import ResetPassword from "./pages/mynda/resetPassword/ResetPassword";
import NewPassword from "./pages/mynda/newPassword/NewPassword";
import MyndaLogin from "./pages/mynda/myndaLogin/LoginPage";
import Congrat from "./pages/mynda/congrats/Congrat";
import AddCard from "./pages/agent/addCard/AddCard";
import AddShareHolder from "./pages/agent/addshareholder/AddShareHolder";
import AgentForm from "./pages/agent/createAgent/AgentPage";
import BookInspection from "./pages/agent/bookInspection/BookInspection";
import CompanyInfo from "./pages/agent/companyInfo/CompanyInfo";
import EditShareHolder from "./pages/agent/editshareholder/EditShareHolder";
import JobApplication from "./pages/agent/jobApp/JobApplication";
import TrainingSchool from "./pages/agent/trainingSchool/TrainingSchool";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding_1" element={<Onboarding1 />}></Route>
          <Route path="/onboarding_2" element={<Onboarding2 />}></Route>
          <Route path="/onboarding_3" element={<Onboarding3 />}></Route>
          <Route path="/roles" element={<Roles />}></Route>
          <Route path="/employer/signup" element={<Signup />}></Route>
          <Route path="/employer/login" element={<Login />}></Route>
          <Route path="/employer/home" element={<HomePage />}></Route>
          <Route path="/employer/message" element={<Message />}></Route>
          <Route
            path="/employer/notification"
            element={<Notification />}
          ></Route>
          <Route path="/employer/agencies" element={<Agency />}></Route>
          <Route
            path="/employer/service_category"
            element={<ServiceCategory />}
          ></Route>
          <Route path='/mynda/createaccount' element={<MyndaForm />}></Route>
          <Route path='/mynda/aboutyourself' element={<AboutYourself />}></Route>
          <Route path='/mynda/addeducation' element={<AddEducation />}></Route>
          <Route path= '/mynda/editworkexperience' element={<EditWorkX />}></Route>
          <Route path= '/mynda/workexperience' element={<WorkExperience />}></Route>
          <Route path= '/mynda/verifyotp' element={<VerifyOTP />}></Route>
          <Route path= '/mynda/uploadproof' element={<UploadProof />}></Route>
          <Route path= '/mynda/terms' element={<TermsCondition />}></Route>
          <Route path= '/mynda/resetpassword' element={<ResetPassword />}></Route>
          <Route path= '/mynda/newpassword' element={<NewPassword />}></Route>
          <Route path= '/mynda/login' element={<MyndaLogin />}></Route>
          <Route path= '/mynda/congrat' element={<Congrat />}></Route>
          <Route path= '/agent/addcard' element={<AddCard />}></Route>
          <Route path= '/agent/addshareholder' element={<AddShareHolder />}></Route>
          <Route path= '/agent/createaccount' element={<AgentForm />}></Route>
          <Route path= '/agent/bookinspection' element={<BookInspection />}></Route>
          <Route path= '/agent/companyinfo' element={<CompanyInfo />}></Route>
          <Route path= '/agent/editshareholder' element={<EditShareHolder />}></Route>
          <Route path= '/agent/jobapplication' element={<JobApplication />}></Route>
          <Route path= '/agent/trainingschool' element={<TrainingSchool />}></Route>
          <Route path="/laboratory/home" element={<LabHomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
