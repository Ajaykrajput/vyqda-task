/* eslint-disable react/prop-types */

import NoteCard from "./NoteCard";

const Home = ({ notes, addNote, deleteNote }) => {
  const handleAddNote = async (e) => {
    e.preventDefault();
    const note = e.target.elements.notetext.value;
    const timeStamp = new Date();
    const notedata = { note, timeStamp };
    await addNote(notedata);
    e.target.elements.notetext.value = "";
  };

  return (
    <div className="flex flex-col w-full h-full py-5 gap-4">
      <form
        onSubmit={handleAddNote}
        autoComplete="off"
        className="flex items-center justify-center mx-auto"
      >
        <div>
          <input
            className="w-full py-4 px-5 rounded-md"
            placeholder="Take a note ..."
            type="text"
            name="notetext"
          />
        </div>
      </form>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 py-5 mx-5">
        {notes && notes.length > 0 ? (
          <>
            {notes.map((note) => (
              <div key={note.id}>
                <NoteCard note={note} deleteNote={deleteNote} />
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
