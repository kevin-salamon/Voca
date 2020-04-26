# Voca
![Logo, a stylized V in an orange circle](https://drive.google.com/file/d/1lQwVYqv39dCXdJYRKkqX7F4z92n1GaYh/view?usp=sharing)

An application for the hack:now hackathon.

## Project Description 

Voca is a simple, streamlined, and user-friendly application that allows job seekers to keep track of their job applications, assign follow ups, and organize their job hunt in a single place. Users can search & filter their applications by title, employer, and more. Applications are color coded to indicate followup dates in the near future. We hope that this app will relieve some of the stress of simultaneously managing many disparate job applications.

## Table of Contents 

1. [Dependencies](##Dependencies)

2. [Installation](##Installation)

3. [Usage](##Usage) 

4. [Future Plans](##Future-Plans)

5. [Additional Contributors](##Contributors)

## Dependencies

### Server
1. Express
2. Flask
3. Axios

### Database
MongoDB

### Front-End - React
1. React-DOM
2. React-Router-DOM
3. React-Moment

## Installation

### Javascript Dependencies
Install javascript dependencies with node package manager.
Navigate to `Voca/http/web/client` and `run npm install`.

### Python Dependencies
Install python dependencies with pip.
Navigate to `Voca/http/web/py` and run `pip install -r requirements.txt`

## Usage 

Launch the React application by running `npm start` from the `client/` directory.

Launch the Flask server by running the following in the `web/` directory.

### Linux / Mac OSX
```
export FLASK_APP=$PWD/py/server.py
python -m flask run --port 4433
```
### Windows
```
$Env:FLASK_APP=$PWD\py\server.py
python -m flask run --port 4433
```

Voca is a fully fleshed-out job application management app where job seekers can manage their job hunt in one place. Users can add their applications, organize by status (waiting response, pending onsite, etc.), and schedule follow up dates. Users can also declutter their job application list by using the search bar, which filters the list down to certain job titles, employers, and statuses. Our goal for this application is that users can store all their job applications in one easy, manageable web app throughout their application process.

On launch, users enter a single page app where they are given the option to add a job. Upon selecting the job's title, employer, and any additional notes, the job files to a rolling job list. Users can then add additional jobs, modify the date of the next follow up with the calendar button, delete job applications using the delete button, or filter their job lists from the search bar. Click on the column headers (Title, Employer, ...) to filter the list alphabetically by that column.

## Future Plans

### Fully Mobile Responsive
Most screen sizes display Voca quite well, but once we get into the pixel widths of most phones the UI breaks down. It would be nice to have Voca accessible from all devices.

### User Authentication
Voca lacks user authentication. Currently, every user of the app will read/write to the same list of jobs. If we authenticate user accounts, we'll have a unique identifier for each user and allow them sole read/write access to their job list on the database.

### SMS Reminders for Followups
We want to utilize the follow up dates that users indicate to send optional SMS reminders to users' phones using Celery, RabbitMQ, and Twilio's SMS API. This would allow users to set reminders for important phases of the hiring process like phone interviews and onsites.

## Contributors 

1. [Justin Lin](https://github.com/Chih-Chien-Lin)
2. [Kevin Salamon](https://github.com/kevin-salamon)
3. [Tim Salmon](https://github.com/SalmonTimo)
