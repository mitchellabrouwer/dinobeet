import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$queryRaw`COPY recipe FROM '/Users/mitch/Google Drive/My Drive/vegan_app_csv_data/recipes.csv' DELIMITER ',' CSV HEADER;`;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
