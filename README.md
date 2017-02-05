### Prerequisites

1. [Docker](https://docs.docker.com/engine/installation/)
2. [NodeJS](https://nodejs.org/en/)
3. [Yarn](https://yarnpkg.com/)

I have tested the build with NodeJS v7.2.0 and Docker version 1.13.1-rc1.

### Installation

After cloning the repo and installing the prerequisiets, you need to setup the database with the player stats.
Copy the _db-dump.sql_ file into _bfbc2-stats/db-dump/_. Now run `docker-compose up` in the root folder (where the docker-compose.yml file is) to install a mysql db and import the _db-dump.sql_ as new database.


After a few mins you can connect to the database under _localhost_ with the credentials _root:pass_.

After the database is ready, run `yarn install` in the root folder (where package.json is) to install all dependencies. 

### How to run 

After initally running `docker-compose up` there is a container up and running with a MySQL database in it. Run `docker ps -a` to list all containers. You can use `docker start/stop` with the container id to run/stop the container. The data (in this case database) remains in the container even while shutdown. 

To start the backend run `yarn run backend`.

To start the frontend run `yarn run serve`.


### Backend

After starting the backend you can browse to [http://localhost:8080/docs](http://localhost:8080/docs) and checkout the documentation of the API.

### Frontend

After starting the frontend you can browser to [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) to see the actual stats page.
While webpack-dev-server is running the page will get reloaded automatically upon file change.

