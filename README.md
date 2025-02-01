# College Market

**College Market** is an open-source platform designed to connect students within a specific university, creating a stronger sense of community. Inspired by the communal spirit of a farmers market, it provides a space for students to buy and sell items, exchange course advice, and offer tutoring services.

## Features

- **Buying and selling items**: Students can post and browse items for sale, from textbooks to furniture.
- **Course advice**: A platform for students to give and receive advice on courses, professors, and academic life.
- **Tutoring services**: Students can offer or find tutoring services for various subjects.

## Technologies Used

- **Angular** for building the front-end
- **MariaDB** for database management

## Why College Market is Important

College can be an isolating experience, especially for students looking for resources, advice, or affordable essentials. **College Market** bridges this gap by creating a **student-driven marketplace** where students can support one another—whether by **buying and selling items, sharing course advice, or offering tutoring services**.  

Designed with the **community spirit of a farmers market**, College Market fosters **connections, collaboration, and convenience** within a university. It not only makes student life more affordable but also strengthens the **campus network**, encouraging students to **engage, support, and succeed together**.

## Installation

To set up **College Market** on your local machine, follow these steps:

1. **Clone the repository**  
   Start by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/college-market.git
   cd college-market
2. **Install dependencies**  
   Ensure that you have **Node.js** and **npm** installed. Then, install the necessary dependencies by running the following command:

   ```bash
   npm install
3. **Set up the database**  
   College Market uses **MariaDB** for data storage. Install and set up MariaDB on your system. You will need to create a database and set up the schema by running the following commands:

   ```bash
   mysql -u root -p
   CREATE DATABASE college_market;
4. **Configure environment variables**  
   Create a `.env` file in the root of the project and add the necessary environment variables (e.g., database credentials, server port):
   ```makefile
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=college_market
   PORT=4200
5. **Run the application**  
   Once everything is set up, run the application using:

   ```bash
   npm start
### Future Improvements

We are constantly working to improve **College Market**, and here are some areas where we’d love contributions or ideas:

- **Roommate finding**: A feature to help students find compatible roommates based on preferences and needs.
- **Subleasing off-campus units**: A space for students to post available subleases or find off-campus housing options.
- **User authentication**: Add a secure login system for students.
- **Advanced search filters**: Improve search functionality for buying/selling items and course advice.
- **Mobile responsiveness**: Make the platform more mobile-friendly.
- **Event postings**: Add a feature for students to post or find campus events.

If you have an idea for a feature or improvement, feel free to open an issue or submit a pull request!
