# CompareX

CompareX, an innovative enterprise product company specializing in intelligent automation solutions tailored for our valued clients

## Build Process

### Setting up docker (Build Environment)

Execute the following command to build a new docker image from the bundled Dockerfile

`docker build  -t compare-x .`

This will create a new docker image with the name **compare-x**.
Commands can be executed on this image using the following syntax

`docker run --rm -v $(pwd):/app -it compare-x <command>`

### Installing dependencies

`docker run --rm -v $(pwd):/var/ww/compare-x -it compare-x npm install`

This will install the dev dependencies as well as the project dependencies.

### Building the files

`docker run --rm -v $(pwd):/var/ww/compare-x -it compare-x npm run build"`

This will create the build folder `/dist`.

The `npm build` command accepts the following flags.

### Running the application in development

Docker Compose has been set for the development.

The following command will setup the docker-compose.

`docker run --rm -v $(pwd):/var/ww/compare-x -p 7000:7000 -it compare-x npm run start`
