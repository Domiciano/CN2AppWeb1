import './App.css'
import LoginScreen from './screens/LoginScreen'
import FakeStoreScreen from './screens/FakeStoreScreen'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginScreen />
  },
  {
    path: '/',
    element: <FakeStoreScreen />,
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
