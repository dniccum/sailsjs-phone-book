/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	createPerson: function(req, res) {
		Person.create({
			name: req.param('name'),
			company: req.param('company')
		}).exec(function(error, response) {
			if (error) return res.badRequest(error);

			sails.log('New record created: ', JSON.stringify(response));
			return res.ok(response);
		});
	},
	destroy: function(req, res) {
		var id = req.param('id');

		Person.findOne({
			id: id
		}).exec(function(error, personInfo) {
			if (!personInfo) return res.notFound();

			PhoneNumber.destroy({
				person: id
			}).exec(function(phoneError) {
				if (phoneError) return res.negotiate(phoneError);
				sails.log('All numbers deleted assoc. with: ', id);

				Person.destroy(id).exec(function(personError) {
					if (personError) return res.badRequest(personError);

					sails.log('Person with id deleted: ', id);
					return res.ok();
				});
			});
		});
	}

};
