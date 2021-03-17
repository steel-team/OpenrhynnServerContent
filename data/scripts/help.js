var ScriptBridge = Java.type('com.steelteam.openrhynn.scripting.ScriptBridge')
var GameHelpEntry = Java.type(
  'com.steelteam.openrhynn.network.messages.server.GameHelpEntry'
)

var onHelpRequest = function (entity, help_id) {
  switch (help_id) {
    case 1:
      ScriptBridge.sendMessageForEntity(
        entity,
        new GameHelpEntry(2, 'you wake up at the coast of rhynn ...').getData()
      )
      break
    case 2:
      ScriptBridge.sendMessageForEntity(
        entity,
        new GameHelpEntry(
          3,
          'you cannot remember how you got here, you feel tired and your head is hurting ...'
        ).getData()
      )
      break
    case 3:
      ScriptBridge.sendMessageForEntity(
        entity,
        new GameHelpEntry(
          -1,
          'this looks like a new world, a new time.let it begin.'
        ).getData()
      )
      break
  }
}
