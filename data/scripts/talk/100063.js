var ScriptBridge = Java.type('com.steelteam.openrhynn.scripting.ScriptBridge');
var ChanceCalculator = Java.type('com.steelteam.openrhynn.utilits.ChanceCalculator');

var getExecutionTime = function() { return 15000; }

var onTalkRequest = function(world, mob) {
	var message = 'Nothing to say...';
	var chance = 20;
	var target = world.getEntity(mob.aiFollow);	
	
	if(target != null) {
		message = 'I kill you, ' + target.name + '!';
		chance = 60;
	} else {
		switch(ScriptBridge.sharedRandom.nextInt(5)) {
			case 0:
				message = 'I\'LL ERASE YOU IN POWDER!';
				break;
			case 1:
				message = 'Disappear!!!';
				break;
			case 2:
				message = 'Pitiful mortal';
				break;
			case 3:
				message = 'I will break your bones!';
				break;
			case 4:
				message = 'Another pathetic adventurer!';
				break;
		}
	}
	
	if(ChanceCalculator.calculate(chance))
		world.chat(mob.objectId, message);
	
}