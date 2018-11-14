'use strict';

/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];


const galleryFullview = document.createElement('div');
galleryFullview.classList.add('fullview'); 

const imageFullview = document.createElement('img');
imageFullview.classList.add('img-gallery')
imageFullview.setAttribute('src', "img/fullview-1.jpeg");
imageFullview.setAttribute('alt', "alt text 1");
galleryFullview.appendChild(imageFullview);

const galleryPreview = document.createElement('ul');
galleryPreview.classList.add('preview'); 
const imageGallery = document.querySelector('.js-image-gallery');
imageGallery.append(galleryFullview, galleryPreview);

const elements = createPreview(galleryItems);
galleryPreview.append(...elements);


function createPreview(arr) {
return arr.reduce((acc, elem) => acc.concat(createGalleryPreview(elem)), []);
}

function createGalleryPreview({preview, fullview, alt}) { 
const elementPreview = document.createElement('li');
const imagePreview = document.createElement('img');
imagePreview.classList.add('image-preview'); 
imagePreview.setAttribute('src', preview);
imagePreview.setAttribute('data-fullview', fullview);
imagePreview.setAttribute('alt', alt);
elementPreview.appendChild(imagePreview);

return elementPreview;
}


const galleryClick = document.querySelector('.preview');
galleryClick.addEventListener('click', changeFullviewOnClick);
  
function changeFullviewOnClick(event) {
const nodeName = event.target.nodeName;
if (nodeName !== 'IMG') return;
const fullviewDataset = event.target.dataset.fullview;

const fullviewImage = document.querySelector('.img-gallery');
fullviewImage.setAttribute('src', `${fullviewDataset}`);
}

