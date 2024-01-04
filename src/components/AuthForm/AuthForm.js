import './AuthForm.css';
import { EMAIL_REG } from '../../utils/constants';

export default function AuthForm({ children, buttonTitle, name, emailValue, passwordValue, emailError, passwordError, onSubmit, onChange, isValid }) {
  return(
    <form className="auth-form" method="post" name={`${name}-form`} onSubmit={onSubmit} noValidate >
      <div className="auth-form__input-container">
        {children}
        <label className="auth-form__item">
          E-mail
          <input className={`auth-form__input-item ${emailError ? 'error' : ''}`} type="email" name="email" id="email-input" required
            pattern={EMAIL_REG} value={emailValue} onChange={onChange} />
        </label>
        <span className="auth-form__input-error email-input-error">{emailError}</span>
        <label className="auth-form__item">
          Пароль
          <input className={`auth-form__input-item ${passwordError ? 'error' : ''}`} type="password" name="password" id="password-input" required
            value={passwordValue} onChange={onChange} />
        </label>
        <span className="auth-form__input-error password-input-error">{passwordError}</span>
      </div>
      <button className="auth-form__submit-btn" type="submit" disabled={!isValid} >{buttonTitle}</button>
    </form>
  );
}
