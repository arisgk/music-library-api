FROM node:11.5.0-alpine

# Run the image as a non-root user
RUN adduser -S api
USER api

# Create app directory
RUN mkdir -p /home/api/app
WORKDIR /home/api/app

ENV NODE_ENV production

# Install app dependencies
COPY --chown=api:nogroup package.json /home/api/app
RUN npm install

# Copy app source to working directory
COPY --chown=api:nogroup . /home/api/app

EXPOSE 5000

# Start the app
CMD [ "node", "src/server.js" ]