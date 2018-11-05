/**
 * Created by codingnuts on 2018/5/24.
 */
var playerDirector = (function () {
	var players = {},
		operations = {};

	//添加玩家
	operations.addPlayer = function (player) {
		var teamColor = player.teamColor;
		//获得队伍的列表
		players[teamColor] = players[teamColor] || [];

		//把队员放到列表中
		players[teamColor].push(player);
	};

	//移除玩家
	operations.removePlayer = function (player) {
		var teamColor = player.teamColor,
			teamPlayers = players[teamColor] || [];

		//遍历然后删除玩家
		for (var i = teamPlayers.length - 1; i >= 0; i--) {
			if (teamPlayers[i] === player) {
				teamPlayers.splice(i, 1);
			}
		}
	};

	//换队伍
	operations.changeTeam = function (player, newTeamColor) {
		operations.removePlayer(player);
		player.teamColor = newTeamColor;
		operations.addPlayer(player);
	};

	operations.playerDead = function (player) {
		var teamColor = player.teamColor,
			teamPlayers = players[teamColor];

		//默认设为true
		var all_dead = true;

		// 判断状态
		for (var i = 0, player; player = teamPlayers[i++];) {
			if (player.state !== "dead") {
				all_dead = false;
				break;
			}
		}

		if (all_dead === true) {
			for (var i = 0, player; player = teamPlayers[i++];) {
				player.lose();
			}

			for (var color in players) {
				if (color !== teamColor) {
					var teamPlayers = players[color];
					for (var i = 0, player; player = teamPlayers[i++];) {
						player.win();
					}
				}
			}
		}
	};

	var receiveMessage = function () {
		var message = Array.prototype.shift.call(arguments);
		operations[message].apply(this, arguments);
	};

	return {
		receiveMessage: receiveMessage
	}
})();


function Player (name, teamColor) {
	this.name = name;
	this.teamColor = teamColor;
	this.state = "alive";
}

Player.prototype.win = function () {
	console.info(this.name, "win");
};

Player.prototype.lose = function () {
	console.info(this.name, "lost");
};

Player.prototype.die = function () {
	this.state = "dead";
	playerDirector.receiveMessage("playerDead", this);
};


Player.prototype.remove = function () {
	playerDirector.receiveMessage("removePlayer", this);
};

Player.prototype.changeTeam = function (color) {
	playerDirector.receiveMessage("changeTeam", this, color);
};

var playerFactory = function (name, teamColor) {
	var newPlayer = new Player(name, teamColor);
	playerDirector.receiveMessage("addPlayer", newPlayer);

	return newPlayer;
};


var red = "red", blue = "blue";

var player1 = playerFactory("皮蛋", red),
	player2 = playerFactory("小乖", red),
	player3 = playerFactory("宝宝", red),
	player4 = playerFactory("小强", red);

var player5 = playerFactory("黑妞", blue),
	player6 = playerFactory("葱头", blue),
	player7 = playerFactory("胖墩", blue),
	player8 = playerFactory("海盗", blue);

/*player1.die();
player2.die();
player3.die();
player4.die();*/

/*
player1.remove();
player2.remove();
player3.die();
player4.die();
*/

player1.changeTeam("blue");













