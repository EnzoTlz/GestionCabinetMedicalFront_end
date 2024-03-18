const baseUrl = "https://gestionmedical.alwaysdata.net/api/controllers/controllerUsager";


function modifyUsager(event){
    event.preventDefault();
    var data = {
        id: document.getElementById("Id_Usager").value,
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        civilite: document.getElementById("civilite").value,
        adresse:document.getElementById("adresse").value,
        sexe:document.getElementById("sexe").value,
        code_postal:document.getElementById("code_postal").value,
        ville:document.getElementById("ville").value,
        lieu_nais:document.getElementById("lieu_nais").value,
        date_nais:document.getElementById("date_nais").value,
        num_secu:document.getElementById("num_secu").value,
        medecin_referent:document.getElementById("medecin_referent").value
    }
    console.log(data);
    fetch(baseUrl + "/ControllerModifyUsager.php" + "?id=" + data.id , {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(data => {
        if (data.status === 200) {
            alert("Patient modifier avec succès!");
            document.location.href="../Usagers.php";
        } else {
            alert("Une erreur s'est produite lors de la modification du patient.",data.status);
        }
    })
    .catch(error => {
        alert("Une erreur s'est produite lors de l'envoi de la requête.", error);
    });
}
document.getElementById('formModifyUsager').addEventListener('submit', modifyUsager); // MODIFY