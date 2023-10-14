<script>
    var textArray = [
        'hamburger.jpg',
        'baby.gif',
        'BITDANCE.gif',
        'dancingalien.gif',
        'DUANE.gif',
        'hulk.gif',
        'spiderman.gif',
        'vaca.gif',
        'vegeta.gif'
    ];

    var randomName = 'ejemplo.png';

    function generate() {
        var randomNumber = Math.floor(Math.random()*textArray.length);
        randomName = textArray[randomNumber];
    }
</script>

<style>
    body {
    background-image: url("./background.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    text-align: center;
    }
    h1{
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 3em;
        color:white;
        text-shadow: 2px 2px 0px #000000;
    }
    p {
        color:white;
        text-shadow: 2px 2px 0px #000000;
    }
    .display img {
        height: 50%;
        width: 50%;
    }
    .display {
        width: 50%;
        height: 50%;
        margin:auto;
    }
</style>

<body>
    <h1>Random Image Gallery</h1>
    <p>Presiona el boton "Generame" para desplegar una imagen al azar</p>
    <button on:click={generate}>Generame</button><br><br>
    <div class="display">
        <img src="/src/routes/img/{randomName}" alt="{randomName}"/>
    </div>
</body>