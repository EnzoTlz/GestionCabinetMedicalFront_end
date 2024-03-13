<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier un médecin</title>
    <link rel="stylesheet" href="../style/modifyMedecin.css">
    <link rel="stylesheet" href="../style/global.css">
</head>
<body>
    <?php
        echo '<div class="modifUsager">';
            echo '<form action="" method="DELETE" class="formDeleteMedecin" id="formMedecinDelete">';     
                echo '<input name="Id_Medecin" id="Id_Medecin" type="hidden" value="' . $_GET['Id_Medecin'] . '">';
            
                echo '<label class="radio-label" for="civilite_homme"><input type="radio" disabled name="civilite" id="civilite" value="M." required';
                echo ($_GET['civilite'] == 'M.') ? ' checked' : '';
                echo '>homme</label>';
                
                echo '<label class="radio-label" for="civilite_femme"><input type="radio" disabled name="civilite" id="civilite" value="Mme." required';
                echo ($_GET['civilite'] == 'Mme.') ? ' checked' : '';
                echo '>femme</label><br>';
                
                echo 'Nom: <input type="text" readonly id="nom" name="nom" value="' . $_GET['nom'] . '" ><br>';
                echo 'Prénom: <input type="text" readonly id="prenom" name="prenom" value="' . $_GET['prenom'] . '"><br>';
                
                echo '<input type="submit" value="Supprimer">';
            echo '</form>';
        echo '</div>';

    ?>
    <button class="button_back">
        <a href="../Medecins.php" style="text-decoration: none;">Retour</a>
    </button>
    <script src="DeleteMedecin.js"></script>
</body>
</html>