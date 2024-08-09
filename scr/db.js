import { createConnection } from 'mysql2/promise';

const connectDB = async ()=> {
    return await createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'tasks_db'
    })
}

export { connectDB}