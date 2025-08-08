import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Hooks/AuthContext.jsx';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Trim and lowercase email for comparison
    const trimmedEmail = email.trim().toLowerCase();
    if (login(trimmedEmail, password)) {
      setError('');
      navigate('/admin');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin Login</h2>
      {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
      <form onSubmit={handleSubmit} autoComplete="on">
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="username"
          type="email"
        /><br />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="current-password"
        /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
