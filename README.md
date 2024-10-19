Este es un proyecto [Next.js](https://nextjs.org) creado a partir  del comando [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


# Developer
1. Ejecuta la base de datos en Docker
- Se debe tener el archivo ``` docker-compose.yaml ``` en la raiz del proyecto con las configuracion para levantar el contenedor
```bash
docker compose up -d 
```
2. Renombrar el archivo (.env.template) a (.env) y reemplazar las variables de entorno segun corresponda
3. Ejecutar``` npm install```
4. Ejecutar ``` npm run dev ``` para correr la aplicación
5. Ejecutar estos comandos de prima ``` npx prisma migrate dev``` | ``` npx prisma generate ```
5. Ejecutar SEED para [crear base de datos local]('localhost:3000/api/seed')








## Comandos de Prisma
```bash
#Inicia un poryecto de prisma en el directorio actual
npx prisma init
#has el modelo de tus tablas o tabla
npx prisma migrate dev
#inserta el nombre a tu migracion

#para generar el cliente que interactue con la base de datos
npx prisma generate
```

## Comandos para entornos
Aqui tienes los diferentes comando que puedes ejecutar para levantar el servidor en modo desarrollo segun tu administrador de dependencias

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Hacer Build de producción
```bash
npm run build
```


## Ejecutar en producción
```bash
npm run start 
#o tambien  
npm start
```







Usage

  $ prisma migrate [command] [options]

Commands for development

         dev   Create a migration from changes in Prisma schema, apply it to the database
               trigger generators (e.g. Prisma Client)
       reset   Reset your database and apply all migrations, all data will be lost

Commands for production/staging

      deploy   Apply pending migrations to the database
      status   Check the status of your database migrations
     resolve   Resolve issues with database migrations, i.e. baseline, failed migration, hotfix