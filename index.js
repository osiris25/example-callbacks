const colors = require('colors/safe');

const coaches = [
    {
        id:1,
        name:"Adri"
    },
    {
        id:2,
        name:"Raulingg"
    },
    {
        id:3,
        name:"Ivy"
    },
    {
        id:4,
        name:"Carlos"
    }
]

const saludar = ( allCoaches, usarcallback ) =>{
    allCoaches.forEach(coach => {
        usarcallback(coach)
    });
}

const buenosDias = ( coach ) =>{
    const { name } = coach
    console.log(colors.yellow(`Hola Buenos dias ${name} ¿Como estas? `))
}

const buenasTardes = ( coach ) =>{
    const { name } = coach
    console.log(colors.green ( `Buenas Tardes ${name} ¿Que vaz a comer? ` ) )
}

const buenasNoches = ( coach ) =>{
    const { name } = coach
    console.log(colors.magenta(`Buenas Noches ${name} ¿A que hora duermes? `))
}

saludar(coaches, buenosDias )
saludar(coaches, buenasTardes )
saludar(coaches, buenasNoches)
