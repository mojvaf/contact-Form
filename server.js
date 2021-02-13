const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
const app = express();

// connect Database
connectDB()
// Init Middleware(accept data)
app.use(express.json({ extended: false }))



// Define Router
app.use('/api/users', require('./routers/users'))
app.use('/api/auth' , require('./routers/auth'))
app.use('/api/contacts', require('./routers/contacts'))

// Server static assets in production
 if(process.env.NODE_ENV === 'production'){
      // set static folder
   app.use(express.static('client/build'))

   app.get('*', (req,res)=> res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')))
 }
  

const PORT = process.env.PORT || 5000

app.listen(PORT , ()=> console.log(`server started on prot ${PORT}`))