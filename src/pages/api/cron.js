import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateJobOffers() {
    const jobOffers = await prisma.jobOffer.findMany();

    const updatePromises = jobOffers.map(async (offer) => {
        let dateDifference;
        switch (offer.id) {
            case 1:
            case 2:
                dateDifference = 1;
                break;
            case 3:
                dateDifference = 2;
                break;
            case 4:
                dateDifference = 5;
                break;
            case 5:
                dateDifference = 7;
                break;
            case 6:
            case 7:
            case 8:
                dateDifference = 14;
                break;
            case 9:
                dateDifference = 21;
                break;
            case 10:
                dateDifference = 30;
                break;
            default:
                dateDifference = 0;
        }

        const updatedDate = new Date();
        updatedDate.setDate(updatedDate.getDate() - dateDifference);

        await prisma.jobOffer.update({
            where: { id: offer.id },
            data: { date: updatedDate },
        });
    });

    await Promise.all(updatePromises);
}

updateJobOffers()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
