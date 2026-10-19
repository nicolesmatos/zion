
document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", (event) => {

            const destino = link.getAttribute("href");

            if (!destino || destino === "#") return;

            const secao = document.getElementById(destino.substring(1));

            if (!secao) return;

            event.preventDefault();

            secao.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.pushState(null, "", destino);

        });

    });

});
