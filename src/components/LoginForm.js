import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:7000/api/v1/auth', {
        username,
        password
      });

      // Получение и сохранение токена и имени пользователя в localStorage
      const token = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      // Переадресация на страницу чата
      navigate('/chat');
    } catch (error) {
      console.error('Ошибка входа:', error);
      setMessage('Ошибка входа. Попробуйте снова.');
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Войти</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;
