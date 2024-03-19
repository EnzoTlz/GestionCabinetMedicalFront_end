<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier un médecin</title>
    

    <link rel="stylesheet" href="../style/modifyUsager.css">
    <link rel="stylesheet" href="../style/global.css">
</head>
<body>
    <?php
        echo '<div class="modifUsager">';
            echo '<form action="" method="PATCH" class="formModifyUsager" id="formModifyUsager">';
            
                echo '<input type="hidden" id="Id_Usager" name="user_id" value="' . $_GET['Id_Usager'] . '">';

                echo '<label for="civilite_homme"><input type="radio" id="civilite_homme" name="civilite" value="M." required';
                echo ($_GET['civilite'] == 'M.') ? ' checked' : '';
                echo '>M.</label>';
                
                echo '<label for="civilite_femme"><input type="radio" id="civilite_femme" name="civilite" value="Mme." required';
                echo ($_GET['civilite'] == 'Mme.') ? ' checked' : '';
                echo '>Mme.</label><br>';

                echo '<label for="sexe_homme"><input type="radio" id="sexe_homme" name="sexe" value="H" required';
                echo ($_GET['sexe'] == 'H') ? ' checked' : '';
                echo '>homme</label>';
                
                echo '<label for="sexe_femme"><input type="radio" id="sexe_femme" name="sexe" value="F" required';
                echo ($_GET['sexe'] == 'F') ? ' checked' : '';
                echo '>femme</label><br>';

                echo 'Nom: <input type="text"  id="nom" value="' . $_GET['nom'] . '" ><br>';
                echo 'Prénom: <input type="text" id="prenom" value="' . $_GET['prenom'] . '"><br>';
                echo 'Adresse: <input type="text" id="adresse" value="' . $_GET['adresse'] . '"><br>';
                echo 'Ville: <input type="text" id="ville" value="' . $_GET['ville'] . '"><br>';
                echo 'Code postal: <input type="text" id="code_postal" value="' . $_GET['code_postal'] . '"><br>';
                echo 'Date de naissance: <input type="date" id="date_nais" value="' . $_GET['date_nais'] . '"><br>';
                echo 'Lieu de naissance: <input type="text" id="lieu_nais" value="' . $_GET['lieu_nais'] . '"><br>';
                echo 'Numéro de sécurité sociale: <input type="text" id="num_secu" value="' . $_GET['num_secu'] . '"><br>';
                echo 'Médecin référent: <input type="text" id="medecin_referent" value="' . $_GET['medecin_referent'] . '"><br>';
                
                echo '<input type="submit" value="Modifier">';
            echo '</form>';
        echo '</div>';
    ?>

    <button class="button_back">
        <a href="../Usagers.php" style="text-decoration: none;">Retour</a>
    </button>
    <script src="modifyUsager.js"></script>

</body>
</html>