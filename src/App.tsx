import React from 'react';
import FormPage from './component/form/FormPage';
import Header from "./component/header/Header";
import NotesPage from "./component/notes/NotesPage";
import './App.css';
import { readFileSync } from 'fs';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="formStyle">
        <div>
          <FormPage />
        </div>
      </div>
      <NotesPage></NotesPage>
    </div>
  );
}

export default App;
