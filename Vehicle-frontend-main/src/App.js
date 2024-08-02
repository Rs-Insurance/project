
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import Bikeentry from './Components/Bikeentry';
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';
import Payment from './Components/Payment';
import UserLogin from './Components/UserLogin';
import ReviewPage from './Components/ReviewPage';
import PaymentSuccessPage from './Components/PaymentSuccessPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/Bikeentry' element={<Bikeentry/>}/>
         <Route path='/Registration' element={<SecondPage/>}/>
         <Route path='/Quotation' element={<ThirdPage/>}/>
         <Route path='/payment' element={<Payment/>}/>
         <Route path='/userlogin' element={<UserLogin/>}/>
         <Route path='/PaymentSuccessPage' element={<PaymentSuccessPage/>}/>
         <Route path='/userProfile' element={<ReviewPage/>}/>
         
      </Routes>
      
      </BrowserRouter>
      <ToastContainer autoClose={5000}/>
    </div>
  );
}

export default App;
