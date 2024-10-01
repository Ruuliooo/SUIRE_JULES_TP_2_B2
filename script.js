const apiUrl = "https://randomuser.me/api/?results=50";
const tbody = document.getElementById("table-body");

// Récupérer les données de l'API
const fetchData = async () => {
  try {
    const request = await fetch(apiUrl);
    const data = await request.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

// Insérer les données dans le tableau
const insertData = async () => {
  const datas = await fetchData();
  for (const data of datas) {
    const row = document.createElement("tr");
    const gender = data.gender;
    // Ajouter une couleur de fond et une img en fonction du genre
    if (gender === "male") {
      row.style.backgroundColor = "lightblue";
      genderIcon = "./img/homme.png";
    } else if (gender === "female") {
      row.style.backgroundColor = "lightpink";
      genderIcon = "./img/femme.png";
    } else {
      row.style.backgroundColor = "lightgreen";
      genderIcon = "./img/other.png";
    }
    // Ajouter les données dans le tableau
    row.innerHTML = `
      <td>${data.login.username}</td>
      <td><img src = '${genderIcon}'/></td>
      <td>${data.name.title} ${data.name.last} ${data.name.first}</td>
      <td><img src = '${data.picture.medium}'/></td>
      <td>${data.location.city}</td>
      <td class = 'colonne-country'><img src = 'https://flagsapi.com/${data.nat}/flat/64.png' /> ${data.location.country}</td>
    `;
    tbody.appendChild(row);
  }
};

insertData();
