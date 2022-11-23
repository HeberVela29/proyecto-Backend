const express = require("express")
const path = require("path")
const app = express()
const routes = require("./router")
const index = require("./index")
const { engine } = require("express-handlebars")
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join( __dirname, "../public")))
app.use("/", index)
app.use("/api/productos", routes)

app.engine(".hbs", engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: path.join(__dirname, "../public/views/layouts"),
    partialsDir: path.join(__dirname, "../public/views/partials")
}))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../public/views"))

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server escuchando puerto : ${PORT}`);
})