-- CreateTable
CREATE TABLE "permissions" (
"id" SERIAL,
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "permissions" ADD FOREIGN KEY("user_id")REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
