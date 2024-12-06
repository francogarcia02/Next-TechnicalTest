# Technical Test - Search and Pagination

Este proyecto es una prueba técnica para evaluar habilidades con **Next.js 14**, **Server Actions**, y **Supabase**.

## Requisitos

1. **Búsqueda:**
   - Implementar una barra de búsqueda funcional.
   - Sincronizar el estado de búsqueda con los parámetros de la URL.

2. **Paginación:**
   - Mostrar 5 productos por página.
   - Sincronizar la página actual con los parámetros de la URL.

3. **Fetching de datos:**
   - Obtener los datos desde una tabla en Supabase.
   - Usar Server Actions para manejar el fetching.

4. **Diseño:**
   - Utilizar DaisyUI para estilizar la barra de búsqueda, tabla y paginación.

## Configuración

1. **Base de datos en Supabase**:
   - Utilizar la tabla `products` que contiene la siguiente estructura:
     ```sql
     products (
         id SERIAL PRIMARY KEY,
         name TEXT NOT NULL,
         description TEXT NOT NULL,
         price NUMERIC NOT NULL
     );
     ```

2. **Variables de entorno**:
   - Copia el archivo `.env` en tu `.env.local` con las claves de Supabase:
     ```
     NEXT_PUBLIC_SUPABASE_URL=<tu-url>
     NEXT_PUBLIC_SUPABASE_ANON_KEY=<tu-clave>
     ```

3. **Inicio del proyecto**:
   - Clona el repositorio.
   - Instala las dependencias:
     ```bash
     npm install
     ```
   - Inicia el servidor de desarrollo:
     ```bash
     npm run dev
     ```

## Entregables

1. Implementa toda la funcionalidad solicitada.
2. Envía tu solución como un pull request.# Next-TechnicalTest
