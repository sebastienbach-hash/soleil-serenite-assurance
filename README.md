# 🌞 Soleil Sérénité

Site web moderne d'assurance obsèques avec formulaire progressif et design personnalisé.

## 🚀 Fonctionnalités

- **Formulaire progressif en 4 étapes** : Interface utilisateur intuitive pour la collecte d'informations
- **Design responsive** : Optimisé pour tous les appareils (desktop, tablet, mobile)
- **Logo SVG personnalisé** : Identité visuelle unique avec soleil stylisé
- **Palette de couleurs chaleureuse** : Nuances jaune et orange pour un aspect accueillant
- **Sections complètes** :
  - Hero section avec avantages clés
  - Témoignages clients
  - FAQ interactive
  - Section contact multi-canaux
  - Call-to-action optimisés

## 🛠️ Technologies

- **Framework** : Next.js 15.3.2 avec TypeScript
- **Styling** : Tailwind CSS
- **Icons** : Lucide React
- **Build Tool** : Bun
- **Linting** : Biome
- **Deployment** : Netlify

## 📁 Structure du projet

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   └── ui/                 # Composants UI réutilisables
└── lib/
    └── utils.ts            # Utilitaires
```

## 🎨 Design System

### Palette de couleurs
- **Orange principal** : `#EA580C` (orange-600)
- **Jaune accent** : `#F59E0B` (amber-500)
- **Orange clair** : `#FCD34D` (yellow-300)
- **Arrière-plans** : Dégradés jaune-orange

### Typographie
- **Titres** : Police système avec poids bold
- **Corps de texte** : Police système régulière
- **Hiérarchie** : Tailles de 3xl à sm selon le contexte

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/sebastienbach-hash/soleil-serenite-assurance.git

# Naviguer dans le dossier
cd soleil-serenite-assurance

# Installer les dépendances
bun install

# Lancer le serveur de développement
bun run dev
```

Le site sera accessible sur `http://localhost:3000`

## 📝 Scripts disponibles

- `bun run dev` - Serveur de développement
- `bun run build` - Build de production
- `bun run start` - Serveur de production
- `bun run lint` - Linting du code

## 🎯 Formulaire progressif

Le formulaire principal suit un parcours en 4 étapes :

1. **Sélection du bénéficiaire** : "Pour moi" ou "Pour mon partenaire"
2. **Date d'entrée en vigueur** : Sélecteur de date
3. **Montant de couverture** : Options prédéfinies ou montant personnalisé
4. **Coordonnées personnelles** : Informations de contact et consentement

## 🌟 Sections principales

### Hero Section
- Titre accrocheur avec proposition de valeur
- Liste des avantages avec icônes
- Call-to-action principal
- Image de couple senior en arrière-plan

### Témoignages
- 3 témoignages clients avec étoiles
- Noms et âges des témoins
- Citations authentiques

### FAQ
- Questions fréquemment posées
- Réponses claires et concises
- Design épuré avec bordures

### Contact
- Trois canaux de communication :
  - Téléphone (0800 123 456)
  - Email (contact@soleilserenite.fr)
  - Chat en ligne 7j/7

## 📱 Responsive Design

Le site s'adapte automatiquement à toutes les tailles d'écran :
- **Desktop** : Layout en colonnes avec sidebar
- **Tablet** : Adaptation des grilles et espacement
- **Mobile** : Stack vertical avec navigation tactile

## 🚀 Déploiement

Le projet est configuré pour un déploiement facile sur Netlify :

```bash
# Build et déploiement automatique
bun run build
```

Le fichier `netlify.toml` contient la configuration de déploiement.

## 🤝 Contribution

Ce projet a été créé avec [Same](https://same.new) - Plateforme de développement web IA.

## 📄 Licence

Ce projet est à des fins de démonstration. Tous les droits sont réservés.

---

*Généré avec ❤️ et [Same](https://same.new)*
