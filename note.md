# Docker Notes (Interview Ready)

## 1. What is Docker?
Docker is a tool to **package an application with everything it needs** (code, runtime, libraries, config) so it **runs the same way on any machine**.

**Why use Docker:**
- Same environment everywhere → no "works on my machine" problem.
- No manual setup → only Docker is needed to run the app.
- Isolation → apps with different versions run on one machine without conflict.
- Easy deployment → build once, run anywhere Docker is installed.
- Used in CI/CD → builds and tests run in the same environment every time.

---

## 2. Core Terms (must know)
- **Image**: a read-only template with instructions for creating a container.
- **Container**: a runnable instance of an image.
- **Dockerfile**: a text file with instructions to build an image.
- **.dockerignore**: a file listing what Docker should not copy into the image.
- **Docker Hub**: online registry where images are stored and downloaded from.
- **Port mapping (`-p`)**: connects a port on the host to a port in the container.
- **Cache / layers**: each Dockerfile instruction makes a layer; unchanged layers are reused (`CACHED`) to make builds faster.
- **Multi-stage build**: using more than one `FROM` in a Dockerfile; build in one stage, copy only the result into a small final stage.

---

## 3. My Project: Dockerizing my React portfolio

**What I did (say this in interview):**
> I dockerized my React + Vite portfolio using a multi-stage Dockerfile. The first stage uses `node:22-alpine` to install dependencies with `npm ci` and build the site. The second stage uses `nginx:alpine` and copies only the `dist` folder, so the final image is small and contains no Node.js or source code. I used a `.dockerignore` to skip `node_modules`, `dist` and `.git`, and ran it with port mapping `8080:80`.

### `.dockerignore`
```
node_modules
dist
dist.zip
.git
```
- Why: Docker installs packages and builds itself → these are not needed → faster build, smaller image.

### `Dockerfile`
```dockerfile
# Stage 1: build the website
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: serve the website
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

**Line by line:**
- `FROM node:22-alpine AS build` — base image with Node.js; stage named `build`.
- `WORKDIR /app` — working folder inside the image.
- `COPY package.json package-lock.json ./` — copy only package files first.
- `RUN npm ci` — install exact versions from `package-lock.json`.
- `COPY . .` — copy rest of the project.
- `RUN npm run build` — create `dist`.
- `FROM nginx:alpine` — new small stage with nginx web server.
- `COPY --from=build ...` — copy only `dist` from stage 1 into nginx folder.
- `EXPOSE 80` — documents that the container listens on port 80.

### Build and run
```bash
docker build -t mijashwizz .
docker run -d -p 8080:80 --name mijashwizz-site mijashwizz
```
- Open http://localhost:8080
- Final image size: ~111 MB (no Node.js inside).

### Update after code change
```bash
docker build -t mijashwizz .
docker rm -f mijashwizz-site
docker run -d -p 8080:80 --name mijashwizz-site mijashwizz
```
- Image holds code from build time → rebuild → replace container.

---

## 4. Commands Cheat Sheet

**Check**
- `docker --version` — show installed version.
- `docker run hello-world` — test that Docker works.

**Images**
- `docker build -t <name> .` — build image from Dockerfile in current folder.
- `docker images` — list images.
- `docker rmi <image>` — delete image.
- `docker pull <image>` — download image from Docker Hub.

**Containers**
- `docker run -d -p 8080:80 --name <name> <image>` — create and start container.
- `docker ps` — list running containers.
- `docker ps -a` — list all containers (also stopped).
- `docker start <name>` — start a stopped container.
- `docker stop <name>` — stop a running container.
- `docker rm <name>` — delete a stopped container.
- `docker rm -f <name>` — stop and delete.
- `docker logs <name>` — show container logs.
- `docker exec -it <name> sh` — open a shell inside a running container.

**`docker run` flags**
- `-d` — run in background (detached).
- `-p host:container` — port mapping.
- `--name` — give container a name.
- `-it` — interactive terminal.

**Status**
- `Up` — running.
- `Exited (0)` — stopped normally.
- `Exited (1)` — stopped with error → check `docker logs`.
- `Created` — created but never started.

---

## 5. Interview Questions & Answers

**Q: What is the difference between an image and a container?**
Image is a read-only template. Container is a running instance of that image. One image can create many containers.

**Q: Difference between Docker and a Virtual Machine?**
A VM includes a full guest operating system, so it is heavy and slow to start. A container shares the host OS kernel, so it is lightweight and starts in seconds.

**Q: What is a Dockerfile?**
A text file with step-by-step instructions to build an image.

**Q: What is a multi-stage build and why use it?**
A Dockerfile with multiple `FROM` stages. One stage builds the app, the final stage copies only the output. Result: smaller and more secure image (no build tools or source code).

**Q: Why copy `package.json` before the rest of the code?**
For layer caching. If only code changes, Docker reuses the cached `npm ci` layer, so builds are faster.

**Q: `npm ci` vs `npm install`?**
`npm ci` installs exact versions from `package-lock.json`, is faster, and is meant for CI/Docker. `npm install` can update the lock file.

**Q: What is `.dockerignore`?**
A file listing files/folders Docker should not send into the build. Makes builds faster and images smaller.

**Q: What does `-p 8080:80` mean?**
Port 8080 on the host is mapped to port 80 inside the container.

**Q: `EXPOSE` vs `-p`?**
`EXPOSE` only documents the port. `-p` actually publishes it to the host.

**Q: `COPY` vs `ADD`?**
`COPY` copies files. `ADD` can also extract tar files and download URLs. Prefer `COPY`.

**Q: `RUN` vs `CMD` vs `ENTRYPOINT`?**
`RUN` runs during image build. `CMD` is the default command when the container starts (can be overridden). `ENTRYPOINT` is the fixed main command of the container.

**Q: Why alpine images?**
Alpine is a very small Linux distribution → smaller images, faster downloads.

**Q: Container stopped after restart. Why?**
Containers do not restart automatically unless a restart policy is set (e.g. `--restart unless-stopped`). Use `docker start <name>`.

**Q: How do you debug a container that is failing?**
`docker ps -a` to check status, `docker logs <name>` to see errors, `docker exec -it <name> sh` to look inside.

**Q: Why can't I run two containers with the same name?**
Names are unique. Remove or rename the old one first (`docker rm -f <name>`).

**Q: What is Docker Hub?**
A public registry for storing and sharing images. `docker pull` downloads, `docker push` uploads.

---

## 6. Common Mistakes (I faced)
- `.dockerignore` created as a folder → must be a **file**.
- File not saved → empty file.
- Ran `docker build` outside project folder → `no such file or directory` → `cd` into project first.
- Ran `docker run` without removing old container → `name already in use` → `docker rm -f <name>`.

---

## 7. Docker + cPanel
- Shared cPanel hosting cannot run Docker containers.
- cPanel: upload built `dist` files (can be automated with CI/CD).
- Docker deployment needs a VPS or cloud platform (DigitalOcean, Hetzner, Render, Fly.io, AWS).
