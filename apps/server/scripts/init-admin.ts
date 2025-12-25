import { createAdminUser } from '../lib/auth';
import { db } from '../lib/db';

async function main() {
  const username = process.argv[2];
  const password = process.argv[3];

  if (!username || !password) {
    console.error('Usage: tsx scripts/init-admin.ts <username> <password>');
    process.exit(1);
  }

  try {
    const user = await createAdminUser(username, password);
    console.log(`✅ Admin user created: ${user.username}`);
    process.exit(0);
  } catch (error: any) {
    if (error.code === 'P2002') {
      console.error('❌ User already exists');
    } else {
      console.error('❌ Error:', error.message);
    }
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
}

main();


