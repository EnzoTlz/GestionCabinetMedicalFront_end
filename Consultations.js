const baseUrl = "https://gestionmedical.alwaysdata.net/api/controllers/controllerRendezVous";
const baseUrlUsager = "https://gestionmedical.alwaysdata.net/api/controllers/controllerUsager";
const baseUrlMedecin = "https://gestionmedical.alwaysdata.net/api/controllers/controllerMedecin";

function getAllRdv() {
    fetch(baseUrl + "/ControllerGetAllRdv.php")
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur s\'est produite lors de la récupération des consultations.');
        }
        return response.json(); 
    })
    .then(data => {
        if(data.status_code === 200 && data.data.length > 0) {
            data.data.forEach(rdv => {
                createRdvForm(rdv);
            });
        } else {
            console.log("fail");
        }
    })
    .catch(error => {
        alert(error.message);
    });
}
function convertMinutesToHoursMinutes(minutes) {
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes % 60;
    return hours + ' h ' + remainingMinutes + ' min';
}

function createRdvForm(rdv) {
    const form = document.createElement('form');
    form.classList.add('allRdv');

    const dureeConvertie = convertMinutesToHoursMinutes(rdv.duree_rendez_vous);

    form.innerHTML = `
        <input type="hidden" name="id_rendez_vous" value="${rdv.id_rendez_vous}">
        <input type="hidden" name="duree" value="${rdv.duree_rendez_vous}">
        <input type="hidden" name="Id_Medecin" value="${rdv.Id_Medecin}">
        <input type="hidden" readonly name="nomprenom" value="${rdv.Id_Usager}"><br>
        <input type="hidden" readonly name="dureevisu" value="${rdv.duree_rendez_vous}"><br>
        Durée rendez-vous : <input type="text" readonly name="dureevisu" value="${dureeConvertie}"><br>
        Date rendez-vous : <input type="text" readonly name="date_rendez_vous" value="${rdv.date_rendez_vous}"><br>
        Heure rendez-vous : <input type="text"readonly name="heure_rendez_vous" value="${rdv.heure_rendez_vous}"><br>
        Nom & prénom du médecin : <input type="text" name="nom_medecin" ><br>
        Nom & prénom du patient : <input type="text" name="nom_patient" ><br>
        <input type="hidden" name="Id_Usager" value="${rdv.Id_Usager}">
        <input type="hidden" name="duree_rendez_vous" value="${rdv.duree_rendez_vous}">
        <input type="submit" name="Modifier" value="Modifier">
        <input type="submit" name="Supprimer" value="Supprimer">
    `;
    
    // Récupérer les informations du médecin et mettre à jour le formulaire
    getMedecinById(rdv.Id_Medecin)
        .then(medecinInfo => {
            form.querySelector('input[name="nom_medecin"]').value = medecinInfo.nom + ' ' + medecinInfo.prenom;
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des informations du médecin :", error);
            // Gérer l'erreur
        });
    getUsagerById(rdv.Id_Usager)
        .then(usagerInfo => {
            form.querySelector('input[name="nom_patient"]').value = usagerInfo.nom + ' ' + usagerInfo.prenom;
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des informations du médecin :", error);
            // Gérer l'erreur
        });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const action = event.submitter.value;
        
        // Sélectionner les éléments nom_patient et nom_medecin dans le formulaire
        var nomPrenomUsager = form.querySelector('input[name="nom_patient"]').value;
        var nomPrenomMedecin = form.querySelector('input[name="nom_medecin"]').value;
    
        if (action === "Supprimer") {
            DeleteConsultation(rdv.id_rendez_vous);
        } else if(action === "Modifier"){
            console.log(rdv.date_rendez_vous);
            document.location.href="./rdv/ModifyRdv.php?id_rendez_vous=" + rdv.id_rendez_vous + "&date_rendez_vous="+rdv.date_rendez_vous + "&heure_rendez_vous="+rdv.heure_rendez_vous + "&duree_rendez_vous="+rdv.duree_rendez_vous + "&Id_Medecin="+rdv.Id_Medecin +"&Id_Usager="+rdv.Id_Usager 
            + "&nomPrenomMedecin=" + nomPrenomMedecin + "&nomPrenomPatient=" + nomPrenomUsager;
        }
    });
        
    
    document.getElementById('allRdv').appendChild(form);
}

// Fonction pour récupérer les informations du médecin par ID
function getMedecinById(id) {
    return fetch(baseUrlMedecin + "/ControllerGetMedecin.php" + "?id=" + id)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.status_code === 200 ) {
                // console.log(data.data.nom);
                return {
                    nom: data.data.nom,
                    prenom: data.data.prenom
                };
            } else {
                throw new Error('Erreur lors de la récupération des informations du médecin');
            }
        });
}


function getUsagerById(id){
    return fetch(baseUrlUsager + "/ControllerGetUsager.php" + "?id="+id )
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.status_code === 200 ) {
            return {
                nom: data.data.nom,
                prenom: data.data.prenom
            };
        }else {
            throw new Error('Erreur lors de la récupération des informations du patient');
        }
    });
}


function getAllUsager() {
    fetch(baseUrlUsager + "/ControllerGetAllUsager.php")
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur s\'est produite lors de la récupération des patients.');
        }
        return response.json(); 
    })
    .then(data => {
        if(data.status_code === 200 && data.data.length > 0) {
            const selectAddRdv = document.getElementById('AllUsagerAddRdv'); 
            selectAddRdv.innerHTML = '<option value="" selected disabled>Sélectionnez un patient</option>';

            data.data.forEach(usager => {
                const optionAddRdv = document.createElement('option');

                optionAddRdv.value = usager.Id_Usager;
                optionAddRdv.text = `${usager.civilite} ${usager.prenom} ${usager.nom}`;

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

function DeleteConsultation($id_Consultation){
    fetch(baseUrl + "/ControllerDeleteRdv.php?id=" + $id_Consultation, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur s\'est produite lors de la suppression de la consultation.');
        }
        return response.json(); 
    })
    .then(data => {
        if(data.status_code === 200) {
            alert('La consultation a été supprimée avec succès.');
            location.reload();
        } else {
            alert('La consultation n\'a pas été supprimée.');
        }
    })
    .catch(error => {
        alert(error.message);
    });

}

function AddRdv($id, nom , prenom){

    document.location.href="./rdv/AddRdv.php?Id_Usager=" + $id + "&prenom=" + prenom + "&nom="+ nom;

}

document.addEventListener('DOMContentLoaded', getAllUsager);
document.addEventListener('DOMContentLoaded', getAllRdv);

document.getElementById('AllUsagerAddRdv').addEventListener('change', function() { 
    selectedOptionAdd = this.options[this.selectedIndex];
    // console.log(selectedOptionAdd.value)
});
document.getElementById('formAddConsultations').addEventListener('submit', function(e){ // GET MEDECIN BY ID
    e.preventDefault();
    var fullName = selectedOptionAdd.text.trim(); // Retirez les espaces inutiles
    var parts = fullName.split(' '); // Divisez la chaîne en fonction des espaces
    var prenom = parts[1]; // 2eme champs ==> prenom
    var nom = parts.slice(2).join(' '); // Le reste nom
    console.log(prenom);
    console.log(nom);
    AddRdv(selectedOptionAdd.value , nom , prenom);
});