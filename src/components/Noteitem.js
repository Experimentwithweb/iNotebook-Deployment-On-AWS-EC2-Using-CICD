//Purpose - This component defines the body of the one note

import React, {useContext} from 'react';
import noteContext from "../context/notes/noteContext";


const Noteitem = (props) => {
  const context = useContext(noteContext);
    const { deleteNote } = context; //Imported the delete note function from context api
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3 mx-2">
        <div className="card-body ">
          <div className="d-flex align-item-center">
            <h5 className="card-title text-truncate">{note.title}</h5>
            <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
            {/*Delete Icon imported from fontawesome*/}
            <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
            {/* Edit Icon imported from fontawesome*/}
          </div>

          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
