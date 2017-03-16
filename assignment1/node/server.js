'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');
const Routes = require('./lib/routes');
const Models = require('./lib/models/');

const server = new Hapi.Server();

server.connection({ port: Settings.port });

server.register([], (err) => {
  Hoek.assert(!err, err);

  // Add routes
  server.route(Routes);
});

Models.sequelize.sync().then(() => {
  server.start((err) => {
    Hoek.assert(!err, err);
    console.log(`Server running at: ${server.info.uri}`);

    // dummy data
    Models.User
      .create({
        id: 1,
        name: 'Bernardo'
      });

    Models.User
      .create({
        id: 2,
        name: 'Alves'
      });

    Models.Booker
      .create({
        id: 1,
        title: "test booker",
        UserId: 1
      });

    Models.Booker
      .create({
        id: 2,
        title: "test booker 2",
        UserId: 2
      });

    Models.Booking
      .create({
        id: 1,
        title: "test booking",
        BookerId: 1
      });

    Models.Booking
      .create({
        id: 2,
        title: "test booking 2",
        BookerId: 2
      });

    Models.Venue
      .create({
        id: 1,
        title: 'test venue'
      });

    Models.Space
      .create({
        id: 1,
        title: 'test space'
      });

    Models.Product
      .create({
        id: 1,
        title: 'test product'
      });

    Models.Item
      .create({
        id: 1,
        title: "test item",
        VenueId: 1,
        SpaceId: 1,
        ProductId: 1
      });  
  });
});

