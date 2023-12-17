import './AuthForm.css';

export default function AuthForm(props) {
  return(
    <form className="auth-form" method="post">
      <div className="auth-form__input-container">
        {props.children}
        <label className="auth-form__item">
          E-mail
          <input className="auth-form__input-item" type="email" name="email" id="email-input" required />
        </label>
        <span className="auth-form__input-error email-input-error"></span>
        <label className="auth-form__item">
          Пароль
          <input className="auth-form__input-item" type="password" name="password" id="password-input" required />
        </label>
        <span className="auth-form__input-error password-input-error"></span>
      </div>
      <button className="auth-form__submit-btn" type="submit">{props.buttonTitle}</button>
    </form>
  );
}