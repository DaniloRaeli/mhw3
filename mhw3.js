// Seleziona l'elemento che rappresenta il trigger per generare il div
const triggerElement = document.querySelector('.Bottom');
function onJson(json) {
  console.log('JSON ricevuto');
  // Svuotiamo la libreria
  const library = document.querySelector('#album-view');
  library.innerHTML = '';
  // Leggi il numero di risultati
  const results = json.albums.items;
  let num_results = results.length;
  // Mostriamone al massimo 10
  if(num_results > 10)
    num_results = 10;
  // Processa ciascun risultato
  for(let i=0; i<num_results; i++)
  {
    // Leggi il documento
    const album_data = results[i]
    // Leggiamo info
    const title = album_data.name;
    const selected_image = album_data.images[0].url;
    // Creiamo il div che conterrà immagine e didascalia
    const album = document.createElement('div');
    album.classList.add('album');
    // Creiamo l'immagine
    const img = document.createElement('img');
    img.src = selected_image;
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = title;
    // Aggiungiamo immagine e didascalia al div
    album.appendChild(img);
    album.appendChild(caption);
    // Aggiungiamo il div alla libreria
    library.appendChild(album);
  }
}

function onResponse(response) {
  console.log('Risposta ricevuta');
  return response.json();
}

function search(event)
{
  // Impedisci il submit del form
  event.preventDefault();
  // Leggi valore del campo di testo
  const album_input = document.querySelector('#album');
  const album_value = encodeURIComponent(album_input.value);
  console.log('Eseguo ricerca: ' + album_value);
  // Esegui la richiesta
  fetch("https://api.spotify.com/v1/search?type=album&q=" + album_value,
    {
      headers:
      {
        'Authorization': 'Bearer ' + token
      }
    }
  ).then(onResponse).then(onJson);
}

function onTokenJson(json)
{
  // Imposta il token global
  token = json.access_token;
}

function onTokenResponse(response)
{
  return response.json();
}

// OAuth credentials --- NON SICURO!
const client_id = '515aac2f84a64561ae3e4fa3eafb108e';
const client_secret = 'c3b4bffabb944960a23bc024d4c4b9a2';
// Dichiara variabile token
let token;
// All'apertura della pagina, richiediamo il token
fetch("https://accounts.spotify.com/api/token",
	{
   method: "post",
   body: 'grant_type=client_credentials',
   headers:
   {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
   }
  }
).then(onTokenResponse).then(onTokenJson);

const sub = document.querySelector("#submit");
sub.addEventListener("click",search);



// Variabile per tenere traccia dello stato del div
let divIsVisible = false;

// Aggiungi un gestore di eventi per il clic
triggerElement.addEventListener('click', function(event) {
    // Verifica se il div è già presente
    if (divIsVisible) {
        // Se è già presente, rimuovilo
        const existingDiv = document.querySelector('.dynamic-div');
        if (existingDiv) {
            existingDiv.remove();
        }
        // Cambia lo stato a non visibile
        divIsVisible = false;
    } else {
        // Se il div non è presente, crea un nuovo elemento <div>
        const newDivElement = document.createElement('div');
        newDivElement.classList.add('dynamic-div');
        // Aggiungi eventuali contenuti o attributi al nuovo elemento <div>
        newDivElement.textContent = 'Questo è un nuovo div generato dinamicamente!';

        // Inserisci il nuovo elemento <div> come fratello del triggerElement
        triggerElement.parentNode.insertBefore(newDivElement, triggerElement.nextSibling);
        
        // Cambia lo stato a visibile
        divIsVisible = true;
    }

    // Previeni il comportamento predefinito del clic (ad es. l'invio di un modulo)
    event.preventDefault();
});

function changeImage() {
    // Seleziona l'elemento dell'immagine
    const imageElement = document.getElementById('HOME_ICON');

    // Cambia l'URL dell'immagine al passaggio del mouse
    imageElement.src = 'image/KFC_Twister_Gamma_Website_slider_dekstop_3840x1866px_5280551392.webp';
}

function resetImage() {
    // Seleziona l'elemento dell'immagine
    const imageElement = document.getElementById('HOME_ICON');

    // Ripristina l'URL dell'immagine quando il mouse esce dall'area dell'immagine
    imageElement.src = 'image/KFC_Promo_Calcio_Website_3840x1866_c2a626196e.webp';
}

function toggleDropdownLogin() {
    const dropdownMenu = document.getElementById('menu_tendina');
    dropdownMenu.classList.toggle('nascosto');
}

function toggleDropdownNovita() {
    var menu = document.getElementById("menunovita");
    menu.classList.toggle("nascosto");
}

function toggleDropdownProdotti() {
    var menu = document.getElementById("menuprodotti");
    if (menu.classList.contains("nascosto")) {
        menu.classList.remove("nascosto");
    } else {
        menu.classList.add("nascosto");
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Seleziona tutti i link della navbar
    var navLinks = document.querySelectorAll('.nav-link');

    // Aggiungi un listener di evento a ciascun link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Previene il comportamento predefinito del link
            event.preventDefault();

            // Qui puoi aggiungere la logica per gestire il clic sul link,
            // ad esempio cambiare la visualizzazione della pagina o eseguire altre azioni

            // Per esempio, potresti aggiungere una classe "active" al link cliccato
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');

            // Puoi anche cambiare il contenuto della pagina senza ricaricarla
            // Ad esempio, potresti caricare dinamicamente il contenuto di una sezione
            // utilizzando AJAX o altri metodi di caricamento asincrono
        });
    });
});


   // Funzione per mostrare il menu di registrazione quando si clicca sul link "Registrati ora"
   function showRegistration() {
    document.getElementById('registrationMenu').style.display = 'block';
}

// Codice JavaScript
function toggleDropdown(elementId) {
    var menu = document.getElementById(elementId);
    menu.classList.toggle("nascosto");
}

function showRegistration() {
    toggleDropdown("registrationMenu");
}

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("[data-action]");
    buttons.forEach(function(button) {
        var action = button.getAttribute("data-action");
        button.addEventListener("click", function() {
            if (action === "mostra_registrazione") {
                showRegistration();
            } else {
                toggleDropdown(action);
            }
        });
    });
});
const url = "https://foodish-api.com/api/images/burger";

function onJsonImg(json) {
  const img_url = json.image;
  const img = document.createElement("img");
  img.src = img_url;
  const div = document.querySelector(".rand");
  div.appendChild(img);
}

function onResponseImg(response) {
  if (!response.ok) console.log("Errore");
  else return response.json();
}

fetch(url).then(onResponseImg).then(onJsonImg);
fetch(url).then(onResponseImg).then(onJsonImg);
fetch(url).then(onResponseImg).then(onJsonImg);
fetch(url).then(onResponseImg).then(onJsonImg);