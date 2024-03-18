const baseUrl = "https://gestionmedical.alwaysdata.net/api/controllers/controllerRendezVous";
const baseUrlUsager = "https://gestionmedical.alwaysdata.net/api/controllers/controllerUsager";

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

function createRdvForm(rdv) {
    const form = document.createElement('form');
    form.classList.add('allRdv');
    form.innerHTML = `
        <input type="hidden" name="id_rendez_vous" value="${rdv.id_rendez_vous}">
        <input type="hidden" name="duree" value="${rdv.duree_rendez_vous}">
        <input type="hidden" name="Id_Medecin" value="${rdv.Id_Medecin}">
        Nom & prénom du patient : <input type="text" name="nomprenom" value="${rdv.Id_Usager}"><br>
        Durée rendez-vous : <input type="text" name="dureevisu" value="${rdv.duree_rendez_vous}"><br>
        Date rendez-vous : <input type="text" name="date_rendez_vous" value="${rdv.date_rendez_vous}"><br>
        Heure rendez-vous : <input type="text" name="heure_rendez_vous" value="${rdv.heure_rendez_vous}"><br>
        Nom & prénom du médecin : <input type="text" name="nom_medecin" value="${rdv.Id_Medecin}"><br>
        <input type="hidden" name="Id_Usager" value="${rdv.Id_Usager}">
        <input type="hidden" name="duree_rendez_vous" value="${rdv.duree_rendez_vous}">
        <input type="submit" name="Modifier" value="Modifier">
        <input type="submit" name="Supprimer" value="Supprimer">
    `;
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const action = event.submitter.value;
        
        if (action === "Supprimer") {
            DeleteConsultation(rdv.id_rendez_vous);
        }else if(action === "Modifier"){
            console.log(rdv.date_rendez_vous);
            document.location.href="./rdv/ModifyRdv.php?id_rendez_vous=" + rdv.id_rendez_vous + "&date_rendez_vous="+rdv.date_rendez_vous + "&heure_rendez_vous="+rdv.heure_rendez_vous + "&duree_rendez_vous="+rdv.duree_rendez_vous + "&Id_Medecin="+rdv.Id_Medecin +"&Id_Usager="+rdv.Id_Usager ;
        }
    });
    document.getElementById('allRdv').appendChild(form);
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

function AddRdv($id){

    document.location.href="./rdv/AddRdv.php?Id_Usager=" + $id;

}

document.addEventListener('DOMContentLoaded', getAllUsager);
document.addEventListener('DOMContentLoaded', getAllRdv);

document.getElementById('AllUsagerAddRdv').addEventListener('change', function() { 
    selectedOptionAdd = this.options[this.selectedIndex];
    // console.log(selectedOptionAdd.value)
});
document.getElementById('formAddConsultations').addEventListener('submit', function(e){ // GET MEDECIN BY ID
    e.preventDefault();
    AddRdv(selectedOptionAdd.value);
});