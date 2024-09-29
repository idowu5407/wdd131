// select elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// add event listener to button
button.addEventListener('click', function() {
  // create li element
  const listItem = document.createElement('li');
  
    //create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  
  // add input value to li element
  listItem.textContent = input.value;
  
  // append delete button to li element
  listItem.appendChild(deleteBtn);
  
  // append li element to unordered list
  list.appendChild(listItem);
  
  // clear input field
  input.value = '';

  // add event listener to delete button
  deleteBtn.addEventListener('click', function() {
    list.removeChild(listItem);
  });
});