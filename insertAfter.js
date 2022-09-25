export const insertAfter = (newElement, targetElement) => {
  const parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    return parent.appendChild(newElement);
  } else {
    return parent.insertBefore(newElement, targetElement.newSibling);
  }
};
