import express from 'express'
import cors from 'cors'

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("<h1>Entrar a /api, todo ok</h1>");
})

app.get('/api', (req, res) => {
    res.status(200).send({
        id: 1,
        usuario: "nombre del usuario",
        mensaje: "funciona"
    })
})

app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000...");
})