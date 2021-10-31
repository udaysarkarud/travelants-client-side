import logo from './logo.svg';
import './App.css';
import AuthProvider from './Context/AuthProvider'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import MyOrders from './components/MyOrders/MyOrders'
import ManageOrders from './components/ManageOrders/ManageOrders'
import AddPackage from './components/AddPackage/AddPackage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import BookingPanel from './components/BookingPanel/BookingPanel';
import AddBlog from './components/Blogs/AddBlog/AddBlog';
import SingelBlogDetails from './components/Blogs/SingelBlogDetails/SingelBlogDetails';
import Blogs from './components/Blogs/Blogs';
import Services from './components/Services/Services';
import SecureRoute from './components/SecureRoute/SecureRoute';
import AboutPage from './components/AboutPage/AboutPage';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/aboutus'>
              <AboutPage />
            </Route>

            <Route path='/services'>
              <Services />
            </Route>

            <SecureRoute path='/blogs'>
              <Blogs />
            </SecureRoute>


            <Route path='/login'>
              <Login />
            </Route>

            <SecureRoute path='/myorders'>
              <MyOrders />
            </SecureRoute>


            <SecureRoute path='/manageorders'>
              <ManageOrders />
            </SecureRoute>

            <SecureRoute path='/booking/:pkg'>
              <BookingPanel />
            </SecureRoute>

            <SecureRoute path='/blogdetails/:bgi'>
              <SingelBlogDetails />
            </SecureRoute>

            <SecureRoute path='/addpackage'>
              <AddPackage />
            </SecureRoute>

            <SecureRoute path='/addblog'>
              <AddBlog />
            </SecureRoute>

          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
