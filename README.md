# PBO-Beleg
Ein Beleg von Saskia Mohr im Modul "Programmierung von Benutzeroberflächen".
## Beschreibung
Diese Single-Page-Application (SPA) stellt vorgegebene Prozessdaten visuell dar, um komplexe Prozesse zu verstehen und gezielt Informationen zu erhalten. Hierfür werden nur einige Daten der Prozesse verwendet. Dafür werden 3 verschiedene Ansichten zur Verfügung gestellt:

- *Ansicht 1*: **Tabellenansicht** über alle Prozesse, dabei 
    - **filterbar** nach 
        - Name (Texteingabe), 
        - Stakeholder (Multiselektion)  und
        - Typ (Multiselektion)
    - sowie **sortierbar** am Tabellenkopf nach
        - Titel,
        - Stakeholder,
        - Start- und Enddatum
        - und Status.         

        Dabei wird die Tabelle dynamisch aktualisiert. Diese Darstellung soll einen Komplettüberblick über alle Prozesse geben.
- *Ansicht 2*: **Balkendiagramm** für die Darstelung der Anzahl der Prozesse pro Stakeholder unterteilt in
    - Prozesse als Stakeholder (orange)
    - Prozesse als Teilnehmer (blau)    

    Bei Klick auf einen Balken erscheint darunter die Prozessübersicht. Links ist eine Aufzählung aller Przesse pro Stakeholder. Durch das Auswählen eines Prozesses erscheint auf der rechten Seite das Datenblatt zu den einzelnen Prozessen.

- *Ansicht 3*: **Karte** mit den 5 Orten. Bei Klick auf den Namen eines Ortes erscheint ebenfalls darunter eine Auflistung über alle Prozesse an diesem Ort. Durch das Anklicken eines Prozesses kann man genauso das Datenblatt öffnen. 


Durch Klicken des Buttons *Drucken* kann das wichtigste der aktuellen Seite gedruckt oder als PDF gespeichert werden.

### Änderungen an der process.json          
Vorraussetzung war, dass die Keys der JSON-Datei nicht verändert werden dürfen, damit man die Datei jederzeit austauschen kann. Jedoch wurden einige Werte angepasst.
- Jeder Prozess hat jetzt ein Enddatum. Dies wurde hinzugefügt, da zuerst angedacht war ein Gantt-Chart zu erstellen, jedoch wurde die Idee fallen gelassen, da die Visualisierung nicht zufriedenstellend war.
- Die PDFs aus dem Anhang-Ordner wurden einigen Prozessen zugeordnet. Da nicht ganz erkenntlich war, welche Datei zu welchen Prozessen gehört, wurde dies versucht anhand der Namen frei zuzuordnen. Um die Zuordnung zu erkennen wurde in das Array `results (optional)` ein Objekt pro zugehörigem PDF hinzugefügt und in die `description`der jeweilige Pfad zum PDF vermerkt.
- Die Werte zum Key `participation` wurden bzgl. der Anpassung an den Rest der Seite ins Deutsche übersetzt.

## Technologie / Bibliotheken

- Framework: [Angular 5](https://angular.io) durch [Angular CLI 1.6.3](https://cli.angular.io)
- CSS: [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/) (abh. von [Bootstrap 3](http://getbootstrap.com/docs/3.3/)); [Font Awesome](https://fontawesome.com)
- Plugins: 
    - [Chart.js für Angular](https://github.com/emn178/angular2-chartjs) 
    - [Multiselect für Angular](https://cuppalabs.github.io/components/multiselectDropdown/)
    - [DataTable für Angular](https://github.com/mariuszfoltak/angular2-datatable)
    - [OpenStreetMap für Angular](https://github.com/quentin-ol/ngx-openlayers)

## Ausführung
Die Anwendung wurde bereits im Produktionsmodus gebaut (`ng build --prod`) und die Daten stehen im Ordner *dist_prod* zur Verfügung. Der Inhalt dieses Ordners sollte zur Ausführung der Anwendung auf den Server kopiert werden. Getestet wurde dies mit dem Webserver Apache (XAMPP) (Ordnerinhalt in htdocs), jedoch sollte dies auch mit jedem anderen http-Server funktionieren. Nun muss nur noch die index.html geöffnet werden.

Wenn man diese Anwendung zum Entwickeln starten möchte, sollte man folgende Schritte ausführen:              (Vorraussetzung: Angular CLI mit `npm install -g @angualr/cli`)
```
git clone https://github.com/EinfachSassiM/PBO-Beleg.git
cd PBO-Beleg
npm install
ng serve
```
`http://localhost:4200/` im Browser öffnen

