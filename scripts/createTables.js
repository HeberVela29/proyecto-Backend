import { options } from "../src/config.js";
import knex from "knex";

const knexConnection = knex(options);

(async () => {
    try {
        // Borrar tabla cuando existan
        await knexConnection.schema.dropTableIfExists('products');
        await knexConnection.schema.dropTableIfExists('chat');

        // Tabla de productos
        await knexConnection.schema.createTable('products', table =>{
            table.increments('id').primary();
            table.string('producto').notNullable();
            table.float('precio').notNullable();
            table.string('foto').notNullable();
        })

        // Tabla del Chat
        await knexConnection.schema.createTable('chat', table =>{
            table.increments('id').primary();
            table.string('author').notNullable();
            table.string('text').notNullable();
            table.string('date').notNullable();
            table.string('time').notNullable();
        })

    } catch (error) {
        console.log(error);
    } finally {
        knexConnection.destroy();
    }
})();