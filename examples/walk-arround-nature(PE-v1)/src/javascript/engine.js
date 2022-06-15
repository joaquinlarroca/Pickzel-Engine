let Settings = {
    gameName: 'PICKZEL Engine',
    debug: false, // Puede Ser false true
    debugTestImage: false, // Puede Ser false true
    startScreen: true, // Entre true o false
    audioVolume: 0.5, //Valor entre 0.0 y 1.0 (0.0 = 0% y 1.0 = 100%)
    strangeValues: false, // Puede ser false true
    isMobileCompatible: true, // Puede ser false true
    forceMobileCTRLOnPC: true, // Puede ser false true
}
//! Varibiales con colores
let Colors = {
    BlockBlank: 'transparent'
}
let bit1 = false;
let bit2 = false;
let bit3 = false;
let bit4 = false;
let bit5 = false;
let debugChecked = false;
let TextDisplay = "My friend you debug?";
let debugText = 0;
let debugTextCheck = false;
//!A 0-9
const A0 = document.getElementById('A0').style;
const A1 = document.getElementById('A1').style;
const A2 = document.getElementById('A2').style; 
const A3 = document.getElementById('A3').style;
const A4 = document.getElementById('A4').style;
const A5 = document.getElementById('A5').style;
const A6 = document.getElementById('A6').style;
const A7 = document.getElementById('A7').style;
const A8 = document.getElementById('A8').style;
const A9 = document.getElementById('A9').style;
//!B 0-9
const B0 = document.getElementById('B0').style;
const B1 = document.getElementById('B1').style;
const B2 = document.getElementById('B2').style;
const B3 = document.getElementById('B3').style;
const B4 = document.getElementById('B4').style;
const B5 = document.getElementById('B5').style;
const B6 = document.getElementById('B6').style;
const B7 = document.getElementById('B7').style;
const B8 = document.getElementById('B8').style;
const B9 = document.getElementById('B9').style;
//!C 0-9
const C0 = document.getElementById('C0').style;
const C1 = document.getElementById('C1').style;
const C2 = document.getElementById('C2').style;
const C3 = document.getElementById('C3').style;
const C4 = document.getElementById('C4').style;
const C5 = document.getElementById('C5').style;
const C6 = document.getElementById('C6').style;
const C7 = document.getElementById('C7').style;
const C8 = document.getElementById('C8').style;
const C9 = document.getElementById('C9').style;
//!D 0-9
const D0 = document.getElementById('D0').style;
const D1 = document.getElementById('D1').style;
const D2 = document.getElementById('D2').style;
const D3 = document.getElementById('D3').style;
const D4 = document.getElementById('D4').style;
const D5 = document.getElementById('D5').style;
const D6 = document.getElementById('D6').style;
const D7 = document.getElementById('D7').style;
const D8 = document.getElementById('D8').style;
const D9 = document.getElementById('D9').style;
//!E 0-9
const E0 = document.getElementById('E0').style;
const E1 = document.getElementById('E1').style;
const E2 = document.getElementById('E2').style;
const E3 = document.getElementById('E3').style;
const E4 = document.getElementById('E4').style;
const E5 = document.getElementById('E5').style;
const E6 = document.getElementById('E6').style;
const E7 = document.getElementById('E7').style;
const E8 = document.getElementById('E8').style;
const E9 = document.getElementById('E9').style;
//!F 0-9
const F0 = document.getElementById('F0').style;
const F1 = document.getElementById('F1').style;
const F2 = document.getElementById('F2').style;
const F3 = document.getElementById('F3').style;
const F4 = document.getElementById('F4').style;
const F5 = document.getElementById('F5').style;
const F6 = document.getElementById('F6').style;
const F7 = document.getElementById('F7').style;
const F8 = document.getElementById('F8').style;
const F9 = document.getElementById('F9').style;
//!G 0-9
const G0 = document.getElementById('G0').style;
const G1 = document.getElementById('G1').style;
const G2 = document.getElementById('G2').style;
const G3 = document.getElementById('G3').style;
const G4 = document.getElementById('G4').style;
const G5 = document.getElementById('G5').style;
const G6 = document.getElementById('G6').style;
const G7 = document.getElementById('G7').style;
const G8 = document.getElementById('G8').style;
const G9 = document.getElementById('G9').style;
//!H 0-9
const H0 = document.getElementById('H0').style;
const H1 = document.getElementById('H1').style;
const H2 = document.getElementById('H2').style;
const H3 = document.getElementById('H3').style;
const H4 = document.getElementById('H4').style;
const H5 = document.getElementById('H5').style;
const H6 = document.getElementById('H6').style;
const H7 = document.getElementById('H7').style;
const H8 = document.getElementById('H8').style;
const H9 = document.getElementById('H9').style;
//!I 0-9
const I0 = document.getElementById('I0').style;
const I1 = document.getElementById('I1').style;
const I2 = document.getElementById('I2').style;
const I3 = document.getElementById('I3').style;
const I4 = document.getElementById('I4').style;
const I5 = document.getElementById('I5').style;
const I6 = document.getElementById('I6').style;
const I7 = document.getElementById('I7').style;
const I8 = document.getElementById('I8').style;
const I9 = document.getElementById('I9').style;
//!J 0-9
const J0 = document.getElementById('J0').style;
const J1 = document.getElementById('J1').style;
const J2 = document.getElementById('J2').style;
const J3 = document.getElementById('J3').style;
const J4 = document.getElementById('J4').style;
const J5 = document.getElementById('J5').style;
const J6 = document.getElementById('J6').style;
const J7 = document.getElementById('J7').style;
const J8 = document.getElementById('J8').style;
const J9 = document.getElementById('J9').style;
const AllGrid = [
    A0,A1,A2,A3,A4,A5,A6,A7,A8,A9,
    B0,B1,B2,B3,B4,B5,B6,B7,B8,B9,
    C0,C1,C2,C3,C4,C5,C6,C7,C8,C9,
    D0,D1,D2,D3,D4,D5,D6,D7,D8,D9,
    E0,E1,E2,E3,E4,E5,E6,E7,E8,E9,
    F0,F1,F2,F3,F4,F5,F6,F7,F8,F9,
    G0,G1,G2,G3,G4,G5,G6,G7,G8,G9,
    H0,H1,H2,H3,H4,H5,H6,H7,H8,H9,
    I0,I1,I2,I3,I4,I5,I6,I7,I8,I9,
    J0,J1,J2,J3,J4,J5,J6,J7,J8,J9
];
const AllStringGrid = [
    "A0","A1","A2","A3","A4","A5","A6","A7","A8","A9",
    "B0","B1","B2","B3","B4","B5","B6","B7","B8","B9",
    "C0","C1","C2","C3","C4","C5","C6","C7","C8","C9",
    "D0","D1","D2","D3","D4","D5","D6","D7","D8","D9",
    "E0","E1","E2","E3","E4","E5","E6","E7","E8","E9",
    "F0","F1","F2","F3","F4","F5","F6","F7","F8","F9",
    "G0","G1","G2","G3","G4","G5","G6","G7","G8","G9",
    "H0","H1","H2","H3","H4","H5","H6","H7","H8","H9",
    "I0","I1","I2","I3","I4","I5","I6","I7","I8","I9",
    "J0","J1","J2","J3","J4","J5","J6","J7","J8","J9"
];
const validBit = [
    1,2,3,4,5
];
const validKeys = [
    "0","1","2","3","4","5","6","7","8","9",
    "Q","W","E","R","T","Y","U","I","O","P",
    "A","S","D","F","G","H","J","K","L","Z",
    "X","C","V","B","N","M","q","w","e","r",
    "t","y","u","i","o","p","a","s","d","f",
    "g","h","j","k","l","z","x","c","v","b",
    "n","m","ArrowUp","ArrowLeft","ArrowRight","ArrowDown"
    ,"Tab","Backspace","Enter","Shift","Control","Alt"," "
];
const validMobileKeys = [
    "up","left","right","down","a","b","x","menu"
];
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
//!Ejecutar
setInterval(function () {
    CheckDebugMode();
    if(Settings.debug == false){
        debugChecked = false;
    }
    if(Settings.forceMobileCTRLOnPC == true){
        if(vw > 1025 && vh > 900){
            document.getElementById("up").innerText = "W";
            document.getElementById("down").innerText = "S";
            document.getElementById("left").innerText = "A";
            document.getElementById("right").innerText = "D";
            document.getElementById("a").innerText = "Q";
            document.getElementById("b").innerText = "E";
            document.getElementById("x").innerText = "Z";
            document.getElementById("menu").innerText = "X";
            document.getElementById('MobileCTRL').style.display = "initial";
        }
    }
    if(Settings.isMobileCompatible == false){
        document.getElementById('MobileCTRL').style.display = "none";
    }
})
//!FUNCIONES
let repeated1 = false;
let repeated2 = false;
let repeated3 = false;
let repeated4 = false;
let repeated5 = false;
let repeated6 = false;
let repeated7 = false;
let repeated8 = false;
let repeated9 = false;
let repeated10 = false;
let repeated11 = false;
let repeated12 = false;
let repeated13 = false;
let repeated14 = false;
let repeated15 = false;
let locked = false;
function errorHandler(errorID, details) {
        //!ERROR LIST
        let errorList = [
            "PICKZEL ENGINE MADE BY JOAQUIN LARROCA 6/3/2022",
            "Given pixel not found or not valid pixel",
            "Given color not found",
            "Given image URL not found or failed to load",
            "Rotation null, undefined or not a number",
            "Rotation is a strange value, turn it on to use " + details + " degree/s as a rotation value",
            "Bit is null, undefined or not a number from 1 to 5",
            "Text is null, undefined or empty",
            "Time is null, undefined, not a number or not beetwen 0 and 10000",
            "PlaybackRate is not from 0.1 to 1 or is null, undefined or not a number",
            "Key is not in "+ details +"KeyCodesList.txt, empty, null or not a string",
            "Code to execute is null, undefined or not a string",
            "Opacity value is not a number or is not between 0 and 1",
        ];
        if(locked == false){
            console.log("Try reading the documentation: \n"+ "%chttps://github.com/joaquinlarroca/Pickzel-Engine/blob/main/README.md", "color:#0095ff; font-weight:bolder;");
            locked = true;
        }
    if(errorID == 1 && repeated1 == false){
        repeated1 = true;
        console.error("Error "+ errorID +" : " + errorList[errorID]); 
    }
    else{
        if(errorID == 2 && repeated2 == false){
            repeated2 = true;
            console.error("Error "+ errorID +" : " + errorList[errorID]); 
        }
        else{
            if(errorID == 3 && repeated3 == false){
                repeated3 = true;
                console.error("Error "+ errorID +" : " + errorList[errorID]); 
            }
            else{
                if(errorID == 4 && repeated4 == false){
                    repeated4 = true;
                    console.error("Error "+ errorID +" : " + errorList[errorID]);
                }
                else{
                    if(errorID == 5 && repeated5 == false){
                        repeated5 = true;
                        console.error("Error "+ errorID +" : " + errorList[errorID]);
                    }
                    else{
                        if(errorID == 6 && repeated6 == false){
                            repeated6 = true;
                            console.error("Error "+ errorID +" : " + errorList[errorID]);
                        }
                        else{
                            if(errorID == 7 && repeated7 == false){
                                repeated7 = true;
                                console.error("Error "+ errorID +" : " + errorList[errorID]);
                            }
                            else{
                                if(errorID == 8 && repeated8 == false){
                                    repeated8 = true;
                                    console.error("Error "+ errorID +" : " + errorList[errorID]);
                                }
                                else{
                                    if(errorID == 9 && repeated9 == false){
                                        repeated9 = true;
                                        console.error("Error "+ errorID +" : " + errorList[errorID]);
                                    }
                                    else{
                                        if(errorID == 10 && repeated10 == false){
                                            repeated10 = true;
                                            console.error("Error "+ errorID +" : " + errorList[errorID]);
                                        }
                                        else{
                                            if(errorID == 11 && repeated11 == false){
                                                repeated11 = true;
                                                console.error("Error "+ errorID +" : " + errorList[errorID]);
                                            }
                                            else{
                                                if(errorID == 12 && repeated12 == false){
                                                    repeated12 = true;
                                                    console.error("Error "+ errorID +" : " + errorList[errorID]);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
function CheckDebugMode(){
    if(Settings.debug == true && debugChecked == false){
        debugChecked = true;
        debugTextCheck = false
        document.documentElement.style.setProperty('--OutlineDebug', '1px solid rgb(90, 90, 90)');
        console.warn('Debug Mode \n Active');
        document.getElementById("textShown").style.fontSize = "3vmin";
        document.getElementById("A0").innerText = "A0";
        document.getElementById("A1").innerText = "1";
        document.getElementById("A2").innerText = "2";
        document.getElementById("A3").innerText = "3";
        document.getElementById("A4").innerText = "4";
        document.getElementById("A5").innerText = "5";
        document.getElementById("A6").innerText = "6";
        document.getElementById("A7").innerText = "7";
        document.getElementById("A8").innerText = "8";
        document.getElementById("A9").innerText = "9";
        document.getElementById("B0").innerText = "B";
        document.getElementById("C0").innerText = "C";
        document.getElementById("D0").innerText = "D";
        document.getElementById("E0").innerText = "E";
        document.getElementById("F0").innerText = "F";
        document.getElementById("G0").innerText = "G";
        document.getElementById("H0").innerText = "H";
        document.getElementById("I0").innerText = "I";
        document.getElementById("J0").innerText = "J";
        debugText = setInterval(function(){
            setText("<a style='color:lightskyblue;'>DEBUG</a><br>Vol:" + Settings.audioVolume + "<br>BIT's: 1: " + bit1 + " 2: " + bit2 +" 3: " + bit3 +" 4: " + bit4 + " 5: " + bit5 + "<br> Text: "+ TextDisplay)
        },50);
    }
    else{
        if(Settings.debug == false && debugChecked == false && debugTextCheck == false){
            debugTextCheck = true
            clearInterval(debugText);
            document.getElementById("A1").innerText = "";
            document.getElementById("A2").innerText = "";
            document.getElementById("A3").innerText = "";
            document.getElementById("A4").innerText = "";
            document.getElementById("A5").innerText = "";
            document.getElementById("A6").innerText = "";
            document.getElementById("A7").innerText = "";
            document.getElementById("A8").innerText = "";
            document.getElementById("A9").innerText = "";
            document.getElementById("B0").innerText = "";
            document.getElementById("A0").innerText = "";
            document.getElementById("C0").innerText = "";
            document.getElementById("D0").innerText = "";
            document.getElementById("E0").innerText = "";
            document.getElementById("F0").innerText = "";
            document.getElementById("G0").innerText = "";
            document.getElementById("H0").innerText = "";
            document.getElementById("I0").innerText = "";
            document.getElementById("J0").innerText = "";
            document.documentElement.style.setProperty('--OutlineDebug', 'transparent');
            document.getElementById('textShown').innerText = "";
            document.getElementById('textC').style.display = 'none'
            TextDisplay = "";
        }
    }
};
function StartScreen(){
    if(Settings.startScreen == true){
            document.getElementById('ss').style.display = "flex";
            document.getElementById('gameTitle').innerHTML = Settings.gameName;
            document.title = Settings.gameName;
            document.getElementById('playButton').addEventListener('click',function(){
            document.getElementById('ss').style.display = "none";
            Settings.startScreen = false;
            StartContent();
        });
    }
    else{
        if(Settings.startScreen == false){
        StartContent();
        }
    }
}
function ScreenClear(){
    if(Settings.startScreen !== true){
    //!A 0-9
    A0.background = Colors.BlockBlank;
    A1.background = Colors.BlockBlank;
    A2.background = Colors.BlockBlank;
    A3.background = Colors.BlockBlank;
    A4.background = Colors.BlockBlank;
    A5.background = Colors.BlockBlank;
    A6.background = Colors.BlockBlank;
    A7.background = Colors.BlockBlank;
    A8.background = Colors.BlockBlank;
    A9.background = Colors.BlockBlank;
    //!B 0-9
    B1.background = Colors.BlockBlank;
    B0.background = Colors.BlockBlank;
    B2.background = Colors.BlockBlank;
    B3.background = Colors.BlockBlank;
    B4.background = Colors.BlockBlank;
    B5.background = Colors.BlockBlank;
    B6.background = Colors.BlockBlank;
    B7.background = Colors.BlockBlank;
    B8.background = Colors.BlockBlank;
    B9.background = Colors.BlockBlank;
    //!C 0-9
    C0.background = Colors.BlockBlank;
    C1.background = Colors.BlockBlank;
    C2.background = Colors.BlockBlank;
    C3.background = Colors.BlockBlank;
    C4.background = Colors.BlockBlank;
    C5.background = Colors.BlockBlank;
    C6.background = Colors.BlockBlank;
    C7.background = Colors.BlockBlank;
    C8.background = Colors.BlockBlank;
    C9.background = Colors.BlockBlank;
    //!D 0-9
    D0.background = Colors.BlockBlank;
    D1.background = Colors.BlockBlank;
    D2.background = Colors.BlockBlank;
    D3.background = Colors.BlockBlank;
    D4.background = Colors.BlockBlank;
    D5.background = Colors.BlockBlank;
    D6.background = Colors.BlockBlank;
    D7.background = Colors.BlockBlank;
    D8.background = Colors.BlockBlank;
    D9.background = Colors.BlockBlank;
    //!E 0-9
    E0.background = Colors.BlockBlank;
    E1.background = Colors.BlockBlank;
    E2.background = Colors.BlockBlank;
    E3.background = Colors.BlockBlank;
    E4.background = Colors.BlockBlank;
    E5.background = Colors.BlockBlank;
    E6.background = Colors.BlockBlank;
    E7.background = Colors.BlockBlank;
    E8.background = Colors.BlockBlank;
    E9.background = Colors.BlockBlank;
    //!F 0-9
    F0.background = Colors.BlockBlank;
    F1.background = Colors.BlockBlank;
    F2.background = Colors.BlockBlank;
    F3.background = Colors.BlockBlank;
    F4.background = Colors.BlockBlank;
    F5.background = Colors.BlockBlank;
    F6.background = Colors.BlockBlank;
    F7.background = Colors.BlockBlank;
    F8.background = Colors.BlockBlank;
    F9.background = Colors.BlockBlank;
    //!G 0-9
    G0.background = Colors.BlockBlank;
    G1.background = Colors.BlockBlank;
    G2.background = Colors.BlockBlank;
    G3.background = Colors.BlockBlank;
    G4.background = Colors.BlockBlank;
    G5.background = Colors.BlockBlank;
    G6.background = Colors.BlockBlank;
    G7.background = Colors.BlockBlank;
    G8.background = Colors.BlockBlank;
    G9.background = Colors.BlockBlank;
    //!H 0-9
    H0.background = Colors.BlockBlank;
    H1.background = Colors.BlockBlank;
    H2.background = Colors.BlockBlank;
    H3.background = Colors.BlockBlank;
    H4.background = Colors.BlockBlank;
    H5.background = Colors.BlockBlank;
    H6.background = Colors.BlockBlank;
    H7.background = Colors.BlockBlank;
    H8.background = Colors.BlockBlank;
    H9.background = Colors.BlockBlank;
    //!I 0-9
    I0.background = Colors.BlockBlank;
    I1.background = Colors.BlockBlank;
    I2.background = Colors.BlockBlank;
    I3.background = Colors.BlockBlank;
    I4.background = Colors.BlockBlank;
    I5.background = Colors.BlockBlank;
    I6.background = Colors.BlockBlank;
    I7.background = Colors.BlockBlank;
    I8.background = Colors.BlockBlank;
    I9.background = Colors.BlockBlank;
    //!J 0-9
    J0.background = Colors.BlockBlank;
    J1.background = Colors.BlockBlank;
    J2.background = Colors.BlockBlank;
    J3.background = Colors.BlockBlank;
    J4.background = Colors.BlockBlank;
    J5.background = Colors.BlockBlank;
    J6.background = Colors.BlockBlank;
    J7.background = Colors.BlockBlank;
    J8.background = Colors.BlockBlank;
    J9.background = Colors.BlockBlank;
    }
}
function setPixelColor(pixel,color,opacity){
    if(Settings.startScreen !== true){
    pixel.background = "";
    if(AllGrid.includes(pixel) == false){
        errorHandler(1);
    }
    else{
        let supported = CSS.supports("color:" + color);
        if(supported == false){
            errorHandler(2);
        }
        else{
            if(typeof opacity !== 'number' || opacity < 0 || opacity > 1){
                errorHandler(12);
            }
            else{
                pixel.opacity = opacity;
                pixel.backgroundColor = color
            }
        }
    }
}
}
function setPixelImage(pixel,image_route,rotation,opacity){
    if(Settings.startScreen !== true){
    pixel.background = "";
    if(AllGrid.includes(pixel) == false){
        errorHandler(1);
    }
    else{
        if(Settings.debugTestImage == true && Settings.debug == true){
            pixel.backgroundImage = 'url(src/img/testTile.png)';
            pixel.backgroundSize = 'cover';
        }
        else{
            pixel.backgroundImage = 'url(' + image_route + ')';
            pixel.backgroundSize = 'cover';
        };
        if(Settings.strangeValues == true){
            if(rotation != undefined || rotation != null){
                pixel.transform = "rotate("+ rotation +"deg)";
            }
            else{
                errorHandler(4);
            }
        }
        else{
            if(rotation != undefined || rotation != null || typeof rotation === 'number'){
                if(rotation == 0 || rotation == 90 || rotation == 180 || rotation == 270 || rotation == 360){
                pixel.transform = "rotate("+ rotation +"deg)";
                }
                else{
                    errorHandler(5, rotation);
                }
            }
            else{
                errorHandler(4);
            }

            if(typeof opacity !== 'number' || opacity < 0 || opacity > 1){
                errorHandler(12);
            }
            else{
                pixel.opacity = opacity;
            }
        };
    }
    };
    var image = new Image();
    image.src = image_route;
    image.onerror = function() {
        errorHandler(3);
    }
}
function playAudio(bit,src,playBackRate){
    if(Settings.startScreen !== true){
    if(bit == null || bit == undefined || validBit.includes(bit) == false){
        errorHandler(6);
    }
    if(playBackRate > 2 || playBackRate < 0 || playBackRate == null || playBackRate == undefined || typeof playBackRate !== 'number'){
        errorHandler(9);
    }
        else{
            if(bit == 1){
                document.getElementById('bit1').innerHTML = '<audio id="'+ bit +'" src=' + src +'>';
                document.getElementById(bit).volume = Settings.audioVolume;
                document.getElementById(bit).playbackRate = playBackRate;
                document.getElementById(bit).play();
                bit1 = true;
            }
            if(bit == 2){
                document.getElementById('bit2').innerHTML = '<audio id="'+ bit +'" src=' + src +'>';
                document.getElementById(bit).volume = Settings.audioVolume;
                document.getElementById(bit).playbackRate = playBackRate;
                document.getElementById(bit).play();
                bit2 = true;
            }
            if(bit == 3){
                document.getElementById('bit3').innerHTML = '<audio id="'+ bit +'" src=' + src +'>';
                document.getElementById(bit).volume = Settings.audioVolume;
                document.getElementById(bit).playbackRate = playBackRate;
                document.getElementById(bit).play();
                bit3 = true;
            }
            if(bit == 4){
                document.getElementById('bit4').innerHTML = '<audio id="'+ bit +'" src=' + src +'>';
                document.getElementById(bit).volume = Settings.audioVolume;
                document.getElementById(bit).playbackRate = playBackRate;
                document.getElementById(bit).play();
                bit4 = true;
            }
            if(bit == 5){
                document.getElementById('bit5').innerHTML = '<audio id="'+ bit +'" src=' + src +'>';
                document.getElementById(bit).volume = Settings.audioVolume;
                document.getElementById(bit).playbackRate = playBackRate;
                document.getElementById(bit).play();
                bit5 = true;
            }
        }
    }
    }
setInterval(function(){
    if(bit1 == true){
        document.getElementById("1").addEventListener("ended", function(){
            bit1 = false;
        });};
    if(bit2 == true){
        document.getElementById("2").addEventListener("ended", function(){
        bit2 = false;
    });};
    if(bit3 == true){
        document.getElementById("3").addEventListener("ended", function(){
            bit3 = false;
        });}
    if(bit4 == true){
        document.getElementById("4").addEventListener("ended", function(){
            bit4 = false;
        });};
    if(bit5 == true){
        document.getElementById("5").addEventListener("ended", function(){
            bit5 = false;
        });};
},50);
function stopAudio(bit){
    if(Settings.startScreen !== true){
    if(bit == null || bit == undefined || validBit.includes(bit) == false){
        errorHandler(6);
    }
    else{
    if(bit == 1){
        document.getElementById('bit1').innerHTML = ''
        bit1 = false;
    }
    if(bit == 2){
        document.getElementById('bit2').innerHTML = ''
        bit2 = false;
    }
    if(bit == 3){
        document.getElementById('bit3').innerHTML = ''
        bit3 = false;
    }
    if(bit == 4){
        document.getElementById('bit4').innerHTML = ''
        bit4 = false;
    }
    if(bit == 5){
        document.getElementById('bit5').innerHTML = ''
        bit5 = false;
    }
}
}
}
function clearAudio(){
    if(Settings.startScreen !== true){
    for(let i = 1; i < 6; i++){
        eval("stopAudio("+ i +");")
    }
}
}
function showText(text,time){
    if(Settings.startScreen !== true){
    if(text == null || text == undefined || text == '' || typeof text !== "string"){
        errorHandler(7);
    }
    else{
        if(time == null || time == undefined || typeof time === "string" || time < 0 || isNaN(time) == true || time > 10000){
            errorHandler(8);
        }
        else{
            clearTimeout()
            document.getElementById('textC').style.display = 'flex'
            document.getElementById('textShown').innerText = text;
            TextDisplay = text;
            setTimeout(function(){
                document.getElementById('textShown').innerText = "";
                document.getElementById('textC').style.display = 'none'
                TextDisplay = "";
            },time*1000)
        }
    }
    }
}
function showTexOnPixel(pixel,text){
    if(Settings.startScreen !== true){
    if(pixel == null || pixel == undefined || AllStringGrid.includes(pixel) == false){
        errorHandler(1);
    }
    else{
        if(text == null || text == undefined || text.length >= 5){
            errorHandler(13);
        }
        else{
            document.getElementById(pixel).innerText = text;
        }
    }
}
}
function clearText(){
    if(Settings.startScreen !== true){
    document.getElementById('textShown').innerText = "";
    document.getElementById('textC').style.display = 'none'
    TextDisplay = "";
    }
}
function clearTextOnPixel(pixel){
    if(Settings.startScreen !== true){
    if(pixel == null || pixel == undefined || AllStringGrid.includes(pixel) == false){
        errorHandler(1);
    }
    else{
        document.getElementById(pixel).innerText = "";
    }
}
}
function setText(text){
    if(Settings.startScreen !== true){
    if(text == null || text == undefined || text == '' || typeof text !== "string"){
        errorHandler(7);
    }
    else{
        document.getElementById('textC').style.display = 'flex'
        document.getElementById('textShown').innerHTML = text;
    }
}
}
function whenKey(key,execute){
    if(Settings.startScreen !== true){
    if(key == null || key == undefined || key == '' || typeof key !== "string" || validKeys.includes(key) == false){
        errorHandler(10,"");
    }
    else{
        if(execute == null || execute == undefined || typeof execute !== "string" || execute == ''){
            errorHandler(11);
        }
        else{
            document.addEventListener("keyup", function(e){
                if(e.key == key || e.key == key.toLowerCase() || e.key == key.toUpperCase()){
                    eval(execute);
                }
            })
        }
    }
}
}
function whenMouseOver(pixel,execute){
    if(Settings.startScreen !== true){
    if(AllStringGrid.includes(pixel) == false){
        errorHandler(1);
    }
    else{
        if(execute == null || execute == undefined || typeof execute !== "string" || execute == ''){
            errorHandler(11);
        }
        else{
            document.addEventListener("mouseover", function(e){
                if(e.target.id == pixel){
                    eval(execute);
                }
            })
        }
    }
}
}
function whenMouseClick(pixel,execute){
    if(Settings.startScreen !== true){
    if(AllStringGrid.includes(pixel) == false){
        errorHandler(1);
    }
    else{
        if(execute == null || execute == undefined || typeof execute !== "string" || execute == ''){
            errorHandler(11);
        }
        else{
            document.addEventListener("click", function(e){
                if(Settings.debug == true){
                    console.log("ID:",e.target.id," Y:",e.clientY," X:",e.clientX)
                }
                if(e.target.id == pixel){
                    eval(execute);
                }
                })
            }
        }
    }
}
//console.log("Sica :D" + "DO NOT ERASE THIS LINE!")
function whenMobileKey(key,execute){
    if(Settings.startScreen !== true){
    if(key == null || key == undefined || key == '' || typeof key !== "string" || validMobileKeys.includes(key) == false){
        errorHandler(10,"Mobile");
    }
    else{
        if(execute == null || execute == undefined || typeof execute !== "string" || execute == ''){
            errorHandler(11);
        }
        else{
            document.addEventListener("click", function(e){
                if(e.target.id == key){
                    document.getElementById(key).tabIndex = -1;
                }
                })
                if(Settings.forceMobileCTRLOnPC == true){
                    document.body.addEventListener("keyup", function(e){
                        e.key = e.key.toLocaleLowerCase()
                        if(e.key == "w"){
                            document.getElementById("up").tabIndex = -1
                        }
                        if(e.key == "a"){
                            document.getElementById("left").tabIndex = -1
                        }
                        if(e.key == "s"){
                            document.getElementById("down").tabIndex = -1
                        }
                        if(e.key == "d"){
                            document.getElementById("right").tabIndex = -1
                        }
                        if(e.key == "q"){
                            document.getElementById("a").tabIndex = -1
                        }
                        if(e.key == "e"){
                            document.getElementById("b").tabIndex = -1
                        }
                        if(e.key == "z"){
                            document.getElementById("x").tabIndex = -1
                        }
                        if(e.key == "x"){
                            document.getElementById("menu").tabIndex = -1
                        }
                    })
                }
            if(key == "up"){
                if(document.getElementById("up").tabIndex == -1){
                    document.getElementById("up").tabIndex = 0;
                    eval(execute);
                }
            }
            if(key == "down"){
                if(document.getElementById("down").tabIndex == -1){
                    document.getElementById("down").tabIndex = 0;
                    eval(execute);
                }
            }
            if(key == "left"){
                if(document.getElementById("left").tabIndex == -1){
                    document.getElementById("left").tabIndex = 0;
                    eval(execute);
                }
            }
            if(key == "right"){
                if(document.getElementById("right").tabIndex == -1){
                    document.getElementById("right").tabIndex = 0;
                    eval(execute);
                }
            }   
            if(key == "a"){
                if(document.getElementById("a").tabIndex == -1){
                    document.getElementById("a").tabIndex = 0;
                    eval(execute);
                }
            }
            if(key == "b"){
                if(document.getElementById("b").tabIndex == -1){
                    document.getElementById("b").tabIndex = 0;
                    eval(execute);
                }
            }
            if(key == "x"){
                if(document.getElementById("x").tabIndex == -1){
                    document.getElementById("x").tabIndex = 0;
                    eval(execute);
                }
            }
            if(key == "menu"){
                if(document.getElementById("menu").tabIndex == -1){
                    document.getElementById("menu").tabIndex = 0;
                    eval(execute);
                }
            }
        }
    }
}
}