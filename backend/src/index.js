require('./database')
const app = require('./app')

app.listen(app.get('port'));
console.log('Server on port ', app.get('port'))
//Le decimos que el server en que puerto escuchara


