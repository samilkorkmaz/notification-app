<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NotificationController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/sayHello', function () {
    return "<h1>Hello from API</h1>";
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/login1', function () {
    return "<h1>login API</h1>";
});


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/notifications', [NotificationController::class, 'getNotifications']);
});

