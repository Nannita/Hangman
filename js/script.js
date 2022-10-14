    function juegoTerminado(string, array){
        let sonIguales = true
        for (let i = 0; i < array.length; i++ ){
            if(array[i] != string [i]){
                sonIguales = false 
            }
        }
        return sonIguales
    }

/* ---------- busqueda de la letra dentro de la palabra a adivinar ---------- */
    function perteneceALaPalabraBuscada(arrayPalabra, letraIngresada){
            console.log(`estamos dentro de perteneceALaPalabraBuscada`)
            let estaIncluidaEnPalabraBuscada = false // supongo que no
            console.log(`Estoy antes del for de perteneceALaPalabraBuscada `)
            for (let i = 0; i < arrayPalabra.length; i++){
                console.log(`entre`)
                if(arrayPalabra[i] === letraIngresada){
                    estaIncluidaEnPalabraBuscada = true //encontrada
                    console.log (`estoy dentro del if - YA PROBAMOS CON ESA LETRA ${arrayPalabra}`)
                }
            }
            return estaIncluidaEnPalabraBuscada
    }
/* --------------------- Reemplazar la letra en el array -------------------- */
    function reemplazarLetraEnArray(array, string, letraIngresada){
        for(let i = 0; i < string.length; i++){
            if(string[i] === letraIngresada){
                array[i] = letraIngresada
            }
            
        }
        return array 
    }   




    
