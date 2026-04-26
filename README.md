# Portfolio — Sylvain Bousquet

Application React avec un serveur Express pour l'envoi de mails via le formulaire de contact.

## Structure

```
Portfolio/
├── client/   # Frontend React (port 3000)
└── server/   # Serveur mail Express + Nodemailer (port 3080)
```

## Lancer le frontend

```bash
cd client
npm install
npm start
```

L'application est accessible sur `http://localhost:3000`.

## Lancer le serveur mail

```bash
cd server
npm install
npm start
```

Le serveur écoute sur `http://localhost:3080`.

### Configuration

Copier le fichier d'exemple et renseigner les valeurs :

```bash
cp server/.env.example server/.env
```

```env
MAIL_USER=votre.adresse@gmail.com
MAIL_PASS=mot_de_passe_application_gmail
```

> Pour générer un mot de passe d'application Gmail : Mon compte Google → Sécurité → Mots de passe des applications.
>
> Le fichier `.env` est ignoré par git et ne sera jamais commité.
