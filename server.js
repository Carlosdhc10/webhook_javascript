const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Servir el archivo index.html al acceder a la raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint para recibir eventos WebHook
app.post('/webhook', (req, res) => {
  console.log('WebHook recibido:');
  console.log(req.body);

  // Respuesta simulada
  res.status(200).json({
    success: true,
    message: 'WebHook recibido exitosamente',
    data: req.body,
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
