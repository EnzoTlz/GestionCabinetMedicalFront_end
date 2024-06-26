const baseUrl = "https://gestionmedical.alwaysdata.net/api/ysagers";


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

function modifyUsager(event){
    event.preventDefault();
    var data = {
        id: document.getElementById("Id_Usager").value,
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        civilite: document.querySelector('input[name="civilite"]:checked').value,
        adresse: document.getElementById("adresse").value,
        sexe: document.querySelector('input[name="sexe"]:checked').value,
        code_postal: document.getElementById("code_postal").value,
        ville: document.getElementById("ville").value,
        lieu_nais: document.getElementById("lieu_nais").value,
        date_nais: document.getElementById("date_nais").value,
        num_secu: document.getElementById("num_secu").value,
        medecin_referent: document.getElementById("medecin_referent").value
    };
    
    
    console.log(data);
    fetch(baseUrl + "/" + data.id , {
        method: 'PATCH',
        headers: {
            'Authorization': 'Bearer ' + getCookie("usertoken").value,
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