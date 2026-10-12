# Pantalla: Lista de Productos (/productos)

## Responsabilidad
Desplegar la lista de productos disponibles permitiendo filtrado reactivo por nombre y categoría.

## Estados Manejados
- **Carga**: Indicador visual mientras responde la API.
- **Vacío**: Muestra `EmptyState` cuando la base de datos no tiene registros.
- **Sin resultados**: Notificación cuando la búsqueda no coincide con ningún producto.
- **Error**: Vista de fallo de red/servidor con botón **Reintentar**.
