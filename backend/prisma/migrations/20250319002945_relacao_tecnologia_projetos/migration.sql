-- AlterTable
ALTER TABLE "projetos" ADD COLUMN     "tecnologiaId" INTEGER;

-- AddForeignKey
ALTER TABLE "projetos" ADD CONSTRAINT "projetos_tecnologiaId_fkey" FOREIGN KEY ("tecnologiaId") REFERENCES "tecnologias"("id") ON DELETE SET NULL ON UPDATE CASCADE;
