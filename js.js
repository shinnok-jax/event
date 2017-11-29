var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  var element = document.createElement('li');
  var liczba = document.getElementsByTagName('li').length;
  element.innerHTML = 'item ' + liczba ; 
  list.appendChild(element);
});