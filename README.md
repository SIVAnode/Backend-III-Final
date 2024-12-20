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
   npm run start
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
- GET /api/mocks/mockingpets
![Screenshot 2024-12-20 185417](https://github.com/user-attachments/assets/4424e807-4dad-4cac-8494-adc25d53d593)

- GET /api/mocks/mockingusers  
![Screenshot 2024-12-20 185355](https://github.com/user-attachments/assets/8592b153-f4a2-4d3d-a4e8-c2d8e76c06bf)

  
- POST /api/mocks/generateData (body)  

``` json
{
    "users": 10,
    "pets": 20
}
```
    
![Screenshot 2024-12-20 183511](https://github.com/user-attachments/assets/a259dd40-2fc2-426d-b2cd-0be417da3bd8)

 

- POST /api/sessions/login
![Screenshot 2024-12-20 141333](https://github.com/user-attachments/assets/0e485ece-f631-41a5-8c3e-aab87433b337)
- GET /api/users/:id
![Screenshot 2024-12-20 183439](https://github.com/user-attachments/assets/cc2e71d5-7cd6-446e-a855-b087f99786d7)




  
TERMINAL:  
![Screenshot 2024-12-20 183526](https://github.com/user-attachments/assets/1dee4b60-7902-4f61-9ab7-143abde4b78c)
![Screenshot 2024-11-18 165508](https://github.com/user-attachments/assets/0fa4e261-01e4-423a-aeeb-81f7d1a9dbd2)  
  
MONGO:  
![Screenshot 2024-12-20 141757](https://github.com/user-attachments/assets/550b76aa-05be-489b-b995-4fd594513880)
![Screenshot 2024-12-20 141817](https://github.com/user-attachments/assets/abc4a579-2691-4998-85e7-9652f3c26446)
![Screenshot 2024-12-20 122519](https://github.com/user-attachments/assets/f23a76be-2492-4054-9d10-0e4e8e57c337)  

SWAGGER:  
  
- Para ver la documentación de los endpoints `users`, abrir en el navegador:

    ```http
    http://localhost:8080/api-docs
    ```

  ![Screenshot 2024-12-20 192642](https://github.com/user-attachments/assets/0fa32744-5ce1-47c6-a624-6954bc3c67f3)
  ![Screenshot 2024-12-20 192616](https://github.com/user-attachments/assets/1f51508f-de2e-4744-8443-0633fc1f3041)

### TEST:  
Al ejecutar el modo de pruebas:  
  
### **Router `adoption.router.js`**:
- `GET /api/adoptions`: Te da todas las adopciones. 🌆
- `GET /api/adoptions/{aid}`: Muestra una adopción en particular. 💻
- `POST /api/adoptions/{uid}/{pid}`: Crea una adopción nueva. 🧠🤖

### **Router `users.router.js`**:
- `POST /api/users`: Agrega un nuevo usuario al sistema. 🤖👾

---



### **Imágen en DockerHUB**

- URL Imágen Docker: https://hub.docker.com/r/simonetta/backend3

    - Clonar imágen: 
            
            docker pull simonetta/backend3      



  

- NOTA: A pesar de lo que se solicita en la consigna y del repositorio proporcionado, opté por desarrollar el proyecto desde cero y abordarlo de una manera diferente. No obstante, se ha cumplido con todos los requisitos establecidos en la consigna, garantizando que se cumplan los objetivos planteados de manera efectiva.

![SimonettaDaniel_Evangelion](https://github.com/user-attachments/assets/1cdcf5e6-3c1c-4220-a12e-12b22135a6d4)
