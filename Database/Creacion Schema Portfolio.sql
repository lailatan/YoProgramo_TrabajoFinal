-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portfolio` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci ;
USE `portfolio` ;

-- -----------------------------------------------------
-- Table `portfolio`.`Persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`Persona` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `foto` VARCHAR(100) NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `mail` VARCHAR(100) NOT NULL,
  `profesion` VARCHAR(100) NOT NULL,
  `sobre_mi` MEDIUMTEXT NOT NULL,
  `linkedin` VARCHAR(100) NOT NULL,
  `github` VARCHAR(100) NOT NULL,
  `ubicacion` VARCHAR(45) NOT NULL,
  `anio` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`Experiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`Experiencia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `empresa` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(100) NOT NULL,
  `fecha_desde` VARCHAR(7) NOT NULL,
  `fecha_hasta` VARCHAR(7) NULL,
  `cargo` VARCHAR(100) NOT NULL,
  `detalle` MEDIUMTEXT NOT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_Experiencia_Persona_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_Experiencia_Persona`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`Formacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`Formacion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `escuela` VARCHAR(65) NOT NULL,
  `imagen` VARCHAR(100) NOT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_Formacion_Persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_Formacion_Persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`Curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`Curso` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `anio` INT NOT NULL,
  `descripcion` MEDIUMTEXT NULL,
  `formacion_id` INT NOT NULL,
  PRIMARY KEY (`id`, `formacion_id`),
  INDEX `fk_Curso_Formacion1_idx` (`formacion_id` ASC) VISIBLE,
  CONSTRAINT `fk_Curso_Formacion1`
    FOREIGN KEY (`formacion_id`)
    REFERENCES `portfolio`.`Formacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`Proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`Proyecto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `imagen` VARCHAR(100) NOT NULL,
  `link` VARCHAR(100) NOT NULL,
  `icono` VARCHAR(100) NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `detalle` MEDIUMTEXT NOT NULL,
  `persona_id` INT NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  INDEX `fk_Proyecto_Persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_Proyecto_Persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`Tecnologia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`Tecnologia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `imagen` VARCHAR(100) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `detalle` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`Usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `mail` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`Persona_x_Tecnologia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`Persona_x_Tecnologia` (
  `persona_id` INT NOT NULL,
  `tecnologia_id` INT NOT NULL,
  PRIMARY KEY (`persona_id`, `tecnologia_id`),
  INDEX `fk_Persona_has_Tecnologia_Tecnologia1_idx` (`tecnologia_id` ASC) VISIBLE,
  INDEX `fk_Persona_has_Tecnologia_Persona1_idx` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_Persona_has_Tecnologia_Persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio`.`Persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Persona_has_Tecnologia_Tecnologia1`
    FOREIGN KEY (`tecnologia_id`)
    REFERENCES `portfolio`.`Tecnologia` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
