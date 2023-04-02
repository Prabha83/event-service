/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventType` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('YES', 'NO');

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_event_type_id_fkey";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "EventType";

-- CreateTable
CREATE TABLE "EventTypes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Events" (
    "id" SERIAL NOT NULL,
    "event_name" VARCHAR(255) NOT NULL,
    "event_description" TEXT NOT NULL,
    "event_type_id" INTEGER NOT NULL,
    "event_location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "time_begin" TIMESTAMP(3) NOT NULL,
    "time_end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventComments" (
    "id" SERIAL NOT NULL,
    "event_Id" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_Id" INTEGER,

    CONSTRAINT "EventComments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventAttendees" (
    "id" SERIAL NOT NULL,
    "user_Id" INTEGER NOT NULL,
    "event_Id" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "approved" BOOLEAN NOT NULL,
    "attended" BOOLEAN NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventAttendees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_event_type_id_fkey" FOREIGN KEY ("event_type_id") REFERENCES "EventTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventComments" ADD CONSTRAINT "EventComments_event_Id_fkey" FOREIGN KEY ("event_Id") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventComments" ADD CONSTRAINT "EventComments_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventAttendees" ADD CONSTRAINT "EventAttendees_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventAttendees" ADD CONSTRAINT "EventAttendees_event_Id_fkey" FOREIGN KEY ("event_Id") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
