import React, { useState } from 'react'
import './App.css';
import { Modal } from './Components/modal'

function App() {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="App">
      <h1>Reuseble modal window on React JS</h1>
      <button onClick={() => setShowModal(!showModal)}>open</button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>Modal Header</div>
        <div>Modal Body</div>
      </Modal>
    </div>
  );
}

export default App;
