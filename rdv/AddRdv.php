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
                echo '<input type="hidden" id="Id_Usager" value="' . $_GET['Id_Usager'] . '">';
                echo 'Nom & prénom du patient: <input type="text" readonly name="nom" value="' . $_GET['nom'] . ' ' .$_GET['prenom'] .'" ><br>';

                echo 'Choix du médecin: <select name="allMedecin" id="AllMedecinAddRdv"></select>';

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
