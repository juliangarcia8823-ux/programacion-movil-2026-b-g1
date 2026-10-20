# Accesibilidad y Evaluacion Heuristica - UNIreserve

## 1. Cumplimiento de Accesibilidad (WCAG 2.1 AA)

- **Contraste de Color**: Ajuste de texto secundario sobre fondo claro para cumplir con la relacion minima de 4.5:1.
- **Areas Tactiles**: Botones de reserva ajustados a un tamano minimo de 48px x 48px para facilitar el toque en dispositivos moviles.
- **Lectores de Pantalla**: Inclusion de etiquetas aria-label en iconos de navegacion y campos de formulario.

## 2. Evaluacion Heuristica de Nielsen

1. **Visibilidad del estado del sistema**: Implementacion de skeleton loaders y avisos via IonToast para informar al usuario sobre cargas y envios.
2. **Prevencion de errores**: Deshabilitacion preventiva del boton de confirmacion de reserva hasta que los campos obligatorios esten diligenciados correctamente.
3. **Consistencia y estandares**: Adopcion del patron de navegacion por pestanas (IonTabs) alineado con los estandares de Android e iOS.
