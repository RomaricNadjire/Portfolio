<!DOCTYPE html>
<html class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ env('APP_NAME') }}</title>
        {{-- <script src="https://www.google.com/recaptcha/enterprise.js?render=6LfAzLwpAAAAAFr6L7ZL0xuMayhGzJLGknTIbH-o"></script> --}}
        <!-- As you can see, we will use vite with jsx syntax for React-->
        {{-- <script async src="https://www.google.com/recaptcha/api.js"></script> --}}
        @viteReactRefresh 
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="w-screen min-h-screen max-w-full dark:bg-gray-800">

        @inertia

{{-- 
        <form action="/submit" method="POST" id='demo-form' class="relative">
            @csrf
            @method('post')

            @if (session()->has('message'))
                <div class="p-3 flex items-center bg-white justify-center">{{ session('message') }}</div>
            @endif

            <div class="g-recaptcha mt-4" data-sitekey={{config('services.recaptcha.key')}}></div>


            <input type="text" name="text" id="text" className='border-2 border-white p-2'/>
            <button className="g-recaptcha" 
              data-sitekey="{{ config('services.recaptcha.site_key') }}" 
              data-callback='onSubmit' 
              data-action='submit'>Submit</button>
        </form>

        <script>
            function onSubmit(token) {
              document.getElementById("demo-form").submit();
            }
        </script> --}}
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </body>
</html>