import './App.css'
import LoginScreen from './screens/LoginScreen'
import FakeStoreScreen from './screens/FakeStoreScreen'
import ContactsScreen from './screens/ContactsScreen'
import SettingsScreen from './screens/SettingsScreen'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './screens/MainLayout'
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginScreen />
  },
  {
    path:'/',
    element: <ProtectedRoute/>,
    children:[
      { 
        element: <MainLayout/>, 
        children:[
          { index: true, element: <FakeStoreScreen /> },
          { path:'contacts', element: <ContactsScreen /> },
          { path: 'settings', element: <SettingsScreen /> },
        ]
      }
    ]    
  },
  {
    path:'/fake',
    element:<ProtectedRoute />,
    children: [
      {index:true, element:<FakeStoreScreen/>}
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
