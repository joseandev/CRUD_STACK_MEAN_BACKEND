const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://admin1:admin123@cluster0.mldt7.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    //useFindAndModify: false
})
.then((db) => {console.log('MongoDB is connected')})
.catch((err) => {console.log(err)})