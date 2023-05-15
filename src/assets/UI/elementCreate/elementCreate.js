export function elementCreate({tagName, classList, id, type, forAttr, name, checked, disabled, textContent, innerHTML}) {
  const el = document.createElement(tagName);
  if (classList !== undefined) el.classList.add(...classList);
  if (id !== undefined) el.id = id;
  if (type !== undefined) el.type = type;
  if (forAttr !== undefined) el.setAttribute("for", forAttr);
  if (name !== undefined) el.name = name;
  if (checked !== undefined) el.checked = checked;
  if (disabled !== undefined) el.disabled = disabled;
  if (textContent !== undefined) el.textContent = textContent;
  if (innerHTML !== undefined) el.innerHTML = innerHTML;

  return el;
}

// {
//   tagName: string,
//   classList?: string[],
//   id?: string,
//   type?: string,
//   forAttr?: string,
//   name?: string,
//   checked?: boolean,
//   disabled?: boolean,
//   textContent?: string,
//   innerHTML?: string,
// }