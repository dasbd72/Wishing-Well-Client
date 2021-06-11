# Define from what image we want to build our own image from.
FROM node:14.16

# Create the working directory that holds the application code inside our image.
RUN mkdir /app
WORKDIR /app

# Bundle app source
COPY . /app

RUN npm install --legacy-peer-deps

# Bind app to the specified port to be mapped by the Docker daemon.
EXPOSE 8080

# Define the command to run app.
CMD ["npm", "start"]
