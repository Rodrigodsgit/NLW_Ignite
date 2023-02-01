import  {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data:{
            name: 'Pedro Souza',
            email: 'PedroSouza@gmail.com',
            avatarUrl: 'https://github.com/Rodrigodsgit.png',

        }
    })    

    const pool = await prisma.pool.create({
        data:{
            title: 'Example Pool',
            code: 'BOL123',
            ownerId: user.id,

            participants:{
                create:{
                    userId: user.id
                }
            }
        }
    })

    await prisma.game.create({
        data:{
            date: '2023-02-01T02:10:47.739Z',
            firstTeamCountryCode:'DE',
            secondTeamCountryCode:'BR',
        }
    })

    await  prisma.game.create({
        data:{
            date: '2023-02-01T02:10:47.739Z',
            firstTeamCountryCode:'BR',
            secondTeamCountryCode:'AR',

            guesses:{
                create:{
                    fisrtTeamPoints: 2,
                    secondTeamPoints: 1,

                    participant:{
                        connect:{
                            userId_poolId:{
                                userId: user.id,
                                poolId: pool.id,
                            }
                        }
                    }
                }
            }
        }
    })

    
}

main()