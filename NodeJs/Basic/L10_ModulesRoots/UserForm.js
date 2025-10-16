function UserForm(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
    <h1>User Form</h1>
    <form method="post" action="/submit" style="display: flex; flex-direction: column; max-width: 300px;">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" required>

      <label for="email">Email:</label>
      <input type="email" name="email" id="email" required>

      <button type="submit" style="margin-top: 10px;">SUBMIT</button>
    </form>
  `);
  res.end();
}

module.exports = UserForm;
