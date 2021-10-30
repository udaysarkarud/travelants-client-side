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

            <Route path='/services'>
              <Services />
            </Route>

            <Route path='/blogs'>
              <Blogs />
            </Route>


            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/myorders'>
              <MyOrders />
            </Route>


            <Route path='/manageorders'>
              <ManageOrders />
            </Route>

            <Route path='/booking/:pkg'>
              <BookingPanel />
            </Route>

            <Route path='/blogdetails/:bgi'>
              <SingelBlogDetails />
            </Route>

            <Route path='/addpackage'>
              <AddPackage />
            </Route>

            <Route path='/addblog'>
              <AddBlog />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
