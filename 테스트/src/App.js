import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './features/auth/Login';
import Pledge from './features/auth/Pledge';
import Signup from './features/auth/signup/Signup';
import Main from './features/main/Main';
import UpdateProfile from './features/profile/UpdateProfile';
import Mode from './features/mode/Mode';
import Waiting from './features/meeting/Waiting';
import Meeting from './features/meeting/Meeting';
import Countdown from './features/meeting/Countdown';
import Vote from './features/meeting/Vote';
import Result from './features/result/Result';

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/pledge" element={<Pledge />}/>
      <Route path="/signup" element={<Signup />}/>
      
      {/* main이랑 profile에 파라미터가 필요할까? */}
      <Route path="/main" element={<Main />}/>
      <Route path="/profile" element={<UpdateProfile />}/>

      <Route path="/mode" element={<Mode />}/>
      <Route path="/waiting" element={<Waiting />}/>
      <Route path="/meeting" element={<Meeting />}/>
      <Route path="/countdown" element={<Countdown />}/>
      <Route path="/vote" element={<Vote />}/>
      <Route path="/result" element={<Result />}/>
    
    </Routes>
  );
};

export default App;