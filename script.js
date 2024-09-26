const endpoint = "https://randomuser.me/api/?results=50";

// Fonction pour insérer les données dans le tableau HTML
function insertUsersIntoTable(users) {
    const tableBody = document.querySelector("#userTable tbody");

    users.forEach(user => {
        // Créer une nouvelle ligne pour chaque utilisateur
        const row = document.createElement("tr");
        
        const NomCell = document.createElement("td");
        NomCell.textContent = user.name.last+" " +user.name.first;
        row.appendChild(NomCell);

        // Créer et ajouter les cellules avec les informations de l'utilisateur
        const NomCell = document.createElement("td");
        NomCell.textContent = user.name.last+" " +user.name.first;
        row.appendChild(NomCell);


        const emailCell = document.createElement("td");
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        const photoCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = user.picture.thumbnail;  // Utilisation de la photo en miniature
        img.alt = `${user.name.first} ${user.name.last}`;
        row.appendChild(photoCell);
        photoCell.appendChild(img);
        

        // Ajouter la ligne au corps du tableau
        tableBody.appendChild(row);
    });
}

// Fetch les données depuis l'API
fetch(endpoint)
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("Erreur lors de la récupération des données");
        }
    })
    .then(data => {
        const users = data.results;
        // Insérer les utilisateurs dans le tableau
        insertUsersIntoTable(users);
    })
    .catch(error => {
        console.error("Erreur : ", error);
    });
