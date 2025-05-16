import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
};

export default App;
