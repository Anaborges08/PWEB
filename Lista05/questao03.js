
function calcularFrequencia(presenca) {
    const totalAulas = presenca.length;
    const totalPresencas = presenca.filter(p => p === true).length;
    
    const percentual = (totalPresencas/totalAulas)*100;

    let status = percentual >= 50? "regular" : "irregular";

    return{
        percentual: percentual.toFixed(2) + "%",
        status: status
    };
}

const presenca = [true, false, true, false];

console.log(calcularFrequencia(presenca));

