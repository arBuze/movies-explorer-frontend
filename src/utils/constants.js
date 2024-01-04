export const RENDER_PATHS = ['/', '/movies', '/saved-movies', '/profile'];

export const NAME_REG = "[A-Za-zА-Яа-яЁё\\s\\-]+";
export const EMAIL_REG = "[a-zA-Z0-9\\.'+_`\\-]+@[a-zA-Z0-9.]+\\.[a-zA-Z0-9]{2,}";

export const ERROR_TEXTS = {
  searchError: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  saveError: 'При сохранении фильма произошла ошибка.',
  findError: 'Указанный фильм не найден.',
  deleteError: 'При удалении фильма произошла ошибка.',
  sameEmailError: 'Пользователь с таким email уже существует.',
  upadateProfileError: 'При обновлении профиля произошла ошибка.',
  wrongData: 'Вы ввели неправильный логин или пароль',
  authError: 'При авторизации произошла ошибка.',
  registerError: 'При регистрации пользователя произошла ошибка.',

};

export const AUTH_TEXTS = {
  register: 'Регистрация прошла успешно!',
  auth: 'Вы успешно авторизировались!'
}
