import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/Authcontext';
import PrivateRoute from './context/PrivateRoute';
import HomePage from './pages/HomePage';
import CurrentWorkout from './pages/CurrentWorkout';
import MesoCycles from './pages/MesoCycles';
import CreateProgram from './pages/CreateProgram';
import Program from './pages/Program';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        
        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/app" element={<AppLayout />}>
            {/* Nested route for the homepage under /app */}
            <Route index element={<CurrentWorkout />} />
            <Route path="/app/mesocycles" element={<MesoCycles />} />
            <Route path="/app/mesocycles/:programid" element={<Program />} />
            <Route path="/app/mesocycles/create" element={<CreateProgram />} />
          </Route>
        </Route>
      </>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;