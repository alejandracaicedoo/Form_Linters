<a name="readme-top"></a>

<div align="center">
  
  <img src="./src/assets/images/LOGOv2.png" alt="logo" width="250" height="250" />
  <br/>

  <h3><b>TV Maze App</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- Description
- Features
- Technologies Used
- Installation
- Usage
- Authors
- Contributions
- License

<!-- PROJECT DESCRIPTION -->

[Formulario sena] This project is a contact form designed to collect user information, including name, email, and message. The form validates the entered data and displays error messages if the information is incorrect.

### Tech Stack <a name="tech-stack"></a>

<li> HTML5 </li>
<li> CSS3 </li>
<li> Javascript ES6</li>

<!-- Features -->

### Key Features <a name="key-features"></a>

- [HTML & CSS Best practices]
- Required field validation.
- Custom error messages.
- Responsive design that adapts to different devices.

### Likes:

This form allows you to:

- Record information easily and quickly.
- Validate data in real-time to avoid errors in the fields.
- Send the information to the server using Express.
- Stylize and customize the design with Webpack and CSS.
- Check for errors with ESLint and Stylelint to improve code quality.
- Optimize files with Webpack for better performance.

🚀 Ideal for form validation and processing practices in web projects.

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

To run this project you need the following tools:

- [VS Code ]
- [Git and GitHub ]
- [Express ]
- [docker and docker compose ]
- [Docker Hub ]
- [Bash Script ]
- [Webpack Installation ]

### Setup

Clone this repository to your desired folder:

sh
  C:\Users\Portatil\Documents\Proyecto111
 git clone
git@github.com :(https://github.com/alejandracaicedoo/Form_Linters.git)

  


### Install

Install this project with:

Lighthouse run

sh
    npm install -g @lhci/cli@0.7.x


Webhint:

sh
     npm install --save-dev hint@7.x


Stylelint:

sh
     npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x


Eslint

sh
     npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x


Webpack

sh
     npm init -y
     npm install webpack webpack-cli --save-dev


Webpack Css loader

sh
     npm install --save-dev style-loader css-loader


Webpack html loader

sh
     npm install --save-dev html-loader


Webpack html plugin

sh
     npm install --save-dev html-webpack-plugin


Webpack dev server

sh
     npm install --save-dev webpack-dev-server


Babel Dependency loader

sh
     npm install --save-dev babel-loader


Minify CSS: To reduce the size of your CSS file by removing unnecessary characters such as whitespace and comments.

sh
     npm install --save-dev css-minimizer-webpack-plugin


Split Js : If your JS file is large, splitting it into smaller modular files can help improve the loading time.

sh
     npm install --save-dev terser-webpack-plugin


Split CSS: If your CSS file is large, splitting it into smaller modular files can help improve the loading time.

sh
     npm install mini-css-extract-plugin --save-dev


Babel core

sh
     npm install --save-dev @babel/core @babel/preset-env


Express and body-parser

sh
     npm install --save express body-parser


Concurrent, the npm package for running multiple commands in parallel

sh
     npm install --save-dev concurrently


### Usage

To run locally run the following command:

## Development mode

sh
    npm run build-dev
    npm run devserver-reload


## Production mode

sh
    npm run build-prod
    npm run server-prod


### Run tests

To run tests, run the following command:

To test the Stylelint linter:

sh
    npx stylelint "*/.{css,scss}"


To test the Webhint:

sh
    npx hint .


To test the ESLint linter:

sh
    npx eslint .


### Deployment

## Local deployment using Docker:

In root project folder run the following command:

sh
    docker  build -t Formulario-Sena nginx/Dockerfile .


Then run the following command:

sh

    docker -it --name tvapp  run -p 443:443 -p 80:80 -v ./dist😕usr/share/nginx/html -d Formulario-Sena


Be sure to replace the path of your project dist folder

If you want to use docker hub image repository, run the following command:

sh
    docker pull 810129/tvapp
    docker -it --name tvapp  run -p 443:443 -p 80:80 -v ./dist😕usr/share/nginx/html -d 810129/tvapp


## Local deployment using Docker-compose:

In root folder run the following command:

sh
    docker compose up -d


The above command will deploy the app in localhost on port 443 and 80 through dockerized nginx webserver.

### Cloud Production deployment:

In root folder run the following command:

sh
    bash
deployment.sh
 -u username -i ipaddress -d Namefolder -e environment


The arguments are:

- -u username
- -i ipaddress
- -d Namefolder
- -e environment (prod or dev) respectively

With the last script, the app will be deployed to any cloud provider you want to use, you only need the IP address and the right permission to access it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

Alejandra Caicedo

👤 Author1

- GitHub:   (https://github.com/alejandracaicedoo/Form_Linters.git)

- LinkedIn: [LinkedIn](https://www.linkedin.com/in/jeysson-aly-contreras/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] [Personalized Recommendations]
- [ ] [Advanced Search Filters]
- [ ] [Notifications and Reminders]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page] (https://github.com/alejandracaicedoo/Form_Linters.git)
).

<!-- SUPPORT -->

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank God for giving me the strength to carry out this project.

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [GNU](LICENSE.md) licensed