import iconSuccess from "../../images/success.svg";
import iconFailure from '../../images/not-success.svg'
import './InfoToolTip.css';

export default function InfoToolTip(props) {
  return(
    <div className={`popup popup_type_success ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container_type_success">
        <button className="popup__close-btn popup__close-btn_type_success" type="button" onClick={props.onClose}></button>
        <img className="popup__success-icon" src={props.isSuccessful ? iconSuccess : iconFailure} alt="иконка"/>
        <h2 className="popup__heading popup__heading_type_success">
          {props.isSuccessful ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
      </div>
    </div>
  )
}
