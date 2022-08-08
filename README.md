# Staff Organizer

## Description 

In this application you will be interacting with the terminal to view, add or update data that is stored in a database. 

When the commands have been made in the terminal (See [Installation](#installation) on more information on how to install), the 

main menu will apprear. Once a selection has been made the application will either view, add or update the 

database, depending on the selection. Use this application to manipulate the database and keep track of 

employees, managers and their roles.

---

## Demo

User Demonstration

https://user-images.githubusercontent.com/105801681/183331588-908b434c-7623-4c84-98e2-82c073d9a23c.mp4

---

## Installation

(**MUST have MySQL installed before using this application**)

1) Clone Staff Organizer repository 

![Staff Organizer](./Main/Images/Clone.PNG)

2) Navigate to 'index.js' located in the 'Main' folder, then open the file.

![Staff Organizer](./Main/Images/'index.js'.PNG)

3) On lines 12 & 15 enter your mysql login information

![Staff Organizer](./Main/Images/MySQL%20info.png)

4) Right click 'index.js', then 'Open in Intergrated Terminal' 

![Staff Organizer](./Main/Images/Enter%20Terminal.PNG)

5) Run 'mysql -u root -p' then enter a password if needed

![Staff Organizer](./Main/Images/MySQL%20terminal.PNG)

6) While in mysql run the commands 'source db/schema.sql' followed by 'source db/seeds.sql'

![Staff Organizer](./Main/Images/source%20pt.1.png) ![Staff Organizer](./Main/Images/source%20pt.2.png)

7) Enter 'Quit' to exit mysql.

![Staff Organizer](./Main/Images/Quit.PNG)

8) Run the command 'node index.js'

![Staff Organizer](./Main/Images/Start.png)
---

## Tools Used

* Node.js
* NPM
 * MySQL2
 * Inquirer
 * Console.table

 ---

 ## Contact Information

 Matthew Castoreno

 Email: <matthew.castoreno@yahoo.com>



