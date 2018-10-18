
//random id
const uuidv4 = require('uuid/v4');

export default ()=>{
    return [
        {
            id: uuidv4(),
            task: "Study English at 21h00 every day",
            decription: "Decription detail for the task",
            level: 2 //0: small, 1: medium, 2: high
        },
        {
            id: uuidv4(),
            task: "Play the game",
            decription: "Decription detail for the task",
            level: 0 //0: small, 1: medium, 2: high
        },
        {
            id: uuidv4(),
            task: "Go to the bed",
            decription: "Decription detail for the task",
            level: 1 //0: small, 1: medium, 2: high
        },
        {
            id: uuidv4(),
            task: "Study ReactJS at whole day",
            decription: "Decription detail for the task",
            level: 1 //0: small, 1: medium, 2: high
        },
        {
            id: uuidv4(),
            task: "Go to the market after cook",
            decription: "Decription detail for the task",
            level: 2 //0: small, 1: medium, 2: high
        },
        {
            id: uuidv4(),
            task: "Eat for dinner",
            decription: "Decription detail for the task",
            level: 0 //0: small, 1: medium, 2: high
        }
    ];
}
