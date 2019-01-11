export const debounce = (fn, time) => {
  let timeout = null;

  return props => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(props);
    }, time);
  };
};
