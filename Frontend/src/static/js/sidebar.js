const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const linkTexts = document.querySelectorAll('.link-text');
    const adminText = document.getElementById('admin-text');
    const logo = document.getElementById('logo');

    toggleBtn.addEventListener('click', function() {
        // Toggle between collapsed and expanded
        sidebar.classList.toggle('collapsed');

        // Show/hide text in links and admin section
        linkTexts.forEach(linkText => {
            if (sidebar.classList.contains('collapsed')) {
                linkText.style.display = 'none'; // Hide the text when collapsed
                adminText.style.display = 'none'; // Hide the admin text
                logo.style.width = '70px'; // Keep logo at 120px
            } else {
                linkText.style.display = 'inline'; // Show the text when expanded
                adminText.style.display = 'inline'; // Show the admin text
                logo.style.width = '120px'; // Keep logo at 120px
            }
        });
    });