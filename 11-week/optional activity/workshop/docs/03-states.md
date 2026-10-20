# Auditoria de Estados de la Interfaz - UNIreserve

## Estados Requeridos

### 1. Estado de Carga (Loading State)
- Uso de `IonSkeletonText` para simular la estructura visual de la lista de espacios mientras se obtienen los datos de la API.

### 2. Estado Vacio (Empty State)
- Mensaje claro con icono e ilustracion cuando no se encuentran espacios disponibles en el filtro seleccionado.
- Boton de accion rapida: "Limpiar Filtros".

### 3. Estado de Error (Error State)
- Indicador en pantalla cuando la solicitud a la API falla.
- Boton para reintentar la conexion sin reiniciar la app.

### 4. Estado Exitoso (Success State)
- Confirmacion mediante `IonToast` y pantalla de resumen al completar la reserva de un espacio.
