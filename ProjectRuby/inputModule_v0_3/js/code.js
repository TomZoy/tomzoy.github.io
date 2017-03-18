/*production code goes here, myTests.html pulls this file for testing*/




/* base-code from https://github.com/wesbos/keycodes/blob/gh-pages/scripts.js */
/* other resources: */
// http://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
// http://stackoverflow.com/questions/27509/detecting-an-undefined-object-property
// http://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in
// http://stackoverflow.com/questions/9298839/is-it-possible-to-stop-javascript-execution



//maybe need this (or just re-implement it), for user feedback, so they can see ghosting; http://www.gigahype.com/nkey-rollover-test-page/
//or just show a list of key registered....


// creates a new exception type:
function FatalError(desc)
{
    Error.apply(this, arguments);
    this.description = desc;
}
FatalError.prototype = Object.create(Error.prototype);
// use it by; throw new FatalError("Something went badly wrong!");


//global variables
minLongpressDuration = 400; //variable to hold the short-longpress divider

var activeKeys = []; //what keys are actively being pressed

var outputJSON;

//mapping of key-codes and button-values
var keyCodes = {
    3: "break",
    8: "backspace / delete",
    9: "tab",
    12: 'clear',
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause/break",
    20: "caps lock",
    27: "escape",
    32: "spacebar",
    33: "page up",
    34: "page down",
    35: "end",
    36: "home ",
    37: "left arrow ",
    38: "up arrow ",
    39: "right arrow",
    40: "down arrow ",
    41: "select",
    42: "print",
    43: "execute",
    44: "Print Screen",
    45: "insert ",
    46: "delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    58: ":",
    59: "semicolon (firefox), equals",
    60: "<",
    61: "equals (firefox)",
    63: "ß",
    64: "@ (firefox)",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    91: "Windows Key / Left ⌘ / Chromebook Search key",
    92: "right window key ",
    93: "Windows Menu / Right ⌘",
    96: "numpad 0 ",
    97: "numpad 1 ",
    98: "numpad 2 ",
    99: "numpad 3 ",
    100: "numpad 4 ",
    101: "numpad 5 ",
    102: "numpad 6 ",
    103: "numpad 7 ",
    104: "numpad 8 ",
    105: "numpad 9 ",
    106: "multiply ",
    107: "add",
    108: "numpad period (firefox)",
    109: "subtract ",
    110: "decimal point",
    111: "divide ",
    112: "f1 ",
    113: "f2 ",
    114: "f3 ",
    115: "f4 ",
    116: "f5 ",
    117: "f6 ",
    118: "f7 ",
    119: "f8 ",
    120: "f9 ",
    121: "f10",
    122: "f11",
    123: "f12",
    124: "f13",
    125: "f14",
    126: "f15",
    127: "f16",
    128: "f17",
    129: "f18",
    130: "f19",
    131: "f20",
    132: "f21",
    133: "f22",
    134: "f23",
    135: "f24",
    144: "num lock ",
    145: "scroll lock",
    160: "^",
    161: '!',
    163: "#",
    164: '$',
    165: 'ù',
    166: "page backward",
    167: "page forward",
    169: "closing paren (AZERTY)",
    170: '*',
    171: "~ + * key",
    173: "minus (firefox), mute/unmute",
    174: "decrease volume level",
    175: "increase volume level",
    176: "next",
    177: "previous",
    178: "stop",
    179: "play/pause",
    180: "e-mail",
    181: "mute/unmute (firefox)",
    182: "decrease volume level (firefox)",
    183: "increase volume level (firefox)",
    186: "semi-colon / ñ",
    187: "equal sign ",
    188: "comma",
    189: "dash ",
    190: "period ",
    191: "forward slash / ç",
    192: "grave accent / ñ / æ",
    193: "?, / or °",
    194: "numpad period (chrome)",
    219: "open bracket ",
    220: "back slash ",
    221: "close bracket / å",
    222: "single quote / ø",
    223: "`",
    224: "left or right ⌘ key (firefox)",
    225: "altgr",
    226: "< /git >",
    230: "GNOME Compose Key",
    231: "ç",
    233: "XF86Forward",
    234: "XF86Back",
    255: "toggle touchpad"
};



// named class definition and constructor for Key objects
var Key = class Key {

    //constructor of the Key class
    constructor(code, value, start) {
        this.code = code;
        this.value = value;
        this.start = start;
        this.finish = undefined;
        this.duration = undefined;
        this.isLongPressed = undefined;
    }

    //built-in function to calcullate duration press
    //and if it qualifies as a long or short press
    calcDuration() {
        
        if (this.start && this.finish) {

            this.duration = this.finish - this.start;

            if (this.duration <=0)
            {
                throw new FatalError("instance parameter(s) start/finish INVALID! e01");
            }

            else if (this.duration >= minLongpressDuration) {
                this.isLongPressed = true;
            }
            else {
                this.isLongPressed = false;
            }
        }
        else
        {
            throw new FatalError("instance parameter(s) start/finish INVALID! e02");
        }

    }
};





//adds a new key to the active collection
function addActiveKey(Key)
{
    activeKeys.push(Key);

    //update DOM
    document.querySelector('.keycode-display').innerHTML = Key.code;
    document.querySelector('.text-display').innerHTML = Key.value || "key unknown";
};

//returns Returns the number of milliseconds since midnight Jan 1, 1970
function getTime()
{
    return Date.now();
}



//function to check if the code supplied is already on the active list
function isNewKey(code)
{

    if (activeKeys.length > 0)  //if there's more than 0 elements in the list
    {

        if (activeKeys[activeKeys.length - 1].code != code) //if the last key is not the same as the current one
        {
            return true;
        }

        else if (activeKeys[activeKeys.length - 1].finish !== undefined) //if the last key is the same as the current one, but that instance belongs to a different press
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    else
    {
        return true;
    }

}


//function to generate JSON output
function genOutput()
{
    return JSON.stringify(activeKeys);
}


//find the Key with the supplied key, that's currently being pressed
function findKey(sourceArray,code)
{

    if ((isNaN(code)) || (code <= 0)) {
        throw new FatalError("Invalid keycode! e03");
    }

    for (var i = 0; i < sourceArray.length; i++)
    {
        
        if (sourceArray[i].code == code && sourceArray[i].finish === undefined)
        {
            return sourceArray[i];
        }
    }
    throw new FatalError("Key not found! e04");
}


//function to draw the debug chart
function drawChart()
{
    var cLabels = [];
    var cData = [];

    //populate chart data
    for (var i = 0; i < activeKeys.length; i++) {
        cLabels.push(activeKeys[i].value.toUpperCase());
        cData.push(activeKeys[i].duration);
    }


    createChart(cLabels, cData); //dwar-call, function is in chartGenerator.js
}
