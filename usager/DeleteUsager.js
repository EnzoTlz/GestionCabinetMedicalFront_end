const baseUrl = "https://gestionmedical.alwaysdata.net/api/controllers/controllerUsager";
//DELETE USAGER

function deleteUsager(event){
    event.preventDefault();
    var data = {
        id: document.getElementById("Id_Usager").value,
    }
    fetch (baseUrl + "/ControllerDeleteUsager.php" + "?id=" + data.id,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(data => {
        console.log(data);

        if (data.status === 200) {
            // alert("Patient supprimer avec succès!");
            // document.location.href="../Usagers.php";
        } else {
            alert("Une erreur s'est produite lors de la suppression du patient.",data.status);
        }
    })
    .catch(error => {
        alert("Une erreur s'est produite lors de l'envoi de la requête.", error);
    });
}

document.getElementById('formUsagerDelete').addEventListener('submit', deleteUsager);
