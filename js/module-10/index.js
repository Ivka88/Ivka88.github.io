'use strict';

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/


const btnAllUsers = document.querySelector('.js-getAllUsers');
const listAllUsers = document.querySelector('.js-AllUsers');

const getAllUser = () => {
   return fetch('https://test-users-api.herokuapp.com/users/')
    .then(response => {
     if (response.ok) return response.json(); 
 
    throw new Error('Error: ' + response.statusText);
    })
    .then(data => data.data)
    .catch(err => console.log(err));
};

const createItems = items => {
  return items.reduce(
    (markup, item) =>
      markup +
      `<li> id: ${item.id}, name: ${item.name}, age: ${item.age} </li>`,
    '',
  );
};

const updateItems = items => {
  const markup = createItems(items);
  listAllUsers.innerHTML = markup;
};

const btnClick = event => {
  event.preventDefault();
  getAllUser().then(updateItems);
}

btnAllUsers.addEventListener('click', btnClick);

///////////////////////////////////////

const userId = document.querySelector('.js-getUserById');//form
const inputUserId = document.querySelector('.js-inputId');///input
const userById = document.querySelector('.js-usersById');//ul

const getUserById = (id) => {
  return fetch(`https://test-users-api.herokuapp.com/users/${id}/`)
    .then(response => {
     if (response.ok) return response.json(); 
 
    throw new Error('Error: ' + response.statusText);
    })
    .then(data => data.data)
    .catch(err => console.log(err));
};

const createItem = ({id, name, age}) => {
  const markup = `<li> id: ${id}, name: ${name}, age: ${age} </li>`;
  userById.innerHTML = markup;
};

const btnSubmitId = event => {
  event.preventDefault();
  getUserById(inputUserId.value).then(createItem);
  event.target.reset();
}

userId.addEventListener('submit', btnSubmitId);


/////////////////////////////////////////////////////////////////

const addUserForm = document.querySelector('.js-addUser');//form
const addName = document.querySelector('.js-inputAddName');//inputname
const addAge = document.querySelector('.js-inputAddAge');//inputage
const listNameAge = document.querySelector('.js-addUsersNameAge');//ul

// name -> String, age -> Number;
const addUser = (name, age) => {
  const newUser = {
    name: name,
    age: age,
  }

 return fetch(`https://test-users-api.herokuapp.com/users/`, {
   method: 'POST',
   body: JSON.stringify(newUser),
   headers: {
    Accept: 'application/json',
    "Content-type": "application/json; charset=UTF-8"
  }
 })
    .then(response => {
      if (response.ok) return response.json();

      throw new Error('Error: ' + response.statusText);
    })
    .then(data => data.data)
    .catch(err => console.log(err));
}

const createNewUser= ({name, age}) => {
  const markup = `<li> Add user: ${name}, Age user: ${age} </li>`;
  listNameAge.innerHTML = markup;
};

const submitId = event => {
  event.preventDefault();
  addUser(addName.value, addAge.value).then(createNewUser);
  event.target.reset();
}

addUserForm.addEventListener('submit', submitId);

// //////////////////////////////////////////////////////
// delete user
const removeUserId = document.querySelector('.js-removeUser');//form
const inputId = document.querySelector('.js-removeUserId');//inputid

const removeUser = (id) => {
  
 return fetch(`https://test-users-api.herokuapp.com/users/${id}/`, {
  method: 'DELETE',
  }).then(() => console.log('success'))
   .catch(err => console.log(err));
  };

const submitRemoveId = event => {
  event.preventDefault();
  removeUser(inputId.value);
  event.target.reset();
}

removeUserId.addEventListener('submit', submitRemoveId);

/////////////////////////////////

const updateUsers = document.querySelector('.js-updateUser');
const updateId = document.querySelector('.js-updateId');
const updateName = document.querySelector('.js-updateName');
const updateAge = document.querySelector('.js-updateAge');
const updateList = document.querySelector('.js-updateUsers');


const updateUser = (id, name, age) => {
  const updateNewUser = {
    name: name,
    age: age,
  }

 return fetch(`https://test-users-api.herokuapp.com/users/${id}/`, {
  method: 'PUT',
  body: JSON.stringify(updateNewUser),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
 })
    .then(response => {
      if (response.ok) return response.json();

      throw new Error('Error: ' + response.statusText);
    })
    .then(data => data.data)
    .catch(err => console.log(err));
}

const sabmitUpdateUser = event => {
  event.preventDefault();
  updateUser(updateId.value, updateName.value, updateAge.value).then(user => {
    const markup = `User update id: ${user[`id`]}, name - ${user[`name`]}, age - ${user[`age`]}`;
    updateList.innerHTML = markup;
  })
  event.target.reset();
}

updateUsers.addEventListener('submit', sabmitUpdateUser);























