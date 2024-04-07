<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title></title>

    <link  rel="stylesheet" href="style/global.css">
    <link  rel="stylesheet" href="style/stats.css">
</head>

<body>

        <div class="navBar">
            <ul>
                <li><a href="index.html" class="navElement">Accueil</a></li>
                <li><a href="Usagers.php" class="navElement">Usagers</a></li>
                <li><a href="Consultations.php" class="navElement">Consultations</a></li>
                <li><a href="Medecins.php" class="navElement">Médecins</a></li>
                <li><a href="Statistiques.php" class="navElement">Statistiques</a></li>
                <li><a href="Documentation.html" class="navElement">Documentation API métiers</a></li>
                <li><a href="DocumentationAuth.html" class="navElement">Documentation API Authentification</a></li>
            </ul>
        </div>

        <h1>Statistique des âges des usagers</h1>
        <div class="tableau">
        <table>
            <tbody>
                <tr>
                    <th scope="col">Tranche d'âge</th>
                    <th scope="col">Nb Hommes</th>
                    <th scope="col">Nb Femmes</th>
                </tr>
                <tr>
                    <th scope="row">Total</th>
                    <td id="totalHommes"></td>
                    <td id="totalFemmes"></td>
                </tr>
                <tr>
                    <th scope="row">Moins de 25 ans</th>
                    <td id="moins25Hommes"></td>
                    <td id="moins25Femmes"></td>
                </tr>
                <tr>
                    <th scope="row">Entre 25 et 50 ans</th>
                    <td id="entre25et50Hommes"></td>
                    <td id="entre25et50Femmes"></td>
                </tr>
                <tr>
                    <th scope="row">Plus de 50 ans</th>
                    <td id="plus50Hommes"></td>
                    <td id="plus50Femmes"></td>
                </tr>
            </tbody>
        </table>
              <h1>Statistique Medecin</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nom Médecin</th>
                        <th>Temps</th>
                    </tr>
                </thead>
                <tbody id="table-body"></tbody>
            </table>


        </div>
    <script src="Statistiques.js"></script>
</body>

</html>