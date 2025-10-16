# Anime Betting App

Una aplicación web para apostar créditos ficticios en eventos de anime, manga o series, como "un personaje gana una pelea" o "ocurre un giro argumental". Desarrollada con Angular (frontend), Node.js/Express (backend), MongoDB (base de datos) y Tailwind CSS (diseño).

## Características
- Selecciona una serie, capítulo y evento para apostar.
- Rastrea tu historial de apuestas y saldo.
- Interfaz responsiva con Angular y APIs REST con Express.
- Persistencia de datos en MongoDB.

## Requisitos
- Node.js (v20.x o superior): https://nodejs.org
- Angular CLI: `npm install -g @angular/cli`
- MongoDB (local o Atlas): https://www.mongodb.com

## Instalación
### 1. Clonar el Repositorio
```bash
git clone <tu-url-repositorio>
cd anime-betting-app
```

### 2. Configurar el Backend
1. Navega al directorio:
   ```bash
   cd backend
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura MongoDB:
   - **Local**: Asegúrate de que `mongod` esté corriendo (`mongodb://localhost:27017`).
   - **Atlas**: Actualiza la URI en `server.js` con tu conexión de Atlas.
4. Corre el backend:
   ```bash
   node server.js
   ```
   - Disponible en `http://localhost:3000`.

### 3. Configurar el Frontend
1. Navega al directorio:
   ```bash
   cd frontend
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura Tailwind CSS (ya incluido en el proyecto).
4. Corre el frontend:
   ```bash
   ng serve
   ```
   - Disponible en `http://localhost:4200`.

## Uso
- Abre `http://localhost:4200` en un navegador.
- Elige una serie, capítulo y evento.
- Ingresa una cantidad a apostar (10-1000 créditos).
- Haz clic en "Apostar" para registrar tu apuesta.
- Revisa los resultados en el historial de apuestas (guardados en MongoDB).

## Estructura del Proyecto
```
anime-betting-app/
├── backend/
│   ├── server.js
│   ├── package.json
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.component.html
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   ├── tailwind.config.js
├── LICENSE
├── README.md
```

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Copyright
Copyright © 2025 LuisRosales. Todos los derechos reservados.
