var ScriptBridge = Java.type('com.steelteam.openrhynn.scripting.ScriptBridge')
var ChanceCalculator = Java.type(
  'com.steelteam.openrhynn.utilits.ChanceCalculator'
)

var getExecutionTime = function () {
  return 15000
}

var onTalkRequest = function (world, mob) {
  var message = 'Nothing to say...'
  var chance = 20
  var target = world.getEntity(mob.aiFollow)

  if (target != null) {
    message =
      'What are you doing ' + target.name + '?! maybe you want to fix me?!'
    chance = 60
  } else {
    switch (ScriptBridge.sharedRandom.nextInt(5)) {
      case 0:
        message = 'I can destroy the game!'
        break
      case 1:
        message = 'I am very clever'
        break
      case 2:
        message = 'I am silent'
        break
      case 3:
        message = 'I am going to crash a server!'
        break
      case 4:
        message = 'Hey there!'
        break
    }
  }

  if (ChanceCalculator.calculate(chance)) world.chat(mob.objectId, message)
}
