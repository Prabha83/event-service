-- CreateTable
CREATE TABLE "EventType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "event_name" VARCHAR(255) NOT NULL,
    "event_description" TEXT NOT NULL,
    "event_type_id" INTEGER NOT NULL,
    "event_location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_event_type_id_fkey" FOREIGN KEY ("event_type_id") REFERENCES "EventType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
