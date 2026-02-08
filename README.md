# 🍹 Bebidas Vue

Proyecto de aprendizaje desarrollado con **Vue 3 + Vite**, enfocado en la construcción de una aplicación moderna para consulta y manejo de bebidas, integrando estado global, consumo de APIs y funcionalidades con **IA**.

> ⚠️ **Nota:** Este proyecto tiene fines **exclusivamente educativos**. Fue desarrollado como parte de un curso en **Udemy** y no está pensado para uso productivo.

---

## 🧠 Objetivo del proyecto

- Aprender y consolidar el uso de **Vue 3** con buenas prácticas
- Implementar un stack moderno de frontend
- Consumir APIs externas usando **Axios**
- Manejar estado global con **Pinia**
- Integrar **IA** mediante OpenRouter
- Estructurar una SPA con **Vue Router**
- Practicar diseño accesible y reusable con Tailwind + Headless UI

---

## 🛠️ Stack tecnológico

- **Vue 3**
- **Vite**
- **Tailwind CSS**
- **Headless UI**
- **Heroicons**
- **Axios**
- **Vue Router**
- **Pinia (Store)**
- **OpenRouter (IA)**

---

## 🍸 Consumo de API externa

Este proyecto realiza peticiones HTTP a la API pública de **TheCocktailDB** para obtener información relacionada con bebidas y cócteles.

🔗 API oficial: https://www.thecocktaildb.com/api.php

Es **recomendable leer la documentación oficial** para comprender:
- Los endpoints disponibles
- Los parámetros de búsqueda
- El formato de las respuestas
- Las limitaciones de uso

El consumo de la API se realiza mediante **Axios**, siguiendo un enfoque orientado a buenas prácticas y separación de responsabilidades.

> 📌 La correcta comprensión de la documentación es clave para extender o modificar las peticiones según las necesidades del proyecto.


## 🤖 Integración con IA (OpenRouter)

Este proyecto utiliza **OpenRouter** para funcionalidades relacionadas con IA.

### 🔑 Requisito importante
Debes crear tu propia **API Key** en OpenRouter:

👉 https://openrouter.ai/

Luego agregarla en tu entorno (`.env`):

```env
VITE_OPENROUTER_API_KEY=tu_api_key
