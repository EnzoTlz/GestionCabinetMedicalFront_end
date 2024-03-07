const baseUrl = "http://localhost/GestionCabinetMedicalBack_end/controllers/controllerMedecin";

// CREER UN MEDECIN 
function createMedecin(event) {
    event.preventDefault();

    var civilite = document.querySelector('input[name="civilite"]:checked').value;
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;

    var data = {
        civilite: civilite,
        nom: nom,
        prenom: prenom
    };

    fetch(baseUrl + "/ControllerAddMedecin.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(data => {
        if (data.status === 200) {
            alert("Médecin ajouté avec succès!");
        } else {
            alert("Une erreur s'est produite lors de l'ajout du médecin.",data.status);
        }
    })
    .catch(error => {
        alert("Une erreur s'est produite lors de l'envoi de la requête.", error);
    });
}
// DELETE MEDECIN
function deleteMedecin(){
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;

    var data = {
        nom: nom,
        prenom: prenom
    }
    fetch (baseUrl + "/ControllerDeleteMedecin",{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}
document.getElementById('formMedecin').addEventListener('submit', createMedecin);

