import iconSuccess from "../../images/success.svg";
import iconFailure from '../../images/not-success.svg'
import './InfoToolTip.css';
import { useEffect } from "react";

export default function InfoToolTip({ isOpen, onClose, isSuccessful }) {
  useEffect(() => {
    if (isOpen) return;
    function handleEscapeClose(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscapeClose);
    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [isOpen, onClose]);

  function handleOverlayClose(e) {
    if (e.target === e.currentTarget && isOpen) {
      onClose();
    }
  }

  return(
    <div className={`popup popup_type_success ${isOpen && "popup_opened"}`} onClick={handleOverlayClose}>
      <div className="popup__container popup__container_type_success">
        <button className="popup__close-btn popup__close-btn_type_success" type="button" onClick={onClose}></button>
        <img className="popup__success-icon" src={isSuccessful ? iconSuccess : iconFailure} alt="иконка"/>
        <h2 className="popup__heading popup__heading_type_success">
          {isSuccessful ? 'Успешно!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
      </div>
    </div>
  );
}
