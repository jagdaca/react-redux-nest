
<br />
<p align="center">

  <h3 align="center">React-Redux  +  NestJS </h3>

  <p align="center">
    A single page app that displays blog entries from a database after a user logs in. Blog entries are either "published" or "archived". Only "admins" can pull archived blog entries from the DB.
    <br />
    <a href="https://youtu.be/EpudLkru6m4">View Quick Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation-and-execution">Installation and Execution</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![homepage](https://github.com/jagdaca/react-redux-nest/blob/main/blob/homepage.png?raw=true)

### Built With

* [React](https://reactjs.org/) - [Redux](https://redux.js.org/)
* [NestJS](https://nestjs.com)
* [MySQL](https://www.mysql.com/)

### Prerequisites

* npm
* postman (or any API tool) - for initial population of DB


### Installation and Execution

* Initial
1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Run your MySQL DB

* React-Redux
1. Change directory to frontend-react-redux
   ```sh
   cd frontend-react-redux
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run
   ```sh
   npm start
   ```
   
* NestJS
1. Change directory to backend-nest
   ```sh
   cd ..\backend-nest
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Modify app.module.ts, point it to your MySQL DB and provide valid credentials.
![module-backend](https://github.com/jagdaca/react-redux-nest/blob/main/blob/module-backend.jpg?raw=true)

4. Run
   ```sh
   npm start
   ```

* Populate DB
1. USERS => The registration page of frontend can only create "member" users, use an API tool to create "admin" users by making a POST request at the 
   following endpoint
   ```sh
   localhost:3000/users/register
   ```
   
   JSON request body could look like,
   ```sh
   {    
      "username": "john",
      "password": "mypassword",
      "role": "admin"
   }
   ```
   
2. BLOGS => sample blog entries can be found at https://gist.github.com/shierro/64b15f127657bdbf6e7de321cd397c21
   Make a POST request at
   ```sh
   localhost:3000/blogs
   ```
   
   JSON request body could look like,
   ```sh
   {
      "id": 1,
      "title": "React.js Powertools!",
      "status": "published",
      "views": 200000,
      "content": "#lorem ispum #react.js",
      "publishedAt": "2021-01-11T14:16:51.850Z",
      "createdAt": "2021-01-10T14:16:51.850Z",
      "updatedAt": "2021-01-11T14:16:51.850Z"
   }
   ```



<!-- CONTACT -->
## Contact

Your Name - jacobagdaca@gmail.com

Project Link: [https://github.com/jagdaca/react-redux-nest](https://github.com/jagdaca/react-redux-nest)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Google](https://www.google.com/)
* [YouTube](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO)
* [StackOverflow](https://stackoverflow.com/)
* [NestJS Documentation](https://docs.nestjs.com/) --- Great documentation
* [Jason Watmore](https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example)






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=for-the-badge
