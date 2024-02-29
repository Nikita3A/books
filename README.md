
## Description
The Books Service can save and list books. It’s 80% covered by tests.

## Running the app

### Prerequisites:
    1. Docker compose or psql DB
    2. Create .env file and add your DB connection credentials
    3. For docker-compose in the root folder of the project run: docker-compose up -d. Then rename .env.example to .env 
    4. Run: npm i
    
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License
Nest is [MIT licensed](LICENSE).
