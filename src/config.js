import dotenv from 'dotenv';
import minimist from "minimist";

dotenv.config()


const argv = minimist(process.argv.slice(2), { alias: { p: 'port' }, default: { port: 8080 } })

const sessionConfig = {
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 60000
    }
};

export default {
    PORT: argv.port,
    session: sessionConfig,
    mongoLocal: {
        client: 'mongodb',
        cnxStr: process.env.MONGODB_LOCAL
    },
    mongoRemote: {
        client: 'mongodb',
        cnxStr: process.env.MONGODB_REMOTO,
        options: {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // useCreateIndex: true,
                // serverSelectionTimeoutMS: 5000,
        }    
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    fileSystem: {
        path: process.env.FILESYSTEM
    }
}
