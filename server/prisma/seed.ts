import prisma from '@/lib/prisma/db'

async function seed() {
  await prisma.user.deleteMany()
  await prisma.post.deleteMany()
  await prisma.comment.deleteMany()
  await prisma.like.deleteMany()

  await prisma.user.create({
    data: {
      email: 'joao.silva@techbr.com',
      name: 'João Silva',
      position: 'Desenvolvedor Front-end',
      password: '',
      pictureUrl: 'https://techbr.com/fotos/joao_silva.png',
      posts: {
        create: [
          {
            content: 'Acabei de finalizar um projeto incrível em React!',
            comments: {
              create: [
                {
                  content: 'Parabéns, João! Ficou muito bom.',
                  author: {
                    create: {
                      email: 'maria.souza@techbr.com',
                      name: 'Maria Souza',
                      position: 'Gerente de Projetos',
                      password: 'senha1234',
                    },
                  },
                  likes: {
                    create: [
                      {
                        author: {
                          connect: { email: 'joao.silva@techbr.com' },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.user.create({
    data: {
      email: 'lucas.pereira@techcloud.com',
      name: 'Lucas Pereira',
      position: 'Engenheiro de Dados',
      password: '',
      posts: {
        create: [
          {
            content:
              'Acabei de implementar uma pipeline de dados utilizando Apache Kafka e Spark!',
            comments: {
              create: [
                {
                  content:
                    'Impressionante, Lucas! Isso vai otimizar muitos processos.',
                  author: {
                    create: {
                      email: 'juliana.costa@techcloud.com',
                      name: 'Juliana Costa',
                      position: 'Cientista de Dados',
                      password: 'machinelearning321',
                    },
                  },
                  likeCount: 2,
                  likes: {
                    create: [
                      {
                        author: {
                          connect: { email: 'lucas.pereira@techcloud.com' },
                        },
                      },
                      {
                        author: {
                          connect: { email: 'juliana.costa@techcloud.com' },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  })
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
