# Define from what image we want to build our own image from.
FROM node:14.16

# Create the working directory that holds the application code inside our image.
RUN mkdir /app
WORKDIR /app

# Bundle app source
COPY server /app/server
COPY dist /app/dist

WORKDIR /app/server
RUN npm install

# Bind app to the specified port to be mapped by the Docker daemon.
EXPOSE 3000

# Define the command to run app.
CMD ["npm", "start"]
