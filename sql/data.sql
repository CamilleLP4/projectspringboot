-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: filmstarwars
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `film`
--

LOCK TABLES `film` WRITE;
/*!40000 ALTER TABLE `film` DISABLE KEYS */;
INSERT INTO `film` VALUES (1,'La Menace Fantôme','George Lucas','13 octobre 1999','La République Galactique est en pleine ébullition. La taxation des routes commerciales reliant les systèmes stellaires éloignés provoque la discorde.<br>\r\n<br>Pour régler la question, la cupide Fédération du Commerce et ses redoutables vaisseaux de guerre imposent un blocus à la petite planète Naboo.<br>\r\n<br>Face à ce dangereux engrenage, alors que le Congrès de la République s’enlise dans des débats sans fin, le Chancelier Suprême charge en secret deux Chevaliers Jedi, gardiens de la paix et de la justice dans la galaxie, de résoudre le conflit....'),(2,'L’Attaque des Clones','George Lucas','17 mai 2002','L’agitation règne au Sénat Galactique. Des milliers de systèmes solaires ont annoncé leur intention de quitter la République.<br>\r\n<br>Confrontés à ce mouvement séparatiste mené par le mystérieux Comte Dooku, les chevaliers Jedi, en nombre limité, ont du mal à maintenir la paix et l’ordre dans la galaxie.<br>\r\n<br>La sénatrice Amidala, ancienne reine de Naboo, revient au Sénat Galactique pour participer à un vote crucial sur la création d’une Armée de la République pour aider les Jedi débordés....'),(3,'La Revanche des Sith','George Lucas','19 mai 2005','C’est la guerre ! La République croule sous les attaques de l’impitoyable Sith, le Comte Dooku. Il y a des héros dans les deux camps. Le Mal est partout.<br>\r\n<br>Avec une audace stupéfiante, le Général Grievous, diabolique chef droïde, est entré dans la capitale pour enlever le Chancelier Suprême Palpatine, chef suprême du Sénat Galactique.<br>\r\n<br>Alors que l’Armée Droïde Séparatiste tente de quitter la capitale assiégée avec son précieux otage, deux Chevaliers Jedi mènent une mission désespérée pour secourir le chancelier captif....'),(4,'Un Nouvel Espoir','George Lucas','19 octobre 1977','C’est une époque de guerre civile. À bord de vaisseaux spatiaux opérant à partir d’une base cachée, les rebelles ont emporté leur première victoire sur le maléfique Empire Galactique.<br>\r\n<br>Au cours de la bataille, des espions rebelles ont réussi à dérober les plans secrets de l’arme absolue de l’Empire : l’Étoile de la Mort, une station spatiale blindée dotée d’un équipement assez puissant pour annihiler une planète tout entière.<br>\r\n<br>Poursuivie par des sbires sinistres de l’Empire, la princesse Leia file vers sa base dans son vaisseau cosmique, porteuse des plans volés à l’ennemi qui pourront sauver son peuple et restaurer la liberté dans la galaxie....'),(5,'L’Empire contre-attaque','George Lucas','20 août 1980','Le temps du péril a commencé pour la rébellion. Malgré la destruction de l’Étoile de la Mort, l’armée Impériale a chassé les rebelles de leur base cachée et les poursuit à travers la galaxie.<br>\r\n<br>Après avoir échappé à la redoutable escadrille cosmique de l’Empire, un groupe de résistants mené par Luke Skywalker a établi une nouvelle base secrète sur Hoth, la lointaine planète des glaces.<br>\r\n<br>Dark Vador, le maléfique, hanté par l’idée de retrouver le jeune Luke, lance des milliers de sondes téléguidées aux confins de l’espace....'),(6,'Le Retour du Jedi','George Lucas','19 octobre 1983','Luke Skywalker est retourné parmi les siens sur la planète Tatooine pour tenter d’arracher son ami Han Solo aux griffes de l’ignoble Jabba Desilijic Tiure.<br>\r\n<br>Luke ne peut pas savoir que l’Empire Galactique a commencé à construire en secret une nouvelle station spatiale blindée bien plus puissante et terrifiante que l’Étoile de la Mort.<br>\r\n<br>Quand cette arme absolue sera achevée, ce sera la fin du petit groupe de résistants qui luttent pour ramener la liberté dans la galaxie....'),(7,'Le Réveil de la Force','J.J. Abrams','16 décembre 2015','Luke Skywalker a disparu. En son absence, le sinistre Premier Ordre est né des cendres de l’Empire et cherche à éliminer Luke Skywalker, le dernier Jedi.<br>\r\n<br>Avec le soutien de la République, la générale Leia Organa mène la Résistance et tente désespérément de retrouver son frère, Luke, pour obtenir son aide et restaurer la paix et la justice dans la galaxie.<br>\r\n<br>Leia a envoyé secrètement son pilote le plus audacieux en mission sur Jakku, où un vieil allié détient un indice permettant de localiser Luke....'),(8,'Les Derniers Jedi','Rian Johnson','13 décembre 2017','Le Premier Ordre règne. Après avoir décimé la pacifique République, le Suprême Leader Snoke déploie maintenant ses légions pour prendre le contrôle militaire de la galaxie.<br>\r\n<br>Seule la générale Leia Organa et les chasseurs de la Résistance s’opposent à la tyrannie naissante, convaincus que le Maître Jedi Luke Skywalker pourrait redonner une étincelle d’espoir au combat.<br>\r\n<br>Mais la Résistance s’est laissé surprendre. Tandis que le Premier Ordre fond sur la base rebelle, les courageux héros tentent une évasion désespérée....'),(9,'L’Ascension de Skywalker','J.J. Abrams','18 décembre 2019','Un an a passé depuis la défaite de la résistance et la mort du dernier des Jedi, Luke Skywalker. Le terrible Premier ordre a repris le pouvoir sur la galaxie avec à sa tête Kylo Ren et ses chevaliers, créant ainsi un Nouvel Empire.<br>\r\n<br>La Résistance dans la déroute cherche à tout prix des alliés et braves le danger des frontières Impériales en envoyant le général Leia Organa sur la planète Nkllon dans le système Athega pour y quérir l’aide d’anciens amis.<br>\r\n<br>De son côté Rey toujours en quête de savoir, s’enfonce dans les régions Inconnues. Un mal s’est réveillé et il pourrait apporter avec lui la fin de tout espoir....');
/*!40000 ALTER TABLE `film` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-17 17:45:14
