document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("input");
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            alert("Buscando: " + searchInput.value);
        }
    });

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#ff4500";
        });
        button.addEventListener("mouseout", function() {
            this.style.backgroundColor = "#ff6600";
        });
    });
});
