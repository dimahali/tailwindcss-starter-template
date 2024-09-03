document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    darkModeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        localStorage.theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    });

    // Update copyright year
    const updateCopyrightYear = () => {
        const copyrightYearElement = document.getElementById('copyrightYear');
        if (copyrightYearElement) {
            copyrightYearElement.textContent = new Date().getFullYear();
        }
    };

    updateCopyrightYear();

});