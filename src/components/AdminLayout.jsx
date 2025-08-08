import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Hooks/AuthContext.jsx';

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <nav style={{ background: '#000', color: 'gold', padding: '1rem' }}>
        <strong>Admin Panel</strong> | <button onClick={handleLogout}>Logout</button>
      </nav>
      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}
