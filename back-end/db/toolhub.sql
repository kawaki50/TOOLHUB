-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 21 mai 2025 à 02:43
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `toolhub`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id_categories` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id_categories`, `nom`) VALUES
(1, 'Outillage à main'),
(2, 'Outillage électroportatif'),
(3, 'Quincaillerie'),
(4, 'Peinture et décoration'),
(5, 'Plomberie'),
(6, 'Électricité'),
(7, 'Jardinage'),
(8, 'Sécurité et protection');

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

CREATE TABLE `commandes` (
  `id_commandes` int(11) NOT NULL,
  `id_utilisateurs` int(11) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `statut` enum('en_attente','validee','livree') DEFAULT 'en_attente',
  `date_commande` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `details_commande`
--

CREATE TABLE `details_commande` (
  `id_details_commande` int(11) NOT NULL,
  `id_commandes` int(11) DEFAULT NULL,
  `id_produits` int(11) DEFAULT NULL,
  `quantite` int(11) DEFAULT NULL,
  `prix_unitaire` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE `panier` (
  `id_panier` int(11) NOT NULL,
  `id_utilisateurs` int(11) DEFAULT NULL,
  `id_produits` int(11) DEFAULT NULL,
  `quantite` int(11) DEFAULT 1,
  `date_ajout` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id_produits` int(11) NOT NULL,
  `id_categories` int(11) DEFAULT NULL,
  `nom` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `prix` decimal(10,2) NOT NULL,
  `quantite` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `date_ajout` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id_produits`, `id_categories`, `nom`, `description`, `prix`, `quantite`, `image`, `date_ajout`) VALUES
(1, 1, 'Marteau de charpentier', 'Marteau robuste avec manche en fibre de verre, idéal pour les travaux de construction.', 24.99, 50, 'marteau.jpg', '2025-05-20 00:23:44'),
(2, 1, 'Tournevis cruciforme', 'Tournevis professionnel avec manche ergonomique antidérapant.', 9.99, 100, 'tournevis_cruciforme.jpg', '2025-05-20 00:23:44'),
(3, 2, 'Perceuse visseuse sans fil 18V', 'Perceuse puissante avec batterie lithium-ion et 2 vitesses variables.', 129.99, 30, 'perceuse_visseuse.jpg', '2025-05-20 00:23:44'),
(4, 2, 'Scie circulaire 1200W', 'Scie circulaire puissante avec lame carbure 185mm et guide parallèle.', 99.50, 20, 'scie_circulaire.jpg', '2025-05-20 00:23:44'),
(5, 3, 'Boîte de 100 vis universelles', 'Assortiment de vis à bois de différentes tailles avec tête cruciforme.', 12.50, 80, 'vis_universelles.jpg', '2025-05-20 00:23:44'),
(6, 3, 'Set de 50 chevilles murales', 'Chevilles en plastique pour fixation dans plaque de plâtre et béton.', 8.99, 100, 'chevilles.jpg', '2025-05-20 00:23:44'),
(7, 4, 'Peinture murale blanc mat 10L', 'Peinture acrylique haute qualité, couvrante et lessivable.', 49.99, 40, 'peinture_murale.jpg', '2025-05-20 00:23:44'),
(8, 4, 'Kit de rouleaux et bacs', 'Ensemble complet avec 3 rouleaux différents et bac de peinture.', 22.50, 30, 'kit_rouleaux.jpg', '2025-05-20 00:23:44'),
(9, 5, 'Clé à tube 300mm', 'Clé à tube en acier forgé pour serrage de raccords et tuyaux.', 18.50, 30, 'cle_tube.jpg', '2025-05-20 00:23:44'),
(10, 5, 'Joint silicone sanitaire', 'Mastic silicone anti-moisissure pour joints d\'étanchéité en milieu humide.', 8.95, 50, 'joint_silicone.jpg', '2025-05-20 00:23:44'),
(11, 6, 'Multimètre numérique', 'Appareil de mesure électrique multifonction avec écran LCD.', 29.95, 20, 'multimetre.jpg', '2025-05-20 00:23:44'),
(12, 6, 'Boîte de 10 dominos électriques', 'Connecteurs électriques isolés pour jonction de fils.', 5.99, 80, 'dominos.jpg', '2025-05-20 00:23:44'),
(13, 7, 'Sécateur professionnel', 'Sécateur bypass avec lames en acier trempé et ressort amortisseur.', 23.50, 40, 'secateur.jpg', '2025-05-20 00:23:44'),
(14, 7, 'Bêche de jardin', 'Bêche robuste avec manche en bois et repose-pied renforcé.', 32.95, 20, 'beche.jpg', '2025-05-20 00:23:44'),
(15, 1, 'Marteau de charpentier', 'Marteau robuste avec manche en fibre de verre, idéal pour les travaux de construction.', 24.99, 50, 'marteau.jpg', '2025-05-20 00:24:36'),
(16, 1, 'Tournevis cruciforme', 'Tournevis professionnel avec manche ergonomique antidérapant.', 9.99, 100, 'tournevis_cruciforme.jpg', '2025-05-20 00:24:36'),
(17, 2, 'Perceuse visseuse sans fil 18V', 'Perceuse puissante avec batterie lithium-ion et 2 vitesses variables.', 129.99, 30, 'perceuse_visseuse.jpg', '2025-05-20 00:24:36'),
(18, 2, 'Scie circulaire 1200W', 'Scie circulaire puissante avec lame carbure 185mm et guide parallèle.', 99.50, 20, 'scie_circulaire.jpg', '2025-05-20 00:24:36'),
(19, 3, 'Boîte de 100 vis universelles', 'Assortiment de vis à bois de différentes tailles avec tête cruciforme.', 12.50, 80, 'vis_universelles.jpg', '2025-05-20 00:24:36'),
(20, 3, 'Set de 50 chevilles murales', 'Chevilles en plastique pour fixation dans plaque de plâtre et béton.', 8.99, 100, 'chevilles.jpg', '2025-05-20 00:24:36'),
(21, 4, 'Peinture murale blanc mat 10L', 'Peinture acrylique haute qualité, couvrante et lessivable.', 49.99, 40, 'peinture_murale.jpg', '2025-05-20 00:24:36'),
(22, 4, 'Kit de rouleaux et bacs', 'Ensemble complet avec 3 rouleaux différents et bac de peinture.', 22.50, 30, 'kit_rouleaux.jpg', '2025-05-20 00:24:36'),
(23, 5, 'Clé à tube 300mm', 'Clé à tube en acier forgé pour serrage de raccords et tuyaux.', 18.50, 30, 'cle_tube.jpg', '2025-05-20 00:24:36'),
(24, 5, 'Joint silicone sanitaire', 'Mastic silicone anti-moisissure pour joints d\'étanchéité en milieu humide.', 8.95, 50, 'joint_silicone.jpg', '2025-05-20 00:24:36'),
(25, 6, 'Multimètre numérique', 'Appareil de mesure électrique multifonction avec écran LCD.', 29.95, 20, 'multimetre.jpg', '2025-05-20 00:24:36'),
(26, 6, 'Boîte de 10 dominos électriques', 'Connecteurs électriques isolés pour jonction de fils.', 5.99, 80, 'dominos.jpg', '2025-05-20 00:24:36'),
(27, 7, 'Sécateur professionnel', 'Sécateur bypass avec lames en acier trempé et ressort amortisseur.', 23.50, 40, 'secateur.jpg', '2025-05-20 00:24:36'),
(28, 7, 'Bêche de jardin', 'Bêche robuste avec manche en bois et repose-pied renforcé.', 32.95, 20, 'beche.jpg', '2025-05-20 00:24:36'),
(29, 8, 'Paire de gants de travail', 'Gants de protection en cuir synthétique avec renfort aux paumes.', 12.99, 60, 'gants.jpg', '2025-05-20 00:24:36'),
(30, 8, 'Lunettes de protection', 'Lunettes anti-rayures et anti-buée avec protection latérale.', 9.50, 70, 'lunettes.jpg', '2025-05-20 00:24:36');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id_utilisateurs` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  `adresse` text DEFAULT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  `role` enum('client','admin') DEFAULT 'client',
  `date_creation` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_categories`);

--
-- Index pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD PRIMARY KEY (`id_commandes`),
  ADD KEY `id_utilisateurs` (`id_utilisateurs`);

--
-- Index pour la table `details_commande`
--
ALTER TABLE `details_commande`
  ADD PRIMARY KEY (`id_details_commande`),
  ADD KEY `id_commandes` (`id_commandes`),
  ADD KEY `id_produits` (`id_produits`);

--
-- Index pour la table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`id_panier`),
  ADD KEY `id_utilisateurs` (`id_utilisateurs`),
  ADD KEY `id_produits` (`id_produits`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id_produits`),
  ADD KEY `fk_idcategories` (`id_categories`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id_utilisateurs`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_categories` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `commandes`
--
ALTER TABLE `commandes`
  MODIFY `id_commandes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `details_commande`
--
ALTER TABLE `details_commande`
  MODIFY `id_details_commande` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `panier`
--
ALTER TABLE `panier`
  MODIFY `id_panier` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id_produits` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id_utilisateurs` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `commandes_ibfk_1` FOREIGN KEY (`id_utilisateurs`) REFERENCES `utilisateurs` (`id_utilisateurs`);

--
-- Contraintes pour la table `details_commande`
--
ALTER TABLE `details_commande`
  ADD CONSTRAINT `details_commande_ibfk_1` FOREIGN KEY (`id_commandes`) REFERENCES `commandes` (`id_commandes`),
  ADD CONSTRAINT `details_commande_ibfk_2` FOREIGN KEY (`id_produits`) REFERENCES `produits` (`id_produits`);

--
-- Contraintes pour la table `panier`
--
ALTER TABLE `panier`
  ADD CONSTRAINT `panier_ibfk_1` FOREIGN KEY (`id_utilisateurs`) REFERENCES `utilisateurs` (`id_utilisateurs`),
  ADD CONSTRAINT `panier_ibfk_2` FOREIGN KEY (`id_produits`) REFERENCES `produits` (`id_produits`);

--
-- Contraintes pour la table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `fk_idcategories` FOREIGN KEY (`id_categories`) REFERENCES `categories` (`id_categories`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
