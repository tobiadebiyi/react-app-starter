# client build
FROM node:alpine AS node-builder
COPY client/package.json .
RUN npm i

COPY ./client .
RUN npm run build

# deployment
COPY --from=node-builder ./build build

# execute
