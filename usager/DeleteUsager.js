const baseUrl = "https://gestionmedical.alwaysdata.net/api/usagers";
//DELETE USAGER

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

function deleteUsager(event){
    event.preventDefault();
    var data = {
        id: document.getElementById("Id_Usager").value,
    }
    fetch (baseUrl + "/" + data.id,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie("usertoken").value,
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
