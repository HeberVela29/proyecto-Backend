const express = require("express")
const path = require("path")
const app = express()
const routes = require("./router")
const index = require("./index")
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join( __dirname, "../public")))
app.use("/", index)
app.use("/api/productos", routes)

app.set("views", path.join(__dirname, "../public/views"))
app.set("view engine", "pug")

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server escuchando puerto : ${PORT}`);
})