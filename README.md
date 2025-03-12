# Amigo Secreto - Challenge Oracle ONE

Este proyecto es parte del curso de Oracle ONE y consiste en una aplicación web que permite a los usuarios agregar nombres de amigos, sortear uno al azar y resetear la lista. La aplicación está diseñada para ser fácil de usar y proporcionar una experiencia intuitiva.

[![Título del Video](https://img.youtube.com/vi/3bChXmQshJM/0.jpg)](https://www.youtube.com/watch?v=3bChXmQshJM)

https://youtu.be/3bChXmQshJM

## Tabla de Contenidos
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Instrucciones de Uso](#instrucciones-de-uso)
  - [Instalación](#instalación)
  - [Ejecución](#ejecución)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Pruebas Realizadas](#pruebas-realizadas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción del Proyecto

La aplicación "Amigo Secreto" permite a los usuarios:
1. Agregar nombres de amigos al sistema.
2. Sortear un nombre al azar para elegir el amigo secreto.
3. Resetear la lista de amigos y limpiar los elementos en pantalla.

## Características

- Interfaz de usuario intuitiva.
- Sorteo de amigo secreto basado en una lista de nombres que proporciona el usuario
- Mensaje de bienvenida con instrucciones al cargar la página.
- Posibilidad de agregar múltiples nombres separados por comas.
- Función para resetear la lista de amigos.

## Instrucciones de Uso

### Instalación

1. Clona este repositorio en tu máquina local:
   ```sh
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```

2. Navega al directorio del proyecto:
   ```sh
   cd amigo-secreto
   ```

3. Abre el archivo `index.html` en tu navegador web preferido.

## Funcionalidades Implementadas

- **Mensaje de bienvenida**: Al cargar la página, se muestra una alerta con instrucciones sobre cómo usar la aplicación.
- **Agregar Participantes**: Permite agregar uno a uno a los participantes del sorteo.
- **Agregar múltiples nombres**: La función `agregarAmigo` permite agregar varios nombres al mismo tiempo si están separados por comas.
- **Sorteo**: Sortea un nombre al azar de la lista de nombres proporcionados la cual a su vez permite volver a pickear uno al azar de la lista.
- **Botón de reset**: Se ha añadido un botón que resetea la lista de amigos y limpia los elementos en pantalla.

## Pruebas Realizadas

1. Ingresé varios nombres separados por comas y verifiqué que se agregaran correctamente a la lista.
2. Hice clic en el botón "Sortear amigo" y verificué que se seleccionara un nombre al azar y se mostrara en pantalla.
3. Hice clic en el botón "Resetear Lista" y verifiqué que la lista de amigos se vaciara y los elementos en pantalla se limpiaran.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes alguna mejora, por favor abre un issue o envía un pull request. Asegúrate de seguir las directrices del proyecto.

1. Forkea el repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/TuFeature`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Haz push a la rama (`git push origin feature/TuFeature`).
5. Abre un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT
