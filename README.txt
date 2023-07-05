Der server.js und script.js Dateien haben unterschiedliche Verantwortlichkeiten:

server.js:

Diese Datei enthält den Backend-Code.
Sie ist für die Erstellung und Konfiguration des Backend-Servers zuständig.
Hier werden die Routen definiert und die Logik für die Verarbeitung von HTTP-Anfragen und -Antworten implementiert.
In unserem Beispiel verwendet server.js das Express-Framework, um den Server zu erstellen und die erforderlichen Middleware und Routen zu konfigurieren.
script.js:

Diese Datei enthält den Frontend-Code.
Sie ist für die Interaktion mit dem Benutzerinterface im Browser verantwortlich.
Hier werden Funktionen definiert, die auf Benutzerinteraktionen reagieren, z. B. das Klicken auf einen Button.
In unserem Beispiel enthält script.js die getDataFromBackend()-Funktion, die aufgerufen wird, wenn der "Daten vom Backend abrufen"-Button geklickt wird.
script.js verwendet die fetch()-Funktion, um eine Anfrage an den Backend-Server zu senden und die Antwort zu verarbeiten.
Die Funktion getDataFromBackend() wird also im Frontend-Code verwendet, um die Kommunikation mit dem Backend zu ermöglichen und die empfangenen Daten im Benutzerinterface anzuzeigen.
Insgesamt handelt es sich bei server.js um den Backend-Code, der die Logik für die Server- und Routenkonfiguration enthält. Die script.js-Datei hingegen ist Teil des Frontends und enthält 
den JavaScript-Code, der auf Benutzerinteraktionen reagiert und die Kommunikation mit dem Backend ermöglicht. Die Logik für die Verarbeitung von Anfragen und die Generierung von Antworten ^
liegt jedoch hauptsächlich im Backend-Code (server.js), während script.js die Kommunikation zwischen Frontend und Backend orchestriert.