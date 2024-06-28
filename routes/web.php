<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpFoundation\IpUtils;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Termwind\render;

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/about', function () {
    return Inertia::render('About');    
});

Route::post('/submit', function (Request $request) {
    $recaptcha = $request->input('g-recaptcha-response');

    if (is_null($recaptcha)) {
        $request->session()->flash('message', "  Please complete the recaptcha again to proceed. ");
        return redirect()->back();
    }

    $url = "https://www.google.com/recaptcha/api/siteverify";

    $params = [
        'secret' => config('services.recaptcha.secret'),
        'response' => $recaptcha,
        'remoteip' => IpUtils::anonymize($request->ip())
    ];

    #$response->post($url, $params);

    $response = Http::asForm()->post($url, $params);

    $result = json_decode($response);

    if ($response->successful() && $result->success == true) {
        $request->session()->flash('message', " Form Submitted Successfully. ");
        return redirect()->back()->with('message', 'Form Submitted Successfully.');
    
    } else {
        $request->session()->flash('message', "  Please complete the recaptcha again to proceed. ");
        return redirect()->back();
    }
});

