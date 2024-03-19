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
            const tableBody = document.getElementById("table-body");
            data.data.forEach(item => {
                const fullData = item;
                var parts = fullData.split(' ');
                var prenom = parts[0];
                var nom = parts[1];
                var temps = parts.slice(2).join(' ');
                // const [nomMedecin, temps] = item.split(" ");
                const row = document.createElement("tr");
                row.innerHTML = `<td>${nom} ${prenom} </td><td>${temps}</td>`;
                tableBody.appendChild(row);
            });
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
            throw new Error('Une erreur s\'est produite lors de la récupération des statistiques des patients.');
        }
        return response.json(); 
    })
    .then(data => {
        if(data.status_code === 200) {
            document.getElementById("totalHommes").textContent = data["nb homme"];
            document.getElementById("totalFemmes").textContent = data["nb femme"];
            document.getElementById("moins25Hommes").textContent = data["nb homme moins 25 ans"];
            document.getElementById("moins25Femmes").textContent = data["nb femme moins 25 ans"];
            document.getElementById("entre25et50Hommes").textContent = data["nb homme entre 25 et 50 ans"];
            document.getElementById("entre25et50Femmes").textContent = data["nb femme entre 25 et 50 ans"];
            document.getElementById("plus50Hommes").textContent = data["nb homme plus 50 ans"];
            document.getElementById("plus50Femmes").textContent = data["nb femme plus 50 ans"];
        } else {
            console.log('Aucune statistique de patients trouvée ou erreur de réponse.');
        }
    })
    .catch(error => {
        alert(error.message);
    });
}


document.addEventListener('DOMContentLoaded', getAllStatsUsager);
document.addEventListener('DOMContentLoaded', getAllStatsMedecin);