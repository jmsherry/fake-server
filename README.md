# Fake Services

We use the package json-server (with either a generated json file or a file which programattically generates data) when we want dummy data of our own.

Try it... Clone the repository `git clone git@github.com:jmsherry/fake-server.git` and install the dependancies `yarn`.

Now run `yarn json-server db.json` (or `npx json-server db.json`) to use the static json file, OR `yarn start` (or `npm start`) to use the programitic one in `data.js`, and call the URLs shown in your command line.

If you're using `create-react-app` then you may need to set `"proxy": "http://localhost:8000",` in the `package.json`.

IF you intend to use a different key for the IDs of the records then you'll need to change the `start` command in `package.json` to `"start": "yarn json-server data.js --port 8000 --id _id"`, so that you can use `_id`.
