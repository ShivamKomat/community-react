import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home/Home"
// import Signup from "./registation/Signup"
import Signup from "./registation/Signup"
import Login from "./login/Login"
import Chat from "./Chat/Chat"
import Event from "./Events/Event"
import Forums from "./Forums/Forums"
import Resources from "./Resources/Resources"
import Profile from "./UserProfile/Profile"
import TournamentPage from "./competative/TournamentPage"
import "./index.css"
import Feature from "./Features/Feature"
import Navbar from "./Navbar/Navbar" 
import Layout from "./Layout"
import Dynamicprofile from "./CreateProfile/Dynamicprofile"


let r =  createBrowserRouter([{
     path:"/", 
     element:<Layout/>, 
     children:[ 
      {
         path:"/home", 
         element:<Home/>
      },
      {
           path:"/login" ,
           element:<Login />
      },
      {
        path:"/" ,
        element:<Signup />
      },{
        path:"/chat" ,
        element:<Chat/>
      },{
        path:"/event" ,
        element:<Event/>
      },{
         path:"/forum", 
         element:<Forums/>
      },{
        path:"/resource", 
        element:<Resources/>
      },{
         path:"/profile", 
         element:<Profile/>
      },{
         path:"/tournament", 
         element:<TournamentPage/>
      },{
         path:"feature", 
        element:<Feature/>
      },{
         path:'/create', 
         element:<Dynamicprofile/>
      }
     ]
}])

const Router = () => {
  return (
  //   <BrowserRouter>
  //   <Navbar/>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/login" element={<Login />} />
  //     <Route path="/signup" element={<Signup />} />
  //     <Route path="/chat" element={<Chat />} />
  //     <Route path="/event" element={<Event />} />
  //     <Route path="/forum" element={<Forums />} />
  //     <Route path="/resource" element={<Resources />} />
  //     <Route path="/profile" element={<Profile/>} />
  //     <Route path="/tournament" element={<TournamentPage />} />
  //     {/* <Route path="/forums" element={<Forums/> } /> */}
  //     <Route path="/feature" element={<Feature/> } />
  //   </Routes>
  // </BrowserRouter> 

   <div>
    <RouterProvider router={r} />
   </div>
  )
}

export default Router