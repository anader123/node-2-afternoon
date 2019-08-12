
let messages = [];
let id = 0; 

const create = (request, response) => {
    const { text, time } = request.body;
    messages.push({ id, text, time });
    id++;
    response.status(200).send(messages); 
};

const read = (request, response) => {
    response.status(200).send(messages); 
};

const update = (request, response) => {
    const { text } = request.body; 
    const updateID = request.params.id; 
    const messageIndex = messages.findIndex(message => message.id === +updateID);
    let message = messages[messageIndex]; 

    messages[messageIndex] = {
        id: message.id, 
        text: text || message.text,
        time: message.time
    }; 

    response.status(200).send(messages); 
}; 

const deleteMessage = (request, response) => {
    const deleteID = request.params.id;
    const messageIndex = messages.findIndex(message => message.id === +deleteID); 
    messages.splice(messageIndex, 1); 
    response.status(200).send(messages);
};

module.exports = {
    create, 
    read, 
    update,
    deleteMessage
}; 