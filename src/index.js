const express = require('express');
const app = express();
const port = process.env.PORT;
require('./db/mongoose');

const userRouter = require('./routes/User');
const taskRouter = require('./routes/Task')

app.use(express.json())

app.use(() => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
// Routing

app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})