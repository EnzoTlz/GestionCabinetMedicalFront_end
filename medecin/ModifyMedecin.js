const baseUrl = "https://gestionmedical.alwaysdata.net/api/medecins";

import '../cookieUtils.js';

function modifyMedecin(event){
    event.preventDefault();
    var data = {
        id: document.getElementById("Id_Medecin").value,
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        civilite: document.getElementById("civilite").value
    }
    fetch(baseUrl + "/" + data.id , {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie("usertoken").value,
        },
        body: JSON.stringify(data)
    })
    .then(data => {
        if (data.status === 200) {
            alert("Médecin modifier avec succès!");
            document.location.href="../Medecins.php";
        } else {
            alert("Une erreur s'est produite lors de la modification du médecin.",data.status);
        }
    })
    .catch(error => {
        alert("Une erreur s'est produite lors de l'envoi de la requête.", error);
    });
}
document.getElementById('formModifyMedecin').addEventListener('submit', modifyMedecin); // MODIFY

document.addEventListener("DOMContentLoaded", function() {
    console.log('Bearer ' + getCookie("usertoken"));
});