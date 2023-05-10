import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="WriteHelper"></Navbar>
      <div className="container">
        <TextForm heading="Enter your text here to analyze"></TextForm>
      </div>
    </>
  );
}

export default App;
