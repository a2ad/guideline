Vue.component('todo-item', {
	props: ['todo'],
  	template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
	el: '#app1',
	data: {
		groceryList: [
			{id: 0, text: 'Tomato'},
			{id: 1, text: 'Meal'},
			{id: 2, text: 'Soda'},
		]
	},
});
