
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('submissions.db');

db.serialize(() => {
  db.all('SELECT * FROM submissions', (err, rows) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('<html><body><table border="1">');
    console.log('<tr><th>ID</th><th>Name</th><th>Email</th><th>Message</th></tr>');
    rows.forEach(row => {
      console.log(`<tr><td>${row.id}</td><td>${row.name}</td><td>${row.email}</td><td>${row.message}</td></tr>`);
    });
    console.log('</table></body></html>');
  });
});

db.close();
