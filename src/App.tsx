import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/ui/HomePage';
import NotFound from './components/util/NotFound';
import RegisterUser from './components/user/RegisterUser';
import ViewContact from './components/contacts/ViewContact';
import EditContact from './components/contacts/EditContact';
import AddContact from './components/contacts/AddContact';
import AdminContact from './components/contacts/AdminContact';
import AboutPage from './components/ui/AboutPage';
import LoginPage from './components/user/LoginPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/about' element={<AboutPage />} ></Route>
          <Route path='/contacts/admin' element={<AdminContact />} ></Route>
          <Route path='/contacts/add' element={<AddContact />} ></Route>
          <Route path='/contacts/edit/:contactId' element={<EditContact />} ></Route>
          <Route path='/contacts/view/:contactId' element={<ViewContact />} ></Route>
          <Route path='/users/login' element={<LoginPage />} ></Route>
          <Route path='/users/register' element={<RegisterUser />} ></Route>
          <Route path='*' element={<NotFound />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
