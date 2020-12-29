import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard({ children }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      Dashboard {children}
    </div>
  );
}

export default Dashboard;
