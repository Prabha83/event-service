/*
  Warnings:

  - You are about to drop the `EventAttendees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventComments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EventAttendees" DROP CONSTRAINT "EventAttendees_event_Id_fkey";

-- DropForeignKey
ALTER TABLE "EventAttendees" DROP CONSTRAINT "EventAttendees_user_Id_fkey";

-- DropForeignKey
ALTER TABLE "EventComments" DROP CONSTRAINT "EventComments_event_Id_fkey";

-- DropForeignKey
ALTER TABLE "EventComments" DROP CONSTRAINT "EventComments_user_Id_fkey";

-- DropForeignKey
ALTER TABLE "Events" DROP CONSTRAINT "Events_event_type_id_fkey";

-- DropTable
DROP TABLE "EventAttendees";

-- DropTable
DROP TABLE "EventComments";

-- DropTable
DROP TABLE "EventTypes";

-- DropTable
DROP TABLE "Events";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "event_types" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "event_name" VARCHAR(255) NOT NULL,
    "event_description" TEXT NOT NULL,
    "event_type_id" INTEGER NOT NULL,
    "event_location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "time_begin" TIMESTAMP(3) NOT NULL,
    "time_end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_comments" (
    "id" SERIAL NOT NULL,
    "event_Id" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_Id" INTEGER,

    CONSTRAINT "event_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_attendees" (
    "id" SERIAL NOT NULL,
    "user_Id" INTEGER NOT NULL,
    "event_Id" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "approved" BOOLEAN NOT NULL,
    "attended" BOOLEAN NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_attendees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_event_type_id_fkey" FOREIGN KEY ("event_type_id") REFERENCES "event_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_comments" ADD CONSTRAINT "event_comments_event_Id_fkey" FOREIGN KEY ("event_Id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_comments" ADD CONSTRAINT "event_comments_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_attendees" ADD CONSTRAINT "event_attendees_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_attendees" ADD CONSTRAINT "event_attendees_event_Id_fkey" FOREIGN KEY ("event_Id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
