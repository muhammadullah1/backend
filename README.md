
## Config

- For development, define required variables in development.json
- For production, define required variables as environment variable in remote setup.

## Database

- If using Mongodb

## Contributing

- Every Database Table should have a corresponding Model file in `models` folder
- We use `Mongoose` as our ORM
- The `controllers` and `routes` folder should exactly mimic each other. All routers in `routes` should have their corresponding `controllers` file/folder
- All logging should be done using `req.log`. It's a bunyan logger. For model level logging, `req.log` should be passed to underlying layers
