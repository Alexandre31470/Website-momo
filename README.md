# KECITA Maçonnerie — Version statique HTML / CSS / JS

Version **100 % HTML/CSS/JS** du site.
Ouvrable directement dans un navigateur, modifiable dans n'importe quel éditeur.

## Contenu du dossier

```
kecita-static/
├── index.html     ← Toute la structure et le contenu du site
├── styles.css     ← Tous les styles (palette, mise en page, animations)
└── script.js      ← Menu mobile, header sticky, année footer, formulaires
```

## Lancer le site

### Méthode 1 — la plus simple
Double-cliquez sur `index.html`. Il s'ouvre dans votre navigateur. C'est tout.

### Méthode 2 — avec VS Code (recommandé)
1. Ouvrez le dossier `Website-momo` dans VS Code.
2. Installez l'extension **Live Server** (clic droit sur l'icône extensions → recherchez "Live Server" de Ritwick Dey).
3. Clic droit sur `index.html` → **Open with Live Server**.
4. Le site s'ouvre sur `http://127.0.0.1:5500` et se recharge tout seul à chaque modification.

## Où personnaliser quoi ?

Tout est dans **`index.html`** — c'est là que vous éditez les textes, photos et liens. Pas besoin de toucher au CSS pour changer le contenu.

| Élément à modifier | Où chercher dans `index.html` |
|---|---|
| Téléphone | `tel:+33562000000` et `05 62 00 00 00` |
| Email | `contact@kecita-maconnerie.fr` (apparaît 4 fois) |
| Destinataire des formulaires | `formsubmit.co/contact@kecita-maconnerie.fr` (2 occurrences) |
| Photos | Toutes les `<img src="https://images.unsplash.com/...">` |
| Réseaux sociaux | Section `<div class="social-row">` — remplacez `href="#"` |
| Services (textes) | Section `<section id="services">` |
| Témoignages | Section `<section class="testimonials">` |
| Réalisations (titres) | Sections `<section id="realisations">` et `<section class="gallery">` |
| Coordonnées contact | Section `<section id="contact">` |

## Couleurs

Toutes les couleurs sont définies en haut de **`styles.css`** dans `:root` :

```css
--accent: #C2593F;     /* terracotta — boutons, accents */
--dark:   #1E1F21;     /* anthracite — footer, certifications */
--bg:     #F9F9F8;     /* ivoire — fond du site */
--text:   #1E1F21;     /* texte principal */
--muted:  #4A4D52;     /* texte secondaire */
```

Changez une valeur ici → tout le site se met à jour.

## Formulaires (Formsubmit)

Les formulaires envoient les données par email via 

**Activation (une seule fois)** :
1. Mettez le site en ligne (ou ouvrez-le sur votre PC).
2. Soumettez le **premier** formulaire de devis avec une vraie adresse.
3. Web3form envoie un email de confirmation à `alexandre.quev@gmail.com` - Une fois l'adresse email pro liée à l'hébergement est crée il faudra l'insérer à la place.
4. C'est validé : tous les formulaires suivants arriveront directement dans cette boîte.

## Mettre en ligne

Hébergement recommandé : o2switch 🇫🇷
C'est le meilleur rapport qualité/prix pour un artisan français. Voici pourquoi :

Hébergement mutualisé illimité — sites, domaines, emails, bases de données
~7€/mois (offre unique, sans surprise)
Serveurs en France — bon pour le SEO local Gers/Fleurance
Email pro inclus — contact@kecita-maconnerie.fr
SSL gratuit inclus (HTTPS)
Support téléphonique français réactif


Procédure complète
Étape 1 — Commander chez o2switch
Rendez-vous sur o2switch.fr, cliquez sur "Commander", choisissez l'offre unique à ~7€/mois. Lors de la commande, enregistrez votre nom de domaine kecita-maconnerie.fr (inclus la première année).

Étape 2 — Créer l'adresse email pro
Dans votre cPanel o2switch (tableau de bord fourni à l'activation) :
cPanel → Comptes de messagerie → Créer
→ contact@kecita-maconnerie.fr
→ Choisir un mot de passe fort
Configurez ensuite votre client mail (Outlook, Gmail...) avec les paramètres IMAP/SMTP fournis par o2switch.

Étape 3 — Déployer le site via FTP
Installez FileZilla (gratuit) sur filezilla-project.org.
Dans cPanel, récupérez vos identifiants FTP :
cPanel → Comptes FTP → identifiants
Connectez-vous dans FileZilla :
Hôte    : ftp.kecita-maconnerie.fr
Login   : votre identifiant FTP
Mdp     : votre mot de passe
Port    : 21
Naviguez dans le panneau de droite vers le dossier :
public_html/
Glissez-déposez vos 3 fichiers depuis le panneau gauche :
index.html
style.css
script.js

Étape 4 — Activer le SSL (HTTPS)
Dans cPanel :
cPanel → Let's Encrypt SSL → kecita-maconnerie.fr → Installer
Votre site est accessible en https://kecita-maconnerie.fr en quelques minutes.

Étape 5 — Vérifier le formulaire Web3Forms
Une fois en ligne, testez le formulaire de devis — Web3Forms fonctionne identiquement en local et en production, rien à modifier.

Résumé des coûts
PostePrixHébergement illimité~7€/moisNom de domaine .frOffert la 1ère année (~7€/an ensuite)Email proInclusSSL HTTPSInclusTotal~84€/an
C'est l'une des offres les plus compétitives du marché français pour ce niveau de qualité.

## Compatibilité

- Tous navigateurs modernes (Chrome, Firefox, Safari, Edge).
- 100 % responsive (mobile, tablette, desktop).
- Polices chargées via Google Fonts (Cormorant Garamond + Manrope).
- Icônes via Lucide (CDN unpkg.com).


Code Avis Clients à personnaliser et ajouter plus tard :

<!-- ============ AVIS CLIENTS ============ -->
    <section class="testimonials">
        <div class="container">
            <div class="testi-head">
                <div>
                    <div class="eyebrow"><span class="line" aria-hidden="true"></span> Avis clients</div>
                    <h2>Ce que disent <em>mes clients</em>.</h2>
                </div>
                <div class="rating-block" aria-label="Note moyenne : 5 sur 5">
                    <div class="stars" aria-hidden="true">
                        <i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i>
                    </div>
                    <div>
                        <div class="rating-score">5,0 / 5</div>
                        <div class="rating-source">Avis Google vérifiés</div>
                    </div>
                </div>
            </div>

            <div class="testi-grid">
                <article class="testi-card">
                    <i data-lucide="quote" class="testi-quote" aria-hidden="true"></i>
                    <p>« Refonte entière de notre salle de bain. Carrelage et faïence posés avec une précision remarquable. Rien à redire, c'est du travail soigné. »</p>
                    <div class="testi-stars" aria-label="5 étoiles" role="img">
                        <i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i>
                    </div>
                    <div class="testi-foot">
                        <div><div class="testi-name">Nathalie B.</div><div class="testi-loc">Mas d'Auvignon · Gers</div></div>
                        <div class="testi-proj">Salle de bain complète</div>
                    </div>
                </article>
                <article class="testi-card">
                    <i data-lucide="quote" class="testi-quote" aria-hidden="true"></i>
                    <p>« Terrasse carrelée en deux semaines. Ponctuel, propre sur le chantier, et le résultat est vraiment beau. Je recommande sans hésitation ! »</p>
                    <div class="testi-stars" aria-label="5 étoiles" role="img">
                        <i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i>
                    </div>
                    <div class="testi-foot">
                        <div><div class="testi-name">Patrick M.</div><div class="testi-loc">Lectoure · Gers</div></div>
                        <div class="testi-proj">Terrasse extérieure</div>
                    </div>
                </article>
                <article class="testi-card">
                    <i data-lucide="quote" class="testi-quote" aria-hidden="true"></i>
                    <p>« Excellente prestation pour la pose du carrelage de notre salon. Devis gratuit, déplacement sans frais et travail de qualité. On est ravis. »</p>
                    <div class="testi-stars" aria-label="5 étoiles" role="img">
                        <i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i>
                    </div>
                    <div class="testi-foot">
                        <div><div class="testi-name">Isabelle &amp; Marc D.</div><div class="testi-loc">Auch · Gers</div></div>
                        <div class="testi-proj">Carrelage salon</div>
                    </div>
                </article>
                <article class="testi-card">
                    <i data-lucide="quote" class="testi-quote" aria-hidden="true"></i>
                    <p>« Petits travaux de reprise dans notre maison ancienne. Très bon contact, sérieux et honnête dans ses tarifs. Je ferai appel à lui pour la suite. »</p>
                    <div class="testi-stars" aria-label="5 étoiles" role="img">
                        <i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i><i data-lucide="star" aria-hidden="true"></i>
                    </div>
                    <div class="testi-foot">
                        <div><div class="testi-name">Gilles R.</div><div class="testi-loc">Saint-Clar · Gers</div></div>
                        <div class="testi-proj">Petits travaux bâtiment</div>
                    </div>
                </article>
            </div>
        </div>
    </section>