# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list

| action | screenshot                               |
| ------ | ---------------------------------------- |
| list   | [screenshot](http://prntscr.com/1losdhr) |

# Получаем контакт по id

node index.js --action get --id 5

| action | screenshot                               |
| ------ | ---------------------------------------- |
| get    | [screenshot](http://prntscr.com/1loso7g) |

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

| action | screenshot                               |
| ------ | ---------------------------------------- |
| add    | [screenshot](http://prntscr.com/1losvta) |

# Удаляем контакт

node index.js --action remove --id=3

| action | screenshot                               |
| ------ | ---------------------------------------- |
| remove | [screenshot](http://prntscr.com/1lot16v) |
