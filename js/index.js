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

        var p = document.createElement('p');
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var p3 =document.createElement('p');

        p.innerText = dataestesa;
        p1.innerText = dataintera;
        p2.innerText = settimana;
        p3.innerText = dataScadenzaStringa;
        
        document.getElementById('contenitore').append(p);
        document.getElementById('contenitore').append(p1);
        document.getElementById('contenitore').append(p2);
        document.getElementById('contenitore').append(p3);

    }, 1000);
}