# BizAgents CI — Design System v1

## Marque

**Promesse :** « Mon équipe travaille pour moi. » BizAgents CI rend le travail d'agents IA aussi rassurant et lisible que celui d'une petite équipe de confiance. L'interface emploie des mots simples, des montants très visibles et une action principale évidente.

La palette reprend la nuance bordeaux fournie : `#720C2B` est la couleur de marque et `#340000` sa profondeur. Le rose poudré `#EDD2D2` devient une surface douce. L'orange sert aux décisions et alertes non critiques. Les couleurs des agents restent fonctionnelles : turquoise (service client), orange (commercial), vert (comptable).

## Tokens

| Rôle              | Clair     | Sombre    |
| ----------------- | --------- | --------- |
| Marque            | `#720C2B` | `#D36B7D` |
| Marque profonde   | `#340000` | `#4A071D` |
| Accent rose       | `#BF5869` | `#DF8C9A` |
| Fond              | `#FBF8F4` | `#171315` |
| Surface           | `#FFFFFF` | `#211B1E` |
| Texte             | `#251D1F` | `#F8F0F2` |
| Orange décision   | `#C85B16` | `#EF8A48` |
| Turquoise service | `#087F78` | `#4DC7BC` |
| Vert comptable    | `#23784A` | `#69C88E` |

## Typographie

- **Titres et montants :** Manrope, 600–800.
- **Interface et texte :** DM Sans, 400–700.
- Les montants utilisent des chiffres gras, une espace de milliers et le suffixe `FCFA`.
- Le corps reste lisible avec le zoom système jusqu'à 130 %.

## Forme, espace et profondeur

- Grille d'espacement : 4, 8, 12, 16, 24 et 32.
- Rayons : 11 pour les contrôles, 16 pour les cartes, 22 pour les surfaces fortes.
- Cibles interactives : 44–48 dp minimum selon la densité de l'écran.
- Ombres chaudes, très diffuses, réservées aux surfaces actionnables.

## Composants

- **Boutons :** primaire bordeaux, secondaire rose poudré, discret bordé, destructif.
- **Champs :** surface blanche/sombre, bord visible, aide et erreur sous le champ.
- **Sélecteur d'autonomie :** trois niveaux avec explication métier, jamais une simple valeur technique.
- **Cartes agent :** pictogramme + prénom + métier + statut + dernière action.
- **Carte à valider :** auteur, contexte, aperçu, montant AAA, puis Refuser / Corriger / Valider.
- **Carte montant :** fond bordeaux profond, montant dominant, sous-totaux séparés.
- **Navigation basse :** 5 destinations avec pictogramme et libellé permanent.
- **Réseau :** bandeau Hors ligne persistant, puis badges En attente, Synchronisé ou Conflit.
- **Sheets :** décision au pouce, contexte conservé, confirmation claire.
- **Toasts :** verbe au passé et résultat concret (« Devis envoyé »).
- **Icônes :** tracé arrondi 1,9, toujours accompagnées d'un libellé pour les actions.

## Accessibilité

- Contraste AA minimum ; les montants sur bordeaux dépassent le niveau AAA.
- Le mode sombre ne se contente pas d'inverser les couleurs : chaque surface et état a son token.
- Ne jamais communiquer un état uniquement par la couleur.
- Les animations sont courtes et désactivées avec `prefers-reduced-motion`.
- Français simple : « Valider », « Corriger », « Refuser », sans jargon logiciel.
