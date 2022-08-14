---
marp: true
theme: gaia
class: 
- lead
- invert
paginate: true
header: Japanologentag 2022, Sektion Information- und Ressourcenwissenschaften
footer: ![](https://i.creativecommons.org/l/by/4.0/88x31.png) Nobutake Kamiya

---

# Twitter-Daten sammeln und mit Elasticsearch analysieren
Nobutake Kamiya (Universität Zürich, Universitätsbibliothek)

---

# Was ich hier anbiete:
- Wie Twitter-Daten gesammelt werden (Python)
- Einführung der Tools zur Datenanalyse (Elasticsearch)
- Denkanstoß zur Handhabung der Daten / Datenmanagement

---

# [Hier](http://localhost:5601) geht's zum Ziel
Der Link führt zu meinem lokalen Server. Deshalb funktioniert er nur von meinem PC...

---

# Was ich hier **NICHT** anbiete:
- Eine wissenschaftliche Erkenntnis
- Eine fachspezifische Forschungsmethode

---

# Tweets sammeln

---

## Tweets sammeln: Methode
- Twitter API v2 - Academic Research
- Python

---

## Übersicht [Twitter API](https://developer.twitter.com/en/docs/twitter-api)
|Essential              | Elevated              | Academic Research                         |
|-----------------------|-----------------------|-------------------------------------------|
|500'000 tweets / Monat | 2 Mio. Tweets / Monat | 10 Mio. Tweets / Monat                    |
|Full-Archive-Suche nicht möglich | Full-Archive-Suche nicht möglich  | Full-Archive-Suche und Full-Archive-Count |
|      xx               |        xx             | Advanced search operator                  |

 

---

## Python
Die gesamten Codes sind [hier](https://github.com/NbtKmy/analyze_tweets/blob/main/searchTweets.py) zu finden.


---

## Python: Query 1
Datum und Uhrzeit Japanischer Zeit auf UTC (koordinierte Weltzeit)
```Python
jst_st = datetime.datetime(2021, 3, 1, 0, 0, 0, 0, datetime.timezone(timedelta(hours=+9)))
jst_et = datetime.datetime(2021, 4, 1, 0, 0, 0, 0, datetime.timezone(timedelta(hours=+9)))

utc_st = jst_st.astimezone(timezone.utc)
utc_st = utc_st.isoformat()
utc_et = jst_et.astimezone(timezone.utc)
utc_et = utc_et.isoformat()
```

---
## Python: Query 2
Suchbedingungen
```Python
query_params = {'query': '(オリンピック lang:ja -is:retweet) OR (五輪 lang:ja -is:retweet)',
                    'tweet.fields': 'created_at,id,text,public_metrics',
                    'start_time': utc_st,
                    'end_time': utc_et,
                    'max_results': 500}
```
Weitere Regeln siehe [hier](https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/integrate/build-a-rule#order-of-operations)

---
## Python: Data cleaning

![bg 70% right](./img/olympicSample.png)
Beispiel: [Ein Tweet des IOCs (japanisch)](https://twitter.com/gorin/status/1554965339787579392)

---

## Python: Data cleaning
```Python
# User-Name (Erwähungen), URL, Hash-tags und Zeilenumbrüche aus dem Tweets entfernen
    tw_text = re.sub(r'@\w+','', ['text'])
    tw_text = re.sub(r'(http|https)://[0-9a-zA-Z\./]+','', tw_text)
    tw_text = re.sub(r'#.+?(\s|$)', '', tw_text)
    tw_text = re.sub(r'\n','', tw_text)
# Kana soll immer in Fullwidth-Zeichen dargestellt werden
    tw_text = mojimoji.han_to_zen(tw_text, kana=True, digit=False, ascii=False)
# Digit und Ascii sollen immer in Halfwidth-Zeichen dargestellt werden
    tw_text = mojimoji.zen_to_han(tw_text, kana=False, digit=True, ascii=True)
```

---

## Besonderheiten von der Twitter-Daten
- "Academic researchers are permitted to distribute an unlimited number of Tweet IDs and/or User IDs [...]", aber mehr nicht [Developer terms (unter "content redistribution")](https://developer.twitter.com/en/developer-terms/policy)
- Tweets können gelöscht/geändert werden!

---

## Tweets sammeln - Zusammenfassung
- Nutzungsbedingen der Daten kennenlernen!
- Codes für Query und Data cleaning publizieren
- Datum der Ausführung dokumentieren

---

# [Elasticsearch (ES)](https://www.elastic.co/)

---

## Was ist Elasticsearch?
- Eine Suchmachine basierend auf Lucene
- Nutzung der Standarddistribution ist kostenlos
- Auch in [次世代デジタルライブラリー](https://github.com/ndl-lab/tugidigi-web) von der NDL genutzt
  

---

## Plugins für Japanisch
- [Kuromoji](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html)
- [ICU (International Components for Unicode)](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html)
- [Sudachi (die neueste Version für ES 5.6?)](https://github.com/WorksApplications/elasticsearch-sudachi) 

In diesem Beispiel werden **Kuromoji** und **ICU** für Analyzer verwendet

---

## Einstellung des Analyzers
- Konfiguration kann in JSON-Format geschrieben werden
- Char_filter (Normalisierung der Schriftzeichen, fakultativ)
- Tokenizer (Worttrennung [z.B. N-gram], notwendig, nur ein Tokenizer anwendbar)
- Token_filter (Wörter [z.B. Stopwörter] werden nach bestimmten Regeln gefiltert, fakultativ)


---

## Einstellung mit dem Beispielsatz

"そのオリンピック選手は身長１９６㌢という長身だった。人々はおどろいた。二〇〇〇人がオリンピックを観戦しながらコンピューターをつかっていた"


---

## Char_filter - Einstellung

```JSON
{
    "settings": {
        "analysis": {
            "analyzer": {
                "my_kuromoji_analyzer": {
                    "type": "custom",
                    "char_filter" : ["icu_normalizer", "kuromoji_iteration_mark"],
                    "tokenizer": "keyword"
                }
            }
        }
    }
}
```
Der "Keyword"-Tokenizer gibt den Satz so zurück (s. [hier](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-keyword-tokenizer.html))


---

## Ergebnis

そのオリンピック選手は身長**196センチ**という長身だった。**人人**はおどろいた。二〇〇〇人がオリンピックを観戦しながらコンピューターをつかっていた

---

## Tokenizer-Einstellung

```JSON
{
    "settings": {
        "analysis": {
            "analyzer": {
                "my_kuromoji_analyzer": {
                    "type": "custom",
                    "char_filter" : ["icu_normalizer", "kuromoji_iteration_mark"],
                    "tokenizer": "kuromoji_tokenizer"
                }
            }
        }
    }
}
```

---

## Ergebnis

[Ergebnis in JSON-Format](https://github.com/NbtKmy/analyze_tweets/blob/main/analyzer/test_result2.json)

---

## Token_filter-Einstellung 1

```JSON
[...]
 "filter": ["kuromoji_baseform", "kuromoji_part_of_speech", "kuromoji_stemmer", "ja_stop", "kuromoji_number", "synonym_filter"]
                }
            },
            "filter": {
                "synonym_filter": {
                    "type": "synonym",
                    "synonyms": ["オリンピック,五輪"]
                }
            }
        }
    }
}
```

---

## Token_filter-Einstellung 2

Einige Token_filter von Kuromoji werden verwendet

- kuromoji_baseform
- kuromoji_part_of_speech

Zusätzlich wird der "synonym_filter" eingesetzt.
- "オリンピック" und "五輪"

---

## Ergebnis

[Hier](https://github.com/NbtKmy/analyze_tweets/blob/main/analyzer/test_result3.json)

---

## Die endgültige Einstellung 

...Falls man sich dafür interessiert... [Hier](https://github.com/NbtKmy/analyze_tweets/blob/main/analyzer/my_kuromoji_analyzer4.json)

---

## Elasticserach - Zusammenfassung

- Mit ES können die große Datenmengen behandeln und analysieren werden
  - Mit API können die Daten weiter verarbeitet werden, z.B. für Netzwerkanalyse
  - [Kibana](https://www.elastic.co/de/kibana/) (ein Plugin von ES) erlaubt eine einfache GUI-Verarbeitung
- Die Konfiguration sollte bekannt gemacht werden

---

# Denkanstoß - 1
- Bearbeitung großer Mengen von japanischen Texten ist durchaus möglich
- Für die wissenschaftlichen Kommunikation ist die Nachvollziehbarkeit wichtig
- Open-Data-Gedanken werden sehr wichtig 

---

# Denkanstoß - 2
- Falls die Rohdaten nicht publiziert werden können, sollten mindestens die Codes für Datensammlung und Verarbeitung publiziert werden
- Für Bibliothekare ist es interessant, Information über anwendbaren Datenquellen und deren Nutzungsbedingungen zu wissen/vermitteln

---

# Vielen Dank!












