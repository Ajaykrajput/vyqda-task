import { useEffect, useState } from "react";
const url = "http://localhost:8001";

const useNote = () => {
  const [notes, setNotes] = useState([]);

  const getNote = async () => {
    const res = await fetch(`${url}/getnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setNotes(data);
    }
  };

  const deleteNote = async (id) => {
    const res = await fetch(`${url}/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res.json();

    if (res.status === 422 || !deletedata) {
      console.log("error");
    } else {
      getNote();
    }
  };

  const addNote = async (notedata) => {
    const res = await fetch(`${url}/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notedata),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");
    } else {
      getNote();
    }
  };

  useEffect(() => {
    getNote();
  }, []);
  return { notes, getNote, deleteNote, addNote };
};

export default useNote;
