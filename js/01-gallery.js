import { galleryItems } from './gallery-items.js';
// Change code below this line
// rendering
const gallery = document.querySelector(".gallery");

const createGalleryItem = (largeImg, smallImg, imgDescription) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${largeImg}">
    <img
      class="gallery__image"
      src="${smallImg}"
      data-source="${largeImg}"
      alt="${imgDescription}"
    />
  </a>
</li>`};

const render = () => {
    const images = galleryItems.map(({ original, preview, description }) => createGalleryItem(original, preview, description));
    gallery.insertAdjacentHTML('beforeend', images.join(''));
}

render();

// modal
const modal = basicLightbox.create(`
       <img
           src=""
           alt=""
        />
  `);

const refModalImg = modal.element().querySelector("img");

const removeListeners = () => {
    document.removeEventListener("keydown", keyDown);
    modal.element().removeEventListener("click", removeListeners);
}

const keyDown = (e)=> {
    if (e.key === "Escape") {
            removeListeners();
            modal.close();
        }
}

const showLargeImg = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("gallery__image")) {
        const refLargeImg = e.target.getAttribute("data-source");
        const imgAlt = e.target.getAttribute("alt");
        refModalImg.setAttribute("src", refLargeImg);
        refModalImg.setAttribute("alt", imgAlt);
        modal.element().addEventListener("click", removeListeners);
        modal.show();
        document.addEventListener("keydown", keyDown);
    }
};

gallery.addEventListener("click", showLargeImg);