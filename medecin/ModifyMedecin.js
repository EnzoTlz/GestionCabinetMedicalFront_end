const baseUrl = "https://gestionmedical.alwaysdata.net/api/medecins";
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