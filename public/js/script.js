//terminal work
$('body').terminal({
    iam: function (name) {
        this.echo('Hello, ' + name +
            '. Welcome to Space Captain NLP Game');
    },
    founder: function () {
        this.echo('Connor White');
    },
    help: function () {
        this.echo('iam - iam command and '
        + 'pass your name as argument\n'
        + 'founder - to know the founder\n'
        +'begin - to begin the game!');
    },
    begin: function(message){
        var response = httpGet('/game/'+message);
        this.echo(response)
        },
    display: function(response){
        console.log("inside display")
        this.echo(response)
    }
}, {
    greetings: ' _________                           _________                __         .__        \n'
    + '/   _____/__________    ____  ____   \\_   ___ \_____  _______/  |______  |__| ____  \n'
    + '\\_____  \\\\____ \\__  \\ _/ ___\\/ __ \\  /    \\   \\/\__  \\ \\____ \\   __\\__  \\ |  |/    \\ \n'
    + '/        \\  |_> > __ \\\\  \\__\\  ___/  \\     \\____/ __ \\|  |_> >  |  / __ \\|  |   |  \\ \n'
    + '/_______  /   __(____  /\\___  >___  >  \\______  (____  /   __/|__| (____  /__|___|  /\n'
    + '        \\/|__|       \\/     \\/    \\/          \\/     \\/|__|             \\/        \\/ \n'
    + 'Welcome captain, type begin to play Space NLP Game'
    + '- by Connor White'
});



function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send(null);
    console.log("logged text " + xmlHttp.responseText);
    return xmlHttp.responseText;
}
