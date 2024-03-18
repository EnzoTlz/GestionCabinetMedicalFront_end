<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link  rel="stylesheet" href="../style/global.css">
    <link  rel="stylesheet" href="../style/modifyRdv.css">

</head>
<body>
    
    <h1>Modifier le rendez_vous</h1>
    <?php

        echo '<div class="container">';
            echo '<div class="allRdv">';
                echo '<form action="" method="PATCH" id="formModifyRdv">';
                
                echo '<input type="hidden" id="id_rendez_vous" name="idRdv" value="' . $_GET['id_rendez_vous'] . '"><br>';

                echo '<label for="idMedecin">Nom & prénom du médecin :</label>';
                echo '<input type="text" id="Id_Medecin"readonly name="idMedecin" value="' . $_GET['Id_Medecin'] . '"><br>';

                echo '<label for="HeureRdv">Nom et prénom du patient :</label>';
                echo '<input type="text" id="Id_Usager" readonly name="idUsager" value="' . $_GET['Id_Usager'] . '"><br>';
                // echo '<label for="idMedecin">Nom & prénom du médecin :</label>';
                // echo '<input type="text" readonly id="idMedecin" name="medecin" value="' . $getInfoMedecin . '"><br>';
                
                echo '<label for="dateRdv">Date du rendez-vous:</label>';
                echo '<input type="date" id="date_rendez_vous" name="dateRdv" value="' . $_GET['date_rendez_vous'] . '"><br>';
                
                echo '<label for="dureeRdv">Durée du rendez-vous:</label>';
                echo '<input type="text" id="duree_rendez_vous" name="dureeRdv" value="' . $_GET['duree_rendez_vous'] . '"><br>';
                     
                echo '<label for="HeureRdv">Heure du rendez-vous:</label>';
                echo '<input type="time" id="heure_rendez_vous" name="heureRdv" value="' . $_GET['heure_rendez_vous'] . '"><br>';

                // echo '<label for="HeureRdv">Nom et prénom du patient :</label>';
                // echo '<input type="text" readonly id="prenomUsager" name="prenomUsager" value="' . $getInfoUsager["nom"] . ' '.  $getInfoUsager['prenom'] .'"><br>';


                echo '<input type="submit" value="Modifier">';
                echo '</form>';
            echo '</div>';
        echo '</div>';

        // function convertDureeIntoHour($pDuree){
        //     return gmdate('H:i:s', $pDuree * 60);
        // }

    ?>
    <button class="button_back">
        <a href="../Consultations.php" style="text-decoration: none;">Retour</a>
    </button>
    <script src="ModifyRdv.js"></script>
</body>
</html>



