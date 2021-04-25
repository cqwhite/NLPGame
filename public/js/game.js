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
    manager.addDocument('en', 'say about you', 'agent.acquaintance');
    manager.addDocument('en', 'why are you here', 'agent.acquaintance');
    manager.addDocument('en', 'what is your personality', 'agent.acquaintance');
    manager.addDocument('en', 'describe yourself', 'agent.acquaintance');
    manager.addDocument('en', 'tell me about yourself', 'agent.acquaintance');
    manager.addDocument('en', 'tell me about you', 'agent.acquaintance');
    manager.addDocument('en', 'what are you', 'agent.acquaintance');
    manager.addDocument('en', 'who are you', 'agent.acquaintance');

    manager.addAnswer('en', 'agent.acquaintance', "I'm a virtual agent");
    manager.addAnswer(
        'en',
        'agent.acquaintance',
        'Think of me as a virtual agent'
    );
    manager.addAnswer(
        'en',
        'agent.acquaintance',
        "Well, I'm not a person, I'm a virtual agent"
    );
    manager.addAnswer(
        'en',
        'agent.acquaintance',
        "I'm a virtual being, not a real person"
    );
    manager.addAnswer('en', 'agent.acquaintance', "I'm a conversational app");

    
    const final = (async() => {
        await manager.train();
        manager.save();
        const response = await manager.process('en', message);
        return response
    })();
    return final
}

exports.main = main;