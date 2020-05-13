<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @include('layouts._css')
</head>
<body>
@include('layouts._header')

<div class="container-fluid" style="width: 65%">
    <div class="row">
        @include('layouts._main')

        @include('layouts._aside')
    </div>
</div>

@include('layouts._footer')

@include('layouts._js')
</body>
</html>
