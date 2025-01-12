# WebHooks Tester

Este es un proyecto simple para probar y simular el envío de eventos (WebHooks) a un servidor. El frontend permite al usuario enviar un evento a un servidor WebHook y visualizar la respuesta del servidor.

## Tecnologías

- **Backend**: Node.js con Express
- **Frontend**: HTML, CSS, JavaScript
- **Servidor**: Express (Servidor que escucha y responde a los WebHooks)

## Descripción

Este proyecto incluye un frontend que permite a los usuarios enviar eventos a un servidor WebHook configurado en la URL. El servidor procesa el evento y devuelve una respuesta, que se muestra en el frontend.

Cuando haces clic en el botón **Send Event**, se envía un evento con un mensaje y un timestamp al servidor. La respuesta del servidor se muestra en el área de texto de **Server Response**.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/webhooks-tester.git
cd webhooks-tester
