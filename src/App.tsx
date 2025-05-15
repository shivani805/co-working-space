import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
