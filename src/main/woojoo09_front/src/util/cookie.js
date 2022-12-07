const setCookie = (name, value) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 60);
  document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + date.toUTCString() + ';';
};

const setCookie2 = (name, value) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 60);
  document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + date.toUTCString() + '; secure; HttpOnly;';
};

const setCookie3 = (name, value) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 60);
  document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + date.toUTCString() + '; secure;';
};

const setCookie4 = (name, value) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 60);
  document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + date.toUTCString() + '; HttpOnly;';
};


const getCookie = (name) => {
  var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? decodeURIComponent(value[2]) : null;
};

const deleteCookie = (name) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

export {setCookie, getCookie, deleteCookie, setCookie2, setCookie3, setCookie4}