import Navbar from "./components/Navbar";
import Home from "./components/Home";
import useNote from "./hooks/useNote";

function App() {
  const { notes, deleteNote, addNote } = useNote();

  return (
    <>
      <div className="flex flex-col bg-gray-400 w-screen h-screen">
        <Navbar />
        <Home notes={notes} addNote={addNote} deleteNote={deleteNote} />
      </div>
    </>
  );
}

export default App;
