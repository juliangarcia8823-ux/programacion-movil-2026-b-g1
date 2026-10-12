# ADR-001: Manejo de Estado

## Contexto
La aplicación requiere controlar variables reactivas como productos, filtros, indicadores de carga y mensajes de error sin sobrecargar la arquitectura.

## Decisión
Se implementa gestión de estado local con los hooks/reactivos nativos de la librería (`useState` / `useEffect` en React o `ref` / `onMounted` en Vue) en cada pantalla.

## Consecuencias
- **Positivas**: Cero dependencias pesadas adicionales, fácil trazabilidad y desacoplamiento.
- **Negativas**: Los datos deben solicitarse nuevamente a la API al navegar entre pantallas.
