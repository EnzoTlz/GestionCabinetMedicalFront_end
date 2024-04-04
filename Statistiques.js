const baseUrlMedecin = "https://gestionmedical.alwaysdata.net/api/stats/medecins";
const baseUrlUsager = "https://gestionmedical.alwaysdata.net/api/stats/usagers";


function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            const value = cookie.substring(name.length + 1);
            return { name: name, value: value };
        }
    }
    return null;
}

function getAllStatsMedecin() {
    fetch(baseUrlMedecin , {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getCookie("usertoken").value,
            'Content-Type': 'application/json',
        }
    })
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
    fetch(baseUrlUsager , {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getCookie("usertoken").value,
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur s\'est produite lors de la récupération des statistiques des patients.');
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data);
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
