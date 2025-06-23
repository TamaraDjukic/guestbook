## Setup Steps

### 1. Clone the repository

```bash
git clone https://github.com/TamaraDjukic/guestbook.git
cd guestbook
```

### 2. Setup MySQL database

1. Log into MySQL

```bash
mysql -u root -p
```
2. Create database and table
```sql
CREATE DATABASE messageDatabase;
USE messageDatabase;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  message VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

3. Make .env file in backend folder for database 
```env
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=your_mysql_password
  DB_NAME=messageDatabase
  DB_PORT=5000
```

### 4. Start the app
   
Backend:
```bash
  cd backend
  npm install
  npm run server
```
Frontend:
```bash
  cd frontend
  npm install
  npm start
```
