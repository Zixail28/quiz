import { elementCreate } from "../elementCreate/elementCreate";
import { ArrowSVG } from "../../constans/svg";

export function selectBox(parentEl, data, id, options) {
  const selectBox = elementCreate({tagName: "div", classList: ["select-box"]});
  const selectBoxText = elementCreate({tagName: "div", classList: ["select-box__text"]});
  const selectTextTheme = elementCreate({tagName: "p", classList: ["select-text__theme"], textContent: data.theme});
  const selectTextChoose = elementCreate({tagName: "p", classList: ["select-text__choose"], textContent: data.content[+options.ans[options.index]].text});
  const selectBoxArrow = elementCreate({tagName: "div", classList: ["select-box__arrow"], innerHTML: ArrowSVG});
  const selectList = elementCreate({tagName: "div", classList: ["select-list"]});

  data.content.map((option, id) => {
    const selectListItem = elementCreate({tagName: "div", classList: ["select-list__item"]});
    const selectListItemInput = elementCreate({tagName: "input", type: "radio", name: id, id, checked: +options.ans[options.index] === id ? true : null});
    const selectListItemLabel = elementCreate({tagName: "label", classList: ["select-list__ques"], forAttr: id, name: id, textContent: option.text});

    selectBoxText.append(selectTextTheme, selectTextChoose);
    selectBox.append(selectBoxText, selectBoxArrow);
    selectListItem.append(selectListItemInput, selectListItemLabel);
    selectList.append(selectListItem);
  });

  parentEl.append(selectBox, selectList);
}
