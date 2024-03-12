//DELETE MEDECIN
function deleteMedecin(){
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;

    var data = {
        nom: nom,
        prenom: prenom
    }
    fetch (baseUrl + "/ControllerDeleteMedecin.php",{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(data => {
        if (data.status === 200) {
            alert("Médecin supprimer avec succès!");
        } else {
            alert("Une erreur s'est produite lors de la suppression du médecin.",data.status);
        }
    })
    .catch(error => {
        alert("Une erreur s'est produite lors de l'envoi de la requête.", error);
    });
}

document.getElementById('formMedecinDelete').addEventListener('submit', deleteMedecin);
