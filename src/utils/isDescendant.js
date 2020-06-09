export const isDescendant = (parent, child, checkId) => {
  let node = child.parentNode;
  while (node != null) {
    if (!checkId ? parent === node.tagName : parent === node.id) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

export default isDescendant;
