import '@babel/polyfill';
import app from './app.js';
import {connection} from './database.js'


async function main(){
    await app.listen(app.get('port'));
    console.log('server on port 4000');
    await connection();
}

main();



