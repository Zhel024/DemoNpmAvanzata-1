function aggiuntaTagP(testo,contenitore){
    var p = document.createElement('p');
    p.innerText = testo;
    document.getElementById(contenitore).append(p);
}

function caricaData(){ 
    setTimeout(function(){
        moment('it');
        var oggi = moment();
        var dataScadenza = oggi.add(30, 'days');
        var sunrise = 1485762037;
        var data = moment.unix(sunrise);
        var dataScadenzaStringa = dataScadenza.format('LLLL');
        var dataestesa = data.format('hh:mm:ss');
        var dataintera = data.format('LLL');
        var settimana = data.format('LLLL');
        aggiuntaTagP(dataestesa,'contenitore');
        aggiuntaTagP(dataintera,'contenitore');
        aggiuntaTagP(settimana,'contenitore');
        aggiuntaTagP(dataScadenzaStringa,'contenitore');   
    }, 1000);
}

