# CP6 · Formulario con Validación y Retroalimentación

## 1. Reglas de Validación
- Campo Nombre/Espacio: Requerido, mínimo 3 caracteres.
- Campo Fecha/Hora: Requerida, no puede ser una fecha pasada.
- Campo Motivo/Uso: Requerido, mínimo 10 caracteres.

## 2. Implementación de Retroalimentación
- Validación en tiempo real al perder el foco (onIonBlur).
- Mensajes de error claros debajo de cada campo con alto contraste.
- Botón de envío deshabilitado o con indicación visual si el formulario es inválido.
- Confirmación visual con IonToast al completar la reserva exitosamente.
