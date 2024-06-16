# Instrukcja uruchamiania aplikacji React oraz backendu z bazą danych

## Wymagania

1. Zainstalowany Node.js i npm
2. Zainstalowany serwer MySQL

## Kroki instalacji i uruchomienia

### Konfiguracja bazy danych

1. Otwórz MySQL Workbench lub inne narzędzie do pracy z MySQL.
2. Wykonaj poniższe polecenia SQL, aby utworzyć bazę danych i tabelę:

```sql
CREATE DATABASE gamestat;
USE gamestat;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


### Konfiguracja backendu
1) Przejdź do folderu z backendem.
2) Zainstaluj wymagane zależności, wykonując polecenie:
npm install;
3) Uruchom serwer backendu, wykonując polecenie:
npm run start


### Konfiguracja frontend

1) Przejdź do folderu z frontendem (aplikacją React).
2) Zainstaluj wymagane zależności, wykonując polecenie:
npm install
3) Uruchom serwer frontendowy, wykonując polecenie:
npm run start


### Uruchamianie aplikacji
Upewnij się, że serwer bazy danych MySQL jest uruchomiony.
Uruchom serwer backendu, zgodnie z powyższymi instrukcjami.
Uruchom serwer frontendowy, zgodnie z powyższymi instrukcjami.

## Uwagi
1) Upewnij się, że w aplikacji backendowej są poprawnie skonfigurowane parametry połączenia z bazą danych MySQL.
