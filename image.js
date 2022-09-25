import { insertAfter } from "../export/insertAfter.js";
import { addLoadEvent } from "../export/addLoadEvent.js";

function preparePlaceholder() {
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  let placeholder = document.createElement("img");
  placeholder.setAttribute("id", "placeholder");
  placeholder.setAttribute("src", "images/placeholder.gif");
  placeholder.setAttribute("alt", "my image gallery");
  let description = document.createElement("p");
  description.setAttribute("id", "description");
  let desctext = document.createTextNode("Choose an image");
  description.appendChild(desctext);
  let gallery = document.getElementById("imagegallery");
  insertAfter(placeholder, gallery);
  insertAfter(description, placeholder);
}

function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  let gallery = document.getElementById("imagegallery");
  let links = gallery.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return showPic(this) ? false : true;
    };
  }
}

function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return false;
  let source = whichpic.href;
  let placeholder = document.getElementById("placeholder");
  if (placeholder.nodeName != "IMG") return false;
  placeholder.src = source;
  if (document.getElementById("description")) {
    let text = whichpic.getAttribute("title")
      ? whichpic.getAttribute("title")
      : "";
    let description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
      description.firstChild.nodeValue = text;
    }
  }
  return true;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
