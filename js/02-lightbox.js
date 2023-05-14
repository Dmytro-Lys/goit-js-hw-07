import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGalleryItem = (largeImg, smallImg, imgDescription) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${largeImg}">
    <img
      class="gallery__image"
      src="${smallImg}"
      alt="${imgDescription}"
    />
  </a>
</li>`};

const render = () => {
    const images = galleryItems.map(({ original, preview, description }) => createGalleryItem(original, preview, description));
    gallery.insertAdjacentHTML('beforeend', images.join(''));
}
render();

const gallerySLb = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: "250"});