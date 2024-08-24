document.getElementById('boton-pedir-ahora').addEventListener('click', function(event) {
    handleLinkClick(event, 'instagram://direct/new?username=marina.infinite', 'https://www.instagram.com/direct/t/');
});

function handleLinkClick(event, appLink, webLink) {
    event.preventDefault();
    // Intenta abrir la app de Instagram en la ventana de mensaje directo
    window.location.href = appLink;
    
    // Si la app no se abre, redirige al navegador después de un pequeño retraso
    setTimeout(function() {
        window.location.href = webLink;
    }, 1000);
}

document.getElementById('boton1-pedir-ahora').addEventListener('click', function(event) {
    handleLinkClick(event, 'https://wa.me/2241587587', 'https://web.whatsapp.com/send?phone=2241697504');
});

function handleLinkClick(event, appLink, webLink) {
    event.preventDefault();
    // Intenta abrir WhatsApp en la aplicación
    window.location.href = appLink;
    
    // Si la app no se abre, redirige al navegador después de un pequeño retraso
    setTimeout(function() {
        window.location.href = webLink;
    }, 1000);
}







  

   
