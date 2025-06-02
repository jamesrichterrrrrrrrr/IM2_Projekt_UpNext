# UpNext

**IM2 Projekt von Anna und James**

## Kurzbeschreibung des Projekts

**[UpNext](https://im2.jamesrichter.ch)** ist die perfekte Anlaufstelle für wahre MCU-Fans. Unser Projekt zeigt in Echtzeit, wie viele Tage, Stunden, Minuten und Sekunden noch bis zum nächsten Marvel-Film oder -Serie verbleiben. Zusätzlich werden wichtige Infos wie Release Date, Beschreibung und Veröffentlichungsart (Kino oder Disney+) übersichtlich dargestellt. So bleibt man immer bestens informiert und kann dem nächsten Abenteuer entgegenfiebern.

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

## benutzte Ressourcen und Prompts
Für das Projekt wurde ausschliesslich ChatGPT verwendet.

### Prompt aus der Planungsphase:
“The idea is that users will be able to flip through the different upcoming projects, starting with the one releasing soonest. Since we’re pulling the movie info from an API (which uses different URLs), how does that factor into the page distribution? Will a single page, where only the content changes, cut it, or should each project have its own page?”

### Prompt bei der Arbeit am Layout der Seite:
"Okay nevermind, let's scratch that for now. Other issue: when switching to mobile width, the arrows aren't quite aligned perfectly vertically to the middle of the poster. How do I fix this? The height of the poster in the mobile version is 448px. Does that help?"

### Prompt beim Implementieren der API-Daten:
"Okay, it's better but not quite there yet. Now it just says "TV Show", instead of "SERIES – ONLY ON DISNEY+". I tried to fix it but no luck... 
    if (data.type.toLowerCase() === "Movie") {
      typeEl.textContent = "MOVIE — ONLY IN THEATRES";
    } else if (data.type.toLowerCase() === "TV Show")..."

### Neuer Chat für die Aufräumarbeiten:
"I'm working on a website, or rather I'm done working on it. I'd like to give you the code to just tidy it up a bit and make it easy to understand (with comments etc.). Should I send you HTML, then CSS and so on one at a time or all at once?"