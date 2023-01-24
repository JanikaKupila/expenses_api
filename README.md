Expenses tracker
This app is designed for keeping track on where your money goes. This project was made as a part of TAMK Business Information System studies Backend course. Frontend for the project is not implemented.

General info
User can log everything they purchase in the database with information about the item, the shop where they bought it, the category of the purchase (f.e. leisure or necessity), its price and the date the purchase was made.
User can:
- view all their purchases
- view a specific purchase by ID
- view all purchases made in specific month
- view all purchases made in specific shop
- add new purchases
- update existing purchases
- delete existing purchases

Technologies used
- JavaScript
- Express/Node.js
- MySQL Database
- Restful API

How to use
To use this app on your own local computer, you can upload the files from GitHub (https://github.com/JanikaKupila/expenses_api) and create your own .env file, where you declare the following information:
DB_HOST = 
DB_USER = 
DB_PASSWORD = 
DB_DATABASE = 
Then, use "nodemon index.js" in the root folder CMD. After this you need to create your own table and insert data in it: you can find example template for it from db.sql. Please note that you have to change the first row's USE xrjasi1 to use your own database's name.

Self evaluation
I cannot say I'm totally happy with this project, but I'm glad I was able to make it in my current situation and that its basic functionalities are working ok, depite f.w. testing isn't working as it should be and the entire project was finished late. I would give myself the following evaluation:
A. 12, Solution partially planned out
B. 06, Backend runs only locally
C. 12, Many parts of the Backend implementation requirements are not implemented
D. 12, Code hard to follow in one reading; poor use of language capabilites
E. 10, Partial, poorly written or poorly formatted API and README documentation
Total: 52