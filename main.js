document.addEventListener('DOMContentLoaded', function() {
   
    const button = document.getElementById('myButton');

    function buttonClickHandler() {
      alert('Кнопка нажата');
    }
  
    button.addEventListener('click', buttonClickHandler);
    const link = document.getElementById('myLink');

    function linkClickHandler(event) {
      event.preventDefault();
      alert('Вы нажали на ссылку ' + event.target.innerText);
    }
  
    link.addEventListener('click', linkClickHandler);

    const outerDiv = document.getElementById('outerDiv');
  const innerDiv = document.getElementById('innerDiv');
  const innerButton = document.getElementById('innerButton');

  function buttonClickHandler() {
    
    alert('Кнопка нажата');
  }

  function divClickHandler(e) {
    e.stopPropagation()
    alert('Див нажат');
  }

  innerButton.addEventListener('click', buttonClickHandler);
  innerDiv.addEventListener('click', divClickHandler);
  outerDiv.addEventListener('click', divClickHandler);
  const list = document.getElementById('myList');

  function listItemHandler(event) {
    alert('Вы выбрали элемент: ' + event.target.innerText);
  }

  list.addEventListener('click', listItemHandler);


















  });