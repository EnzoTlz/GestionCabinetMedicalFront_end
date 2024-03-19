const baseUrl = "https://gestionmedical.alwaysdata.net/api/controllers/controllerStatistique";

function getAllStatsMedecin() {
    fetch(baseUrl + "/ControllerGetStatsMedecin.php")
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur s\'est produite lors de la récupération des statistique des médecins.');
        }
        return response.json(); 
    })
    .then(data => {

        if(data.status_code === 200 && data.data.length > 0) {
            console.log(data);

        } else {
            console.log('Aucune statistique médecin trouvé ou erreur de réponse.');
        }
    })
    .catch(error => {
        alert(error.message);
    });
}

function getAllStatsUsager() {
    fetch(baseUrl + "/ControllerGetStatsUsager.php")
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur s\'est produite lors de la récupération des statistique patients.');
        }
        return response.json(); 
    })
    .then(data => {
        if(data.status_code === 200) {
            console.log(data);

        } else {
            console.log('Aucune statistique patients trouvé ou erreur de réponse.');
        }
    })
    .catch(error => {
        alert(error.message);
    });
}


document.addEventListener('DOMContentLoaded', getAllStatsUsager);
document.addEventListener('DOMContentLoaded', getAllStatsMedecin);
