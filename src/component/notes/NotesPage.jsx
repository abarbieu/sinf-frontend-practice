import React, { useState } from "react";
import axios from "axios";

export default function NotesPage() {
   const [notes, setNotes] = useState([]);

   const apiUrl = "http://localhost:54321/notes/";

   //! return array of notes from backend
   const getNotes = () => {
      axios
         .get(apiUrl)
         .then((res) => {
            return res.data.map((note) => {
               setNotes(res.data);
            });
         })
         .catch((err) => {
            console.error(err);
         })
         .then(() => {
            console.log("finished");
         });
   };

   const createNote = () => {
      axios.post(apiUrl, JSON.stringify({ title: "title" }));
   };

   return (
      <div style={{width: "96%", display: "flex", flexDirection: 'column', justifyContent: "center", margin: "0 auto 2% auto"}}>
         <button onClick={getNotes} className="btn btn-outline-dark" style={{width: "120px", marginRight: "10px"}}>Load Notes</button>
         {notes.map((note) => {
            return (
               <div key={note.id}>
                  <h1 style={{fontSize: "16px", fontWeight: "300"}}>{note.title}</h1>
                  <p style={{fontSize: "16px", fontWeight: "300"}}>{note.content}</p>
               </div>
            );
         })}
      </div>
   );
}
