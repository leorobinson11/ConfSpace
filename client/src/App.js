import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
import './styles/hero.css';
import './styles/login.css';
import LocationsCarosel from './components/location-carosel';
import Seachrbar from './components/searchbar';


const HomePage = () => {
  return (
    <div className="App">
      <header>
        <div class="title"> ConfSpace </div>
        <div class="btn-group">
            <a href="/login" class="login-btn">Login</a>
            <a href="/signup" class="register-btn">Register</a>
        </div>
      </header>

      <section class="hero">
        <div class="hero-text">
            <h1>Welcome to My Website</h1>
            <p>This is a short description of the website or service. Explore now and discover something amazing!</p>
        </div>
      </section>

      <section class="search-section">
        <div class="search-box">
          <Seachrbar />
          <input type="date" />
          <input type="number" placeholder="People" min="1" max="100" />
          <button type="button">Search</button>
        </div>
      </section>

      <section class="popularplaces-section">
            <LocationsCarosel />
      </section>
      
      <footer>
          <div id="footer-box">
            <div class="footer-content">
               <div class="links">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#socials">Socials</a></li>
                    <li><a href="#socials">Contact</a></li>
                  </ul>
                  <ul>
                    <li><a href="leorobinsonvienna@gmail.com"> Gmail </a></li>
                    <li><a href="https://www.linkedin.com/in/leo-robinson-437a46283/"> LinkedIn</a></li>
                    <li><a href="https://github.com/leorobinson11/"> GitHub </a></li>
                    <li><a href="https://www.instagram.com/rleo228/?hl=en"> Instagram </a></li>
                  </ul>
                </div>
              </div>
              <div id="copywritebox">
                  <span id="copywrite"> © 2023 All Rights Reserved by Leo Robinson </span>
              </div>
            </div>
        </footer>

    </div>
  );
}

const LoginPage = () => {
  return (
    <div className="Login-Page">
      <div class="container">
        <div class="form-container">
            <h1>Login</h1>
            <form>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" class="btn">Login</button>
                <p>Don't have an account? <a href="signup">Sign up here</a></p>
            </form>
        </div>
    </div>
    </div>
  );
}

const SignupPage = () => {
  return (
    <div className="Signup-Page">
      <div class="container">
        <div class="form-container">
            <h1>Sign Up</h1>
            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" placeholder="Confirm your password" required />
                </div>
                <button type="submit" class="btn">Sign Up</button>
                <p>Already have an account? <a href="login">Login here</a></p>
            </form>
        </div>
      </div>
    </div>
  );
}

const RoomListing = () => {
  return (
    <div className="Room-Listing">
      Room Listing
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="roomlistings/:city" element={<RoomListing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
