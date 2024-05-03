const sisense = require('@sisense/sdk-rest-client');

// Create a new Sisense object
const client = sisense({
  username: process.env.SISENSE_USERNAME,
  password: process.env.SISENSE_PASSWORD,
  server: process.env.SISENSE_SERVER
});

// Get a list of all dashboards
client.dashboards.getAll().then((dashboards) => {
  console.log(dashboards);
}).catch((error) => {
  console.error(error);
});

// Get a list of all widgets in a specific dashboard
client.dashboards.getWidgets({
  dashboardId: '5f7b6c4b5f5b1b001f7c3f9c'
}).then((widgets) => {
  console.log(widgets);
}).catch((error) => {
  console.error(error);
});
