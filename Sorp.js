// script.js
let currentSection = 0;
const sections = [
    {
        photos: ['img/image.png', 'img/image2.png', 'img/image3.png'],
        message: 'Gracias por ser esa persona que llena mi vida de felicidad.',
        character: 'img/denji.png',
        dialogue: 'You are special for me.'
    },
    {
        photos: ['img/image8.png', 'img/image10.png', 'img/image11.png'],
        message: 'Mi robloxiana favorita.',
        character: 'https://github.com/Didierinx/Album/blob/main/img/Koi.png?raw=true',
        dialogue: 'Tienes unos ojos preciosos.'
    },
    {
        photos: ['img/image4.png', 'img/image9.png', 'img/image13.png'],
        message: 'Te quiero más de lo que puedas imaginar.',
        character: 'https://github.com/Didierinx/Album/blob/main/img/Take.png?raw=true',
        dialogue: 'Regresaría en el tiempo como Takemichi para volver a conocerte.'
    },
    {
        photos: ['img/image15.png', 'img/image16.png', 'img/image17.png'],
        message: 'Cada que te sientas mal recuerda que estaré para ti.',
        character: 'img/Silent.png',
        dialogue: 'Me gusta mucho compartir tiempo contigo.'
    },
    {
        photos: ['img/image18.png', 'img/image19.png', 'img/image20.png'],
        message: 'Perdón si a veces no tengo tema de conversación, pero que me des de tu tiempo lo aprecio demasiado',
        character: 'img/wave.png',
        dialogue: 'Mi corazón está feliz cuando estas cerca.'
    },
    {
        photos: ['img/image23.png', 'img/image24.png', 'img/image25.png'],
        message: 'Este día aprendimos a nadar y descubrimos flores que son mariposas',
        character: 'img/david.png',
        dialogue: 'Fue una gran noche ksdj.'
    },
    {
        photos: ['img/image26.png', 'img/image27.png', 'img/image28.png'],
        message: 'Hoy descubrimos que la playa tiene nieve',
        character: 'img/oshi.png',
        dialogue: 'Trasnocharse una vez al año no hace daño.'
    },
    {
        photos: ['img/image29.jpg', 'img/image30.jpg', 'img/image31.png'],
        message: 'Ella bien feliz con su skin de Toga',
        character: 'img/ekko.png',
        dialogue: 'Te mereces todas las cosas lindas de este mundo.'
    },
];

function updateSection() {
    const section = sections[currentSection];
    const images = document.querySelectorAll('.photo');
    images.forEach((img, index) => {
        img.src = section.photos[index];
    });
    document.getElementById('photo-message').textContent = section.message;
    document.querySelector('.character').src = section.character;
    document.querySelector('#dialogue-box').textContent = section.dialogue;
}

function prevSection() {
    if (currentSection > 0) {
        currentSection--;
    } else {
        currentSection = sections.length - 1;
    }
    updateSection();
}

function nextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
    } else {
        currentSection = 0;
    }
    updateSection();
}

function showDialogue() {
    const dialogueBox = document.querySelector('#dialogue-box');
    dialogueBox.style.display = 'block';
    
    // Opcional: ocultar el diálogo después de unos segundos
    setTimeout(() => {
        dialogueBox.style.display = 'none';
    }, 3000); // Se oculta después de 3 segundos
}


// script.js
function enterAlbum() {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('album-page').style.display = 'block';
}

function playMusic() {
    const audio = document.getElementById('background-music');
    audio.play();
}


