import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.article.createMany({
    data: [
      {
        title: 'Introduction to Database Systems',
        description: 'An overview of database systems and their importance.',
        body: 'Database systems play a crucial role in managing and organizing data efficiently.',
        published: true,
      },
      {
        title: 'Advanced SQL Techniques',
        description: 'Exploring advanced SQL concepts and techniques.',
        body: 'Learn about advanced SQL queries, optimization strategies, and performance tuning.',
        published: true,
      },
      {
        title: 'NoSQL Database Overview',
        description: 'An introduction to NoSQL databases and their use cases.',
        body: 'Discover the benefits and drawbacks of using NoSQL databases in different scenarios.',
        published: false,
      },
      {
        title: 'Data Modeling Best Practices',
        description: 'Essential strategies for effective data modeling.',
        body: 'Explore techniques for designing efficient and scalable database schemas.',
        published: true,
      },
      {
        title: 'Introduction to ORM Frameworks',
        description:
          'Understanding Object-Relational Mapping (ORM) and its benefits.',
        body: 'Learn how ORM frameworks simplify database interactions and improve developer productivity.',
        published: true,
      },
      {
        title: 'Big Data Analytics Fundamentals',
        description: 'Foundational concepts of big data analytics.',
        body: 'Explore tools and techniques for processing and analyzing large datasets.',
        published: true,
      },
      {
        title: 'Data Warehousing Principles',
        description: 'Understanding the fundamentals of data warehousing.',
        body: 'Learn about data warehousing architectures, ETL processes, and dimensional modeling.',
        published: false,
      },
      {
        title: 'Graph Database Applications',
        description:
          'Exploring the use cases and advantages of graph databases.',
        body: 'Discover how graph databases excel in handling complex relationships and network data.',
        published: true,
      },
      {
        title: 'Data Security Best Practices',
        description: 'Essential techniques for securing sensitive data.',
        body: 'Explore encryption, access control, and other strategies for protecting data integrity and confidentiality.',
        published: true,
      },
      {
        title: 'Real-time Data Processing',
        description: 'Strategies for processing data in real-time.',
        body: 'Learn about stream processing systems and techniques for real-time analytics.',
        published: true,
      },
    ],
  });
}

main()
  .then(() => console.log('Database seeding is successful'))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
