# Backend-III-Final  
Entrega Final del curso Backend III.  


### Objetivos generales
+ Implementar las últimas mejoras en nuestro proyecto y Dockerizarlo.  
### Objetivos específicos  
+ Documentar las rutas restantes de nuestro proyecto.
+ Añadir los últimos tests
+ Crear una imagen de Docker.

## Se debe entregar  

+ Documentar con Swagger el módulo de “Users”.
+ Desarrollar los tests funcionales para todos los endpoints del router “adoption.router.js”.
+ Desarrollar el Dockerfile para generar una imagen del proyecto.
+ Subir la imagen de Docker a Dockerhub y añadir en un ReadMe.md al proyecto que contenga el link de dicha imagen.

-----------  

## 🚀 Instrucciones para Ejecutar el Proyecto

### 1. Clona el Repositorio  
### 2. Instala las Dependencias  
Una vez dentro de la carpeta del proyecto, instala todas las dependencias necesarias con:  

```bash
   npm install
   ```
    
### 3. Configura las Variables de Entorno  
Crea un archivo .env en la raíz del proyecto y agrega las variables suministradas en el archivo env.example  
https://github.com/SIVAnode/Backend-III-Final/blob/main/env.example


### 4. Ejecuta el proyecto  
Una vez que hayas configurado las variables de entorno, puedes iniciar el servidor.  

Para iniciar el servidor en modo desarrollo, usa el siguiente comando en la terminal:

```bash
   npm run dev
   ``` 
Para iniciar el servidor en producción, usa:

 ```bash
   npm run start:prod
   ```    
Para ejecutar las pruebas, usa:

 ```bash
   npm run test
   ```       


-----------    
  
POSTMAN:  
- /api/mocks/mockingpets
![Screenshot 2024-11-18 165305](https://github.com/user-attachments/assets/a20bdeb1-999c-42f8-962b-2736bcde1d77)
- /api/mocks/mockingusers  
![Screenshot 2024-11-18 165345](https://github.com/user-attachments/assets/75eb17c5-7efb-4c76-810d-d8a863259b0e)
- /api/mocks/generateData  
![Screenshot 2024-11-19 065231](https://github.com/user-attachments/assets/4b00d9f3-142f-430e-91c4-b76f0784a9a8)
- POST /api/mocks/generateData: Este endpoint genera e inserta datos ficticios en la base de datos.  
  
Query Parameters:  
users (opcional): Cantidad de usuarios a generar. Valor por defecto: 50.  
pets (opcional): Cantidad de mascotas a generar. Valor por defecto: 50.  
Ejemplo de URL: /api/mocks/generateData?users=10&pets=10.  
(Captura subida el 22/11/24 basandome en lo que subieron mis compañeros)  
![Screenshot 2024-11-22 175344](https://github.com/user-attachments/assets/5945c011-0b0c-4a40-96b8-971360cfdd5b)
- /api/sessions/login
![Screenshot 2024-11-22 173433](https://github.com/user-attachments/assets/fe1e4ab0-27cc-4b9e-968d-da1f52da068c)
(Captura subida el 22/11/24 basandome en lo que subieron mis compañeros)
- /api/users/:id
![Screenshot 2024-11-22 180211](https://github.com/user-attachments/assets/3fe2a46a-cc09-4278-96a7-5b32ad76ef2f)
(Captura subida el 22/11/24 basandome en lo que subieron mis compañeros)  



  
TERMINAL:  
![Screenshot 2024-11-18 165508](https://github.com/user-attachments/assets/0fa4e261-01e4-423a-aeeb-81f7d1a9dbd2)  
  
MONGO:  
![Screenshot 2024-11-18 165547](https://github.com/user-attachments/assets/ed506b44-6980-4e75-bdf3-d7c51ba8d803)
![Screenshot 2024-11-22 175103](https://github.com/user-attachments/assets/63227351-3c38-4cec-bed8-40db4aa63368)  
(Captura subida el 22/11/24 basandome en lo que subieron mis compañeros)  
![Screenshot 2024-11-22 175023](https://github.com/user-attachments/assets/980b3771-11aa-4464-a7b1-6c3e76f0217a)  
(Captura subida el 22/11/24 basandome en lo que subieron mis compañeros)  


  

- NOTA: A pesar de lo que se solicita en la consigna y del repositorio proporcionado, opté por desarrollar el proyecto desde cero y abordarlo de una manera diferente. No obstante, se ha cumplido con todos los requisitos establecidos en la consigna, garantizando que se cumplan los objetivos planteados de manera efectiva.


![SimonettaDaniel_Evangelion](https://github.com/user-attachments/assets/b8435777-2914-48ec-a640-958a6689a059)
