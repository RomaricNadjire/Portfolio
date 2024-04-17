<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/users', function (Request $request) {
    return User::all();
});

Route::post('/users', function (Request $request) {
    
    $name = $request->input('name');
    $email = $request->input('email');

    // Créez un nouvel utilisateur
    User::create([
        'name' => $name,
        'email' => $email, 
        'password' => 'qwerty'
    ]);
    return response()->json(['message' => 'Utilisateur '.$name.' enregistré avec succès']);
});
#->middleware('auth:sanctum')
