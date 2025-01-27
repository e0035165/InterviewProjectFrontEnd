import React from "react";


function Modal({ closeModal , Submission }) {
    const setUser = (event) => {
        event.preventDefault();
        setUsername(event.target.value)
        
    };

    const setPass = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }


    return(
        <>
            <div className="modal-overlay">
                <div className="modal">
                    <div className="login-page">
                        <div className="overlay">
                            <form onSubmit={Submission}>
                                <label>Enter Username: </label>
                                <input type="text" id="username" onChange={setUser}></input><br></br>
                                <label>Enter Password: </label>
                                <input type="text" id="password" onChange={setPass}></input><br></br>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn-close" onClick={closeModal}> X </button>

            {/* CSS Styling */}
      <style jsx>{`
        .modal-container {
          text-align: center;
          margin-top: 50px;
        }
        .open-modal-btn {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }
        .open-modal-btn:hover {
          background-color: #0056b3;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          max-width: 500px;
          width: 90%;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .close-btn {
          background-color: #ff4d4d;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 20px;
        }
        .close-btn:hover {
          background-color: #cc0000;
        }
      `}</style>
        </>

    );
}




export default Modal;