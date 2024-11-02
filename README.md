Progressive web app demonstrating periodic polling of notifications

Backend: Laravel 11

Frontend (pwa-app): JavaScript

Initialization:
* composer install
* npm install
* .env: APP_URL, SANCTUM_STATEFUL_DOMAINS, CORS_ALLOWED_ORIGINS, SESSION_DOMAIN, DB_DATABASE
* config/cors.php: allowed_origins

To run locally:
* php artisan serve. When you start your Laravel server, make sure it's listening on all network interfaces, not just localhost (which is 127.0.0.1): php artisan serve --host=0.0.0.0 --port=8000
* cd pwa-app, python -m http.server 8080
