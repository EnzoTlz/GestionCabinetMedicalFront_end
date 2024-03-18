<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../style/addRdv.css">
        <title>Add rendez-vous</title>
    </head>
    <body>
        <?php

                echo '<div class="AddRdv">';

                echo '<form action="" method="post" id="formAddConsultation">';
                echo 'Id usager : <input type="text" id="Id_Usager" value="' . $_GET['Id_Usager'] . '">';
                // echo 'Nom: <input type="text" readonly name="nom" value="' . $commandSearch->usager->getNom() . '" ><br>';
                // echo 'Prénom: <input type="text" readonly name="prenom" value="' . $commandSearch->usager->getPrenom() . '"><br>';
                echo 'Médecin Référent: <select name="allMedecin" id="AllMedecinAddRdv"></select>';

                echo 'Date du rendez-vous : <input type="date" id="date_consult" required> <br>';
                echo 'Heure du rendez-vous: <input type="time" id="heure_consult" required><br>';
                echo 'Durée du rendez-vous en minute: <input type="number" id="duree_consult" value="30" required> <br>';
                echo '<input type="submit" value="Créer">';
                echo '</form>';
                echo '</div>';

        ?>
        <script src="AddRdv.js"></script>
    </body>
</html>
