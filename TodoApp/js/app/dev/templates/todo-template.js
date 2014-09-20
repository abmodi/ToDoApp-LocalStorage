define([], function() {

return		'<div class="view">' +
'			<input class="toggle" type="checkbox" <%= completed ? "checked" : "" %>>' +
'			<label><%= title %></label>' +
'			<button class="destroy"></button>' +
'			<button id="star" class= <%= starred ? "starred" : "no-starred" %>></button>' +
'		</div>' +
'		<input class="edit" value="<%= title %>">';
});