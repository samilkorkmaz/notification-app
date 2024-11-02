Progressive web app demonstrating periodic polling of notifications

Backend: Laravel 11

Frontend (pwa-app): JavaScript

Initialization:
* composer install
* npm install
* .env: APP_URL, SANCTUM_STATEFUL_DOMAINS, CORS_ALLOWED_ORIGINS, SESSION_DOMAIN, DB_DATABASE
* config/cors.php: allowed_origins

To run locally:
* php artisan serve
* cd pwa-app, python -m http.server 8080
