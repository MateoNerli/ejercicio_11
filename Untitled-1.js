
let ejercicio = prompt("1-dia de la semana y ejercicios 2- bucle de 20 a 70 3-cantidad de hola mundo");
switch (ejercicio) {

    case '1': {

        let dia = prompt("¿Que dia es hoy?");

        switch (dia) {
            case 'lunes': {
                alert("Hoy es lunes toca pecho y biceps");
                break;
            }
            case 'martes': {
                alert("Hoy es martes toca espalda y triceps");
                break;
            }
            case 'miercoles': {
                alert("Hoy es miercoles toca piernas y hombro");
                break;
            }
            case 'jueves': {
                alert("Hoy es jueves toca pecho y biceps");
                break;
            }
            case 'viernes': {
                alert("Hoy es viernes toca espalda y triceps");
                break;
            }
            case 'sabado': {
                alert("Hoy es sabado toca piernas y hombro");
                break;
            }
            case 'domingo': {
                alert("descanso");
                break;
            }
            default: {
                alert("el dia de la semana va con miniscula");
            }
            break;
        }
    }

    case '2':{
        for (i=20;i<70;i++)
        {
            document.write("El numero es: "+i+"<br>");
        }
        break;
    }

    case '3':{
        cant = prompt("cantidad de veces que queres que se muestre hola mundo");

        for(i=0; i<cant; i++)
        {
            document.write(i+"- HOLA MUNDO<br>");
        }
        break;
    }
    default:
        {
            alert("No hay ningun ejercicio con ese nombre");
        }

}