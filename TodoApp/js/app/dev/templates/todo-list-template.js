define([], function() {
	
	return  '<div class="todo-list-view" id="todoapp">' + 
	'		<header id="header">' +
	'			<h1>todos</h1>' +
	'			<input id="new-todo" placeholder="What needs to be done?" autofocus/>' +
	'		</header>' +
	'		<section id="main">' + 
	'			<input id="toggle-all" type="checkbox">' +
	'			<label for="toggle-all">Mark all as complete</label>' +
	'			<ul id="todo-list"></ul>' +
	'		</section>' +
	'		<footer id="footer"></footer>' +
	'	</div>' +
	'	<div id="info">' +
	'		<p>Double-click to edit a todo</p>' +
	'		<p>Written by <a href="https://github.com/abmodi">Abhishek Modi</a></p>' +
	'	</div>';
});