function HtmlElement() {
  this.click = function () {
    console.log("click");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

function HtmlSelectedElement(arr = []) {
  this.items = function () {
    console.log(arr);
  };
}

HtmlSelectedElement.prototype = new HtmlElement();
HtmlSelectedElement.prototype.constructor = HtmlSelectedElement;
