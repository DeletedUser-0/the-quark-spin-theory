var quarks = {
	red: {
		// red quark spin
		have: 1,
		get: 1,
	},
	green: {
		// green quark spin
		have: 1,
		get: 1,
	},
	blue: {
		// blue quark spin
		have: 1,
		get: 1,
	},
	upgrade1: {
		// first upgrade cost and level
		cost: 10,
		level: 0,
		case: 1,
	},
	upgrade2: {
		// second upgrade cost and level
		cost: 25,
		level: 0,
		case: 1,
	},
	upgrade3: {
		// third upgrade cost and level
		cost: 40,
		level: 0,
		case: 1,
	},
	points: {
		// first prestige layer
		have: 0,
		get: 0
	},
	upgrade4: {
		cost: 1,
		level: 0,
		renevueMultiplier: 1.5,
		totalRenevue: 1
	}
};

function addRed() {
	// adds red quark spin.
	quarks.red.have = Decimal.add(quarks.red.have, quarks.red.get);
};

function addGreen() {
	// adds green quark spin.
	quarks.green.have = Decimal.add(quarks.green.have, quarks.green.get);
};

function addBlue() {
	// adds blue quark spin.
	quarks.blue.have = Decimal.add(quarks.blue.have, quarks.blue.get);
};
// increases the amount of red quark spin you get per click
function Upgrade1() {
	if(Decimal.compare(quarks.upgrade1.case, 1) == 0) {
		if(Decimal.compare(quarks.red.have, quarks.upgrade1.cost) >= 0) {
			quarks.red.have = Decimal.sub(quarks.red.have, quarks.upgrade1.cost);
			quarks.upgrade1.cost = Decimal.times(quarks.upgrade1.cost, 2);
			quarks.red.get = Decimal.times(quarks.red.get, 1.43);
			quarks.upgrade1.level = Decimal.add(quarks.upgrade1.level, 1);
			quarks.upgrade1.case = Decimal.add(quarks.upgrade1.case, 1);
			document.getElementById('upgrade1').innerHTML = notate(quarks.upgrade1.cost) + " <b>green</b> quark spin <br> Level: " + notate(quarks.upgrade1.level);
		};
	};
	if(Decimal.compare(quarks.upgrade1.case, 2) == 0) {
		if(Decimal.compare(quarks.green.have, quarks.upgrade1.cost) >= 0) {
			quarks.green.have = Decimal.sub(quarks.green.have, quarks.upgrade1.cost);
			quarks.upgrade1.cost = Decimal.times(quarks.upgrade1.cost, 2);
			quarks.red.get = Decimal.times(quarks.red.get, 1.43);
			quarks.upgrade1.level = Decimal.add(quarks.upgrade1.level, 1);
			quarks.upgrade1.case = Decimal.add(quarks.upgrade1.case, 1);
			document.getElementById('upgrade1').innerHTML = notate(quarks.upgrade1.cost) + " <b>blue</b> quark spin <br> Level: " + notate(quarks.upgrade1.level);
		};
	};
	if(Decimal.compare(quarks.upgrade1.case, 3) == 0) {
		if(Decimal.compare(quarks.blue.have, quarks.upgrade1.cost) >= 0) {
			quarks.blue.have = Decimal.sub(quarks.blue.have, quarks.upgrade1.cost);
			quarks.upgrade1.cost = Decimal.times(quarks.upgrade1.cost, 2);
			quarks.red.get = Decimal.times(quarks.red.get, 1.43);
			quarks.upgrade1.level = Decimal.add(quarks.upgrade1.level, 1);
			quarks.upgrade1.case = new Decimal(1);
			document.getElementById('upgrade1').innerHTML = notate(quarks.upgrade1.cost) + " <b>red</b> quark spin <br> Level: " + notate(quarks.upgrade1.level);
		};
	};
};

function Upgrade2() {
	if(Decimal.compare(quarks.upgrade2.case, 1) == 0) {
		if(Decimal.compare(quarks.red.have, quarks.upgrade2.cost) >= 0) {
			quarks.red.have = Decimal.sub(quarks.red.have, quarks.upgrade2.cost);
			quarks.upgrade2.cost = Decimal.times(quarks.upgrade2.cost, 2);
			quarks.green.get = Decimal.times(quarks.green.get, 1.48);
			quarks.upgrade2.level = Decimal.add(quarks.upgrade2.level, 1);
			quarks.upgrade2.case = Decimal.add(quarks.upgrade2.case, 1);
			document.getElementById('upgrade2').innerHTML = notate(quarks.upgrade2.cost) + " <b>green</b> quark spin <br> Level: " + notate(quarks.upgrade2.level);
		};
	};
	if(Decimal.compare(quarks.upgrade2.case, 2) == 0) {
		if(Decimal.compare(quarks.green.have, quarks.upgrade2.cost) >= 0) {
			quarks.green.have = Decimal.sub(quarks.green.have, quarks.upgrade2.cost);
			quarks.upgrade2.cost = Decimal.times(quarks.upgrade2.cost, 3);
			quarks.green.get = Decimal.times(quarks.green.get, 2.1);
			quarks.upgrade2.level = Decimal.add(quarks.upgrade2.level, 1);
			quarks.upgrade2.case = Decimal.add(quarks.upgrade2.case, 1);
			document.getElementById('upgrade2').innerHTML = notate(quarks.upgrade2.cost) + " <b>blue</b> quark spin <br> Level: " + notate(quarks.upgrade2.level);
		};
	};
	if(Decimal.compare(quarks.upgrade2.case, 3) == 0) {
		if(Decimal.compare(quarks.blue.have, quarks.upgrade2.cost) >= 0) {
			quarks.blue.have = Decimal.sub(quarks.blue.have, quarks.upgrade2.cost);
			quarks.upgrade2.cost = Decimal.times(quarks.upgrade2.cost, 1.5);
			quarks.green.get = Decimal.times(quarks.green.get, 1.2);
			quarks.upgrade2.level = Decimal.add(quarks.upgrade2.level, 1);
			quarks.upgrade2.case = new Decimal(1);
			document.getElementById('upgrade2').innerHTML = notate(quarks.upgrade2.cost) + " <b>red</b> quark spin <br> Level: " + notate(quarks.upgrade2.level);
		};
	};
};

function Upgrade3() {
	if(Decimal.compare(quarks.upgrade3.case, 1) == 0) {
		if(Decimal.compare(quarks.red.have, quarks.upgrade3.cost) >= 0) {
			quarks.red.have = Decimal.sub(quarks.red.have, quarks.upgrade3.cost);
			quarks.upgrade3.cost = Decimal.times(quarks.upgrade3.cost, 2.5);
			quarks.blue.get = Decimal.times(quarks.blue.get, 1.52);
			quarks.upgrade3.level = Decimal.add(quarks.upgrade3.level, 1);
			quarks.upgrade3.case = Decimal.add(quarks.upgrade3.case, 1);
		};
	};
	if(Decimal.compare(quarks.upgrade3.case, 2) == 0) {
		if(Decimal.compare(quarks.green.have, quarks.upgrade3.cost) >= 0) {
			quarks.green.have = Decimal.sub(quarks.green.have, quarks.upgrade3.cost);
			quarks.upgrade3.cost = Decimal.times(quarks.upgrade3.cost, 3.6);
			quarks.blue.get = Decimal.times(quarks.blue.get, 2.25);
			quarks.upgrade3.level = Decimal.add(quarks.upgrade3.level, 1);
			quarks.upgrade3.case = Decimal.add(quarks.upgrade3.case, 1);
			document.getElementById('upgrade3').innerHTML = notate(quarks.upgrade3.cost) + " <b>blue</b> quark spin <br> Level: " + notate(quarks.upgrade3.level);
		};
	};
	if(Decimal.compare(quarks.upgrade3.case, 3) == 0) {
		if(Decimal.compare(quarks.blue.have, quarks.upgrade3.cost) >= 0) {
			quarks.blue.have = Decimal.sub(quarks.blue.have, quarks.upgrade3.cost);
			quarks.upgrade3.cost = Decimal.times(quarks.upgrade3.cost, 4.8);
			quarks.blue.get = Decimal.times(quarks.blue.get, 2.46);
			quarks.upgrade3.level = Decimal.add(quarks.upgrade3.level, 1);
			quarks.upgrade3.case = new Decimal(1);
			document.getElementById('upgrade3').innerHTML = notate(quarks.upgrade3.cost) + " <b>red</b> quark spin <br> Level: " + notate(quarks.upgrade3.level);
		};
	};
};

function PrestigeFirstLayer() {
	quarks.points.get = Math.round(Decimal.pow(1.25, Decimal.add(quarks.red.have.exponent, quarks.green.have.exponent).add(quarks.blue.have.exponent)).sub(15.55));
}

function Prestige1() {
	var txt;
	var r = confirm("Are you sure do you want to prestige?");
	if(r == true) {
		if(Decimal.compare(quarks.points.get, 1) >= 0) {
			quarks.red.have = new Decimal(1);
			quarks.red.get = new Decimal(1).times(1.05).times(quarks.upgrade4.totalRenevue);
			quarks.blue.have = new Decimal(1);
			quarks.blue.get = new Decimal(1).times(1.04).times(quarks.upgrade4.totalRenevue);
			quarks.green.have = new Decimal(1);
			quarks.green.get = new Decimal(1).times(1.045).times(quarks.upgrade4.totalRenevue);
			quarks.upgrade1.cost = new Decimal(10);
			quarks.upgrade1.case = new Decimal(1);
			quarks.upgrade1.level = new Decimal(0);
			quarks.upgrade2.cost = new Decimal(25);
			quarks.upgrade2.case = new Decimal(1);
			quarks.upgrade2.level = new Decimal(0);
			quarks.upgrade3.cost = new Decimal(50);
			quarks.upgrade3.case = new Decimal(1);
			quarks.upgrade3.level = new Decimal(0);
			quarks.points.have = Decimal.add(quarks.points.get, quarks.points.have);
			alert("You prestiged and earnt " + notate(quarks.points.get) + " points.");
		} else {
			alert("You must get at least 1 point at the next prestige during this run!");
		};
	};
};

function Upgrade4() {
	if (Decimal.compare(quarks.points.have, quarks.upgrade4.cost) >= 0) {
        quarks.points.have = Decimal.sub(quarks.points.have, quarks.upgrade4.cost);
		quarks.upgrade4.cost = Math.round(Decimal.times(quarks.upgrade4.cost, 1.2));
		quarks.upgrade4.level = Decimal.add(quarks.upgrade4.level, 1);
		quarks.upgrade4.totalRenevue = Decimal.times(quarks.upgrade4.totalRenevue, quarks.upgrade4.renevueMultiplier);
        quarks.upgrade4.renevueMultiplier = Decimal.times(quarks.upgrade4.renevueMultiplier, 0.998);
        quarks.red.get = quarks.upgrade4.totalRenevue;
        quarks.green.get = quarks.upgrade4.totalRenevue;
        quarks.blue.get = quarks.upgrade4.totalRenevue;
        if (Decimal.compare(quarks.upgrade4.renevueMultiplier, 1.01) <= 0) {
            quarks.upgrade4.renevueMultiplier = new Decimal(1.01);
        }
	}
}

function notate(n) {
	n = new Decimal(n);
	var e = n.exponent;
	if(e < 3) return(n.mantissa * Math.pow(10, e)).toFixed(0);
	return `${n.mantissa.toPrecision(3)}e${e.toLocaleString("pt-BR")}`;
}

function notate2(n) {
	n = new Decimal(n);
	var e = n.exponent;
	if(e < 3) return(n.mantissa * Math.pow(10, e)).toPrecision(3);
	return `${n.mantissa.toPrecision(3)}e${e.toLocaleString("pt-BR")}`;
}

function notate3(n) {
	n = new Decimal(n);
	var e = n.exponent;
	if(e < 3) return(n.mantissa * Math.pow(10, e)).toPrecision(4);
	return `${n.mantissa.toPrecision(3)}e${e.toLocaleString("pt-BR")}`;
}

function UpdateUI() {
	// Updates all the currencies and other variables...
	document.getElementById('redquarkspin').innerHTML = notate(quarks.red.have);
	document.getElementById('greenquarkspin').innerHTML = notate(quarks.green.have);
	document.getElementById('bluequarkspin').innerHTML = notate(quarks.blue.have);
	document.getElementById('RPC').innerHTML = notate(quarks.red.get);
	document.getElementById('GPC').innerHTML = notate(quarks.green.get);
	document.getElementById('BPC').innerHTML = notate(quarks.blue.get);
	if(Decimal.compare(quarks.upgrade3.case, 2) == 0) {
		document.getElementById('upgrade3').innerHTML = notate(quarks.upgrade3.cost) + " <b>green</b> quark spin <br> Level: " + notate(quarks.upgrade3.level);
	};
	if(Decimal.compare(quarks.upgrade3.case, 3) == 0) {
		document.getElementById('upgrade3').innerHTML = notate(quarks.upgrade3.cost) + " <b>blue</b> quark spin <br> Level: " + notate(quarks.upgrade3.level);
	};
	if(Decimal.compare(quarks.upgrade3.case, 1) == 0) {
		document.getElementById('upgrade3').innerHTML = notate(quarks.upgrade3.cost) + " <b>red</b> quark spin <br> Level: " + notate(quarks.upgrade3.level);
	};
	if(Decimal.compare(quarks.upgrade2.case, 1) == 0) {
		document.getElementById('upgrade2').innerHTML = notate(quarks.upgrade2.cost) + " <b>red</b> quark spin <br> Level: " + notate(quarks.upgrade2.level);
	};
	if(Decimal.compare(quarks.upgrade2.case, 3) == 0) {
		document.getElementById('upgrade2').innerHTML = notate(quarks.upgrade2.cost) + " <b>blue</b> quark spin <br> Level: " + notate(quarks.upgrade2.level);
	};
	if(Decimal.compare(quarks.upgrade2.case, 2) == 0) {
		document.getElementById('upgrade2').innerHTML = notate(quarks.upgrade2.cost) + " <b>green</b> quark spin <br> Level: " + notate(quarks.upgrade2.level);
	};
	if(Decimal.compare(quarks.upgrade1.case, 1) == 0) {
		document.getElementById('upgrade1').innerHTML = notate(quarks.upgrade1.cost) + " <b>red</b> quark spin <br> Level: " + notate(quarks.upgrade1.level);
	};
	if(Decimal.compare(quarks.upgrade1.case, 3) == 0) {
		document.getElementById('upgrade1').innerHTML = notate(quarks.upgrade1.cost) + " <b>blue</b> quark spin <br> Level: " + notate(quarks.upgrade1.level);
	};
	if(Decimal.compare(quarks.upgrade1.case, 2) == 0) {
		document.getElementById('upgrade1').innerHTML = notate(quarks.upgrade1.cost) + " <b>green</b> quark spin <br> Level: " + notate(quarks.upgrade1.level);
	};
	document.getElementById('incomingPoints').innerHTML = "Prestige to get " + notate(quarks.points.get) + " points."
    document.getElementById('points').innerHTML = "You have " + notate(quarks.points.have) + " points."
    if (Decimal.compare(quarks.upgrade4.cost, 1) == 0) {	
        document.getElementById('upgrade4').innerHTML = "Increases the quark spin per click in all colors. <br> Cost: " + notate(quarks.upgrade4.cost) + " point <br> Effect: " + notate2(quarks.upgrade4.totalRenevue) + "x -> " + notate2(Decimal.times(quarks.upgrade4.totalRenevue, quarks.upgrade4.renevueMultiplier)) + "x (+" + notate3(Decimal.times(quarks.upgrade4.renevueMultiplier, 100).sub(100)) + "%)  <br> Level: " + notate(quarks.upgrade4.level);
} else {
    document.getElementById('upgrade4').innerHTML = "Increases the quark spin per click in all colors. <br> Cost: " + notate(quarks.upgrade4.cost) + " points <br> Effect: " + notate2(quarks.upgrade4.totalRenevue) + "x -> " + notate2(Decimal.times(quarks.upgrade4.totalRenevue, quarks.upgrade4.renevueMultiplier)) + "x (+" + notate3(Decimal.times(quarks.upgrade4.renevueMultiplier, 100).sub(100)) + "%)  <br> Level: " + notate(quarks.upgrade4.level);
}

}
var mainGameLoop = window.setInterval(function() {
	// ...every tick.
	UpdateUI()
}, 1);
var mainGameLoop = window.setInterval(function() {
	addBlue()
}, 1000);
var mainGameLoop = window.setInterval(function() {
	addGreen()
}, 1000);
var mainGameLoop = window.setInterval(function() {
	addRed()
}, 1000);
var mainGameLoop = window.setInterval(function() {
	PrestigeFirstLayer()
}, 1);

function saveGame() {
	saveData = quarks;
	localStorage.saveData = JSON.stringify(saveData);
}

function loadGame() {
	var saveData = JSON.parse(localStorage.saveData || null) || {};
	quarks = saveData;
    return saveData.obj || "default";
    quarks.red = saveData.red || quarks.red
    quarks.green = saveData.green || quarks.green 
    quarks.blue = saveData.blue || quarks.blue 
    quarks.upgrade1 = saveData.upgrade1 || quarks.upgrade1
    quarks.upgrade2 = saveData.upgrade2 || quarks.upgrade2
    quarks.upgrade3 = saveData.upgrade3 || quarks.upgrade3
    quarks.upgrade4 = saveData.upgrade4 || quarks.upgrade4
}

function openPage(pageName, elmnt, color) {
	// Hide all elements with class="tabcontent" by default */
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for(i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	// Remove the background color of all tablinks/buttons
	tablinks = document.getElementsByClassName("tablink");
	for(i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "";
	}
	// Show the specific tab content
	document.getElementById(pageName).style.display = "block";
}
