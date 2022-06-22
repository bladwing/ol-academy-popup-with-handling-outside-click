import { useState, useEffect, useRef } from "react";
import "./App.scss";
import HelloPhoto from "./resourse/hello.png";

function App() {
  const ref = useRef();

  const [isModalOpen, setModalOpen] = useState(false);

  useOnClickOutside(ref, () => setModalOpen(false));
  return (
    <div className="body">
      {isModalOpen ? (
        <div className="modal__backdrop">
          <div className="modal__container" ref={ref}>
            👋 Hello my dear friend...
            <img src={HelloPhoto} alt="this is hello" />
            <button onClick={() => setModalOpen(false)}>Close</button>
            <div className="buttonContainer"></div>
          </div>
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </div>
  );

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }
}

export default App;
