const express = require('express'); 
const app = express(); 

const ctrl = require('./controllers/messages_controller')

app.use(express.static('./public/build'))
app.use(express.json());  

const baseURL = '/api/messages';
app.get(baseURL, ctrl.read); 

app.post(baseURL, ctrl.create);

app.put(`${baseURL}/:id`, ctrl.update);

app.delete(`${baseURL}/:id`, ctrl.deleteMessage);

const port = 3001; 
app.listen(port, () => {
    console.log(`Sever is running on ${port}`);
}); 

