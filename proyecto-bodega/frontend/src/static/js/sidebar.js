document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const logo = document.getElementById('logo');
    const icons = document.querySelectorAll('.sidebar-icon');
    const originalLogoSrc = '/Frontend/public/BoxWare (4).png';
    const collapsedLogoSrc = '/Frontend/public/favicon.png';
    
    toggleBtn.addEventListener('click', function() {
        // Alternar la clase 'collapsed'
        sidebar.classList.toggle('collapsed');

        // Cambiar el logo según el estado del sidebar
        logo.src = sidebar.classList.contains('collapsed') ? collapsedLogoSrc : originalLogoSrc;

        // Mostrar/ocultar texto en los enlaces
        const linkTexts = document.querySelectorAll('.link-text');
        linkTexts.forEach(linkText => {
            linkText.style.display = sidebar.classList.contains('collapsed') ? 'none' : 'inline';
        });

        // Ocultar/mostrar texto de admin
        const adminText = document.getElementById('admin-text');
        adminText.style.display = sidebar.classList.contains('collapsed') ? 'none' : 'inline';
       
        // Ajustar la posición de los íconos al colapsar
        icons.forEach(icon => {
            icon.style.margin = sidebar.classList.contains('collapsed') ? '0 auto' : '10px auto'; // Ajusta según sea necesario
        });
    });
});
