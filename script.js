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

const fetchOpenw = async (lat, lon) => {
  try {
    const request = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=50a54e90a2893ccc45511cf39a8c6274&units=metric");
    const openw = await request.json();
    console.log(openw);
    return openw;
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

    const weatherData = await fetchOpenw(data.location.coordinates.latitude, data.location.coordinates.longitude)


    // Ajouter les données dans le tableau
    row.innerHTML = `
      <td>${data.login.username}</td>
      <td><img src = '${genderIcon}'/></td>
      <td>${data.name.title} ${data.name.last} ${data.name.first}</td>
      <td><img src = '${data.picture.medium}'/></td>
      <td>${data.location.city}</td>
      <td>${weatherData.main.temp} °C</td>
      <td class = 'colonne-country'><img src = 'https://flagsapi.com/${data.nat}/flat/64.png' /> ${data.location.country}</td>

    `;
    tbody.appendChild(row);
  }
};

insertData();