(function () {
    // Menú de navegación
    const openButton = document.querySelector(".nav__menu");
    const menu = document.querySelector(".nav__link");
    const closeMenu = document.querySelector(".nav__close");

    if (openButton && menu && closeMenu) {
        openButton.addEventListener("click", () => {
            menu.classList.add("nav__link--show");
        });

        closeMenu.addEventListener("click", () => {
            menu.classList.remove("nav__link--show");
        });
    }

    // Efecto de aparición de imágenes al hacer scroll
    const imageLinks = document.querySelectorAll(".image-link");

    function showOnScroll() {
        imageLinks.forEach((link) => {
            const rect = link.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                link.classList.add("visible");
            } else {
                link.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Llamada inicial para imágenes ya visibles

    // Buscador de la página
    const searchForm = document.querySelector(".search-form");
    if (searchForm) {
        searchForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita recargar la página

            let query = document.querySelector("#search-input").value.toLowerCase();
            let resultsContainer = document.querySelector("#search-results");

            // Simulación de datos
            let items = [
                "Justificación por la fe",
                "Teología reformada",
                "Biblia y salvación",
                "Doctrina de la gracia",
                "Cristianismo y fe",
            ];

            // Filtrar resultados
            let filteredItems = items.filter((item) => item.toLowerCase().includes(query));

            // Mostrar resultados
            resultsContainer.innerHTML = filteredItems.length
                ? `<ul>${filteredItems.map((item) => `<li>${item}</li>`).join("")}</ul>`
                : `<p>No se encontraron resultados.</p>`;
        });
    }
})();
