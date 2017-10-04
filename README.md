<img src="http://assets.angular.schule/logo-angular-tages-workshop.png"><img src="https://user-images.githubusercontent.com/640639/30457200-ca45e9f0-99a6-11e7-9930-ddfe4cf53b93.png" align="right" height="60">

<br>

#### **von Ferdinand Malcher**

<hr>

**Schön, dass Du dabei bist!**  
Merke dir schon einmal dieses Repository.
Hier wird während des Workshops stets der Quelltext unserer Beispielanwendung verfügbar sein.
> **[https://github.com/<wbr>angular-schule/2017-10-09-angular-workshop-wdc](https://github.com/angular-schule/2017-10-09-angular-workshop-wdc)**

Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen.
Die gesamte Installation wird rund 15 Minuten dauern. 


## Benötigte Software

1. Node.js **8.4** oder höher: [https://nodejs.org](https://nodejs.org)
2. Visual Studio Code **1.16** oder höher: [https://code.visualstudio.com](https://code.visualstudio.com)
   * [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack) für Visual Studio Code 
3. Google Chrome: [https://www.google.com/chrome/](https://www.google.com/chrome/)
4. Optional, Chrome Extension: [Angular Augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd)
   

## Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die CLI installieren:

```
npm install -g @angular/cli@1.4.4
```

Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind.
```
node -v
> Erwartet: v8.4.x oder höher

npm -v
> Erwartet: 5.x oder höher

ng -v
> Erwartet: 1.4.4

```

## Startprojekt erzeugen

Bitte lege das Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Was die Parameter im Einzelnen bedeuten, besprechen wir natürlich im Workshop!

Führe in Deinem Arbeitsverzeichnis die folgenden Befehle aus:

```
ng new book-rating --routing --style=scss --prefix=br
cd book-rating
ng serve -o
```

Achtung! Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages for tooling via npm.` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text "Welcome to br" erscheinen!
Wenn bei allen Teilnehmern das Grundgerüst steht, können wir ohne Zeitverlust loslegen.

![Screenshot CLI](http://assets.angular.schule/chrome_cli_welcome.png)


### Ich freue mich schon! 🙂

Bei Fragen wende dich einfach direkt an das Angular-Schule-Team:  
[team@angular.schule](mailto:team@angular.schule)

<hr>

<img src="http://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; 2017 http://angular.schule, Stand: 02.10.2017


