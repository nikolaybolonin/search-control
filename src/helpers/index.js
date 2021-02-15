// vendor modules
import isElement from 'lodash/isElement';

/*
 * Returns an array of the parents of this element
 * @param {object} Event (.target) or DOMNode
 */
export function getEventPath(event) {
  const target = isElement(event.target) // target can be an attribute of <a/> tag
    ? event.target
    : event;
  const path = [];
  let node = target;
  while (node && node !== document.body) {
    path.push(node);
    node = node.parentNode;
  }

  return path;
}

export const getDataAttribute = (node, attr, dataAttr) => {
  if (node) {
    if (node.dataset) {
      return node.dataset[attr];
    }

    return node.getAttribute(dataAttr);
  }

  return undefined;
};
