// Asegúrate de que el código se ejecute después de que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtén el contenedor del chatbot y el botón de cerrar
    const chatbotTrigger = document.getElementById('chatbotTrigger'); // Contenedor del avatar y el texto
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChatbotBtn = document.getElementById('closeChatbot');

    // Mostrar el chatbot cuando se hace clic en el contenedor
    chatbotTrigger.addEventListener('click', function() {
        chatbotWindow.style.display = 'block'; // Muestra la ventana del chatbot
        chatbotTrigger.style.display = 'none'; // Oculta el contenedor de ayuda
    });

    // Cerrar el chatbot cuando se hace clic en la "X"
    closeChatbotBtn.addEventListener('click', function() {
        console.log('Cerrando el chatbot'); // Verifica que esta línea se ejecute
        chatbotWindow.style.display = 'none'; // Oculta la ventana del chatbot
        chatbotTrigger.style.display = 'flex'; // Muestra el contenedor de ayuda
    });

    // Funcionalidad para el menú de pestañas
    const tabs = document.querySelectorAll('.tab'); // Selecciona todas las pestañas
    const tabItems = document.querySelectorAll('.tab-item'); // Selecciona todos los elementos de contenido de las pestañas

    // Agrega el evento click a cada pestaña
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Remueve la clase "active" de todas las pestañas
            tabs.forEach(t => t.classList.remove('active'));
            tabItems.forEach(item => item.classList.remove('active'));

            // Agrega la clase "active" a la pestaña seleccionada
            tab.classList.add('active');

            // Muestra el contenido correspondiente
            const target = this.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });

    // Activa la primera pestaña por defecto
    if (tabs.length > 0) {
        tabs[0].click(); // Simula un clic en la primera pestaña para activarla
    }

    // Verifica si los elementos se seleccionan correctamente
    console.log(chatbotTrigger, chatbotWindow, closeChatbotBtn);
});
