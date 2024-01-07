export const RENDER_PATHS = ['/', '/movies', '/saved-movies', '/profile'];
export const BASE_URL = 'https://api.nomoreparties.co';

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

export const ERROR_CODES = {
  conflict: 409,
  notFound: 404,
  auth: 401
};

export const RESPONSE_TEXTS = {
  register: 'Регистрация прошла успешно!',
  auth: 'Вы успешно авторизировались!',
  saveData: 'Данные сохранены.'
};

export const RESOLUTION = {
  desktop: 1280,
  laptop: 1024,
  tablet: 768
};

export const VISIBLE_CARDS = {
  max: 12,
  mid: 8,
  min: 5
};

export const CARDS_ADD = {
  max: 3,
  min: 2
};

export const MINUTES_IN_HOUR = 60;
