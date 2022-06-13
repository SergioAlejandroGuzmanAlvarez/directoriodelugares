function getBotResponse(input) {
    //rock paper scissors
    if (input == "Hola") {
        return "Hola :) ¿Cómo estas?";
    } else if (input == "Bien") {
        return "Me alegro por ti, en que te ayudo?";
    } else if (input == "Bien y tu?") {
        return "Muy bien, gracias. Me alegro por ti. ¿En que te puedo ayudar el dia de hoy? :D";
    }
    if (input == "Que es ruta nayarit?") {
        return "Es el concepto de darte una mejor experiencia bridandote una ruta totalmente a tu alcance.";
    } else if (input == "Que lugar me recomiendas?"){
        return "Te recomiendo visitar el poblado de Guayabitos. Lugar para estar en la playa comiendote un coco."
    } 
    else if(input== "Que hotel de guayabitos es barato?"){  
        return "La estelita con una puntuación de 4 estrellas con un precio de $500.00 por noche"
    }
    else if(input == "Donde se encuentra la mejor fiesta?"){
        return "Wippiz Nuevo Vallarta es la mejor opción para chelear con los compas. Te invito una canjeando este cupón:TRAVEL021 Valido solo el día de hoy."
    }
    else if (input == "Gracias") {
        return "Estoy para servirte :)!";
    } else {
        return "No entendí lo que dijiste. ¿Hablas español?";
    }
}