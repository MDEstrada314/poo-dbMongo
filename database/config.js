const mongoose =  require ('mongoose')

const dbCONNECTION = async ()=>{

    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNeWUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('DB ONLINE');
    } catch (error) {
        console.log(error);
        throw new Error ('DB CANT INICIALIZES')

    }
}

module.exports={
    dbCONNECTION
}