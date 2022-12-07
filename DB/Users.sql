-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: users
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idUsers` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `nUsuario` varchar(80) NOT NULL,
  `cElectronico` varchar(80) NOT NULL,
  `contrasena` varchar(80) NOT NULL,
  `gPeliculas` json NOT NULL,
  `actoresFavoritos` json NOT NULL,
  `directoresFavoritos` json NOT NULL,
  PRIMARY KEY (`idUsers`),
  UNIQUE KEY `cElectronico_UNIQUE` (`cElectronico`),
  UNIQUE KEY `nUsuario_UNIQUE` (`nUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Dante','Ezio21','dante@gmail.com','1456','{\"genero\": [\"Action\", \"Drama\"]}','{\"actor\": [\"Ge Geng\", \"Li Ning\"]}','{\"director\": [\"Yigong Wu\", \"Lou Antonio\", \"Gary Davis\"]}'),(2,'Vicente','Fernandez','vicente@hotmail.com','78945','{\"genero\": [\"Mystery\", \"Biography\"]}','{\"actor\": [\"Joey Katz\", \"Tabby Hanson\"]}','{\"director\": [\"Peter Markham\", \"Jaime Chu00e1varri\"]}'),(3,'Batman','R54','batman@gmail.com','123456','{\"genero\": [\"Thriller\", \"Horror\"]}','{\"actor\": [\"Harvey Keitel\", \"Madonna\"]}','{\"director\": [\"Claudia Messmer\", \"Deepak Bahry\"]}'),(4,'J Balvin','bebesito127','Jbavil549@gmail.com','789456','{\"genero\": [\"Comedy\", \"Drama\"]}','{\"actor\": [\"Nobuko Miyamoto\", \"Graham Armitage\"]}','{\"director\": [\"James Yukich\", \"Stuart Margolin\"]}'),(5,'Cristiano','CR7','elBicho@hotmail.com','12345','{\"genero\": [\"Crime\", \"Sport\"]}','{\"actor\": [\"Ewa Gawryluk\", \"Carmen Maura\", \"Antonio Resines\", \"Asunciu00f3n Balaguer\", \"Olga Keyzerova\", \"Yuri Gurtovoy\", \"Lyubov Polishchuk\", \"You Ge\", \"Ting Li\", \"Yi Liu\", \"Michael Nouri\", \"Joey Travolta\", \"Vanity\", \"Richard Harrington\", \"Pierce Brosnan\", \"Patrick Stewart\", \"Alexandra Paul\", \"Tom Jackson\", \"Wayne Robson\", \"Vera Cukic\", \"Marko Nikolic\", \"Jean-Robert Bourdage\", \"Louise Desliu00e8res\", \"Jason Alexander\", \"Edward Asner\", \"Meret Becker\", \"Eric Christmas\", \"Steve Buscemi\"]}','{\"director\": [\"u00c9liane de Latour\", \"Peter Kassovitz\", \"Henry Winkler\", \"Charles Haid\"]}'),(6,'Jose Eduardo Hernandez de la Cruz','eduardoUAM','jehc@gmail.com','12345a','{\"genero\": [\"Drama\", \"Thriller\"]}','{\"actor\": [\"Christopher McDonald\", \"Joey Katz\", \"Amelia Kallman\", \"Maria Schneider\"]}','{\"director\": [\"Gary Davis\", \"Uli Edel\", \"Ju00fbzu00f4 Itami\", \"Bju00f6rn Runge\", \"Annie Basson\", \"Nick Hamm\", \"Wei Tat Hon\"]}');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-07 14:53:28
