var ScriptBridge = Java.type('com.steelteam.openrhynn.scripting.ScriptBridge')
var GameCharacterIncreaseVitality = Java.type(
  'com.steelteam.openrhynn.network.messages.server.GameCharacterIncreaseVitality'
)

var onTriggerEnter = function (entity) {
  entity.manaCurrent = entity.getManaMax()
  /* send message to character */
  ScriptBridge.sendMessageForEntity(
    entity,
    new GameCharacterIncreaseVitality(
      entity.healthCurrent,
      entity.manaCurrent
    ).getData()
  )
  /* update quest #2 */
}
