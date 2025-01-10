import "./index.css";
import PrintPage from "./PrintPage";
import InputPage from "./InputPage";
import { useState } from "react";

function App() {
    const [formData,setFormData] = useState(null)

  return (
    <>
      {formData ? (
        <PrintPage formData={formData} />
      ) : (
        <InputPage onSubmit={setFormData} />
      )}
    </>
  );
}

export default App;
