# UpNext

**IM2 Projekt von Anna und James**

## Kurzbeschreibung des Projekts

**[UpNext](https://im2.jamesrichter.ch)** ist die perfekte Anlaufstelle für wahre MCU-Fans. Unser Projekt zeigt in Echtzeit, wie viele Tage, Stunden, Minuten und Sekunden noch bis zum nächsten Marvel-Film oder -Serie verbleiben. Zusätzlich werden wichtige Infos wie Release Date, Beschreibung und Veröffentlichungsart (Kino oder Disney+) übersichtlich dargestellt. So bleibt man immer bestens informiert und kann dem nächsten Abenteuer entgegenfiebern.

---

## Gruppenmitglieder

Anna Locher 24C2 (anna.locher@stud.fhgr.ch) James Richter 24C2 (james.richter@stud.fhgr.ch)

---

## Learnings und Schwierigkeiten

### James
- Einstieg ins Einbringen der API schwer, da diese schwer nachvollziehbar
- GitHub Funktionalitäten noch nicht ganz vertraut
- Komme jetzt gut mit HTML und CSS zurecht, auch ohne ChatGPT

### Anna
- JavaScript allg. immer noch etwas scary
- Workflow mit KI hat sich stark verbessert, prompten geht viel besser
- Solider Umgang mit Dev Mode in Figma
- was ist wichtig und was ist einfach nur "nice to have"

---

## Benutzte Ressourcen und Prompts
- API: https://www.freepublicapis.com/mcu-countdown
- Für das Projekt wurde ausschliesslich ChatGPT verwendet.

### Prompt aus der Planungsphase:
“Die Idee ist, dass User:innen durch die Projekte blättern können, beginnend mit demjenigen, das am zeitnähsten erscheint. Da wir die Filminfos über eine API ziehen (die jeweils unterschiedliche URLs verwendet), ist die Frage: Wie wirkt sich das auf die Verteilung unserer Seiten aus? Reicht ein One-Pager, bei der nur der Inhalt wechseln, oder sollte jedes Projekt eine eigene Seit/Unterseite bekommen?”

### Prompt bei der Arbeit am Layout der Seite:
"Wenn ich auf mobile Ansicht umschalte, sind die Pfeile nicht ganz mittig auf der Höhe des Posters ausgerichtet. Wie behebe ich das? Die Höhe des Posters in der mobilen Version ist 448 px, falls dir das hilft.

### Prompt beim Implementieren der API-Daten:
"Hab einen Fehler entdeckt: jetzt steht da nur ‘TV Show’, statt ‘SERIES – ONLY ON DISNEY+’. Habs versucht zu korrigieren, hat nicht geklappt:
    if (data.type.toLowerCase() === "Movie") {
      typeEl.textContent = "MOVIE — ONLY IN THEATRES";
    } else if (data.type.toLowerCase() === "TV Show")..."

### Neuer Chat für die Aufräumarbeiten:
"Ich arbeite an einer Website, bzw bin fertig damit. Bitte räum mir den Code etwas auf, um ihn nachvollziehbarer zu machen, (z. B. mit Kommentaren usw.). Soll ich dir alles auf einmal schicken, oder lieber erst html, dann css usw.?"