import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/*',
          element: <NotFound />
        }
      ]
    }
  ]);

  return (
    <div className='p-width'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
