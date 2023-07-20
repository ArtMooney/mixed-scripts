function setLocalStorage(key, value, ttl) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getLocalStorage(key) {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

// localstorage name, value, expiry after milliseconds
setLocalStorage("localstorage-name", "this is the saved data", 1000 * 60 * 15);

// localstorage name
const value = getLocalStorage("localstorage-name");
