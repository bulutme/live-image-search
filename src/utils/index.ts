export const debounce = (cb: any, delay = 500) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
