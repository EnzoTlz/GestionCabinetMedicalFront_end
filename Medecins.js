const baseUrl = "https://gestionmedical.alwaysdata.net/api/medecins";

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Vérifie si le cookie commence par le nom spécifié
        if (cookie.startsWith(name + '=')) {
            // Récupère la valeur du cookie
            const value = cookie.substring(name.length + 1);
            // Retourne un objet avec le nom et la valeur du cookie
            console.log({ name: name, value: value });
            return { name: name, value: value };
        }
    }
    // Si le cookie n'est pas trouvé, retourne null
    return null;
}



function getAllMedecin() {
    fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie("jwtToken")
        },
        credentials: 'include'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur s\'est produite lors de la récupération des médecins.');
        }
        return response.json(); 
    })
    .then(data => {
        if(data.status_code === 200 && data.data.length > 0) {
            // Récupère les deux éléments select par leurs nouveaux identifiants
            const selectModify = document.getElementById('AllMedecinModify'); 
            const selectDelete = document.getElementById('AllMedecinDelete');

            // Initialiser les sélecteurs avec l'option par défaut
            selectModify.innerHTML = '<option value="" selected disabled>Sélectionnez un médecin</option>';
            selectDelete.innerHTML = '<option value="" selected disabled>Sélectionnez un médecin</option>';

            data.data.forEach(medecin => {
                const optionModify = document.createElement('option');
                const optionDelete = document.createElement('option');

                optionModify.value = medecin.Id_Medecin;
                optionModify.text = `${medecin.civilite} ${medecin.prenom} ${medecin.nom}`;

                optionDelete.value = medecin.Id_Medecin;
                optionDelete.text = `${medecin.civilite} ${medecin.prenom} ${medecin.nom}`;

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



// GET UN MEDECIN
function getMedecinById(id , value){
    fetch(baseUrl+ "/"+id )
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
        if(infoReponse.status_code == 200  && value == "modify"){
            document.location.href="./medecin/ModifyMedecin.php?Id_Medecin=" + data.data.Id_Medecin + "&civilite=" + data.data.civilite + "&nom=" + data.data.nom + "&prenom=" + data.data.prenom;
        }
        if(infoReponse.status_code == 200  && value == "delete"){
            document.location.href="./medecin/DeleteMedecin.php?Id_Medecin=" + data.data.Id_Medecin + "&civilite=" + data.data.civilite + "&nom=" + data.data.nom + "&prenom=" + data.data.prenom;
        }
        })
}

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

// //lancer ma requete au refresh de la page
document.addEventListener('DOMContentLoaded', getCookie("jwtToken"));

document.addEventListener('DOMContentLoaded', getAllMedecin);


document.getElementById('formMedecinAdd').addEventListener('submit', createMedecin); // CREE


//recuperer la valeur selectionner par l'utilisateur (MODIFIER)
document.getElementById('AllMedecinModify').addEventListener('change', function() { 
    selectedOptionModify = this.options[this.selectedIndex];
});
// get l'element selectionner par l'user via selectedOption (MODIFIER)
document.getElementById('formMedecinModify').addEventListener('submit', function(e){ // GET MEDECIN BY ID
    e.preventDefault();
    getMedecinById(selectedOptionModify.value,"modify");
});

//recuperer la valeur selectionner par l'utilisateur (SUPPRIMER)
document.getElementById('AllMedecinDelete').addEventListener('change', function() { 
    selectedOptionDelete = this.options[this.selectedIndex];
});
// get l'element selectionner par l'user via selectedOption (SUPPRIMER)
document.getElementById('formMedecinDelete').addEventListener('submit', function(e){ // GET MEDECIN BY ID
    e.preventDefault();
    getMedecinById(selectedOptionDelete.value,"delete");
});






