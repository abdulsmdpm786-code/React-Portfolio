import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import RootLayout from "./Layout/RootLayout.jsx"
import Home from './components/Home.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import CustomerSec from "./components/CustomerSec.jsx"
import DetailsLoaders from "./Loaders/DetailsLoaders.jsx"
import ContactRouter from "./components/ContactRouter.jsx"
import Protect from './ProtuctRouter/protect.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children:[
      {index: true, element: <Home />},
      {path: "Projects", element: 
      <Protect> 
      <ProjectSection />
      </Protect>},
      {path: "Customer", element: <CustomerSec /> , loader: DetailsLoaders },
      {path: "Contact", element: <ContactRouter /> }


    ],
  },],
{
    basename: "/React-Portfolio" 
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
