
const baseUrlMedecin = "https://gestionmedical.alwaysdata.net/api/controllers/controllerMedecin";
const baseUrl = "https://gestionmedical.alwaysdata.net/api/controllers/controllerRendezVous";


function getAllMedecin() {
    fetch(baseUrlMedecin + "/ControllerGetAllMedecin.php")
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur s\'est produite lors de la récupération des médecins.');
        }
        return response.json(); 
    })
    .then(data => {
        if(data.status_code === 200 && data.data.length > 0) {
            const selectAddRdv = document.getElementById('AllMedecinAddRdv'); 
            selectAddRdv.innerHTML = '<option value="" selected disabled>Sélectionnez un médecin</option>';

            data.data.forEach(medecin => {
                const optionAddRdv = document.createElement('option');

                optionAddRdv.value = medecin.Id_Medecin;
                optionAddRdv.text = `${medecin.civilite} ${medecin.prenom} ${medecin.nom}`;

                // Ajoute les options aux deux sélecteurs
                selectAddRdv.appendChild(optionAddRdv);
            });

        } else {
            console.log('Aucun médecin trouvé ou erreur de réponse.');
        }
    })
    .catch(error => {
        alert(error.message);
    });
}

function createConsultations(event) {
    event.preventDefault();

        
        var id_usager = document.getElementById('Id_Usager').value;
        var date_consult = document.getElementById('date_consult').value;
        var heure_consult = document.getElementById('heure_consult').value;
        var duree_consult = document.getElementById('duree_consult').value;
        var id_medecin = selectedOptionAdd.value;

    var data = {

        id_usager: id_usager,
        date_consult: date_consult,
        heure_consult: heure_consult,
        duree_consult: duree_consult,
        id_medecin: id_medecin
    };

    fetch(baseUrl + "/ControllerAddRdv.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(data => {
        if (data.status === 201) {
            alert("Consultation ajouté avec succès!");
            document.location.href="../Consultations.php";
        } else {
            alert("Une erreur s'est produite lors de l'ajout d'une consultations.",data.status);
        }
        // AJOUTER ERREUR 409 AU CAS OU COLISION
    })
    .catch(error => {
        alert("Une erreur s'est produite lors de l'envoi de la requête.", error);
    });
}




document.addEventListener('DOMContentLoaded', getAllMedecin);
document.getElementById('AllMedecinAddRdv').addEventListener('change', function() { 
    selectedOptionAdd = this.options[this.selectedIndex];
    console.log(selectedOptionAdd)
});
document.getElementById('formAddConsultation').addEventListener('submit', function(e){ 
    e.preventDefault();
    createConsultations(e);
});