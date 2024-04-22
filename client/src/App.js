import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudent from "./pages/AddStudent";
import Student from "./pages/Student";
import UpdateStudent from "./pages/UpdateStudent";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/AddStudent" element={<AddStudent />} />
          <Route path="/UpdateStudent/:id" element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
