import { elementCreate } from "../elementCreate/elementCreate";

export function radioCheckbox(parentEl, id, name, text, options) {
  const container = elementCreate({tagName: "div", classList: ["quiz__opitons__box", options.long ? "size_long" : null] });
  const labelEl = elementCreate({tagName: "label", classList: ["quiz__opitons__ques", options.long ? "size_long" : null], textContent: text, forAttr: id,});
  const radioEl = elementCreate({tagName: "input", type: "radio", name, id, checked: options.selected, textContent: text});

  container.append(radioEl, labelEl);
  
  parentEl.append(container);
}