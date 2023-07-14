import mongoose from 'mongoose';

(async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/', {dbName: 'restaurante', autoCreate:true, retryWrites:true} );
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})();