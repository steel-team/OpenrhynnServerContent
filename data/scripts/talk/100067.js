var ScriptBridge = Java.type('com.steelteam.openrhynn.scripting.ScriptBridge');
var ChanceCalculator = Java.type('com.steelteam.openrhynn.utilits.ChanceCalculator');

var getExecutionTime = function() { return 15000; }

var onTalkRequest = function(world, mob) {
	var message = 'Nothing to say...';
	var chance = 20;
	var target = world.getEntity(mob.aiFollow);	
	
	if(target != null) {
		message = 'Your end will be very soon, ' + target.name + '!';
		chance = 60;
	} else {
		switch(ScriptBridge.sharedRandom.nextInt(5)) {
			case 0:
				message = 'Lortas is my owner';
				break;
			case 1:
				message = 'I\'ll slayer';
				break;
			case 2:
				message = 'I see your death';
				break;
			case 3:
				message = 'disappear!!';
				break;
			case 4:
				message = 'You haven\'t any chance!';
				break;
		}
	}
	
	if(ChanceCalculator.calculate(chance))
		world.chat(mob.objectId, message);
	
}