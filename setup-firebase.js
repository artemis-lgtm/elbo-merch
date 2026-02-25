// Create Firebase project via REST API using gcloud
const { execSync } = require('child_process');

// We'll use the Firebase REST API
// First check if we can use firebase CLI
try {
  const result = execSync('firebase projects:list --json 2>&1', { encoding: 'utf-8' });
  console.log(result);
} catch(e) {
  console.log('Firebase CLI needs auth:', e.message.slice(0, 200));
}
