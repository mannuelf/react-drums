-- CreateTable
CREATE TABLE "Kit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Sound" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "keyCode" INTEGER NOT NULL,
    "keyChar" TEXT NOT NULL
);

-- RedefineIndex
DROP INDEX "User.email_unique";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
