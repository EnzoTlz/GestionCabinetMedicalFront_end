
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formMedecin');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Récupère les valeurs du formulaire
        var civilite = document.querySelector('input[name="civilite"]:checked').value;
        var nom = document.getElementById('nom').value;
        var prenom = document.getElementById('prenom').value;

        // Crée l'objet JSON à envoyer
        var data = {
            civilite: civilite,
            nom: nom,
            prenom: prenom
        };

        // Utilise Fetch pour envoyer les données en JSON
        fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json()) // ou .then(response => response.text()) si la réponse n'est pas du JSON
        .then(data => {
            console.log('Succès:', data);
            // Traitez ici la réponse du serveur
        })
        .catch((error) => {
            console.error('Erreur:', error);
            // Gérez ici les erreurs de requête
        });
    });
});