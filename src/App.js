import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./App.css";
import Otp from './Otp';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'400px',
    overflow:'hidden',
   
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
   
    
  }

  function closeModal() {
    setIsOpen(false);
    
  }
  document.addEventListener("DOMContentLoaded", function(event) {

    function OTPInput() {
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function(event) { if (event.key==="Backspace" ) { inputs[i].value='' ; if (i !==0) inputs[i - 1].focus(); } else { if (i===inputs.length - 1 && inputs[i].value !=='' ) { return true; } else if (event.keyCode> 47 && event.keyCode < 58) { inputs[i].value=event.key; if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode> 64 && event.keyCode < 91) { inputs[i].value=String.fromCharCode(event.keyCode); if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); } } OTPInput(); });
  return (
    <div>
      <button onClick={openModal}>CLICK</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
      <button onClick={closeModal} type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
     
        <h1>Phone Verification</h1>
  
        <h3>Enter the otp you received on 89206XXX98</h3><br/>
        <div className="otp"><Otp className="otp" /></div><br/><br/><br/>
        <div class="container height-100 d-flex justify-content-center align-items-center">
    <div class="position-relative">
        <div class="card p-2 text-center">
            
        </div>
        <div >
            <div> <a href="#" className="change">Change Number</a><a href="#"className="resend" >Re-send OTP</a> </div>
        </div>
        
    </div>
</div>
<br/><br/><br/>
<a onClick={closeModal} className="verify">Verify Phone Number</a>
<br/>
<br/>
<h5>Created by Abhilash Karna</h5>

      </Modal>
    </div>
  );
}

export default App;