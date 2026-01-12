const CLE_SECRETE = "indicateur de marée";   // ← change la clé ici

function verifierCle(event) {
    event.preventDefault(); // empêche le rechargement de la page

    let entree = document.getElementById("cle").value;
    let resultat = document.getElementById("resultat");

    if (entree === CLE_SECRETE) {
        resultat.innerHTML = "✅ Accès autorisé";
        resultat.style.color = "green";

        // Redirection vers la zone secrète
        window.location.href = "indicateur-de-maree.html";
    } else {
        resultat.innerHTML = "❌ Clé incorrecte";
        resultat.style.color = "red";
    }
}

function copierEmail() {
    navigator.clipboard.writeText("electroniccode.monsite@gmail.com");
    copié.innerHTML = "✅ L'email à été copié dans le presse-papier";

}
