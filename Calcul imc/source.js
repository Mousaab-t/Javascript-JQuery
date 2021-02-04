// Afficher l'IMC
function Traitement() {
    var poids = document.getElementById("txtPoids").value
    var taille = document.getElementById("txtTaille").value
}

this.CalculeIMC = function () {
    return this.Poids / (this.Taille ** 2)
}