import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Taskpage } from "./pages/Taskpage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
      <Navigation />
      <Routes>

        <Route path="/" element={<Navigate to="tareas" />} />
        <Route path="/tareas" element={<Taskpage />} />
        <Route path="/tareas-create" element={<TaskFormPage />} />
        <Route path="/tareas/:id" element={<TaskFormPage />} />
      </Routes>
      <Toaster/>
      </div>
    </BrowserRouter>
  );
}

export default App;
