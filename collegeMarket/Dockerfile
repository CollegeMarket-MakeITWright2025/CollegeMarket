#Download Node Alpine image
FROM node:alpine As build
 
#Setup the working directory
WORKDIR /usr/src/app
 
#Copy package.json
COPY package.json package-lock.json ./
 
RUN npm install -g @angular/cli
#Install dependencies
RUN npm install
 
#Copy other files and folder to working directory
COPY . .
 
EXPOSE 4200

CMD ng serve --host 0.0.0.0