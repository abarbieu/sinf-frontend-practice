import React, { useState } from "react";
import axios from "axios";

export default function NotesPage() {
   const [notes, setNotes] = useState([]);

   const apiUrl = "http://localhost:54321/notes/";

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
   }

   //! return array of notes from backend
   const checkNotes = () => {
      // if(document.getElementById('loadNotes').innerText === 'Load Notes'){
      //       document.getElementById('loadNotes').innerText = 'Hide Notes'
            getNotes()
            // document.getElementById('notes').setAttribute('display: initial;')
      // }else{
      //    document.getElementById('loadNotes').innerText = 'Load Notes'
      //    document.getElementById('notes').setAttribute('display: none;')
      // }
   }

   
   

   // const createNote = () => {
   //    axios.post(apiUrl, JSON.stringify({ title: "title" }));
   // };

   return (
      <div style={{width: "96%", display: "flex", flexDirection: 'column', justifyContent: "center", margin: "0 auto 2% auto"}}>
         <button id='loadNotes' onClick={checkNotes} className="btn btn-outline-dark" style={{width: "120px", marginRight: "10px", marginBottom: '20px'}}>Load Notes</button>
         {notes.map((note) => {
            return (
               <div id='notes' key={note.id} style={{padding: '10px', marginBottom: '10px', backgroundColor: '#3a4152', border: '1px solid #1e1e1e'}}>
                  <p style={{fontSize: "24px", fontWeight: "350"}}>{note.title}</p>
                  <p style={{fontSize: "16px", fontWeight: "250"}}>{note.content}</p>
               </div>
            );
         })}
      </div>
   );
}
