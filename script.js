const root = document.querySelector("#root");

const createTag = (tagName, className, imageSource, text) => {
  const tagElement = document.createElement(tagName);

  tagElement.classList.add(className);

  if (imageSource !== null) {
    tagElement.setAttribute("src", imageSource);
  }

  if (text !== null) {
    tagElement.textContent = text;
  }

  root.append(tagElement);
}; 

createTag("header", "header", null, null)

createTag("h1", "h1", null, "coucou")

createTag("img", "img", "https://picsum.photos/200", null)

createTag("p", "p", null, "blablablabla blablablabla blablablabla blablablabla blablablabla")

createTag("footer", "footer", null, null)
