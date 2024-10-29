
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About_page from './About_page';
import Services_page from './Services_page';
import Blog from './Blog';
import Blog_details from './Blog_details';
import Blog_element from './Blog_element';
import Contact from './Contact';
import Apply_for_loan from './Apply_for_loan';

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About_page/>
    },
    {
      path:"/services",
      element:<Services_page/>
    },
    {
      path:"/blog",
      element:<Blog/>
    },
    {
      path:"/blog_details",
      element:<Blog_details/>
    },
    {
      path:"/element",
      element:<Blog_element/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
path:"/apply_loan",
element:<Apply_for_loan/>
    }
 
  ]
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
