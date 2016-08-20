# SSO-demo

[![devDependencies Status](https://david-dm.org/alanshaw/david-www/dev-status.svg)](https://david-dm.org/alanshaw/david-www?type=dev) [![devDependencies Status](https://david-dm.org/ShekharReddy4/sso-demo.svg)](https://github.com/ShekharReddy4/sso-demo/blob/master/package.json)  [![chatroom icon](https://patrolavia.github.io/telegram-badge/chat.png)](https://telegram.me/shekharreddy)

A demo SSO authentication in an express node application during GSoC 16.
This project demonstrates how you can use the SSO authentication in node+express app if you want to authenticate against OpenMRS ID

# Dependencies
This repo uses [atlas-node-multipass](https://www.npmjs.com/package/atlas-node-multipass) module for decoding the multipass tokens that comes from the OpenMRS ID

# Test the demo

Clone the repo `git clone https://github.com/ShekharReddy4/sso-demo.git`
navigate to project root `cd sso-demo`
Install the dependencies `npm install`
Run the app `nodemon`

Make sure you have the mockid-node is running locally if not, checkout the instructions to run the mockid-node locally [here](https://github.com/ShekharReddy4/atlas-mockid-node#to-use-this-with-sso-demo)

# Note
Make sure you have following installed locally

1. you have node installed.
2. nodemon installation(not required if you want to run it manualy).
