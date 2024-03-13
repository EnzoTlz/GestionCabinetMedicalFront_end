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
            echo '<form action="" method="DELETE" class="formDeleteUsager">';

                echo '<input type="hidden" name="user_id" value="' . $_GET['Id_Usager'] . '">';

                echo '<label for="civilite_homme"><input type="radio" disabled name="civilite" value="homme" required';
                echo ($_GET['civilite'] == 'M.') ? ' checked' : '';
                echo '>M.</label>';
                
                echo '<label for="civilite_femme"><input type="radio" disabled name="civilite" value="femme" required';
                echo ($_GET['civilite'] == 'Mme.') ? ' checked' : '';
                echo '>Mme.</label><br>';

                echo '<label for="civilite_homme"><input type="radio" disabled name="sexe" value="H" required';
                echo ($_GET['sexe'] == 'H') ? ' checked' : '';
                echo '>homme</label>';
                
                echo '<label for="civilite_femme"><input type="radio" disabled name="sexe" value="F" required';
                echo ($_GET['civilite'] == 'F') ? ' checked' : '';
                echo '>femme</label><br>';

                echo 'Nom: <input type="text" readonly name="form_nom" value="' . $_GET['nom'] . '" ><br>';
                echo 'Prénom: <input type="text" readonly name="form_prenom" value="' . $_GET['prenom'] . '"><br>';
                echo 'Adresse: <input type="text" readonly name="form_adresse" value="' . $_GET['adresse'] . '"><br>';
                echo 'Ville: <input type="text" readonly name="form_adresse" value="' . $_GET['ville'] . '"><br>';
                echo 'Code postal: <input type="text" readonly name="form_adresse" value="' . $_GET['code_postal'] . '"><br>';
                echo 'Date de naissance: <input type="text" readonly name="form_date_naissance" value="' . $_GET['date_nais'] . '"><br>';
                echo 'Lieu de naissance: <input type="text" readonly name="form_lieu_naissance" value="' . $_GET['lieu_nais'] . '"><br>';
                echo 'Numéro de sécurité sociale: <input type="text" readonly name="form_numero_securite_social" value="' . $_GET['num_secu'] . '"><br>';
                echo 'Médecin référent: <input type="text" readonly name="num_secu" value="' . $_GET['medecin_referent'] . '"><br>';
                
                echo '<input type="submit" value="Modifier">';
            echo '</form>';
        echo '</div>';

    ?>
    <button class="button_back">
        <a href="../Usagers.php" style="text-decoration: none;">Retour</a>
    </button>
</body>
</html>