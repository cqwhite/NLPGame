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

const { NlpManager } = require("node-nlp");

const manager = new NlpManager({ languages: ["en"], forceNER: true });

function main(message) {
  manager.addDocument("en", "attack the", "agent.attack");
  manager.addDocument("en", "destroy the", "agent.attack");
  manager.addDocument("en", "attack", "agent.attack");
  manager.addDocument("en", "destroy", "agent.attack");
  manager.addDocument("en", "kill", "agent.attack");
  manager.addDocument("en", "kill the", "agent.attack");
  manager.addDocument("en", "fight them", "agent.attack");
  manager.addDocument("en", "fight", "agent.attack");
  manager.addDocument("en", "explode", "agent.attack");
  manager.addDocument("en", "eliminate", "agent.attack");
  manager.addDocument("en", "punch", "agent.attack");
  manager.addDocument("en", "blow it up", "agent.attack");

  manager.addDocument("en", "escape", "agent.escape");
  manager.addDocument("en", "run away from", "agent.escape");
  manager.addDocument("en", "runaway", "agent.escape");
  manager.addDocument("en", "flee", "agent.escape");
  manager.addDocument("en", "flee from", "agent.escape");
  manager.addDocument("en", "lighspeed", "agent.escape");
  manager.addDocument("en", "hyperspace", "agent.escape");
  manager.addDocument("en", "continue on", "agent.escape");
  manager.addDocument("en", "abort", "agent.escape");

  manager.addDocument("en", "bribe them", "agent.bribe");

  manager.addDocument("en", "investigate", "agent.investigate");
  manager.addDocument("en", "check out", "agent.investigate");
  manager.addDocument("en", "look at", "agent.investigate");
  manager.addDocument("en", "study", "agent.investigate");
  manager.addDocument("en", "go to", "agent.investigate");
  manager.addDocument("en", "see what", "agent.investigate");
  manager.addDocument("en", "find", "agent.investigate");
  manager.addDocument("en", "try to find", "agent.investigate");

  manager.addDocument("en", "trick", "agent.trick");

  manager.addDocument("en", "repair ship", "agent.repair");
  manager.addDocument("en", "rebuild ship", "agent.repair");
  manager.addDocument("en", "buy ship parts", "agent.repair");
  manager.addDocument("en", "fix", "agent.repair");
  manager.addDocument("en", "fix the ship", "agent.repair");
  manager.addDocument("en", "clean", "agent.repair");

  manager.addDocument("en", "peace", "agent.peace");
  manager.addDocument("en", "befriend them", "agent.peace");
  manager.addDocument("en", "befriend", "agent.peace");
  manager.addDocument("en", "negotiate", "agent.peace");
  manager.addDocument("en", "negotiate a deal", "agent.peace");
  manager.addDocument("en", "negotiate", "agent.peace");
  manager.addDocument("en", "negotiate peace", "agent.peace");
  manager.addDocument("en", "make peace with", "agent.peace");
  manager.addDocument("en", "calm", "agent.peace");
  manager.addDocument("en", "try to calm", "agent.peace");
  manager.addDocument("en", "calm them", "agent.peace");
  manager.addDocument("en", "invite them", "agent.peace");
  manager.addDocument("en", "hi", "agent.peace");
  manager.addDocument("en", "hello", "agent.peace");
  manager.addDocument("en", "howdy", "agent.peace");
  manager.addDocument("en", "hey", "agent.peace");

  manager.addDocument("en", "remove", "agent.remove");

  manager.addDocument("en", "go on foot", "agent.foot");
  manager.addDocument("en", "send the cew", "agent.foot");
  manager.addDocument("en", "foot", "agent.foot");
  manager.addDocument("en", "ground", "agent.foot");
  manager.addDocument("en", "send a team", "agent.foot");
  manager.addDocument("en", "send a crew", "agent.foot");
  manager.addDocument("en", "land", "agent.foot");

  manager.addDocument("en", "collect", "agent.collect");
  manager.addDocument("en", "retrieve", "agent.collect");
  manager.addDocument("en", "mine", "agent.collect");

  manager.addDocument("en", "defense", "agent.defense");
  manager.addDocument("en", "defensively", "agent.defense");
  manager.addDocument("en", "shields", "agent.defense");
  manager.addDocument("en", "put up the shields", "agent.defense");

  manager.addDocument("en", "dodge", "agent.dodge");
  manager.addDocument("en", "evade", "agent.dodge");
  manager.addDocument("en", "maneuver", "agent.dodge");
  manager.addDocument("en", "go around it", "agent.dodge");
  manager.addDocument("en", "around", "agent.dodge");
  manager.addDocument("en", "move", "agent.dodge");

  manager.addDocument("en", "carefully", "agent.careful");
  manager.addDocument("en", "careful", "agent.careful");
  manager.addDocument("en", "slowly", "agent.careful");
  manager.addDocument("en", "slow", "agent.careful");

  manager.addDocument("en", "communicate", "agent.communicate");
  manager.addDocument("en", "try to communicaate", "agent.communicate");
  manager.addDocument("en", "talk", "agent.communicate");
  manager.addDocument("en", "talk to", "agent.communicate");

  manager.addDocument("en", "nothing", "agent.nothing");
  manager.addDocument("en", "wait", "agent.nothing");
  manager.addDocument("en", "do nothing", "agent.nothing");

  manager.addDocument("en", "buy fuel", "agent.buyFuel");
  manager.addDocument("en", "fuel", "agent.buyFuel");

  manager.addDocument("en", "eat", "agent.eat");
  manager.addDocument("en", "consume", "agent.eat");
  manager.addDocument("en", "taste", "agent.eat");

  manager.addDocument("en", "capture", "agent.capture");
  manager.addDocument("en", "cage", "agent.capture");
  manager.addDocument("en", "pet", "agent.capture");

  manager.addDocument("en", "error", "agent.error");

  /*
    other documents
    */

  manager.addAnswer(
    "en",
    "agent.attack",
    "We destroyed the enemy, but took damage in the battle, the crew looks happy though"
  );
  manager.addAnswer(
    "en",
    "agent.attack",
    "Captain the ship took heavy damages from the battle, the crew was pleased with your decision"
  );
  manager.addAnswer(
    "en",
    "agent.attack",
    "The crew was excited for some combat, but we took damages to our ship"
  );

  manager.addAnswer(
    "en",
    "agent.escape",
    "We jumped into hyperspace, we lost fuel and the crew is upset"
  );
  manager.addAnswer(
    "en",
    "agent.escape",
    "We escaped the crew is upset for missing action, and we lost some fuel"
  );

  manager.addAnswer(
    "en",
    "agent.bribe",
    "We lost credits, but were not harmed, the crew liked your style"
  );
  manager.addAnswer(
    "en",
    "agent.bribe",
    "We succesfully bribed them losing some credits, but were not harmed, the crew liked your style"
  );

  manager.addAnswer(
    "en",
    "agent.investigate",
    "We found credits, but lost some fuel"
  );
  manager.addAnswer(
    "en",
    "agent.investigate",
    "We found supplies in the area, but lost some fuel"
  );
  manager.addAnswer(
    "en",
    "agent.investigate",
    "We discovered some rare supplies we sold for credits, but lost some fuel"
  );

  manager.addAnswer(
    "en",
    "agent.trick",
    "Our trick failed and we were attacked! Lost crew loyalty and damaged the ship"
  );
  manager.addAnswer(
    "en",
    "agent.trick",
    "Our trick did not work and went into battle! Lost crew loyalty and damaged the ship"
  );

  manager.addAnswer(
    "en",
    "agent.repair",
    "The ship was repaired a bit, but we lost some supplies and credits"
  );
  manager.addAnswer(
    "en",
    "agent.repair",
    "The ship is looking better, but we lost some supplies and credits for payment"
  );

  manager.addAnswer(
    "en",
    "agent.peace",
    "A peace deal was reached, we lost credits, but the ship was repaired a bit"
  );
  manager.addAnswer(
    "en",
    "agent.peace",
    "We negotiated a peace deal, we lost credits, luckily we had time to repair the ship"
  );
  manager.addAnswer(
    "en",
    "agent.peace",
    "We made friends with the entity, we lost credits, luckily we had time to repair the ship"
  );
  manager.addAnswer(
    "en",
    "agent.peace",
    "The entity was pleased with our interaction, we lost credits, luckily we had time to repair the ship"
  );

  manager.addAnswer(
    "en",
    "agent.remove",
    "We removed the entity, the crew was happy, but we lost credits"
  );
  manager.addAnswer(
    "en",
    "agent.remove",
    "The entity was succesfully removed, the crew was happy, but we lost some supplies"
  );

  manager.addAnswer(
    "en",
    "agent.foot",
    "We sent a ground team to the location, we found credits, but lost crew members"
  );
  manager.addAnswer(
    "en",
    "agent.foot",
    "We sent a team on foot we found supplies, but a few crew members died"
  );

  manager.addAnswer(
    "en",
    "agent.collect",
    "We collected some of the item, we found fuel, but the ship took damage"
  );
  manager.addAnswer(
    "en",
    "agent.collect",
    "We collected some supplies, we found fuel, but the ship took damage"
  );

  manager.addAnswer(
    "en",
    "agent.defense",
    "We succesfully defended against the attack, we took no damage, but lost fuel and supplies"
  );
  manager.addAnswer(
    "en",
    "agent.defense",
    "Our shields held against the attack, we took no damage, but lost fuel the crew wanted to fight"
  );

  manager.addAnswer(
    "en",
    "agent.dodge",
    "We dodged the attack we lost fuel and took no damage"
  );
  manager.addAnswer(
    "en",
    "agent.dodge",
    "We menuevered past the threat, we lost a bit of fuel, but took no damage"
  );

  manager.addAnswer(
    "en",
    "agent.careful",
    "We carefully moved around the threat, we saved on fuel, but the crew does not seem happy"
  );
  manager.addAnswer(
    "en",
    "agent.careful",
    "We slowly carried on, we saved on fuel, but the crew does not seem happy"
  );

  manager.addAnswer(
    "en",
    "agent.communicate",
    "We communicated with the being, crew moral went up, but we lost some supplies in the attempt"
  );
  manager.addAnswer(
    "en",
    "agent.communicate",
    "We were able to talk with the being, the crew liked your charisma, but some supplies were used for the attempt"
  );

  manager.addAnswer(
    "en",
    "agent.nothing",
    "Captain we did nothing, we took damage, lost credits, and the crew seems upset"
  );
  manager.addAnswer(
    "en",
    "agent.nothing",
    "Captain we have to do something, we took damage, lost credits, and the crew seems upset"
  );

  manager.addAnswer(
    "en",
    "agent.buyFuel",
    "We bought some fuel, but lost credits"
  );
  manager.addAnswer(
    "en",
    "agent.buyFuel",
    "We bought some fuel for the ship, it cost a decent amount of credits"
  );

  manager.addAnswer(
    "en",
    "agent.eat",
    "We ate the item, the crew got sick, but we learned we could turn it into fuel"
  );
  manager.addAnswer(
    "en",
    "agent.eat",
    "We consumed the item, the crew hated it but eventually turned the item into ship fuel"
  );

  manager.addAnswer(
    "en",
    "agent.capture",
    "We capture the entity! Our ship took damage, but the crew was happy for a pet!"
  );

  manager.addAnswer(
    "en",
    "agent.error",
    "An error has occured in reality, nothing has happened"
  );

  const final = (async () => {
    await manager.train();
    manager.save();
    const response = await manager.process("en", message);
    return response;
  })();
  return final;
}

exports.main = main;
