import style from './Modal.module.css';
import ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export const Modal = () => {
  const overlayRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { documentId } = location.state;

  const handleEscape = e => {
    if (e.key === 'Escape') {
      navigate(`/documentsPath`);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <>
          <h2 className={style.title}>
            {documentId}
          </h2>

          <div className={style.content}>
            <input />
            <button>asdasdasd</button>
          </div>
        </>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};
