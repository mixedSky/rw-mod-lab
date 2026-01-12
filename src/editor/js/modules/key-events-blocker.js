function blockKeyboard() {
  const handler = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  document.addEventListener("keydown", handler, true);
  document.addEventListener("keypress", handler, true);
  document.addEventListener("keyup", handler, true);

  return () => { 
    document.removeEventListener("keydown", handler, true);
    document.removeEventListener("keypress", handler, true);
    document.removeEventListener("keyup", handler, true);
  };
}

/* Example use

const unblock = blockKeyboard();
unblock();

*/
