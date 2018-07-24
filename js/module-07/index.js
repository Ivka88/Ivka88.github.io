'use strict';

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.  
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

const notes = document.querySelector('.notes');
// const notes = $qs('.notes');

const elements = createPosts(posts) ;

// const post = createPostCard({
//     img: 'http://via.placeholder.com/400x150',
//     title: 'Lorem ipsum dolor',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
//     link: 'Read more'
// });
// notes.appendChild(post);

notes.append(...elements);

function createPosts(arr) {
return arr.reduce((acc, elem) => acc.concat(createPostCard(elem)), []);
}
// const elements = [];
// arr.forEach(post => {
//     const elem = createPostCard(post);
//     elements.push(elem)
// });
//     return elements;
// }

function createPostCard({img, title, text, link}) {
const post = document.createElement('div');
post.classList.add('post'); 
// const post = $cel('div', {className: 'post'}, '');

const postImage = document.createElement('img');
postImage.classList.add('post__image');
postImage.setAttribute('alt', 'post image');
postImage.setAttribute('src', img);
// const postImage = $cel ('img', {className: 'post__image', alt: 'post image', src: img});

const postTitle = document.createElement('h2');
postTitle.classList.add('post__title');
postTitle.textContent = title;
// const postTitle = $cel('h2', {className: 'post__title'}, title);

const postText = document.createElement('p');
postText.classList.add('post__text');
postText.textContent = text;
// const postText = $cel('p', {className: 'post__text'}, text);

const button = document.createElement('a');
button.classList.add('button');
button.href = "#";
button.textContent = link;
// const button = $cel('a', {className: 'button', href: '#'}, link);

post.append(postImage, postTitle, postText, button); 
return post;
}



