import mongoose from 'mongoose'
import UsuariosModel from '../../models/UsuariosModel.js'
import objectUtils from '../utils/objectUtils.js'

class SessionService {
    constructor() {
    this.url = 'mongodb+srv://Heber29:Heber29@cluster0.8wmikpx.mongodb.net/test'
    this.mongodb = mongoose.connect
    }

    //funciones
    async conectarDB() {
    await this.mongodb(this.url)
    }

    async buscarUsuarioPorEmail(email) {
    await this.conectarDB()
    const usuario = await UsuariosModel.findOne({ email })
    return usuario
    }

    async registrarUsuario(usuario) {
    await this.conectarDB()
    const userExist = await UsuariosModel.findOne({ email: usuario.email })
    if (userExist) return false
    usuario.password = objectUtils.createHash(usuario.password)
    const newUser = new UsuariosModel(usuario)
    await newUser.save()
    return true
    }
}
export default SessionService