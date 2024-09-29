import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './Authcontext';

const PrivateRoute = () => {
    const { currentUser, loading } = useContext(AuthContext);

    if(loading) {
        return <p>Loading...</p>
    }

    return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;