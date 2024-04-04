const baseUrl = "https://gestionmedical.alwaysdata.net/api/medecins";

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