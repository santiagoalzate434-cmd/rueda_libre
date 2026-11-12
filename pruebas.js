const valor=50000
let ahorro = 0;
let semana = 0;
while (ahorro<=valor && semana < 10){
    semana = semana + 1
    ahorro = ahorro + 5000
    console.log(`te faltan semanas ${semana} llevas ${ahorro} para llegar a la meta ${valor} `)
    if (ahorro === valor){
        console.log("llegaste a la meta")
    }

}
