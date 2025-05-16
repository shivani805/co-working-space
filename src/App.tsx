import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import { WorkspaceProvider } from "context/workspaceContext";

const App: React.FC = () => {
  return (
    <WorkspaceProvider>
      <Navbar />
      <main className="app-container">
        <Dashboard />
      </main>
      <Footer />
    </WorkspaceProvider>
  );
};

export default App;
