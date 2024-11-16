/*
  Warnings:

  - A unique constraint covering the columns `[shopMonkeyId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerType` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopMonkeyId` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CustomerType" AS ENUM ('Customer', 'Fleet');

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "customerType" "CustomerType" NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "locationId" TEXT NOT NULL,
ADD COLUMN     "shopMonkeyId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_shopMonkeyId_key" ON "Customer"("shopMonkeyId");
