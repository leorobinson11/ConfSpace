import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
import './styles/hero.css';
import './styles/login.css';
import LocationsCarosel from './components/location-carosel';
import Seachrbar from './components/searchbar';
import Header from "./components/header";
import Footer from "./components/footer";
import RoomList from "./components/room-list"
import RoomDetails from './components/room-details';


const HomePage = () => {
  return (
    <div className="App">
      <Header />

      <section class="hero">
        <div class="hero-text">
            <h1>Welcome to My Website</h1>
            <p>This is a short description of the website or service. Explore now and discover something amazing!</p>
        </div>
      </section>

      <Seachrbar />

      <section class="popularplaces-section">
            <LocationsCarosel />
      </section>
      
      <Footer />
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
                <p>Already have an account? <a href="logi">Login here</a></p>
            </form>
        </div>
      </div>
    </div>
  );
}

const rooms = [
  {
    id: 1,
    image: 'https://via.placeholder.com/100',
    title: 'Cozy Apartment',
    location: 'New York, USA',
    rating: 4.5,
    price: 120,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/100',
    title: 'Modern Studio',
    location: 'Los Angeles, USA',
    rating: 4.2,
    price: 150,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/100',
    title: 'Beach House',
    location: 'Miami, USA',
    rating: 4.8,
    price: 200,
  },
];

const RoomListing = () => {
  return (
    <div className="Room-Listing">
      <Header />
      <h1 class="listingtitle-h1"> Room Listing </h1>
      <Seachrbar />
      <RoomList rooms={rooms} />
      <Footer />
    </div>
  );
}



const Room = () => {
  return (
    <div>
      <Header />
      <RoomDetails rooms={rooms} />
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="roomlistings" element={<RoomListing />} />
          <Route path="room/:id" element={<Room />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
