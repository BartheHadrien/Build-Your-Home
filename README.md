# Projet BuildYourHome

## Description du projet

BuildYourHome est un projet de site d'E-commerce destiné au particulier comme au professionel. Il sera principalement tournée vers la vente de composant électronique de toutes sortes. Ce projet répond a la demande d'un client qui se lance dans la gestion d'un E-commerce.

## Technologies

La partie Front du projet a était entierement fait en ReactJS tandis que la partie Back est fait avec symfony.

## L'équipe

L'équipe est composé de 5 personnes:
3 développeurs Front:

- Hadrien
- Guillaume
- Mickael

2 développeurs Back

- Benoit
- Florian

## Le site

### La vitrine

Voici le contenu du site:

- une page d'accueil
- une page des produits pour chaque catégorie
- une page produit
- une page favoris
- une page de connexion
- une page de profil
- une page de création de compte
- un panier

### BackOffice

Zone réservée aux administrateurs.

- l'accès à cette zone nécessite de se connecter avec son compte admin
- gestion des catégories (liste, ajout, modification, suppression)
- gestion des produits (liste, ajout, modification, suppression)
- gestion des commandes
- gestion des catégories en page d'accueil
- gestion des utilisateurs du BackOffice

## Déploiement

Pour déployer le projet sur un serveur personnel il faut:

- copier le dossier du projet.
- éxecuter la commande ```yarn``` dans le terminal a la racine du dossier. Cela va permettre d'installer les dépendances du projet.
- éxécuter la commande ```yarn build``` pour transpiler le code et l'optimiser. Cela va créer un dossier 'dist' qui sera notre point d'entrée de l'application.
- Le point d'entrée sera donc ce fichier dist

Pour déployer le projet sur un serveur surge il faut:

- copier le dossier du projet.
- éxecuter la commande ```yarn``` dans le terminal a la racine du dossier. Cela va permettre d'installer les dépendances du projet.
- éxécuter la commande ```yarn build``` pour transpiler le code et l'optimiser. Cela va créer un dossier 'dist' qui sera notre point d'entrée de l'application.
- éxécuter la commande ```yarn surge``` et donner un nom de domaine pour le projet.
