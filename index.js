import express from "express"
import TransaccionRoutes from "./routes/transaccion.route.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use("/", new TransaccionRoutes().start())



app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("Error", (err) => console.error(err))