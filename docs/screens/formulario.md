# Pantalla: Formulario (/productos/nuevo y /productos/:id/editar)

## Responsabilidad
Pantalla unificada para la creación y modificación de productos con validación bidireccional (cliente y servidor).

## Validaciones
- **Nombre**: Obligatorio, máx. 60 caracteres.
- **Precio**: Número mayor a 0.
- **Categoría**: `Bebidas`, `Snacks`, `Aseo` o `Hogar`.
- **Stock**: Entero mayor o igual a 0.
