# La vision de Wilfried pour l’AECS

Site de présentation responsive, réalisé en HTML, CSS et JavaScript sans framework ni dépendance à installer.

## Lancer le site

Le site peut s’ouvrir directement : double-cliquez sur `index.html` ou ouvrez-le dans votre navigateur.

Pour le servir en local depuis ce dossier, vous pouvez aussi lancer un serveur statique, par exemple :

```sh
python -m http.server 8000
```

Puis ouvrez [http://localhost:8000](http://localhost:8000).

## Personnaliser le contenu

- Modifiez les textes, les propositions, le calendrier ou l’adresse de contact dans `index.html`.
- Ajustez les couleurs, les espacements et les mises en page dans `styles.css`.
- Modifiez le menu mobile, l’année et les animations dans `script.js`.
- La section « Ouvrir le dialogue » est derrière un mot de passe JavaScript. Changez la valeur `dialoguePassword` dans `script.js` avant diffusion. Cette barrière est uniquement dissuasive : le mot de passe et le texte restent accessibles dans les fichiers du site et ne conviennent pas à des informations confidentielles.
- Le lien de contact est un lien `mailto` d’exemple (`contact@aecs-strasbourg.fr`) : remplacez-le par l’adresse souhaitée avant diffusion.
- Les polices DM Sans et Manrope sont chargées depuis Google Fonts ; en l’absence de connexion, les polices système prennent le relais.

Le dessin de Strasbourg dans la page d’accueil est un SVG intégré au fichier HTML. Aucun fichier image ni installation n’est nécessaire.
