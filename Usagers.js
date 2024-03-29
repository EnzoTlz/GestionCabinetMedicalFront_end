const baseUrl = "https://gestionmedical.alwaysdata.net/api/usagers";
const baseUrlMedecin = "https://gestionmedical.alwaysdata.net/api/medecins";
;


function createUsager(event) {
    event.preventDefault();

    var civilite = document.querySelector('input[name="civilite"]:checked').value;
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var adresse = document.getElementById("adresse").value;
    var sexe = document.querySelector('input[name="sexe"]:checked').value;
    var code_postal = document.getElementById('code_postal').value;
    var ville = document.getElementById('ville').value;
    var date_naissance = document.getElementById('date_naissance').value;
    var lieu_naissance = document.getElementById('lieu_naissance').value;
    var num_secu = document.getElementById('numero_securite_social').value;
    var medecin_referent = selectedOptionAdd.value;

    var data = {
        civilite: civilite,
        nom: nom,
        prenom: prenom,
        adresse: adresse,
        sexe: sexe,
        code_postal: code_postal,
        ville: ville,
        date_nais: date_naissance,
        lieu_nais: lieu_naissance,
        num_secu: num_secu,
        id_medecin: medecin_referent
    };

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(data => {
        if (data.status === 201) {
            alert("Médecin ajouté avec succès!");
        } else {
            alert("Une erreur s'est produite lors de l'ajout du médecin.",data.status);
        }
    })
    .catch(error => {
        alert("Une erreur s'est produite lors de l'envoi de la requête.", error);
    });
}


function getAllMedecin() {
    fetch(baseUrlMedecin)
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur s\'est produite lors de la récupération des médecins.');
        }
        return response.json(); 
    })
    .then(data => {
        if(data.status_code === 200 && data.data.length > 0) {

            const selectAdd = document.getElementById('AllMedecinAddUsager'); 
            selectAdd.innerHTML = '<option value="" selected disabled>Sélectionnez un médecin</option>';

            data.data.forEach(medecin => {
                const optionAdd = document.createElement('option');
                optionAdd.value = medecin.Id_Medecin;
                optionAdd.text = `${medecin.civilite} ${medecin.prenom} ${medecin.nom}`;
                selectAdd.appendChild(optionAdd);
            });

        } else {
            console.log('Aucun médecin trouvé ou erreur de réponse.');
        }
    })
    .catch(error => {
        alert(error.message);
    });
}


function getAllUsager() {
    fetch(baseUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur s\'est produite lors de la récupération des médecins.');
        }
        return response.json(); 
    })
    .then(data => {
        if(data.status_code === 200 && data.data.length > 0) {
            // Récupère les deux éléments select par leurs nouveaux identifiants
            const selectModify = document.getElementById('AllUsagerModify'); 
            const selectDelete = document.getElementById('AllUsagerDelete');

            // Initialiser les sélecteurs avec l'option par défaut
            selectModify.innerHTML = '<option value="" selected disabled>Sélectionnez un patient</option>';
            selectDelete.innerHTML = '<option value="" selected disabled>Sélectionnez un patient</option>';

            data.data.forEach(usager => {
                const optionModify = document.createElement('option');
                const optionDelete = document.createElement('option');

                optionModify.value = usager.Id_Usager;
                optionModify.text = `${usager.civilite} ${usager.prenom} ${usager.nom}`;

                optionDelete.value = usager.Id_Usager;
                optionDelete.text = `${usager.civilite} ${usager.prenom} ${usager.nom}`;

                // Ajoute les options aux deux sélecteurs
                selectModify.appendChild(optionModify);
                selectDelete.appendChild(optionDelete);
            });

        } else {
            console.log('Aucun médecin trouvé ou erreur de réponse.');
        }
    })
    .catch(error => {
        alert(error.message);
    });
}

function getUsagerById(id , value){
    fetch(baseUrl+"/"+id )
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
        console.log(data);
        if(infoReponse.status_code == 200  && value == "modify"){
            document.location.href="./usager/ModifyUsager.php?Id_Usager=" + data.data.Id_Usager +
                                                                "&adresse="+data.data.adresse + 
                                                                "&civilite=" + data.data.civilite +
                                                                "&code_postal=" + data.data.code_postal +
                                                                "&date_nais="+data.data.date_nais +
                                                                "&lieu_nais=" + data.data.lieu_nais + 
                                                                "&medecin_referent=" + data.data.medecin_referent + 
                                                                "&nom=" + data.data.nom +
                                                                "&num_secu=" +data.data.num_secu +
                                                                "&prenom=" + data.data.prenom + 
                                                                "&sexe="+ data.data.sexe + 
                                                                "&ville=" + data.data.ville;
        }
        if(infoReponse.status_code == 200  && value == "delete"){
            document.location.href="./usager/DeleteUsager.php?Id_Usager=" + data.data.Id_Usager +
                                                                "&adresse="+data.data.adresse + 
                                                                "&civilite=" + data.data.civilite +
                                                                "&code_postal=" + data.data.code_postal +
                                                                "&date_nais="+data.data.date_nais +
                                                                "&lieu_nais=" + data.data.lieu_nais + 
                                                                "&medecin_referent=" + data.data.medecin_referent + 
                                                                "&nom=" + data.data.nom +
                                                                "&num_secu=" +data.data.num_secu +
                                                                "&prenom=" + data.data.prenom + 
                                                                "&sexe="+ data.data.sexe + 
                                                                "&ville=" + data.data.ville;        }
        })
}



// générer la requete lors du refresh de la page ==> utiliser pour add user & getallmedecin ==> modifier / delete
document.addEventListener('DOMContentLoaded', getAllUsager);
document.addEventListener('DOMContentLoaded', getAllMedecin);

//crée un usager + recupéré la valeur du médecin select
document.getElementById('formAddUsager').addEventListener('submit', createUsager); 
document.getElementById('AllMedecinAddUsager').addEventListener('change', function() { 
    selectedOptionAdd = this.options[this.selectedIndex];
});




//recuperer la valeur selectionner par l'utilisateur (MODIFIER)
document.getElementById('AllUsagerModify').addEventListener('change', function() { 
    selectedOptionModify = this.options[this.selectedIndex];
});
// get l'element selectionner par l'user via selectedOption (MODIFIER)
document.getElementById('formModifyUsager').addEventListener('submit', function(e){ // GET MEDECIN BY ID
    e.preventDefault();
    getUsagerById(selectedOptionModify.value,"modify");
});

//recuperer la valeur selectionner par l'utilisateur (SUPPRIMER)
document.getElementById('AllUsagerDelete').addEventListener('change', function() { 
    selectedOptionDelete = this.options[this.selectedIndex];
});
// get l'element selectionner par l'user via selectedOption (SUPPRIMER)
document.getElementById('formDeleteUsager').addEventListener('submit', function(e){ // GET MEDECIN BY ID
    e.preventDefault();
    getUsagerById(selectedOptionDelete.value,"delete");
});