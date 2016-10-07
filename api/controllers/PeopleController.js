/**
 * PeopleController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	createPerson: function(req, res) {
		console.log("Created a person");
		return res.ok();
	}

};
