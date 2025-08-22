import { useNavigate } from "react-router-dom";

const  Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-white shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-green-600">Green SaaS</h1>
          <nav className="flex gap-6 text-gray-700">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
              className="hover:text-green-600 transition"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-6 bg-white rounded shadow">Card 1</div>
          <div className="p-6 bg-white rounded shadow">Card 2</div>
          <div className="p-6 bg-white rounded shadow">Card 3</div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-500 text-sm">
        © 2025 MyApp
      </footer>
    </div>
  );
}

export default Dashboard;