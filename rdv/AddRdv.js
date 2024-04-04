
const baseUrlMedecin = "https://gestionmedical.alwaysdata.net/api/medecins";
const baseUrl = "https://gestionmedical.alwaysdata.net/api/consultations";

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            const value = cookie.substring(name.length + 1);
            return { name: name, value: value };
        }
    }
    return null;
}

function getAllMedecin() {
    fetch(baseUrlMedecin , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie("usertoken").value,
        },
    })
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

function createConsultations(event,id_medecin) {
    event.preventDefault();

        var id_usager = document.getElementById('Id_Usager').value;
        var date_consult = document.getElementById('date_consult').value;
        var heure_consult = document.getElementById('heure_consult').value;
        var duree_consult = document.getElementById('duree_consult').value;
        var id_medecin = id_medecin;


    var data = {

        id_usager: id_usager,
        date_consult: date_consult,
        heure_consult: heure_consult,
        duree_consult: duree_consult,
        id_medecin: id_medecin
    };

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie("usertoken").value,
        },
        body: JSON.stringify(data)
    })
    .then(data => {
        if (data.status === 201) {
            alert("Consultation ajouté avec succès!");
            document.location.href="../Consultations.php";
        } 
        if(data.status === 409){
            alert("Le rendez-vous est déjà pris à cette date et heure.",data.status);
        }
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
    createConsultations(e, selectedOptionAdd.value);
});