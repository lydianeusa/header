

const createTag = (tagName, className, imageSource, text, parentTag) => {
  const tagElement = document.createElement(tagName);

  tagElement.classList.add(className);

  if (imageSource !== null) {
    tagElement.setAttribute("src", imageSource);
  }

  if (text !== null) {
    tagElement.textContent = text;
  }

  parentTag.append(tagElement);
}; 

const root = document.querySelector("#root");

createTag("header", "header", null, null, root)
createTag("main", "main", null, null, root)
createTag("footer", "footer", null, null, root)

// cibler la balise main et la stocker dans une variable
const mainTag = document.querySelector(".main");

createTag("h1", "h1", null, "coucou", mainTag)

createTag("img", "img", "https://picsum.photos/200", null, mainTag)

createTag("p", "p", null, "blablablabla blablablabla blablablabla blablablabla blablablabla", mainTag)

// créer un lien
createTag("button", "link-to-articles", null, "Voir les articles", mainTag);
// cibler le lien et ajouter un event listener
const button = document.querySelector(".link-to-articles");

button.addEventListener("click", () => {

  // efface le HTML actuel sauf le header et le footer
  mainTag.innerHTML = "";

  // on créé le HTML (via le js) contenant les articles
  createTag(
    "img",
    "image-article-1",
    "https://img.scoop.it/zRzzg-_o5jltdJyeHJC8vTl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9",
    null,
    mainTag
  );
  createTag("h2", "title-article-1", null, "araignée sauteuse", mainTag);

  createTag("img", "image-article-2", "https://jack35.files.wordpress.com/2013/07/199.jpg", null, mainTag);
  createTag("h2", "title-article-2", null, "araignée sauteuse", mainTag);

  createTag(
    "img",
    "image-article-3",
    "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flickr_-_Lukjonis_-_Male_Jumping_spider_-_Evarcha_arcuata_%28Set_of_pictures%29.jpg",
    null,
    mainTag
  );
  createTag("h2", "title-article-3", null, "araignée sauteuse", mainTag);

  createTag(
    "img",
    "image-article-4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoERLHCJ8OtPB7xTX4y96JOmlH4vcCh65iqJuSNpwxFumPFKoLOcYV1Kl6W0i91lCtl4U&usqp=CAU",
    null,
    mainTag
  );
  createTag("h2", "title-article-4", null, "araignée sauteuse", mainTag);
});






