# Feature: Catálogo de Productos

## Descripción
Módulo de gestión integral (CRUD) de productos que permite listar, filtrar por categoría y búsqueda de texto, ver el detalle individual, crear nuevos ítems y actualizar o eliminar existentes.

## Flujos Principales
1. **Consulta**: Carga inicial desde la API Express con visualización de estado vacío, carga, error o resultados.
2. **Filtro**: Búsqueda por coincidencia de texto e insignias de categorías (`Todas`, `Bebidas`, `Snacks`, `Aseo`, `Hogar`).
3. **Gestión (CRUD)**: Creación, edición y borrado con confirmación simple y redirección automática.
