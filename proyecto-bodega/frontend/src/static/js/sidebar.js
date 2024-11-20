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
//Cofiguracion del idioma
window.addEventListener("DOMContentLoaded",()=>{
    //funcion para cargar el archivo idioma
    function loadLanguaje(lang){
        console.log(`cargando idioma:$(lang)`);
        fetch(`../../direcion del jeison/$(lang).json`)
        .then((response)=>response.json())
        .then((data)=>{
            document.querySelectorAll("[data-translate]").forEach((element)=>{
                const translatekey =element.getAttribute("data-translate");
                if (data[translatekey]){
                    element.textContent=date[translatekey]//Remplazar el contenido para traducir
                }
            })
        })
        .catch((error)=>
            console.error("Error al cargar el archivo de idioma:",error)
        );
    }
    documen.querySelectorAll  (".menu-item").forEach((item)=>{
        item.addEventListener("onclik",function(eyent){
            const selectedlang = item.getAttribute("data-lang");
            console.log(`Idioma seleccionado: ${selectedLang}`);
            document.querySelector("selected-lang").textContent=item.textContent;
            loadLanguaje(selectedLang)
        })
    })
})
