import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./pages/Payment";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="landingpage">
                <LandingPage />
              </div>
            }
          />

          <Route
            path="/register"
            element={
              <div className="register-page">
                <Register />
              </div>
            }
          />
         <Route path="/payment" 
             element={
             <div className="payment-page">
              <Payment />
              </div>
            } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
