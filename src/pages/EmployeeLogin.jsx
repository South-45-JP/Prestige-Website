

const EmployeeLogin = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl text-yellow-400 font-bold mb-4">Employee Login</h2>
        <input type="text" placeholder="Username" className="w-full p-3 mb-4 rounded bg-gray-800 border border-yellow-500" />
        <input type="password" placeholder="Password" className="w-full p-3 mb-4 rounded bg-gray-800 border border-yellow-500" />
        <button className="w-full bg-yellow-500 text-black py-3 rounded font-bold hover:bg-yellow-400 transition">Login</button>
      </div>
    </div>
  );
};

export default EmployeeLogin;
