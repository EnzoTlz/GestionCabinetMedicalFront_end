<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gestion des Médecins</title>
        <link rel="stylesheet" href="style/medecin.css">
        <link rel="stylesheet" href="style/global.css">

    </head>

    <header>
        <div class="navBar">
            <ul>
                <li><a href="index.html" class="navElement">Accueil</a></li>
                <li><a href="Usagers.php" class="navElement">Usagers</a></li>
                <li><a href="Consultations.php" class="navElement">Consultations</a></li>
                <li><a href="Médecins.php" class="navElement">Médecins</a></li>
                <li><a href="Statistiques.php" class="navElement">Statistiques</a></li>
            </ul>
        </div>
    </header>

    <body>
        <div>
            <div class="category">
                <h1>Médecin</h1>
            </div>

            <!-- AJOUT D'UN MEDECIN -->
            <div class="global_gestion_medecins">
                <div class="ajout_usagers">
                    <form action="" method="post" id="formMedecinAdd">
                        <h2>Ajouter un medecin</h2>
                        <label for="civilite"><input type="radio" name="civilite" value="M." required>homme</label>
                        <label for="civilite"><input type="radio" name="civilite" value="Mme." required>femme</label>  
                        <label for="nom">Nom</label>
                        <input type="text" name="nom" id="nom" required> 
                        <label for="prenom">Prenom</label>
                        <input type="text" class="bas" name="prenom" id="prenom" required>
                        <input type="submit" value="Ajouter">
                    </form>
                </div>
                
                <!-- MODIFICATION D'UN MEDECIN  -->
                <div class="modifications_usagers">
                    <form action="" method="post" id="formMedecinSearch">
                        <input type="hidden" name="context" value="Modify">
                        <h2>Modifier un médecin</h2>
                        <select name="allMedecin" id="AllMedecin">
                            <option value="" selected disabled>Sélectionnez un médecin</option>
                        </select>
                        <input type="submit" value="Modifier">
                    </form>
                </div>  

                <!-- SUPPRESSION D'UN MEDECIN -->
                <!-- <div class="suppresion_usagers">
                    <form action="" method="post" class="formMedecinDelete">
                        <h2>Supprimer un médecin</h2>
                        <select name="allMedecin" id="AllMedecin">
                            <option value="" selected disabled>Sélectionnez un médecin</option>
                        </select>
                        <input type="submit" name="Supprimer" value="Supprimer">
                    </form>
                </div> -->
            </div>
        </div>

        <script src="Medecins.js"></script>
    </body>
</html>