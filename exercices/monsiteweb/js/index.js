
const container = document.getElementById('container');

const titre = document.getElementsByClassName('.title');

const paragraph = document.querySelector('.paragraphe');

const button = document.querySelector('#monBouton');

const allParagraphs = document.querySelectorAll('.paragraphe');
// show all details of the container
console.log("We haves "+allParagraphs.length + " paragraphes.");

const title = document.querySelector('h1');

title.textContent = "Mon Nouveau Titre";

title.innerHTML ='<span style="color: red;">Titre en rouge</span>';

// Modifier les classes CSS
title.classList.add('important'); // Ajouter une classe
title.classList.remove('ancien'); // Supprimer une classe
title.classList.toggle('visible'); // Ajouter si absent, supprimer si présent
title.classList.contains('important'); // Vérifier si la classe existe
// Modifier les styles directement


// create new element
const newParagraph = document.createElement('p');
newParagraph.textContent = "Ceci est un nouveau paragraph créé avec JS.";
container.appendChild(newParagraph); // Ajouter à la fin du conteneur

// Event lister 
button.addEventListener('click', function() {
    alert('Bouton cliqué !');
});

// Créer une liste dynamique
const fruits = ['pomme','banane','orange', 'Citron', 'Ananas'];
const liste = document.createElement('ul');
fruits.forEach(fruit => {
    const element = document.createElement('li');
    element.textContent = fruit;
    liste.appendChild(element);
});

container.appendChild(liste);

const formaulaire = document.getElementById('monFormulaire');
const resultat = document.getElementById('resultat');

formaulaire.addEventListener('submit', function(event)  {

    nom = document.getElementById('nom').value;
    email = document.getElementById('email').value;

    // verify name
    if(nom === '' || nom < 3) {
        resultat.textContent = "Veuillez entrer un nom valide (au moins 3 caractères).";
        resultat.style.color = 'red';
        event.preventDefault(); // Empêcher l'envoi du formulaire
        return;
    }

    // verify email
    if(email === '' || !email.includes('@')) {
        resultat.textContent = "Veuillez entrer une adresse email valide.";
        resultat.style.color = 'red';
        //event.preventDefault(); // Empêcher l'envoi du formulaire
        return;
    }

    // success
    resultat.textContent = `Merci ${nom}, votre formulaire a été soumis avec succès !`;
    resultat.style.color = 'green';
     // Empêcher l'envoi du formulaire
    
     resultat.innerHTML += '<br><strong>Détails soumis :</strong><br>';
     resultat.innerHTML += `Nom: ${nom}<br>`;
     resultat.innerHTML += `Email: ${email}<br>`;
     console.log(`Form submitted: Name=${no}, Email=${email}`);

    // formaulaire.reset(); // Reset form fields


})