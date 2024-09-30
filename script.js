const apiUrl = "https://randomuser.me/api/?results=50";
const tbody = document.getElementById("table-body");

// Récupérer les données de l'API
const fetchData = async () => {
  try {
    const request = await fetch(apiUrl);
    const data = await request.json();
    console.log(data.results);
    return data.results;
};

const insertData = async () => {
  const datas = await fetchData();
  for (const data of datas) {
    const row = document.createElement("tr");
    const gender = data.gender;
    if (gender === "male") {
      row.style.backgroundColor = "lightyellow";
      genderIcon = "./img/homme.png";
    } else if (gender === "female") {
      row.style.backgroundColor = "lightpurple";
      genderIcon = "./img/femme.png";
    } else {
      row.style.backgroundColor = "lightgreen";
      genderIcon = "./img/other.png";
    }
    
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

