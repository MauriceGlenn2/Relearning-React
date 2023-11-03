import "./Modal.css"

function Modal({ question }) {
    return (
        <> 
            <div className="modal">
                <p className="modal__title">{ question }</p>
                <div className="modal__buttons">
                    <button onClick={() => console.log("cancel")} className="btn btn__cancel" >Cancel</button>
                    <button onClick={() => console.log("confirm")} className="btn" >Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    )
}

export default Modal;