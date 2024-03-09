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

// GET TOUS LES MEDECINS
function getAllMedecin() {
    fetch(baseUrl + "/controllerGetAllMedecin.php")
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur s\'est produite lors de la récupération des médecins.');
        }
        return response.json(); 
    })
    .then(data => {
        if(data.status_code === 200 && data.data.length > 0) {
            const select = document.getElementById('AllMedecin'); 
            select.innerHTML = '<option value="" selected disabled>Sélectionnez un médecin</option>';

            data.data.forEach(medecin => {
                const option = document.createElement('option');
                option.value = medecin.Id_Medecin;
                option.text = `${medecin.civilite} ${medecin.prenom} ${medecin.nom}`;
                select.appendChild(option);
            });

        } else {
            console.log('Aucun médecin trouvé ou erreur de réponse.');
        }
    })
    .catch(error => {
        alert(error.message);
    });
}
// GET UN MEDECIN
function getMedecinById(id){
    fetch(baseUrl + "/controllerGetMedecin.php" + "?id="+id )
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let infoReponse = {
            status: data.status,
            status_code: data.status_code,
            status_message: data.status_message
        };
        // console.log(data.data);
        if(infoReponse.status_code == 200){
            document.location.href="./medecin/ModifyMedecin.php?Id_Medecin=" + data.data.Id_Medecin + "&civilite=" + data.data.civilite + "&nom=" + data.data.nom + "&prenom=" + data.data.prenom;
        }
    })
}
// MODIFY MEDECIN
function modifyMedecin(){
    var data = {
        id: document.getElementById("Id_Medecin").value,
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        civilite: document.getElementById("civilite").value
    }
    fetch(baseUrl + "/controllerModifyMedecin.php" + "?id=" +id , {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(data => {
        if (data.status === 200) {
            alert("Médecin modifier avec succès!");
        } else {
            alert("Une erreur s'est produite lors de la modification du médecin.",data.status);
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


//lancer ma requete au refresh de la page
document.addEventListener('DOMContentLoaded', getAllMedecin);

document.getElementById('formMedecinAdd').addEventListener('submit', createMedecin); // CREE

document.getElementById('AllMedecin').addEventListener('change', function() { // GET ALL MEDECIN
    selectedOption = this.options[this.selectedIndex];
});

document.getElementById('formMedecinSearch').addEventListener('submit', function(e){ // GET MEDECIN BY ID
    e.preventDefault();
    getMedecinById(selectedOption.value);
});

document.getElementById('formModifyMedecin').addEventListener('submit', modifyMedecin); // MODIFY


//document.getElementById('formMedecinDelete').addEventListener('submit', deleteMedecin);
