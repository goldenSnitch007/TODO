import { useState } from "react";

function Todo(props) {
  // Correct declaration and naming
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // This function now opens the modal
  function deleteBtn() {
    setModalIsOpen(true);
  } 

  // Modal Component defined inside Todo
  // It does NOT call itself inside its render.
  function Modal() {
    return (
      <div className="modal">
        <p>Are you sure? Wow!</p>
        <button 
          className="btnCan" 
          onClick={() => setModalIsOpen(false)}  // Closes the modal
        >
          Cancel
        </button>
        <button 
          className="btnCon" 
          onClick={() => {
            // Place any confirmation logic here
            // For instance: delete the task, then close the modal
            setModalIsOpen(false);
          }}
        >
          Confirm
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="card">
        <h2>{props.task}</h2>
        <div className="action">
          {/* When the delete button is clicked, open the modal */}
          <button className="btn" onClick={deleteBtn}>Delete</button>
        </div>
      </div>
      {/* Conditionally render the Modal if modalIsOpen is true */}
      {modalIsOpen && <Modal />}
    </div>
  );
}

export default Todo;
