# Twitter-profile-api

A serverless AWS project that allows getting the information of a user's profile and the list of associated tweets, developed with NodeJs, Aws services (Api Gateway, DynamoDB, S3, IAM users, CloudFormation, Lambda, CloudWatch), Github CI/CD, Postman, raml2html (document api)

    .
    ├── .github                  # Compiled files (alternatively `dist`)
	|	  ├── workflows       	 # Dir with the github actions
	|			├── main.yaml    # Contains the deploy actions to the aws server
    ├── docs                  	 # Files document proyect
	|	 ├── postman             # Postman folder with collection and environments
    ├── src                      # Source files (alternatively `lib` or `app`)
    |    ├── commands         	 # Files than uses database
	|    ├── db         	     # Contains the database instance
    |    ├── functions           # Files that contains the functions to expose
    |    ├── interactors         # Files that works whith different data sources
    |    ├── mappers             # Files to allows get the data
    |    ├── services            # Files to allows integrate with different apis
    |    └── utils               # Util files functions, constants
    ├── errors.js                # Error templates
    ├── serverless.js            # File with the serverless configurations
    └── README.md

## Take into account before deploy

Firstly is necessary to deploy the current project to later you can configure the **`twitter-profile-frontend`**

## Deploy in AWS services

Firstly install dependencies `npm install`

### Create AWS account ando configure IAM user
> 1.   Create an [AWS](https://aws.amazon.com/free/) account.
> 2.   Install [AWS CLI]( https://aws.amazon.com/cli/).
> 4.   Create an [IAM CLI AWS user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_cliwpsapi) the user needs the next permissions:
- `IAMFullAccess`
- `AmazonS3FullAccess`
- `AmazonDynamoDBFullAccess`
- `CloudWatchLogsFullAccess`
- `AmazonAPIGatewayAdministrator`
- `AWSCloudFormationFullAccess`
- `AWSLambda_FullAccess`
> 5.   Save the credentials IAM CLI AWS user is a file .csv
> 6.   Configure AWS CLI with user IAM keys use in your terminal the command `aws configure`

### Create project in [app.serverless](https://app.serverless.com/) and deploy

> 1.   Go to the [app.serverless](https://app.serverless.com/) and create an account
> 2.   In the user settings **org settings** go to the tab **providers** and add a provider with your IAM user **(AWS Access Key, AWS Secret Key)**
> 3.   In the user settings **org settings** go to the tab **access keys** and add a provider with your IAM user **(AWS Access Key, AWS Secret Key)**, copy the key that will be used in the GitHub workflow
> 4.   Go to the app section and **create app** select the option **serverless framework**
> 5.   You should configure the fields **app** and **service** with the same configurations of the **serverles.yml** in this case:
- `Field app:` **twitter-profile-api**
- `Field service:` **twitter-profile-api**
> 6.   Clic **deploy**
> 7.   In your terminal inside your root project directory type the command `serverless login`
> 8.   In your terminal inside your root project directory type the command `serverless deploy`
> 8.   Wait a moment and enjoy your project deployed

### Deploy the project using Github actions

> 1.   Firstly you must have created your **access keys** in [app.serverless](https://app.serverless.com/)
> 2.   Go to github account repository to secrets section **`twitter-profile-api -> Settings -> Secrets`** **https://github.com/{YOUR_ACCOUNT}/twitter-profile-api/settings/secrets/actions**
> 3.   Create a **`New repository secret`** named **`SERVERLESS_ACCESS_KEY`** paste the **access keys** here and save
> 4.   the **`SERVERLESS_ACCESS_KEY`** works when you make push above the **`[main]`** branch of the repository you can look the configuration in **`.github/workflows/main.yaml`** in the **`41 line SERVERLESS_ACCESS_KEY: ${{ secrets.SERVERLESS_ACCESS_KEY }}`**
> 5.   Make some push above the **`[main]`** branch and go to the **`Actions section`** **`twitter-profile-api -> Actions`** **https://github.com/{YOUR_ACCOUNT}/twitter-profile-api/actions** in that part you can look the workflow working in the deploiment proccess, wait a moment until the project is published

### Test the twitter-profile-api

> 1.   After the project is published you must, go to the [AWS Management Console](https://console.aws.amazon.com/console/home?region=us-east-1) for this test use the **`us-east-1 region`**
> 2.   Find the [API Gateway](https://console.aws.amazon.com/apigateway/main/apis?region=us-east-1) service
> 3.   In **`APIs`** list you should find the `dev-twitter-profile-api` deployed 
> 4.   Clic in `dev-twitter-profile-api`
> 5.   Clic in **`Dashboard`**
> 6.   Copy the URL that is **`Invoke this API at:`** thats look like **`Invoke this API at: https://miurlsapi.execute-api.us-east-1.amazonaws.com/dev/`**
> 7.   With that URL you can configure the postman collection environments specificly **`twitter-profile-backend-aws`** Postman environment, that will be shared in the **`docs/postman/environment/twiteer-profile-backend-aws-server.postman_environment.json`** file
> 8.   With that URL you can configure the react web project **`twitter-profile-fontend`** in the file **`src/utils/constants.js`** because is the URL that connects with the `twitter-profile-api` this means, that is necessary to deploy the **`twitter-profile-fontend`**.
> 9.   You should import the postman collection and the environments to test in [Postman](https://www.postman.com/downloads/)
> 10.  There are 3 user records to run the profile creation in the **`docs/usersTwitter.json`** file
> 11.  Copy and paste each object one by one and use the endpoint **`twitter-profile-api -> profile -> POST profile`**
> 12.  Enjoy using the **`twitter-profile-api`**

### Endpoints documentation 

To consume the api you must follow the endpoints in the file *`docs/postman/api-specification/api.html`* create with the raml2html standard

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to use local endpoints.

### `npm deploy`

Build and deploy the app in the aws infrastructure and run the unit tests

## Time used 

Time spent

Case analysis 3 hours 
Twitter api review and proof of concept for this 2 hours 
Backend project 16 hours
Documentation 3 hours

Thanks to read!
