// ============================================
// 1 — Récupération des éléments du DOM
// ============================================

const formulaire = document.getElementById('formulaire')
const sectionInvocation = document.getElementById('invocation')
const sectionResultat = document.getElementById('resultat')
const message = document.getElementById('message')
const boutonRecommencer = document.getElementById('recommencer')

// ============================================
// 2 — Écoute du clic sur le formulaire
// ============================================

formulaire.addEventListener('submit', function(event) {

// Empêche le rechargement de la page
    event.preventDefault()

// ============================================
// 3 — Lecture des valeurs + DOM
// ============================================

    const prenom = document.getElementById('prenom').value
    const creature = document.getElementById('creature').value

// Construction du message d'invocation
    message.textContent = `${prenom}, ${creature} a entendu ton appel et te suivra tout le Bloc 1 !`

// Cache le formulaire, affiche le résultat
    sectionInvocation.classList.add('cache')
    sectionResultat.classList.remove('cache')
})

// ============================================
// 4 (Bonus) — Renvoyer la créature
// ============================================

boutonRecommencer.addEventListener('click', function() {

// Réaffiche le formulaire, cache le résultat
    sectionResultat.classList.add('cache')
    sectionInvocation.classList.remove('cache')

// Réinitialise le champ prénom pour un nouveau tour
    document.getElementById('prenom').value = ''
})