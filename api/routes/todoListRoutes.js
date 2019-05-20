'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/todoListController');

	// todoList Routes
	app.route('/place')
		.get(todoList.list_all_places)
		.post(todoList.create_a_place);
	//app.route('/search')
		//.post(todoList.search_places);

	app.route('/place/:placeId')
		.get(todoList.read_a_place)
		.put(todoList.update_a_place)
		.delete(todoList.delete_a_place);
};
