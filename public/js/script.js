//import main from('./game,js');

const { main } = require("./game");


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
        var response = main(message);
        this.echo(response);
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

