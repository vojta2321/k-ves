// Skript pro interaktivní zobrazení menu
document.getElementById("menuButton").addEventListener("click", function() {
    var menuSection = document.getElementById("menuSection");
    menuSection.style.display = menuSection.style.display === "none" || menuSection.style.display === "" ? "block" : "none";
});
