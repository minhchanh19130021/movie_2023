import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, name, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
    return (
      <div className="flex items-center justify-center h-screen  bg-gradient-to-r from-slate-300 to-slate-50">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Đăng nhập</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
              <input className="w-full border border-gray-300 p-2 rounded-lg" type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Họ tên</label>
              <input className="w-full border border-gray-300 p-2 rounded-lg" type="text" id="name" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Mật khẩu</label>
              <input className="w-full border border-gray-300 p-2 rounded-lg" type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Đăng nhập</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default SignUp;
  