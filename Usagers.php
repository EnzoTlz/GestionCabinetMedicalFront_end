
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title></title>

    <link  rel="stylesheet" href="style/usagers.css">
    <link  rel="stylesheet" href="style/global.css">
</head>

<header >

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
            <h1>Usagers</h1>
        </div>

        <div class="global_gestion_user">
            <div class="ajout_usagers">
                <form action="" method="post" id="formAddUsager">
                    <h2>Ajouter un usager</h2>
                    <label>Civilité</label>
                    <label for="civilite"><input type="radio" name="civilite"  value="M." required>Mr</label>
                    <label for="civilite"><input type="radio" name="civilite"  value="Mme." required>Mme</label>
                    
                    <label for="nom">Nom</label>
                    <input type="text" name="nom" id="nom" required>

                    <label for="prenom">Prenom</label>
                    <input type="text" name="prenom" id="prenom" required>

                    <label for="adresse">Adresse complete</label>
                    <input type="text" name="adresse" id="adresse" required>

                    <label>Sexe</label>
                    <label for="sexe"><input type="radio" name="sexe"  value="H" required>homme</label>
                    <label for="sexe"><input type="radio" name="sexe"  value="F" required>femme</label>

                    <label for="code_postal">Code potal</label>
                    <input type="number" name="code_postal" id="code_postal" required>

                    <label for="ville">Ville</label>
                    <input type="text" name="ville" id="ville" required>

                    <label for="date_naissance">Date de naissance</label>
                    <input type="date" name="date_naissance" id="date_naissance" required>

                    <label for="lieu_naissance">Lieu de naissance</label>
                    <input type="text" name="lieu_naissance" id="lieu_naissance" required>

                    <label for="numero_securite_social">Numéro sécurité social</label>
                    <input type="text" name="numero_securite_social" id="numero_securite_social" required>

                    <label>Choix du Medecin Référent</label>
                    <select name="AllMedecin"></select>;

                    <input type="submit" value="Ajouter">
                </form>
            </div>

            <div class="modifications_usagers">
            <form action="../back_end/Usager/SearchUsager.php" method="post">
                    <input type="hidden" name="context" value="Modify">
                    <h2>Modifier un usager</h2>

                    <label for="nom">Nom</label>
                    <input type="text" name="nom" id="nom" required>

                    <label for="prenom">Prenom</label>
                    <input type="text" name="prenom" id="prenom" required>

                    <label for="numero_securite_social">Numéro sécurité social</label>
                    <input type="text" class="bas" name="numero_securite_social" id="numero_securite_social">

                    <input type="submit" value="Modifier">
                </form>
            </div>

            <div class="suppresion_usagers">
            <form action="../back_end/Usager/SearchUsager.php" method="post">
                <input type="hidden" name="context" value="Delete">
                    <h2>Supprimer un usager</h2>

                    <label for="nom">Nom</label>
                    <input type="text" name="nom" id="nom" >

                    <label for="prenom">Prenom</label>
                    <input type="text" name="prenom" id="prenom" >

                    <label for="numero_securite_social">Numéro sécurité social</label>
                    <input type="text" class="bas" name="numero_securite_social" id="numero_securite_social" >

                    <input type="submit" value="Supprimer">
                </form>
            </div>
        </div>
    </div>  
    <script src="Usagers.js"></script>
</body>

</html>