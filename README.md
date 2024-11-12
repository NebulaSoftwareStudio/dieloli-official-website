# Dieloli Official Website
This repository contains the source code for the official website of dieloli.org.

[![License](https://img.shields.io/badge/license-Apache%20License%20V2-D42C32.svg)](https://github.com/NebulaSoftwareStudio/dieloli-official-website/blob/main/LICENSE)

Originally, we built the site using basic HTML and CSS, but this approach made development challenging. 
In 2024, we transitioned to using `Vue 3` to streamline the development process and introduce a new UI design.

The source code for the old site has been moved to the `frontend-v1` folder.

The new version of the website includes a *backend* component that updates GitHub release versions in real-time and initializes mirrors.
The backend logic is divided into two parts: 

* the first is an `API` built with PHP to handle communication between the website frontend and the database,
* and the second is a `scheduled task` component implemented in Python, which uses gh-cli to update versions and build mirrors.

For detailed information, please refer to the `backend-v2` folder.


## Develop Plan
* ~~Redesign page footer~~  ✅ finished;
* ~~GitHub Release Update~~ ✅ finished;
* Dark Mode support;
* i18n support;
* develop path module;
* change log module;

## License
This website is develop for **Dieloli Project**. Under `Apache License V2.0` for free use.
