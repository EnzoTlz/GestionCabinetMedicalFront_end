function getJWT(){
    var login = document.getElementById('login').value;
    var mdp = document.getElementById('mdp').value;

    fetch('https://authapigestionmedical.alwaysdata.net/authAPI/Index.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: login,
            mdp: mdp
        }),
        credentials: 'include'
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Convertir la réponse en JSON
        } else {
            throw new Error('Erreur HTTP: ' + response.status);
        }
    })
    .then(data => {
        // Accéder au jeton JWT dans les données JSON
        let jwtToken = data.data;
        console.log(jwtToken);
        // Stocker le jeton dans un cookie ou effectuer d'autres actions nécessaires
        // document.location.href="./Medecins.php";
    })
    .catch(error => {
        alert("Une erreur s'est produite lors de l'envoi de la requête: " + error.message);
    });
}


document.getElementById('form_login').addEventListener('submit', function(e){ // GET MEDECIN BY ID
    e.preventDefault();
    getJWT();
});
