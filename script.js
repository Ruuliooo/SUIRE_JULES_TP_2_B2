const apiUrl = "https://randomuser.me/api/?results=50";
const openweathermap = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={9041e44f7110540463d1a50d2faa23b9}";
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
    if (gender === "male") {
      row.style.backgroundColor = "lightgreen";
      genderIcon = "./img/man.png";
    } else if (gender === "female") {
      row.style.backgroundColor = "lightyellow";
      genderIcon ="./img/woman.png";
    }
const fetchOpenw = async () => {
  try {
    const request = await fetch(openweathermap);
    const openw = await request.json();
    console.log(openw.results);
    return open.results;
  } catch (error) {
    console.log(error);
  }
};

const insertOpenw = async () => {
  const openws = await fetchOpenw();
  for (const openw of openws) {
    const coord = document.createElement("tr");
    const coordinatesLon = openw.coord.lon;
    const coordinatesLat = openw.coord.lat;
    if (coordinatesLat);
  }
};
    // Ajouter les données dans le tableau
    row.innerHTML = `
      <td>${data.login.username}</td>
      <td><img src = '${genderIcon}'/></td>
      <td>${data.name.title} ${data.name.last} ${data.name.first}</td>
      <td><img src = '${data.picture.medium}'/></td>
      <td>${data.location.city}</td>
      <td>
      <td class = 'colonne-country'><img src = 'https://flagsapi.com/${data.nat}/flat/64.png' /> ${data.location.country}</td>
    `;
    tbody.appendChild(row);
  }
};

insertData();
insertOpenw();


//const temps = data.meteo.city;
//<td>${data.meteo.city}</td>