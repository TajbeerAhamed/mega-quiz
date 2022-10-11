
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Statictics from './components/Statictics/Statictics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';


function App() {
  const router = createBrowserRouter ([
   {
    path:'/',
    element:<Main></Main>,
    loader: async () => {
      return fetch (`https://openapi.programming-hero.com/api/quiz`)
    },
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
    {
      path:'/home',
      element:<Home></Home>
    },
    {
      path:'/topics',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<Topics></Topics>
    },
    {
      path:'/statictics',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<Statictics></Statictics>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    }
    ],
   },
   {
    path: '*',
    element:<Error></Error>
  }
  ],
  
  )
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
