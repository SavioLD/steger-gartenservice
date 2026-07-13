# Andreas Steger – Forst- und Gartenservice GmbH

Moderne, statische Demo-Website (Redesign) für die Andreas Steger Forst- und
Gartenservice GmbH aus Mössingen. Reines HTML/CSS/JS ohne Build-Schritt –
optimiert für schnelles Hosting via GitHub Pages.

## Seiten

| Seite | Datei | Inhalt |
|-------|-------|--------|
| Home | `index.html` | Hero, Über uns, Fuhrpark, Leistungsübersicht, Referenzen |
| Leistungen | `leistungen.html` | Baumarbeiten, Baumpflege, Rodung, Mulchen, Wurzelstockentfernung, Garten-/Landschaftspflege & -bau |
| Jobs | `jobs.html` | Stellen + Bewerbungsformular |
| Kontakt | `kontakt.html` | Kontaktformular + Kontaktdaten |
| Impressum | `impressum.html` | Impressum & Datenschutz |

## Technik

- **Kein Framework, keine Build-Tools** – einfach die HTML-Dateien öffnen.
- `assets/css/style.css` – Design-System (Farben, Typografie, Komponenten).
- `assets/js/main.js` – Navigation, Scroll-Animationen, Demo-Formulare.
- `assets/img/` – SVG-Logo/Signet und Favicon.
- Responsive, barrierearm, mit dezenten Reveal-Animationen (respektiert
  `prefers-reduced-motion`).

## Hinweise für den Produktiveinsatz

- **Fotos:** Die Bildflächen sind aktuell als gestaltete Platzhalter angelegt
  (Kachel mit Verlauf, Icon und „Foto“-Markierung). Für die Live-Seite werden
  hier die echten Steger-Fotos eingesetzt.
- **Formulare:** Kontakt- und Bewerbungsformular sind Demos ohne Backend
  (keine Datenübermittlung). Für den Livebetrieb einen Formular-Dienst bzw.
  Server-Endpoint anbinden.
- **Rechtstexte:** Impressum/Datenschutz sind Platzhalter und vor
  Veröffentlichung rechtlich zu prüfen.
- **Instagram-Link** im Referenzen-Bereich auf das echte Profil setzen.

## Lokal ansehen

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```
