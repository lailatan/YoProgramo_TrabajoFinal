-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `anio` int NOT NULL,
  `descripcion` mediumtext COLLATE utf8_spanish_ci,
  `formacion_id` int NOT NULL,
  PRIMARY KEY (`id`,`formacion_id`),
  KEY `fk_Curso_Formacion1_idx` (`formacion_id`),
  CONSTRAINT `fk_Curso_Formacion1` FOREIGN KEY (`formacion_id`) REFERENCES `formacion` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (1,'Licenciatura en Análisis de Sistemas',1995,'Facultad de Ingeniería. \\nCursado hasta 3er. año.',1);
INSERT INTO `curso` VALUES (2,'MCP - Microsoft Certified Professional',1998,'Microsoft - Examen Drake Sylvan Prometric. \\nDeveloping Applications with Microsoft Visual Basic 5.0',2);
INSERT INTO `curso` VALUES (3,'Introducción Phyton',2020,NULL,3);
INSERT INTO `curso` VALUES (4,'SQL y MySQL',2020,NULL,3);
INSERT INTO `curso` VALUES (5,'POO en Phyton',2020,NULL,3);
INSERT INTO `curso` VALUES (6,'Desarrollo Aplicaciones Móviles (48hs)',2020,NULL,4);
INSERT INTO `curso` VALUES (7,'Programación Phyton (42hs)',2020,NULL,4);
INSERT INTO `curso` VALUES (8,'Javascript Desarrollador Avanzado (30hs)',2021,NULL,4);
INSERT INTO `curso` VALUES (9,'Java BackEnd Developer (400 horas)',2021,'Java / Spring Boot/ Hibernate. \\nMySQL',5);
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experiencia`
--

DROP TABLE IF EXISTS `experiencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experiencia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `empresa` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `imagen` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_desde` varchar(7) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_hasta` varchar(7) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cargo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `detalle` mediumtext COLLATE utf8_spanish_ci NOT NULL,
  `persona_id` int NOT NULL,
  PRIMARY KEY (`id`,`persona_id`),
  KEY `fk_Experiencia_Persona_idx` (`persona_id`),
  CONSTRAINT `fk_Experiencia_Persona` FOREIGN KEY (`persona_id`) REFERENCES `persona` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiencia`
--

LOCK TABLES `experiencia` WRITE;
/*!40000 ALTER TABLE `experiencia` DISABLE KEYS */;
INSERT INTO `experiencia` VALUES (1,'Inner Consulting S.A.','assets/imagenes/experiencia/empresa.png','1997-03','1998-08','Analista Programadora','Diseño y Desarrollo de software bajo entorno Windows, integrando tecnología, lenguajes, y herramientas de desarrollo Microsoft (Visual Basic 4 y 5 - MS-SQL). Clientes Principales: Omint S.A., Banco Santander, Telecom –Arnet, COMPAR S.A.',1);
INSERT INTO `experiencia` VALUES (2,'Metropolitan Life','assets/imagenes/experiencia/met.jpg','1998-09','1999-09','Analista de Nuevas Tecnologías','Análisis, diseño, desarrollo y mantenimiento de los sistemas de la Empresa: Visual Basic, interfaces con AS400. Análisis y dirección del proyecto de compatibilidad con el Año 2000. Soporte a los usuarios. Generación de listados y reportes de datos.',1);
INSERT INTO `experiencia` VALUES (3,'División CRM','assets/imagenes/experiencia/empresa.png','1999-09','2001-03','Consultora/Analista Programadora Vantive','Análisis y Diseño para Customización de distintos módulos del Sistema Vantive 8 (desarrollo en Vantive de objetos deaplicación, creación de ActiveX en Visual Basic 5, package enPL/SQL y Base de Datos Oracle). Capacitaciones en Vantive a programadores.',1);
INSERT INTO `experiencia` VALUES (4,'ING Insurance','assets/imagenes/experiencia/ing.jpg','2001-04','2003-11','Analista Programadora','Análisis, diseño y desarrollo de nuevas aplicaciones y mantenimiento de las existentes: interfases con CobolAS400, SQLCobol, Visual Basic y bases de datos Oracle.Interfases y desarrollo de impresiones mediante JetFormControl de cartas a clientes, reportes e informes.',1);
/*!40000 ALTER TABLE `experiencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formacion`
--

DROP TABLE IF EXISTS `formacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `escuela` varchar(65) COLLATE utf8_spanish_ci NOT NULL,
  `imagen` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `persona_id` int NOT NULL,
  PRIMARY KEY (`id`,`persona_id`),
  KEY `fk_Formacion_Persona1_idx` (`persona_id`),
  CONSTRAINT `fk_Formacion_Persona1` FOREIGN KEY (`persona_id`) REFERENCES `persona` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formacion`
--

LOCK TABLES `formacion` WRITE;
/*!40000 ALTER TABLE `formacion` DISABLE KEYS */;
INSERT INTO `formacion` VALUES (1,'Universidad de Buenos Aires','assets/imagenes/formacion/uba.jpeg',1);
INSERT INTO `formacion` VALUES (2,'Microsoft','assets/imagenes/formacion/mcp.jpeg',1);
INSERT INTO `formacion` VALUES (3,'FabLab Vicente López','assets/imagenes/formacion/fablab.jpeg',1);
INSERT INTO `formacion` VALUES (4,'Centro Universitario Vicente López / EducacionIT','assets/imagenes/formacion/cuvl.jpeg',1);
INSERT INTO `formacion` VALUES (5,'Ada ITW','assets/imagenes/formacion/ada.jpeg',1);
/*!40000 ALTER TABLE `formacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `id` int NOT NULL AUTO_INCREMENT,
  `foto` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `mail` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `profesion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `sobre_mi` mediumtext COLLATE utf8_spanish_ci NOT NULL,
  `linkedin` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `github` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `ubicacion` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `anio` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (1,'assets/imagenes/foto.jpg','Natalia Lopardo','natalialopardo19@gmail.com','Desarrolladora Java FullStack','Soy Desarrolladora FullStack, BackEnd y Mobile. Me apasiona encontrar soluciones Informáticas a problemas/situaciones cotidianas, moldeando la realidad con 01100011 01100101 01110010 01101111 01110011 y 01110101 01101110 01101111 01110011.','https://www.linkedin.com/in/natalialopardo','https://github.com/lailatan/','Argentina',2022);
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona_x_tecnologia`
--

DROP TABLE IF EXISTS `persona_x_tecnologia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona_x_tecnologia` (
  `persona_id` int NOT NULL,
  `tecnologia_id` int NOT NULL,
  PRIMARY KEY (`persona_id`,`tecnologia_id`),
  KEY `fk_Persona_has_Tecnologia_Tecnologia1_idx` (`tecnologia_id`),
  KEY `fk_Persona_has_Tecnologia_Persona1_idx` (`persona_id`),
  CONSTRAINT `fk_Persona_has_Tecnologia_Persona1` FOREIGN KEY (`persona_id`) REFERENCES `persona` (`id`),
  CONSTRAINT `fk_Persona_has_Tecnologia_Tecnologia1` FOREIGN KEY (`tecnologia_id`) REFERENCES `tecnologia` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona_x_tecnologia`
--

LOCK TABLES `persona_x_tecnologia` WRITE;
/*!40000 ALTER TABLE `persona_x_tecnologia` DISABLE KEYS */;
INSERT INTO `persona_x_tecnologia` VALUES (1,1);
INSERT INTO `persona_x_tecnologia` VALUES (1,2);
INSERT INTO `persona_x_tecnologia` VALUES (1,3);
INSERT INTO `persona_x_tecnologia` VALUES (1,4);
INSERT INTO `persona_x_tecnologia` VALUES (1,5);
INSERT INTO `persona_x_tecnologia` VALUES (1,6);
INSERT INTO `persona_x_tecnologia` VALUES (1,7);
INSERT INTO `persona_x_tecnologia` VALUES (1,8);
INSERT INTO `persona_x_tecnologia` VALUES (1,9);
/*!40000 ALTER TABLE `persona_x_tecnologia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyecto`
--

DROP TABLE IF EXISTS `proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyecto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagen` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `link` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `icono` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `detalle` mediumtext COLLATE utf8_spanish_ci NOT NULL,
  `persona_id` int NOT NULL,
  PRIMARY KEY (`id`,`persona_id`),
  KEY `fk_Proyecto_Persona1_idx` (`persona_id`),
  CONSTRAINT `fk_Proyecto_Persona1` FOREIGN KEY (`persona_id`) REFERENCES `persona` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyecto`
--

LOCK TABLES `proyecto` WRITE;
/*!40000 ALTER TABLE `proyecto` DISABLE KEYS */;
INSERT INTO `proyecto` VALUES (4,'assets/imagenes/proyectos/medidas_pantallas.png','https://github.com/lailatan/Android_ConvertidorMedidasNatalia','assets/imagenes/proyectos/medidas.jpg','Conversor Medidas','Android Studio - Java',1);
INSERT INTO `proyecto` VALUES (5,'assets/imagenes/proyectos/tarot_pantallas.jpg','https://github.com/lailatan/Android_FecNacTarot','assets/imagenes/proyectos/tarot.jpg','Tarot','Android Studio - Java',1);
INSERT INTO `proyecto` VALUES (6,'assets/imagenes/proyectos/ch_pantallas.jpg','https://github.com/lailatan/Android_ConteodeCarbohidratos_V2','assets/imagenes/proyectos/ch.jpg','Conteo Carbohidratos','Android Studio - Java',1);
INSERT INTO `proyecto` VALUES (7,'assets/imagenes/proyectos/ia_pantallas.png','https://github.com/lailatan/Android_Calc_Insulina_Activa','assets/imagenes/proyectos/ia.jpg','Insulina Activa','Android Studio - Java',1);
/*!40000 ALTER TABLE `proyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tecnologia`
--

DROP TABLE IF EXISTS `tecnologia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tecnologia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagen` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `detalle` mediumtext COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tecnologia`
--

LOCK TABLES `tecnologia` WRITE;
/*!40000 ALTER TABLE `tecnologia` DISABLE KEYS */;
INSERT INTO `tecnologia` VALUES (1,'assets/imagenes/tecnologias/git_github.png','GIT - GITHUB','GIT es un software de control de versiones, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando tienen un gran número de archivos de código fuente.GitHub es una plataforma de desarrollo colaborativo de software para alojar proyectos utilizando el sistema de Git.');
INSERT INTO `tecnologia` VALUES (2,'assets/imagenes/tecnologias/android_intellij_vsc.png','Android Studio - IntelliJ Idea - Visual Studio Code','Android Studio es el entorno de desarrollo integrado oficial para la plataforma Android. IntelliJ IDEA es un entorno de desarrollo integrado (IDE) para el desarrollo de programas informáticos. Visual Studio Code es un editor de código fuente para Windows, Linux, macOS y Web.');
INSERT INTO `tecnologia` VALUES (3,'assets/imagenes/tecnologias/json_api_sql.png','SQL - JSON - API REST','SQL (Structured Query Language) es un lenguaje de dominio específico, diseñado para administrar información de bases de datos relacionales API REST define un conjunto de funciones para realizar solicitudes y recibir respuestas a través del protocolo HTTP.JSON (JS Object Notation) es un formato de texto sencillo para el intercambio de datos.');
INSERT INTO `tecnologia` VALUES (4,'assets/imagenes/tecnologias/js.png','JAVASCRIPT','JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.');
INSERT INTO `tecnologia` VALUES (5,'assets/imagenes/tecnologias/css.png','CSS','CSS (siglas en inglés de Cascading Style Sheets), en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.');
INSERT INTO `tecnologia` VALUES (6,'assets/imagenes/tecnologias/html.png','HTML','El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. HTML5 es la quinta revisión del estándar HTML y permite soportar lo último en multimedia.');
INSERT INTO `tecnologia` VALUES (7,'assets/imagenes/tecnologias/vb.png','VISUAL BASIC','Visual Basic (VB) es un lenguaje de programación dirigido por eventos, desarrollado por Alan Cooper para Microsoft. Este lenguaje de programación es un dialecto de BASIC, con importantes agregados. Su primera versión fue presentada en 1991, con la intención de simplificar la programación utilizando un ambiente de desarrollo.');
INSERT INTO `tecnologia` VALUES (8,'assets/imagenes/tecnologias/python.png','PYTHON','Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código. Es lenguaje de programación multiparadigma, ya que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma.');
INSERT INTO `tecnologia` VALUES (9,'assets/imagenes/tecnologias/java.png','JAVA','Java es un lenguaje de programación orientado a objetos que se incorporó al ámbito de la informática en los años noventa. La idea de Java es que pueda realizarse programas con la posibilidad de ejecutarse en cualquier contexto, en cualquier ambiente, siendo así su portabilidad uno de sus principales logros.');
/*!40000 ALTER TABLE `tecnologia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'natalialopardo19@gmail.com','12341234');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-16 18:23:24
