  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Fehler: ${error.message}`);
      return res.status(500).send(`Fehler beim Starten der VM: ${error.message}`);
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).send(`Fehlerausgabe: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
    res.send(`VM "${vmName}" wurde erfolgreich gestartet!`);
  });
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});