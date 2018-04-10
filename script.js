var add = document.getElementById('addElem'),
	list = document.getElementById('list');

function checkOnclickEvent(param) {
  console.log(param);
}

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var itemsByTagName = document.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + itemsByTagName;
	list.appendChild(element);
});

