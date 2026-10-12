# Parcial Práctico Corte 2 - Programación Móvil

## How to Run the Project
1. Install dependencies: `npm install`
2. Start the Express API server: `npm run server`
3. Launch the Ionic application: `npm run dev`
4. Run tests: `npm test`

## State Management Decision
Our application manages local component state using native frontend state mechanisms (such as React useState/useEffect or Vue ref/onMounted hooks). This architectural choice keeps the project simple, clean, and avoids unnecessary heavy state store abstractions like Redux or Pinia. Each view independently maintains its loading indicators, product lists, and user feedback states.

## API Error Handling
The Express server standardizes all client and server error responses by returning a JSON payload with an error message and a detailed list of validation failures. Status codes such as 400 and 404 are explicitly emitted when request inputs or resource identifiers are invalid. On the frontend, our custom ApiError handler captures these backend response structures to present readable errors to the end user.
