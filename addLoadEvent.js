export const addLoadEvent = (func) => {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    return (window.onload = func);
  } else {
    return (window.onload = function () {
      oldonload();
      func();
    });
  }
};
