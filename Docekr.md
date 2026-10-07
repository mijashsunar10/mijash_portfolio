# We can check that docker is installed nad running 
docker --version
docker run hello-world

# Two main things in the docker 
Image : a read only template to with an instruction for creating a container.
Container : a runnable instance of iamge ..

#  docker run hello-world
1. Docker can download an image from Docker hub.
2. Docker can create a container from that iamge 
3. Container can run and show output in the terminal.

# Dockerignore
When Docker builds your project, it first copies your project folder. This file tells Docker which items not to copy.
node_modules : Docker will downlaod the fresh package itseld so our copy is not needed
dist : Dokcer will build itself website so our old build was not needed 
dist.zip : It is a capnel zip so not needed
.git no need for git history

# Docker file
# Stage 1
FROM node:22-alpine AS build: starts from an image that has Node.js installed, and names this stage build.
- WORKDIR /app: creates the folder /app inside the image and works there.
- COPY package.json package-lock.json ./: copies your package files into /app.
- RUN npm ci: installs your packages (creates node_modules inside the image).
- COPY . .: copies the rest of your project, skipping what's in .dockerignore.
- RUN npm run build: builds your website, which creates /app/dist.

# Stage 2
- FROM nginx:alpine: starts a new image with nginx, a web server.
- COPY --from=build /app/dist /usr/share/nginx/html: copies only the built dist from stage 1 into nginx's website folder.
- EXPOSE 80: records that the website runs on port 80 inside the container.

# docker build -t mijashwizz .
Docker runs your Dockerfile lines in order: it downloads Node.js, installs your packages, builds your site, then copies dist into nginx.

# docker run -d -p 8080:80 --name mijashwizz-site mijashwizz

What each part means:
- docker run: create and start a container from an image.
- -d: run it in the background, so your terminal stays free.
- -p 8080:80: connect port 8080 on your computer to port 80 in the container, where nginx listens. This is why you can open the site in your browser.
- --name mijashwizz-site: name the container, so it's easy to stop or remove later.
- mijashwizz: the image to use (the one we built).



# Step 1: Checked Docker
- Ran docker --version and docker run hello-world.
- Why: to check that Docker is installed and can download and run containers.

# Step 2: Created .dockerignore
- Listed node_modules, dist, dist.zip and .git in it.
- Why: so Docker doesn't copy them, which makes the build faster and the image smaller.

# Step 3: Created the Dockerfile
- Wrote the build instructions in two stages: Node.js builds the site, then nginx serves it.
- Why: Docker needs these instructions to create the image.

# Step 4: Built the image
- Ran docker build -t mijashwizz .
- Why: to make Docker follow the Dockerfile an.

# Step 5: Ran the container
- Ran docker run -d -p 8080:80 --name mijashwizz-site mijashwizz
- Why: to start your site from the image, so i080.



# docker start mijashwizz-site
What it does: Restarts the existing container mijashwizz-site with the same settings it had before (port 8080 and the same image).

# docker stop mijashwizz-site
 Tells nginx inside the container to shut down, then stops the container.

# docker ps -a
docker ps -a shows all containers, including stopped ones.

# docker rm mystifying_wilson romantic_lederberg
Deletes those two stopped containers. You can use either the name or the ID.

# docker images
Shows every image on your computer with its name, ID and size. You'll see mijashwizz, hello-world, nginx, node and others.


# docker build -t mijashwizz .
- Builds a new image with your latest code.
- It's faster this time because Docker reuses the steps that didn't change (this is called cache).