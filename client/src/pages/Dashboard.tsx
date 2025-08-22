import { useAuth } from "../context/AuthContext";
import Header from "./Header";

const  Dashboard = () => {
  const { user } = useAuth();

  if (!user) return <p>Please login to view dashboard.</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-6 bg-white rounded shadow">Card 1</div>
          <div className="p-6 bg-white rounded shadow">Card 2</div>
          <div className="p-6 bg-white rounded shadow">Card 3</div>
        </div>
      </main>

      <footer className="p-4 text-center text-gray-500 text-sm">
        © 2025 MyApp
      </footer>
    </div>
  );
}

export default Dashboard;