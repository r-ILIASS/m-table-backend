<p align="center">
    <img src="./ReadmeAssets/banner.png" />
</p>
<p align="center">
    <img src="https://img.shields.io/badge/Tech--stack%3A-NodeJs%20--%20ExpressJs%20--%20MongoDB%20%7C%20mongoose%20--%20bcrypt%20--%20%20winston%20--%20lodash%20--%20joi%20--%20moment%20--%20config%20--%20cors%20--%20jsonwebtoken%20--%20compression%20--%20helmet%20--%20jest-blue" />
</p>

# About

A complete NodeJs backend for M-Table using ExpressJs and MongoDB, providing API endpoints for all CRUD operations, and an API endpoint for authentication. In this backend, I covered the use of custom middleware, monkey-patching all ExpressJs routes with the help of ExpressJs's error middleware and a library called express-async-errors, and I learned an elegant way to model objects in NodeJs with the help of mongoose.

I also managed to log all handled exceptions in seperate log files, and in a MongoDB collection using winston. Finally I refactored the code to simplify the implementation of each module and avoide mixing interests, **example:**

### Implementation of index.js

<img width="500" src="./ReadmeAssets/carbon.png" />

---

## Important environment variables

`movies_jwtPrivateKey=<key>`

`movies_db=<PathToDB>`

`PORT=<port>`
