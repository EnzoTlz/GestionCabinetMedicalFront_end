<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <title></title>

        <link  rel="stylesheet" href="style/consultations.css">
        <link  rel="stylesheet" href="style/global.css">

    </head>

    <body>
        <div class="navBar">
            <ul>
                <li><a href="index.html" class="navElement">Accueil</a></li>
                <li><a href="Usagers.php" class="navElement">Usagers</a></li>
                <li><a href="Consultations.php" class="navElement">Consultations</a></li>
                <li><a href="Medecins.php" class="navElement">Médecins</a></li>
                <li><a href="Statistiques.php" class="navElement">Statistiques</a></li>
            </ul>
        </div>
        
        <h1>Creation de rendez-vous</h1>
        <div class="register">
            <form action="" method="POST">
                <select name="allUsager" id="AllUsagerAddRdv"></select>
                <input type="submit" value="Ajouter un rendez-vous">
            </form>
        </div>

        <!-- <form action="" method="post" class="form_recherche">
            <?php
                // require_once("../back_end/Objects/Usager.php");

                // $usager = new Usager();
                // $printAllMedecin = $usager->PrintAllMedecin();

                // echo '<select name="medecin_selectionner">';
                // echo '<option value="" selected disabled>Sélectionnez un médecin</option>'; // Option par défaut
                // echo $printAllMedecin;
                // echo '</select>';
                
            ?>
            <input type="submit" name="Rechercher"value="Rechercher">
            <input type="submit" name="Reinitialiser" value="Reinitialiser">
        </form> -->
        <h1>Liste des rendez-vous</h1>
        <div id="allRdv" ></div>
        
        <script src="Consultations.js"></script>
    </body>

</html>