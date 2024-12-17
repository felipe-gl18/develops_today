# develops_today
DevelopsToday test code application

After clone this project, just follow the commands to initialize the application

## How to setup the Back-End

cd back_end  
npm install  
npm run start:dev  

the API will listen on http://localhost:3000  

## How to setup the Front-End  

cd front_end  
npm install --legacy-peer-deps  
npm run dev  

the Front-End will listen on the http://localhost:3001  
Usually it listens on http://localhost:3001, but our API is already using the 3000 port, next wil automaticly use 3001 instead  
We would use just npm i, but with --legacy-peer-deps we avoid any errors.  
