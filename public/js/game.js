/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en'], forceNER: true });

function main(message){
    manager.addDocument('en', 'attack the', 'agent.attack');
    manager.addDocument('en', 'destroy the', 'agent.attack');
    manager.addDocument('en', 'attack', 'agent.attack');
    manager.addDocument('en', 'destroy', 'agent.attack');
    manager.addDocument('en', 'kill', 'agent.attack');
    manager.addDocument('en', 'kill the', 'agent.attack');
    manager.addDocument('en', 'fight them', 'agent.attack');
    manager.addDocument('en', 'fight', 'agent.attack');
    manager.addDocument('en', 'explode', 'agent.attack');

    manager.addDocument('en', 'escape', 'agent.escape');
    manager.addDocument('en', 'run away from', 'agent.escape');
    manager.addDocument('en', 'flee', 'agent.escape');
    manager.addDocument('en', 'flee from', 'agent.escape');
    manager.addDocument('en', 'lighspeed', 'agent.escape');
    manager.addDocument('en', 'hyperspace', 'agent.escape');
    manager.addDocument('en', 'continue on', 'agent.escape');

    manager.addDocument('en', 'bribe them', 'agent.bribe');

    manager.addDocument('en', 'investigate', 'agent.investigate');
    //study, go to, check out, look at

    manager.addDocument('en', 'trick', 'agent.trick');
    
    manager.addDocument('en', 'repair ship', 'agent.repair');
    manager.addDocument('en', 'rebuild ship', 'agent.repair');
    manager.addDocument('en', 'buy ship parts', 'agent.repair');
    manager.addDocument('en', 'fix', 'agent.repair');
    manager.addDocument('en', 'fix the ship', 'agent.repair');

    /*
    peace
    negiotate
    explode
    befriend
    remove
    go on foot
    send a team
    try to find
    mine/collect/retrieve
    shields/defense/
    evade/dodge
    carefully/slowly
    */


    

    manager.addAnswer('en', 'agent.attack', "We destroyed the enemy, but took damage in the battle, the crew looks happy though");
    manager.addAnswer('en', 'agent.attack', "Captain the ship took heavy damages from the battle, the crew was pleased with your decision");
    manager.addAnswer('en', 'agent.attack', "The crew was excited for some combat, but we took damages to our ship");

    manager.addAnswer('en', 'agent.escape', "We jumped into hyperspace, we lost fuel and the crew is upset");
    manager.addAnswer('en', 'agent.escape', "We escaped the crew is upset for missing action, and we lost some fuel");

    manager.addAnswer('en', 'agent.bribe', "We lost credits, but were not harmed, the crew liked your style");

    manager.addAnswer('en', 'agent.investigate', "We found credits, but lost some fuel");
    

    manager.addAnswer('en', 'agent.trick', "Our trick failed and we were attacked! Lost crew loyalty and damaged the ship");

    manager.addAnswer('en', 'agent.repair', "The ship was repaired a bit, but we lost some supplies and credits");


    



    
    const final = (async() => {
        await manager.train();
        manager.save();
        const response = await manager.process('en', message);
        return response
    })();
    return final
}

exports.main = main;