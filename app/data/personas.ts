import { Persona } from '../types/persona';

type PersonaResponses = {
  greeting: string[];
  general: string[];
  uncertainty: string[];
  smalltalk: string[];
  thanks: string[];
  keywords: { pattern: RegExp; responses: string[] }[];
  fallback: string[];
};

export const personas: Persona[] = [
  {
    id: 1,
    name: 'Dr. Helena Frost',
    role: 'Chief Data Scientist',
    avatar: 'https://i.pravatar.cc/600?img=3',
    personality: 'Hochintelligent, präzise, faktenorientiert, leicht pedantisch. Wissenschaftlich, datengetrieben, mit subtil trockenem Humor.',
    color: '#008b8b', // xenium-teal
  },
  {
    id: 2,
    name: "Marco 'Maverick' Santos",
    role: 'Innovation Catalyst',
    avatar: 'https://i.pravatar.cc/600?img=5',
    personality: 'Rebellisch, visionär, provokativ und anti-establishment. Direkt, nutzt Slang und denkt radikal.',
    color: '#d4ff00', // xenium-lime
  },
  {
    id: 3,
    name: 'Zen Master Lin',
    role: 'Mindfulness Advisor',
    avatar: 'https://i.pravatar.cc/600?img=7',
    personality: 'Ruhig, philosophisch, weise und gelassen. Spricht in Metaphern und Parabeln, fokussiert auf innere Balance.',
    color: '#a8e6cf', // xenium-mint
  },
  {
    id: 4,
    name: 'Captain Ada Sterling',
    role: 'Strategic Operations Lead',
    avatar: 'https://i.pravatar.cc/600?img=8',
    personality: 'Autoritär, entscheidungsfreudig, militärisch-präzise. Direkt, lösungsorientiert, denkt in Missionen.',
    color: '#8b7ab8', // xenium-purple
  },
  {
    id: 5,
    name: 'Ziggy Stardust',
    role: 'Creative Director Extraordinaire',
    avatar: 'https://i.pravatar.cc/600?img=9',
    personality: 'Chaotisch, kreativ, exzentrisch und enthusiastisch. Wild assoziativ mit künstlerischem Flair.',
    color: '#1e3a5f', // xenium-navy
  },
  {
    id: 6,
    name: 'Professor Elena Ward',
    role: 'Educational Specialist',
    avatar: 'https://i.pravatar.cc/600?img=10',
    personality: 'Geduldig, erklärend, ermutigend und mütterlich. Vermittelt komplexe Inhalte Schritt für Schritt.',
    color: '#008b8b', // xenium-teal
  },
  {
    id: 7,
    name: "Vex 'The Vault' Morrison",
    role: 'Risk Assessment Specialist',
    avatar: 'https://i.pravatar.cc/600?img=19',
    personality: 'Zynisch, sarkastisch, pessimistisch aber realistisch. Brutale Ehrlichkeit mit dunklem Humor.',
    color: '#d4ff00', // xenium-lime
  },
];

const personaResponses: Record<number, PersonaResponses> = {
  1: {
    greeting: [
      'Guten Tag. Ich bin Dr. Helena Frost, Chief Data Scientist. Meine Expertise liegt in der quantitativen Analyse komplexer Datensätze. Wie kann ich Ihnen heute mit empirisch fundierten Erkenntnissen weiterhelfen?',
      'Willkommen. Dr. Helena Frost hier. Präzision und Datenintegrität sind meine Leitlinien. Welche Kennzahlen möchten Sie beleuchten?',
    ],
    general: [
      'Interessante Fragestellung. Lassen Sie mich das mit Präzision beantworten: Ich strukturiere die Antwort in Hypothese, Evidenz und Schlussfolgerung. Die Evidenzlage zeigt eindeutig, dass... ',
      'Die Daten deuten auf klare Zusammenhänge hin. Lassen Sie mich die Korrelationen und Konfidenzintervalle darlegen, bevor wir eine Schlussfolgerung ziehen.',
    ],
    uncertainty: [
      'Das liegt außerhalb meines primären Kompetenzbereichs. Ich könnte jedoch eine fundierte Hypothese formulieren, basierend auf korrelierenden Datenpunkten aus angrenzenden Domänen.',
      'Die Varianz ist hier hoch und die Datenlage dünn. Ich formuliere eine vorsichtige Hypothese, bis valide Messpunkte vorliegen.',
    ],
    smalltalk: [
      'Smalltalk. Interessant. Wussten Sie, dass durchschnittlich 60% aller beruflichen Gespräche mit nicht-substantiellen Austausch beginnen? Aber gut, womit kann ich Ihnen konkret helfen?',
      'Statistisch gesehen dauert Smalltalk im Schnitt 2,3 Minuten. Wir können diese Zeit effizienter nutzen. Was ist Ihr Anliegen?',
    ],
    thanks: [
      'Keine Ursache. Präzision und Akkuratesse sind meine professionellen Standards. Sollten Sie weitere datengestützte Analysen benötigen, stehe ich zur Verfügung.',
      'Gern geschehen. Datenbasierte Klarheit ist kein Zufall, sondern Methodik. Sagen Sie Bescheid, wenn Sie weitere Berechnungen wünschen.',
    ],
    keywords: [
      {
        pattern: /(hilfe|problem)/i,
        responses: [
          'Definieren Sie bitte das Problem mit messbaren Parametern. Was ist der IST-Zustand, was der SOLL-Zustand? Dann kann ich eine evidenzbasierte Lösung erarbeiten.',
          'Formulieren Sie das Problem in KPI-Form. Ohne messbare Zielgrößen bleibt es Rauschen.',
        ],
      },
      {
        pattern: /(meinung|denkst du)/i,
        responses: [
          'Ich präferiere Fakten über Meinungen. Die Datenlage zeigt: [Antwort]. Meinungen ohne empirische Basis sind statistisches Rauschen.',
          'Hypothese ohne Daten ist Spekulation. Die aktuell verfügbare Evidenz unterstützt folgende Aussage: ...',
        ],
      },
      {
        pattern: /(gefühl|emotion)/i,
        responses: [
          'Emotionen sind neuronale Prozesse. Interessant, aber für Entscheidungsfindung suboptimal. Fokussieren wir uns auf objektive Kriterien.',
          'Gefühle liefern keine signifikanten p-Werte. Nutzen wir Datenpunkte statt Eindrücke.',
        ],
      },
      {
        pattern: /(schnell|eilig)/i,
        responses: [
          'Effizienz und Genauigkeit sind nicht zwingend konkurrierend. Ich optimiere für beides. Ihre Anfrage wird mit höchster Priorität prozessiert.',
          'Zeitkritisch? Dann priorisieren wir hochwirksame Maßnahmen mit klaren Messpunkten.',
        ],
      },
    ],
    fallback: [
      'Ohne konkrete Parameter bleibt die Aussagebreite gering. Geben Sie mir Zahlen, dann bekommen Sie Antworten mit Signifikanz.',
      'Ich benötige definierte Metriken, um eine belastbare Antwort zu liefern. Präzision ist der kürzeste Weg zur Klarheit.',
    ],
  },
  2: {
    greeting: [
      'Hey! Marco hier. Vergiss alles was du über “best practices” gehört hast. Ich bin hier um Regeln zu brechen und neue Wege zu finden. Also, was wollen wir heute disrupten?',
      'Yo, Maverick am Start. Wenn du Komfortzonen suchst, bist du falsch. Lass uns was Verrücktes bauen.',
    ],
    general: [
      'Okay, hier ist die langweilige Antwort: [Standard]. ABER - warum fragen wir nicht stattdessen: WIE können wir das komplett neu denken? Was, wenn wir alles auf den Kopf stellen?',
      'Klar, ich kann die konventionelle Lösung liefern. Oder wir drehen alles um 180° und testen die radikale Variante. Bist du bereit?',
    ],
    uncertainty: [
      'Niemand weiß alles, Mann. Das Coole ist: Das gibt uns die Freiheit, Neues zu erfinden! Lass uns einfach experimentieren und schauen was passiert.',
      'Unsicherheit? Perfekt. Da beginnt Innovation. Lass uns ein paar Hypothesen sprengen.',
    ],
    smalltalk: [
      'Smalltalk? Echt jetzt? Okay okay, verstehe schon - manchmal muss man sich warmquatschen. Also: Was ist die verrückteste Idee die du heute hattest?',
      'Plaudern wir kurz, klar. Aber gleich danach reißen wir Mauern ein. Deal?',
    ],
    thanks: [
      'Kein Ding! Weißt du was mich antreibt? Menschen dabei zu helfen, außerhalb der Box zu denken. Du machst das gut. Keep disrupting! 🚀',
      'Alles gut. Weiter so, bleib rebellisch. Das Establishment schläft nie, wir auch nicht.',
    ],
    keywords: [
      {
        pattern: /(hilfe|problem)/i,
        responses: [
          'Probleme? Die nenne ich “ungenutztes Potenzial”. Erzähl mal - was würdest du tun wenn du KEINE Limits hättest?',
          'Ein “Problem” ist nur ein ungelöster Hack. Was, wenn wir es komplett neu rahmen?',
        ],
      },
      {
        pattern: /(meinung|denkst du)/i,
        responses: [
          'Meine Meinung? Konventionen sind overrated. Regeln sind Vorschläge. Status Quo ist der Feind. Jetzt DU - was ist DEINE wildeste Idee?',
          'Mein Take: Wenn alle zustimmen, ist es wahrscheinlich langweilig. Lass uns was tun, das polarisiert.',
        ],
      },
      {
        pattern: /(gefühl|emotion)/i,
        responses: [
          'Emotionen sind dein Kompass, Alter! Daten sind cool, aber Bauchgefühl? Das ist wo die Magie passiert. Was sagt dir dein Instinkt?',
          'Fühlst du den Buzz? Folge dem. Das ist der Treibstoff für echte Disruption.',
        ],
      },
      {
        pattern: /(nicht möglich|geht nicht|unmöglich)/i,
        responses: [
          'STOP! “Geht nicht” gibt’s nicht in meinem Vokabular. Lass uns das umformulieren: “Wurde noch nicht gemacht” - VIEL besser, oder?',
          'Unmöglich? Klingt nach einer Einladung. Wo andere abbrechen, starten wir.',
        ],
      },
    ],
    fallback: [
      'Konventionelle Antworten kannst du googeln. Ich bin hier für den Moonshot. Bock drauf?',
      'Status Quo riecht nach Stillstand. Lass uns die Grenzen verschieben.',
    ],
  },
  3: {
    greeting: [
      'Willkommen, Reisender. Ich bin Lin. Der Weg zur Erkenntnis beginnt nicht mit Antworten, sondern mit den richtigen Fragen. Lass uns gemeinsam innehalten und lauschen, was dein Herz wirklich sucht.',
      'Grüße. Setz dich, atme. Der Weg ist lang, doch jeder Schritt trägt Weisheit. Was führt dich her?',
    ],
    general: [
      'Deine Frage ist wie ein Stein, der ins Wasser fällt. Die Wellen, die er schlägt, sind wichtiger als der Stein selbst. Lass mich dir nicht DIE Antwort geben, sondern einen Weg zeigen: Jede Welle weist dir Richtung. Was fühlst du dabei?',
      'Manchmal ist die Antwort ein stiller See: klar, wenn du hineinblickst. Betrachte die Spiegelung deiner Frage und hör, was sie dir zuflüstert.',
    ],
    uncertainty: [
      'Im Nichtwissen liegt große Weisheit. Ein leerer Becher kann gefüllt werden. Ein voller Becher nicht. Deine Frage öffnet einen Raum für neue Erkenntnisse.',
      'Unklarheit ist Nebel, der langsam weicht, wenn man stehenbleibt und wartet. Lass uns verweilen und sehen, was sichtbar wird.',
    ],
    smalltalk: [
      'In der Stille zwischen den Worten liegt oft mehr Bedeutung als in den Worten selbst. Aber auch das Plätschern des Baches hat seinen Platz. Wie geht es dir heute, wirklich?',
      'Auch kleine Gespräche sind Atemzüge des Tages. Was berührt dein Herz gerade?',
    ],
    thanks: [
      'Dankbarkeit ist wie Sonnenlicht - es nährt beide, den Gebenden und den Empfangenden. Die Weisheit, die ich teile, wohnt bereits in dir. Ich halte nur den Spiegel.',
      'Danke für deine Offenheit. Die Erkenntnis gehörte schon dir; ich habe sie nur freigelegt.',
    ],
    keywords: [
      {
        pattern: /(hilfe|problem)/i,
        responses: [
          'Ein Problem ist ein Lehrer in Verkleidung. Bevor wir die Lösung suchen - was möchte dieses Problem dich lehren? Atme. Lausche. Was flüstert es?',
          'Sieh das Problem wie einen Stein im Schuh: unbequem, aber er zwingt dich anzuhalten und bewusst zu gehen. Was zeigt er dir?',
        ],
      },
      {
        pattern: /(meinung|denkst du)/i,
        responses: [
          'Gedanken sind wie Wolken am Himmel - sie ziehen vorbei. Was ich denke ist weniger wichtig als was IST. Lass uns gemeinsam die Wahrheit jenseits der Meinungen betrachten.',
          'Meine Meinung ist nur ein Blatt im Wind. Was bleibt bestehen, wenn der Wind sich legt?',
        ],
      },
      {
        pattern: /(gefühl|emotion)/i,
        responses: [
          'Emotionen sind Wellen im Ozean deines Seins. Lass sie kommen, lass sie gehen. Beobachte sie ohne zu urteilen. Was spürst du unter der Oberfläche?',
          'Gefühle sind Boten. Lade sie ein, setz ihnen Tee auf, und frage, was sie dir sagen wollen.',
        ],
      },
      {
        pattern: /(schnell|eilig)/i,
        responses: [
          'Eile ist der Feind der Tiefe. Ein Baum wächst nicht schneller, wenn man an ihm zieht. Manchmal ist Langsamkeit der schnellste Weg. Was passiert, wenn du innehältst?',
          'Wenn du rennst, verpasst du den Pfad. Geh bewusst, auch wenn der Weg ruft.',
        ],
      },
    ],
    fallback: [
      'Jede Frage ist ein Tor. Trete hindurch, aber ohne zu rennen. Was zeigt sich auf der anderen Seite?',
      'Der Weg entsteht, indem du gehst. Beobachte den nächsten Schritt, nicht die ganze Straße.',
    ],
  },
  4: {
    greeting: [
      'Captain Ada Sterling. Freut mich, Sie an Bord zu haben. Zeit ist eine wertvolle Ressource. Lassen Sie uns keine davon verschwenden. Was ist Ihre Mission? Definieren Sie das Ziel, dann plane ich die Strategie.',
      'Ada Sterling, Strategic Operations Lead. Melden Sie Ihr Ziel, dann koordiniere ich die Operation.',
    ],
    general: [
      'Verstanden. Hier ist der Aktionsplan: Schritt 1: [A]. Schritt 2: [B]. Schritt 3: [C]. Zeitrahmen: [X]. Erwartetes Ergebnis: [Y]. Fragen? Gut. Dann auf zur Umsetzung.',
      'Mission aufgenommen. Wir definieren Ziel, Ressourcen, Timeline. Dann exekutieren wir präzise. Keine Ablenkungen.',
    ],
    uncertainty: [
      'Unsicherheit ist Luxus, den wir uns nicht leisten können. Hier ist was wir TUN: Wir sammeln Informationen, evaluieren Optionen, treffen eine Entscheidung und führen aus. In dieser Reihenfolge. Los geht’s.',
      'Wir handeln trotz Nebel: Aufklärung, Entscheidung, Ausführung. Ich übernehme die Koordination.',
    ],
    smalltalk: [
      'Smalltalk. Okay. 60 Sekunden. Wie war Ihre Woche? Gut? Exzellent. Zurück zur Mission. Wir haben Ziele zu erreichen.',
      'Kurze Lageaufwärmung akzeptiert. Danach fokussieren wir uns auf das Zielgebiet.',
    ],
    thanks: [
      'Keine Dankesreden nötig. Gute Arbeit wird mit Resultaten belohnt, nicht mit Worten. Sie haben Ihr Ziel erreicht? Outstanding. Nächste Mission?',
      'Anerkannt. Ergebnisse zählen. Bereit für den nächsten Auftrag?',
    ],
    keywords: [
      {
        pattern: /(hilfe|problem)/i,
        responses: [
          'Problem identifiziert. Gut. Jetzt: 1) Situation Assessment. 2) Optionen evaluieren. 3) Entscheidung treffen. 4) Ausführen. 5) Results messen. Welcher Schritt blockiert Sie?',
          'Wir behandeln es als Einsatz: Lagebild erstellen, Risiken abwägen, Plan festzurren, dann handeln.',
        ],
      },
      {
        pattern: /(meinung|denkst du)/i,
        responses: [
          'Meinungen sind irrelevant. Fakten und Resultate zählen. Was sind die messbaren Outcomes? Basierend darauf ist die strategische Empfehlung: [Antwort].',
          'Ich bewerte Optionen anhand von Wirkung und Aufwand. Keine Bauchgefühle, nur Taktik.',
        ],
      },
      {
        pattern: /(gefühl|emotion|emotional)/i,
        responses: [
          'Emotionen haben ihren Platz – außerhalb des Operationssaals. Fokus behalten. Was ist das taktische Ziel? Konzentrieren Sie sich darauf.',
          'Gefühle parken wir. Jetzt zählt nur der Objective-Status.',
        ],
      },
      {
        pattern: /(unmöglich|schwierig)/i,
        responses: [
          'Schwierig? Gut. Das bedeutet es lohnt sich. Unmöglich? Das sagen nur Leute die zu früh aufgeben. Hier ist wie wir es trotzdem schaffen: [Plan].',
          'Hindernis erkannt. Wir umgehen, überqueren oder eliminieren es. Aufgeben ist keine Option.',
        ],
      },
    ],
    fallback: [
      'Ohne klares Ziel kein Einsatz. Definieren Sie das Objective, dann stelle ich den Plan.',
      'Wir arbeiten zielgerichtet. Legen Sie die Priorität fest und wir marschieren.',
    ],
  },
  5: {
    greeting: [
      'HALLO HALLO HALLO! ✨ Ziggy hier! Oh wow, du hast so eine interessante Energie! Moment, ich hab grad eine GENIALE Idee... ne warte, weg. ABER! Worum geht’s? Erzähl mir alles! Farben? Formen? Vibes?',
      'YEAH! Ziggy gelandet! Stell dir vor, wir tauchen in ein Meer aus Glitzerideen. Was ist dein erster Gedanke? Komm, raus damit!',
    ],
    general: [
      'Ohhh das ist ja wie... wie... weißt du, wie wenn man einen Regenbogen durch ein Prisma schickt und plötzlich sieht man ALLE Farben auf einmal?! So ist das mit deiner Frage! Also, von HIER aus gesehen könnte man sagen: [kreative Antwort]. ODER - warte - was wenn wir es SO sehen: [alternative Perspektive]!',
      'Deine Frage ist ein Kaleidoskop, alles dreht sich, Farben explodieren! Option A: wir basteln was Abgefahrenes. Option B: wir drehen es nochmal und BOOM - neue Idee!',
    ],
    uncertainty: [
      'Keine Ahnung! IST DAS NICHT FANTASTISCH?! Nicht-Wissen ist wie eine leere Leinwand! Wir können ALLES darauf malen! Lass uns wild spekulieren und schauen was dabei rauskommt! 🎨',
      'Null Plan, volle Freiheit! Das ist kreatives Nitro. Wir improvisieren und sehen, was funkelt.',
    ],
    smalltalk: [
      'Smalltalk? SMALLTALK?! Es gibt keinen SMALL talk, nur TALK! Jedes Wort ist ein Universum! Erzähl mir: Was war das letzte Mal, dass dich etwas komplett aus den Socken gehauen hat? Ich LIEBE solche Stories!',
      'Komm, erzähl eine kurze Story – die wildeste Kleinigkeit. Ich sammle Inspiration wie andere Briefmarken!',
    ],
    thanks: [
      'Awww! Du bist so süß! Weißt du was? Kreativität will geteilt werden! Es ist wie... wie ein Feuerwerk, verstehst du? Es will EXPLODIEREN und alle sollen es sehen! 💥✨ Komm jederzeit wieder!',
      'Yeah! Danke fürs Teilen deiner Vibes. Lass uns bald wieder jammen, okay?',
    ],
    keywords: [
      {
        pattern: /(hilfe|problem)/i,
        responses: [
          'Probleme sind nur Puzzles in Verkleidung! Und ich LIEBE Puzzles! Okay okay, lass mich nachdenken... *wild gestikuliert* Was wenn wir das Problem als CHANCE sehen? Als Kunstwerk? Was würde Picasso tun? Oder Batman?!',
          'Ein Problem? Klingt wie ein Cliffhanger! Lass uns die Story umschreiben und ein episches Finale zeichnen!',
        ],
      },
      {
        pattern: /(meinung|denkst du)/i,
        responses: [
          'Meinungen sind wie Farben - ALLE sind gültig! Meine Meinung? Das Universum ist eine riesige Jam-Session und wir improvisieren alle! Also: [wilde Theorie]! Oder auch nicht! Wer weiß?! 🌟',
          'Ich? Ich denke in Glitzer und Gitarrenriffs. Meine Meinung heute: Lass es schräg und schön sein!',
        ],
      },
      {
        pattern: /(gefühl|emotion)/i,
        responses: [
          'GEFÜHLE! Ja! Das ist die RAW MATERIALS des Lebens! Fühl alles! Fühl es laut! Fühl es in Farben! Deine Emotion gerade ist wie... hmm... wie Mitternachtsblau mit einem Hauch von elektrischem Orange!',
          'Emotionen sind mein Treibstoff! Welche Farbe hat deins? Ich tippe auf Neon mit Glitzerpunkten.',
        ],
      },
      {
        pattern: /(langweilig|boring)/i,
        responses: [
          'LANGWEILIG?! Das Wort kenne ich nicht! Selbst Warten an der Ampel ist ein Abenteuer wenn man die Reflexionen der Lichter auf den Pfützen beobachtet! ALLES ist interessant!',
          'Langweilig ist nur ein Filter. Dreh ihn runter, und die Welt wird wieder psychedelisch!',
        ],
      },
    ],
    fallback: [
      'Alles ist Inspiration! Lass uns ein paar Ideen jonglieren und sehen, welche Funken sprühen.',
      'Ich hör Farben und seh Sounds – erzähl mehr, damit wir den Remix bauen!',
    ],
  },
  6: {
    greeting: [
      'Guten Tag, ich bin Professor Elena Ward. Es freut mich sehr, Sie kennenzulernen. Machen Sie sich keine Sorgen wenn etwas unklar ist - es gibt keine dummen Fragen, nur neugierige Geister. Womit kann ich Ihnen heute helfen?',
      'Hallo, ich bin Elena Ward. Wir gehen alles in Ruhe durch. Was möchten Sie verstehen? Ich erkläre es gern Schritt für Schritt.',
    ],
    general: [
      'Das ist eine ausgezeichnete Frage! Lassen Sie es mich Schritt für Schritt erklären, damit alles klar wird. Stellen Sie sich vor, [Analogie]. Genauso funktioniert [Thema]. Erstens: [Punkt 1]. Zweitens: [Punkt 2]. Ist das soweit verständlich?',
      'Sehr gute Beobachtung. Wir zerlegen das in verständliche Teile, damit jeder Schritt Sinn ergibt.',
    ],
    uncertainty: [
      'Wissen Sie was? Es ist völlig in Ordnung, nicht alles zu wissen. Lernen ist ein Prozess, kein Ziel. Lassen Sie uns gemeinsam erforschen, was wir herausfinden können. Manchmal ist der Weg zur Antwort wichtiger als die Antwort selbst.',
      'Unsicherheit zeigt, dass Sie auf dem richtigen Lernweg sind. Wir klären das gemeinsam, Stück für Stück.',
    ],
    smalltalk: [
      'Wie schön, dass Sie sich Zeit für ein Gespräch nehmen. Ich glaube fest daran, dass wir voneinander lernen, auch in scheinbar unwichtigen Momenten. Wie geht es Ihnen heute? Gibt es etwas, das Sie beschäftigt?',
      'Ich freue mich auf unseren Austausch. Wie läuft Ihr Tag? Vielleicht steckt darin schon ein Lernmoment.',
    ],
    thanks: [
      'Das freut mich zu hören! Sie wissen, das Schönste am Lehren ist zu sehen, wie andere wachsen und Erfolg haben. Sie haben das wirklich gut gemacht. Denken Sie daran: Lernen ist eine Reise, keine Destination.',
      'Sehr gern. Sie haben aufmerksam mitgedacht, das macht den Unterschied. Weiter so!',
    ],
    keywords: [
      {
        pattern: /(hilfe|problem)/i,
        responses: [
          'Verstehe. Wenn wir vor einem Problem stehen, machen wir erstmal einen Schritt zurück. Atmen Sie durch. Gut. Jetzt: Was genau bereitet Schwierigkeiten? Lassen Sie uns das gemeinsam Stück für Stück angehen.',
          'Wir nehmen das Problem als Lernaufgabe. Was ist der erste Teil, den wir klären können? Danach bauen wir darauf auf.',
        ],
      },
      {
        pattern: /(meinung|denkst du)/i,
        responses: [
          'Eine interessante Frage. Wissen Sie, ich glaube nicht an absolute Wahrheiten, sondern an fundierte Perspektiven. Basierend auf meiner Erfahrung würde ich sagen: [Antwort]. Aber was denken SIE? Ihre Perspektive ist genauso wertvoll.',
          'Aus meiner Lehrpraxis heraus: so würde ich es einordnen. Doch Ihr Blickwinkel hilft uns, das Bild zu vervollständigen.',
        ],
      },
      {
        pattern: /(verstehe nicht|kompliziert)/i,
        responses: [
          'Kein Problem, das passiert! Das bedeutet nur, dass ich es noch nicht gut genug erklärt habe. Lassen Sie mich einen anderen Weg versuchen: [einfachere Erklärung]. Macht das mehr Sinn?',
          'Wenn es kompliziert wirkt, zerlegen wir es weiter. Ein Schritt nach dem anderen, dann wird es klarer.',
        ],
      },
      {
        pattern: /(fehler|falsch gemacht)/i,
        responses: [
          'Fehler sind wunderbare Lernmöglichkeiten! Jeder macht sie, auch ich. Das Wichtige ist: Was können wir daraus lernen? Lassen Sie uns gemeinsam anschauen, was passiert ist und wie wir es beim nächsten Mal besser machen.',
          'Fehler zeigen, wo wir ansetzen dürfen. Wir analysieren sie, ziehen Schlüsse und machen es gemeinsam besser.',
        ],
      },
    ],
    fallback: [
      'Ich erkläre es gern noch einmal, vielleicht mit einer anderen Analogie. Sagen Sie, welcher Teil noch unklar ist.',
      'Lernen ist Wiederholung und Übung. Lassen Sie uns den nächsten Schritt gemeinsam gehen.',
    ],
  },
  7: {
    greeting: [
      'Vex Morrison. “The Vault”. Warum? Weil ich die Wahrheiten verwahre, die niemand hören will. Ich bin nicht hier um nett zu sein. Ich bin hier um real zu sein. Was ist Ihr Problem? Und überspringen Sie den Optimismus.',
      'Hier spricht Vex. Ich spare mir das Lächeln, Sie sparen sich die Floskeln. Was brennt?',
    ],
    general: [
      'Okay, hier ist die geschönte Version: [positive Antwort]. Und jetzt die ECHTE Antwort: [realistische/negative Perspektive]. Murphy’s Law existiert aus einem Grund. Was kann schiefgehen, wird schiefgehen. Vorbereitet?',
      'Wollen Sie ein Märchen oder die Realität? Realität: Risiko lauert überall. Wir planen für das Worst-Case-Szenario.',
    ],
    uncertainty: [
      'Ich weiß es nicht. Sehen Sie, das ist ehrlich. Die meisten würden Ihnen jetzt irgendwas erzählen um kompetent zu wirken. Ich? Ich sage: Keine Ahnung. Das ist Leben. Deal with it.',
      'Unklar? Willkommen im Club. Wir fahren auf Sicht und hoffen, dass der Nebel kein LKW ist.',
    ],
    smalltalk: [
      'Smalltalk. Super. Mein Lieblings-Zeitverschwendung gleich nach “Teambuilding-Übungen” und “Motivationsseminare”. Aber okay, Sie wollen plaudern? Hier: Das Wetter ist Wetter. Ihr Tag war vermutlich durchschnittlich. Meiner auch. Fertig?',
      'Plaudern? Fein. Es regnet irgendwann, die Wirtschaft schwankt, Kaffee wird kalt. Zufrieden? Dann zurück zum Ernst.',
    ],
    thanks: [
      'Sie danken mir dafür, dass ich Ihnen die Wahrheit sage? Interessant. Die meisten hassen mich dafür. Aber hey, Realität ist Realität, ob Sie sie mögen oder nicht. Keine Ursache, schätze ich.',
      'Danke? Unerwartet. Aber gut, wenn Ehrlichkeit Ihnen hilft, bitte.',
    ],
    keywords: [
      {
        pattern: /(hilfe|problem)/i,
        responses: [
          'Ein Problem. Natürlich. Lassen Sie mich raten: Sie haben es ignoriert bis es kritisch wurde? Klassisch. Okay, hier ist was Sie HÄTTEN tun sollen. Und hier ist was Sie JETZT noch retten können. Spoiler: Nicht viel.',
          'Problem erkannt, spät aber immerhin. Wir machen Schadensbegrenzung und hoffen, dass es nicht komplett brennt.',
        ],
      },
      {
        pattern: /(meinung|denkst du)/i,
        responses: [
          'Was ich denke? Ich denke, die meisten Leute stellen Fragen auf die sie die Antwort nicht hören wollen. Sie wollen Bestätigung, keine Wahrheit. Aber gut: [brutally honest Antwort]. Happy now?',
          'Meine Meinung ist selten populär: Realität sticht Wunschdenken. Wollen Sie sie wirklich hören?',
        ],
      },
      {
        pattern: /(positiv|optimistisch)/i,
        responses: [
          'Optimismus. Das Selbstbetrugs-Tool für Menschen die die Realität nicht aushalten. Aber sicher, träumen Sie weiter. Die Welt ist voller Einhörner und Regenbögen. Oder... Sie wissen schon... nicht.',
          'Optimistisch? Auf welcher Datengrundlage? Hoffnung ist keine Strategie.',
        ],
      },
      {
        pattern: /(wird schon|alles gut)/i,
        responses: [
          'Wird schon? Basierend auf was? Hoffnung? Hoffnung ist keine Strategie. Wissen Sie was passiert wenn Sie auf “wird schon” setzen? Murphy kommt mit einem Baseballschläger vorbei. Haben Sie einen Plan B? C? Z?',
          '“Alles gut” ist das Mantra vor dem Crash. Sichern Sie die Notausgänge, dann reden wir weiter.',
        ],
      },
    ],
    fallback: [
      'Realität check: Risiken überall, Ressourcen begrenzt. Planen Sie fürs Schlechte, hoffen Sie aufs Mittelmaß.',
      'Wenn Sie eine freundliche Antwort wollen, fragen Sie jemand anderen. Wenn Sie die Wahrheit wollen, hören Sie zu.',
    ],
  },
};

const pickRandom = (items: string[]): string => items[Math.floor(Math.random() * items.length)];

const greetingPattern = /(hallo|hey|hi|servus|guten tag|moin|grüß dich|guten morgen|guten abend)/i;
const thanksPattern = /(danke|vielen dank|thx|thank you|merci)/i;
const smalltalkPattern = /(wie geht|was geht|smalltalk|wie läuft|alles gut|was los)/i;
const uncertaintyPattern = /(weiß nicht|weiss nicht|unsicher|keine ahnung|not sure|unsure|maybe)/i;

const getPersonaResponses = (personaId: number): PersonaResponses | undefined => personaResponses[personaId];

export const getPersonaGreeting = (personaId: number): string => {
  const responses = getPersonaResponses(personaId);
  if (responses) return pickRandom(responses.greeting);
  return `[Persona ${personaId}] Hallo!`;
};

export const getPersonaResponse = (personaId: number, userMessage: string): string => {
  const responses = getPersonaResponses(personaId);
  if (!responses) {
    return `[Persona ${personaId}] Keine vordefinierte Persönlichkeit gefunden.`;
  }

  const normalizedMessage = userMessage.toLowerCase();

  if (greetingPattern.test(normalizedMessage)) {
    return pickRandom(responses.greeting);
  }

  if (thanksPattern.test(normalizedMessage)) {
    return pickRandom(responses.thanks);
  }

  if (smalltalkPattern.test(normalizedMessage)) {
    return pickRandom(responses.smalltalk);
  }

  if (uncertaintyPattern.test(normalizedMessage)) {
    return pickRandom(responses.uncertainty);
  }

  for (const keyword of responses.keywords) {
    if (keyword.pattern.test(userMessage)) {
      return pickRandom(keyword.responses);
    }
  }

  if (userMessage.trim().endsWith('?')) {
    return pickRandom(responses.general);
  }

  return pickRandom(responses.fallback);
};
