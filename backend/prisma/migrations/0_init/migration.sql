-- CreateTable
CREATE TABLE `students` (
    `student_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `student_name` VARCHAR(100) NOT NULL,
    `date_of_birth` DATE NOT NULL,
    `email` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `student_id`(`student_id`),
    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `courses` (
    `course_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `course_name` VARCHAR(255) NOT NULL,
    `course_code` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `course_id`(`course_id`),
    UNIQUE INDEX `course_code`(`course_code`),
    PRIMARY KEY (`course_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_courses` (
    `student_id` INTEGER NOT NULL,
    `course_id` INTEGER NOT NULL,

    PRIMARY KEY (`student_id`, `course_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

