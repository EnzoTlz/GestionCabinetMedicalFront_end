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
    .then(data => {
        console.log(data);
        if (data.status === 200) {
            document.location.href="./Medecins.php"
        } else {
            alert("Une erreur s'est produite lors de l'ajout du médecin.",data.status);
        }
    })
    .catch(error => {
        alert("Une erreur s'est produite lors de l'envoi de la requête.", error);
    });
}

document.getElementById('form_login').addEventListener('submit', function(e){ // GET MEDECIN BY ID
    e.preventDefault();
    getJWT();
});
