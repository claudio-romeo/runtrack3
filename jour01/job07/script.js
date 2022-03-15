'use strict';

function jourtravaille(date)

{
    const Jferie = 
    [
        "2020-01-01",
        "2020-04-13",
        "2020-05-01",
        "2020-05-08",
        "2020-05-21",
        "2020-06-01",
        "2020-07-14",
        "2020-08-15",
        "2020-11-01",
        "2020-11-11",
        "2020-12-25",
        
    ];



    var date = new Date(dates);


    const option = { weekday: 'long' , year:'numeric' , month:'long' , day:'numeric' }
    var dateAffiche = date.toLocaleDateString('fr-FR', option)


    if (jourFerie.includes(dates) == true) {
        
            console.log("Le " + dateAffiche + " est un jour ferié")
    }


    else if (date.getDay() == 0 || date.getDay() == 6) {

        console.log("Le " + dateAffiche + " est le week-end")
    }
    else {
        console.log("Le " + dateAffiche + " il faut travailler")
    }
}
        
    jourtravaille("2020-12-25")