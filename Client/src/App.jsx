import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Contact, Home,  StarsCanvas } from './components'
import About from './About/About'
import Login from './components/Account/Login.jsx'
import DataProvider from './Context/DataProvider'
import Header from './components/Header';
import CreatePost from './components/create/CreatePost';
import { Btech } from './components/Courses/Btech/SubjectName';
import SemesterHome from './components/Courses/SemesterHome';
import UnitHome from './components/Courses/Btech/Units/UnitHome';


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? 
  <>
    <Outlet />
    <Header />
  </>
    :
    <Navigate replace to="/login" />
}

const App = () => {
  const [isAuthenticated, isuserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>

      <div style={{ marginTop: 70}}>
      <Routes>
              <Route exact path='/login' element={<Login isuserAuthenticated={isuserAuthenticated} />} />
        </Routes>
        </div>

        <div className="relative z-0 bg-primary">
          <Routes>
              {/* <Route exact path='/login' element={<Login isuserAuthenticated={isuserAuthenticated} />} /> */}

              <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route exact  path="/" element={<Home />} />
              </Route>
              <Route path="/about" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/about" element={<About />} />
              </Route>
            </Routes>
         


          <div className='relative z-0'>
            <Routes>
              <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/contact' element={<Contact />} />
              </Route>
            </Routes>
            <StarsCanvas />


          </div>
        </div>
        <div style={{ background: '#000' }}>
          {/* //Course Routing */}
          <Routes>
            <Route path='/courses' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/courses' element={<SemesterHome />} />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route>

          </Routes>
          {/* // Btech Routing  */}
          <Routes>
             {
                Btech.map((category,i)=>(
            <Route key={i} path={`/Btech/semester${category.id}`} element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route exact path={`/Btech/semester${category.id}`} element={<SemesterHome SemId ={category.id}/>} />
            </Route>
                ))
             }
          </Routes>

          {/* // Units Routing  */}
          <Routes>
             {
               Btech.map((category,i)=>(
            <Route key={i} path={`/semester/:Sid/:cid/units`} element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path={`/semester/:Sid/:cid/units`} element={<UnitHome SemUId ={category.id} />} />
            </Route>
                ))
             }
          </Routes>
        </div>

      </BrowserRouter>
    </DataProvider>
  )
}

export default App
