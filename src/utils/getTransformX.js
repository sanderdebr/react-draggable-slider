export function getTransformX(element) {
  const values = element.style.transform.split(/\w+\(|\);?/);
  const transform = values[1].split(/,\s?/g).map(parseInt);
  return transform[0];
}
