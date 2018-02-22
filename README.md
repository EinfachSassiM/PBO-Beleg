# PboBeleg
Ein Beleg von Saskia Mohr im Modul "Programmierung von Benutzeroberflächen".
## Beschreibung
Diese Single-Page-Application (SPA)... (siehe Aufgabenstellung).
- 3 Verschieden Ansichten:
    - Ansicht 1: **Tabellenansicht** über alle Prozesse, dabei 
        - **filterbar** nach 
            - Name (Texteingabe), 
            - Stakeholder (Multiselektion)  und
            - Typ (Multiselektion)
        - sowie **sortierbar** am Tabellenkopf nach
            - Titel,
            - Stakeholder,
            - Start- und Enddatum,
            - Status,
            - Typ und
            - Entscheidung.         

            Dabei wird die Tabelle dynamisch aktualisiert. Diese Darstellung soll einen Komplettüberblick über alle Prozesse geben.
    - Ansicht 2: **Balkendiagramm** für die Darstelung der Anzahl der Prozesse pro Stakeholder unterteilt in
        - Prozesse als Stakeholder (orange)
        - Prozesse als Teilnehmer (blau)    

        Bei Klick auf einen Balken erscheint darunter links eine Aufzählung aller Przesse pro Stakeholder. Durch das Auswählen eines Prozesses erscheint auf der rechten Seite das Datenblatt zu den einzelnen Prozessen.

    - Ansicht 3: **Karte** mit den 5 Orten. Bei Klick auf den Namen eines Ortes erscheint ebenfalls darunter eine Auflistung über alle Prozesse an diesem Ort. Durch das Anklicken eines Prozesses kann man genauso das Datenblatt öffnen. 

## Technologie / Bibliotheken

- Framework: [Angular 5](https://angular.io) durch [Angular CLI 1.6.3](https://cli.angular.io)
- CSS: [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/) (abh. von [Bootstrap 3](http://getbootstrap.com/docs/3.3/))
- Plugins: 
    - [Chart.js für Angular](https://github.com/emn178/angular2-chartjs) 
    - [Multiselect für Angular](https://cuppalabs.github.io/components/multiselectDropdown/)
    - [DataTable für Angular](https://github.com/mariuszfoltak/angular2-datatable)
    - [OpenStreetMap für Angular](https://github.com/quentin-ol/ngx-openlayers)

## Ausführung

__________________________________________________________

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
