# ADR-002: Consumo de API y Manejo de Errores

## Contexto
Se requiere desacoplar las peticiones HTTP de las vistas Ionic e integrar un manejo centralizado de errores.

## Decisión
Utilizar `fetch` nativo encapsulado en `src/features/products/data/` combinado con una clase de error `ApiError` que extrae el arreglo `details` provisto por Express.

## Consecuencias
- **Positivas**: Tratamiento transparente de errores 400, 404 y 500, permitiendo renderizar feedback detallado al usuario.
- **Negativas**: Mapeo manual de respuestas JSON a tipos TypeScript.
