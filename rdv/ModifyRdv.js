const baseUrl = "https://gestionmedical.alwaysdata.net/api/medecins";

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

function modifyRdv(event){
    event.preventDefault();
    var data = {
        id: document.getElementById("id_rendez_vous").value,
        id_medecin: document.getElementById("Id_Medecin").value,
        id_usager: document.getElementById("Id_Usager").value,
        date_consult: document.getElementById("date_rendez_vous").value,
        heure_consult: document.getElementById("heure_rendez_vous").value,
        duree_consult: document.getElementById("duree_rendez_vous").value
    }
    fetch(baseUrl + "/" + data.id , {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie("usertoken").value,
        },
        body: JSON.stringify(data)
    })
    .then(data => {
        if (data.status === 200) {
            alert("Consultation modifier avec succès!");
            document.location.href="../Consultations.php";
        } else {
            alert("Une erreur s'est produite lors de la modification de la consultation.",data.status);
        }
    })
    .catch(error => {
        alert("Une erreur s'est produite lors de l'envoi de la requête.", error);
    });
}
document.getElementById('formModifyRdv').addEventListener('submit', modifyRdv); // MODIFY

