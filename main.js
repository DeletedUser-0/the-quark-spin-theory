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
        // first upgrade cost and level
        cost: 25,
        level: 0,
        case: 1,
    },
    upgrade3: {
        // first upgrade cost and level
        cost: 40,
        level: 0,
        case: 1,
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
    if (Decimal.compare(quarks.upgrade1.case, 1) == 0) {
        if (Decimal.compare(quarks.red.have, quarks.upgrade1.cost) >= 0) {
            quarks.red.have = Decimal.sub(quarks.red.have, quarks.upgrade1.cost);
            quarks.upgrade1.cost = Decimal.times(quarks.upgrade1.cost, 2);
            quarks.red.get = Decimal.times(quarks.red.get, 1.43);
            quarks.upgrade1.level = Decimal.add(quarks.upgrade1.level, 1);
            quarks.upgrade1.case = Decimal.add(quarks.upgrade1.case, 1);
            document.getElementById('upgrade1').innerHTML = notate(quarks.upgrade1.cost) + " <b>green</b> quark spin <br> Level: " + notate(quarks.upgrade1.level);
        };
    };
    if (Decimal.compare(quarks.upgrade1.case, 2) == 0) {
        if (Decimal.compare(quarks.green.have, quarks.upgrade1.cost) >= 0) {
            quarks.green.have = Decimal.sub(quarks.green.have, quarks.upgrade1.cost);
            quarks.upgrade1.cost = Decimal.times(quarks.upgrade1.cost, 2);
            quarks.red.get = Decimal.times(quarks.red.get, 1.43);
            quarks.upgrade1.level = Decimal.add(quarks.upgrade1.level, 1);
            quarks.upgrade1.case = Decimal.add(quarks.upgrade1.case, 1);
            document.getElementById('upgrade1').innerHTML = notate(quarks.upgrade1.cost) + " <b>blue</b> quark spin <br> Level: " + notate(quarks.upgrade1.level);
        };
    };
    if (Decimal.compare(quarks.upgrade1.case, 3) == 0) {
        if (Decimal.compare(quarks.blue.have, quarks.upgrade1.cost) >= 0) {
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
    if (Decimal.compare(quarks.upgrade2.case, 1) == 0) {
        if (Decimal.compare(quarks.red.have, quarks.upgrade2.cost) >= 0) {
            quarks.red.have = Decimal.sub(quarks.red.have, quarks.upgrade2.cost);
            quarks.upgrade2.cost = Decimal.times(quarks.upgrade2.cost, 2);
            quarks.green.get = Decimal.times(quarks.green.get, 1.43);
            quarks.upgrade2.level = Decimal.add(quarks.upgrade2.level, 1);
            quarks.upgrade2.case = Decimal.add(quarks.upgrade2.case, 1);
            document.getElementById('upgrade2').innerHTML = notate(quarks.upgrade2.cost) + " <b>green</b> quark spin <br> Level: " + notate(quarks.upgrade2.level);
        };
    };
    if (Decimal.compare(quarks.upgrade2.case, 2) == 0) {
        if (Decimal.compare(quarks.green.have, quarks.upgrade2.cost) >= 0) {
            quarks.green.have = Decimal.sub(quarks.green.have, quarks.upgrade2.cost);
            quarks.upgrade2.cost = Decimal.times(quarks.upgrade2.cost, 3);
            quarks.green.get = Decimal.times(quarks.green.get, 1.73205);
            quarks.upgrade2.level = Decimal.add(quarks.upgrade2.level, 1);
            quarks.upgrade2.case = Decimal.add(quarks.upgrade2.case, 1);
            document.getElementById('upgrade2').innerHTML = notate(quarks.upgrade2.cost) + " <b>blue</b> quark spin <br> Level: " + notate(quarks.upgrade2.level);
        };
    };
    if (Decimal.compare(quarks.upgrade2.case, 3) == 0) {
        if (Decimal.compare(quarks.blue.have, quarks.upgrade2.cost) >= 0) {
            quarks.blue.have = Decimal.sub(quarks.blue.have, quarks.upgrade2.cost);
            quarks.upgrade2.cost = Decimal.times(quarks.upgrade2.cost, 1.5);
            quarks.green.get = Decimal.times(quarks.green.get, 1.2247);
            quarks.upgrade2.level = Decimal.add(quarks.upgrade2.level, 1);
            quarks.upgrade2.case = new Decimal(1);
            document.getElementById('upgrade2').innerHTML = notate(quarks.upgrade2.cost) + " <b>red</b> quark spin <br> Level: " + notate(quarks.upgrade2.level);
        };
    };
};

function Upgrade3() {
    if (Decimal.compare(quarks.upgrade3.case, 1) == 0) {
        if (Decimal.compare(quarks.red.have, quarks.upgrade3.cost) >= 0) {
            quarks.red.have = Decimal.sub(quarks.red.have, quarks.upgrade3.cost);
            quarks.upgrade3.cost = Decimal.times(quarks.upgrade3.cost, 2);
            quarks.blue.get = Decimal.times(quarks.blue.get, 1.43);
            quarks.upgrade3.level = Decimal.add(quarks.upgrade3.level, 1);
            quarks.upgrade3.case = Decimal.add(quarks.upgrade3.case, 1);
            document.getElementById('upgrade3').innerHTML = notate(quarks.upgrade3.cost) + " <b>green</b> quark spin <br> Level: " + notate(quarks.upgrade3.level);
        };
    };
    if (Decimal.compare(quarks.upgrade3.case, 2) == 0) {
        if (Decimal.compare(quarks.green.have, quarks.upgrade3.cost) >= 0) {
            quarks.green.have = Decimal.sub(quarks.green.have, quarks.upgrade3.cost);
            quarks.upgrade3.cost = Decimal.times(quarks.upgrade3.cost, 3);
            quarks.blue.get = Decimal.times(quarks.blue.get, 1.73205);
            quarks.upgrade3.level = Decimal.add(quarks.upgrade3.level, 1);
            quarks.upgrade3.case = Decimal.add(quarks.upgrade3.case, 1);
            document.getElementById('upgrade3').innerHTML = notate(quarks.upgrade3.cost) + " <b>blue</b> quark spin <br> Level: " + notate(quarks.upgrade3.level);
        };
    };
    if (Decimal.compare(quarks.upgrade3.case, 3) == 0) {
        if (Decimal.compare(quarks.blue.have, quarks.upgrade3.cost) >= 0) {
            quarks.blue.have = Decimal.sub(quarks.blue.have, quarks.upgrade3.cost);
            quarks.upgrade3.cost = Decimal.times(quarks.upgrade3.cost, 4);
            quarks.blue.get = Decimal.times(quarks.blue.get, 2);
            quarks.upgrade3.level = Decimal.add(quarks.upgrade3.level, 1);
            quarks.upgrade3.case = new Decimal(1);
            document.getElementById('upgrade3').innerHTML = notate(quarks.upgrade3.cost) + " <b>red</b> quark spin <br> Level: " + notate(quarks.upgrade3.level);
        };
    };
};

function notate(n) {
    n = new Decimal(n);
    var e = n.exponent;
    if (e < 3) return (n.mantissa * Math.pow(10, e)).toFixed(0);
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
}

var mainGameLoop = window.setInterval(function () {
    // ...every tick.
    UpdateUI()
}, 1);

var mainGameLoop = window.setInterval(function () {
    addBlue()
}, 1000);

var mainGameLoop = window.setInterval(function () {
    addGreen()
}, 1000);

var mainGameLoop = window.setInterval(function () {
    addRed()
}, 1000);
