# Twitter-profile-api

A serverless AWS project that allows getting the information of a user's profile and the list of associated tweets.

    .
    ├── .github                  # Compiled files (alternatively `dist`)
	|	  ├── workflows       	 # Dir with the github actions
	|			├── main.yaml    # Contains the deploy actions to the aws server
    ├── docs                  	 # Files document proyect
	|	 ├── postman collection  # Postman collection to get test the api
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

### Create project in [app.serverless](https://app.serverless.com/)

> 1.   Go to the [app.serverless](https://app.serverless.com/) and create an account
> 2.   In the user settings **org settings** go to the tab **providers** and add a provider with your IAM user **(AWS Access Key, AWS Secret Key)**
> 3.   In the user settings **org settings** go to the tab **access keys** and add a provider with your IAM user **(AWS Access Key, AWS Secret Key)**, copy the key that will be used in the GitHub workflow
> 4.   Go to the app section and **create app** select the option **serverless framework**
> 5.   You should configure the fields **app** and **service** with the same configurations of the **serverles.yml** in this case:
- `Field app:` **twitter-profile-app**
- `Field service:` **twitter-profile-api**
> 6.  Clic **deploy**
> 7.  In your terminal inside your root project directory type the command `serverless login`
> 8.  In your terminal inside your root project directory type the command `serverless deploy`
> 9.  Go and select the Permission tab, find **Static website hosting** edit enable
> 10. Put in field **Index document** the value **index.html**
> 11. Put in field **Error document** the value **index.html**
> 12. Finally, find in the same section Static **website hosting** and copy the site URL in the **block Bucket website endpoint** the URL is like that [http://twitter-profile-frontend.s3-website-us-east-1.amazonaws.com/](http://twitter-profile-frontend.s3-website-us-east-1.amazonaws.com/)