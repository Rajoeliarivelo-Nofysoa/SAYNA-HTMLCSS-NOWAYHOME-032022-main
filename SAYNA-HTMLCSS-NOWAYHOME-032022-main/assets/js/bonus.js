var dateFin = new Date("05/05/2022 14:00:00").getTime();
function comptearebours(){
    let maintenant = new Date().getTime();
    let difftempsrestant = dateFin - maintenant;

    let jours = math.floor(difftempsrestant/ (1000*60*60*24));
    let heurs = math.floor(difftempsrestant % (1000*60*60*24) / (1000*60*60));
    let minutes = math.floor(difftempsrestant % (1000*60*60) / (1000*60));
    let secondes = math.floor((difftempsrestant % (1000*60)) / (1000));

    let minuteur = document.getElementById('minuteur');
    minuteur.innerHTML = '${jours} j: ${heures}h: ${minutes} mn: ${secondes}s';
}
var setin = setInterval(comptearebour,1000);