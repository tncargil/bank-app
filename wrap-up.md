## Questions

### Please provide instructions on how to run your project in a bulleted list below.
Clone repo: https://github.com/tncargil/bank-app
Download the latest version of node.js https://nodejs.org/en/download
Open up visual studio and in the terminal window run 'docker-compose up -d'
Install dotenv: 'npm install dotenv'
Open up a seperate terminal window and
cd into the path of this project /bank-app
start the server by running 'node server.js'
Once the server is running go back to Vscode and run 'npm start'


### Were there any pieces of this project that you were not able to complete that you'd like to mention?
All the core functionality is there.
### If you were to continue building this out, what would you like to add next?
 I would have liked to have included a back button but I couldn't find a png online that I liked enough to use so instead there is a link at the bottom that takes you back to enter your account number. Also I just used a simple alert for the error checking this could be better improved by displaying an error flag. For the daily withdraw tracker I added an extra column into the existing table to store how much they had withdrawn and the date of their last withdraw this info could have been stored in another lookup table for a cleaner implementation but I instead joined them together into one column in the same table. 
### If you have any other comments or info you'd like the reviewers to know, please add them below.
Feel free to reach out if you encounter any issues running the repo. 