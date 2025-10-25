// 1 CONFIGURATION

const API_KEY = 'e10930d741b6240d2d087acd27261521'
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

// 2. FONCITON PRINCPAL. 

// foncitonn qui recueprent la meteo en passant la ville

async function getMeteoData() {
    // Etape 1 recuperer la ville 
    const city = document.getElementById('city-input').value;
    const resultDiv = document.getElementById('resultat');

    // Etape 2 : Validation
    if(!city) {
        resultDiv.innerHTML = "<p class='error'>Veuillez entrer le nom d'une ville.</p>";
        return;
    }

    // Etape 3 
    resultDiv.innerHTML = "<p>Chargement des données météo...</p>";

    try {
        // contruit l'URL de l'API
        const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;
        console.log('URL: '+ url);

        // Etape 4 : Faire la requete fetch
        const response = await fetch(url);

        // Etape 5 Gerer les erreurs 
        if(!response.ok){
            throw new Error(response.status === 404 ? "Ville non trouvée." : "Erreur lors de la récupération des données météo.");
        }


        // Etape 6 : Extraire les donnees JSON
        const data = await response.json();

        // Etape 7 : Afficher les données
        console.log(data);
        resultDiv.innerHTML = `
            <h2>Météo à ${data.name}, ${data.sys.country}</h2>
            <p><strong>Température :</strong> ${data.main.temp} °C</p>
            <p><strong>Description :</strong> ${data.weather[0].description}</p>
            <p><strong>Humidité :</strong> ${data.main.humidity} %</p>
            <p><strong>Vitesse du vent :</strong> ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        // Etape 8 : Gérer les erreurs
        resultDiv.innerHTML = `<p class='error'>Erreur : ${error.message}</p>`;
    }
}

// 3. EVENEMENT BOUTON
document.getElementById('city-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getMeteoData();
    }
})

