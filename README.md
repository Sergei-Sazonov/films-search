# Fimls search

## Install

```bash
docker-compose build
docker-compose up
```

## Migrate

```bash
npm run upload  
```

## Check

`http://localhost:4000/api/films?genre1=Romance&genre2=Action&year=1916`
`http://localhost:4000/api/films?genre1=Romance`
`http://localhost:4000/api/films?genre1=Romance&genre2=Action`
`http://localhost:4000/api/films?genre2=Romance`