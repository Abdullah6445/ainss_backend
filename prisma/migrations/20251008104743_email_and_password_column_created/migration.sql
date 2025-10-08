/*
  Warnings:

  - Added the required column `email` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Admin` DROP FOREIGN KEY `Admin_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Student` DROP FOREIGN KEY `Student_attendanceId_fkey`;

-- DropForeignKey
ALTER TABLE `Teacher` DROP FOREIGN KEY `Teacher_userId_fkey`;

-- AlterTable
ALTER TABLE `Admin` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Teacher` ADD CONSTRAINT `Teacher_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_attendanceId_fkey` FOREIGN KEY (`attendanceId`) REFERENCES `Attendance`(`attendanceId`) ON DELETE CASCADE ON UPDATE CASCADE;
