ts-api-example
===

## Export system environment
* PORT: 5000

## Start Script
```sh
# debug mode
npm run dev:debug
# release mode
npm run build
npm start
```

## API
### GET /api/health
```
OK
```

### POST /api/users/login
Request body:
```json
{
   "username": "test",
   "password": "test" 
}
```

Resopnse body:
```json
{
    "id": "001",
    "username": "test",
    "password": "test"
}
```