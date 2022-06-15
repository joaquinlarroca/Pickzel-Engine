//Variables globales
let Playerx = 5;
let screen = 0
let POSlocked = -1
function StartContent(){
    //Se ejecuta al cargar
    updatePos()
};
//Se ejecuta cada 50 milisegundos
setInterval(function(){
    whenMobileKey("right","movement('right')")
    whenMobileKey("left","movement('left')")
    if(Playerx == 0){
        setPixelImage(F0,"assets/images/merlinCharacter.png",0,1)
    }
    if(Playerx == 1){
        setPixelImage(F1,"assets/images/merlinCharacter.png",0,1)
    }
    if(Playerx == 2){
        setPixelImage(F2,"assets/images/merlinCharacter.png",0,1)
    }
    if(Playerx == 3){
        setPixelImage(F3,"assets/images/merlinCharacter.png",0,1)
    }
    if(Playerx == 4){
        setPixelImage(F4,"assets/images/merlinCharacter.png",0,1)
    }
    if(Playerx == 5){
        setPixelImage(F5,"assets/images/merlinCharacter.png",0,1)
    }
    if(Playerx == 6){
        setPixelImage(F6,"assets/images/merlinCharacter.png",0,1)
    }
    if(Playerx == 7){
        setPixelImage(F7,"assets/images/merlinCharacter.png",0,1)
    }
    if(Playerx == 8){
        setPixelImage(F8,"assets/images/merlinCharacter.png",0,1)
    }
    if(Playerx == 9){
        setPixelImage(F9,"assets/images/merlinCharacter.png",0,1)
    }
},50)
function movement(x){
    if(x == "left"){
        Playerx = Playerx - 1
    }
    if(x == "right"){
        Playerx = Playerx + 1
    }
    updatePlayer()
    updatePos()
}
function updatePlayer(){
    if(Playerx == 0 && screen == -1){
        Playerx = 1
    }
    if(Playerx == 9 && screen == 1){
        Playerx = 8
    }
    if(Playerx < 0){
        Playerx = 9
        screen--;
    }
    if(Playerx > 9){
        Playerx = 0
        screen++;
    }
}
function updatePos(){
    ScreenClear()
    if(screen == 0){

        setPixelImage(F2,"assets/images/Tiles/logTile.png",0,1);
        setPixelImage(E2,"assets/images/Tiles/logTile.png",0,1);
        setPixelImage(D2,"assets/images/Tiles/logTile.png",0,1);
        setPixelImage(C2,"assets/images/Tiles/leafTile.png",0,1);
        setPixelImage(B2,"assets/images/Tiles/leafTile.png",0,1);
        setPixelImage(C1,"assets/images/Tiles/leafTile.png",0,1);
        setPixelImage(C3,"assets/images/Tiles/leafTile.png",0,1);

        setPixelImage(G0,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G1,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G2,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G3,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G4,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G5,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G6,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G7,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G8,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G9,"assets/images/Tiles/grassTile.png",0,1);

        setPixelImage(H0,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H1,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H2,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H3,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H4,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H5,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H6,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H7,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H8,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H9,"assets/images/Tiles/dirtTile.png",0,1);

        setPixelImage(I9,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(I2,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I1,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I4,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(I3,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I6,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I5,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(I7,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(I0,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I8,"assets/images/Tiles/rockTile.png",0,1);

        setPixelImage(J0,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J1,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J2,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J3,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J4,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J5,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J6,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J7,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J8,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J9,"assets/images/Tiles/rockTile.png",0,1);
    }
    if(screen == -1){
        setPixelImage(A0,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(B0,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(C0,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(D0,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(E0,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(F0,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(G0,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(H0,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(I0,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(J0,"assets/images/Tiles/stoneTile1.png",90,1);

        setPixelImage(F6,"assets/images/Tiles/logTile.png",0,1);
        setPixelImage(E6,"assets/images/Tiles/logTile.png",180,1);
        setPixelImage(D6,"assets/images/Tiles/logTile.png",0,1);
        setPixelImage(C6,"assets/images/Tiles/leafTile.png",0,1);
        setPixelImage(B6,"assets/images/Tiles/leafTile.png",90,1);
        setPixelImage(C5,"assets/images/Tiles/leafTile.png",0,1);
        setPixelImage(C7,"assets/images/Tiles/leafTile.png",0,1);

        setPixelImage(G1,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G2,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G3,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G4,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G5,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G6,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G7,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G8,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G9,"assets/images/Tiles/grassTile.png",0,1);


        setPixelImage(H1,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H2,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H3,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H4,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H5,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H6,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H7,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H8,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H9,"assets/images/Tiles/dirtTile.png",0,1);

        setPixelImage(I1,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I2,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I3,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(I4,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I5,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I6,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(I7,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(I8,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I9,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J1,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J2,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J3,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J4,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J5,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J6,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J7,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J8,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J9,"assets/images/Tiles/rockTile.png",0,1);
    }
    if(screen == 1){
        setPixelImage(A9,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(B9,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(C9,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(D9,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(E9,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(F9,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(G9,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(H9,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(I9,"assets/images/Tiles/stoneTile1.png",90,1);
        setPixelImage(J9,"assets/images/Tiles/stoneTile1.png",90,1);

        setPixelImage(F6,"assets/images/Tiles/logTile.png",90,1);
        setPixelImage(F4,"assets/images/Tiles/logTile.png",90,1);
        setPixelImage(F5,"assets/images/Tiles/logTile.png",90,1);
        setPixelImage(F2,"assets/images/Tiles/leafTile.png",90,1);
        setPixelImage(F1,"assets/images/Tiles/leafTile.png",0,1);
        setPixelImage(F0,"assets/images/Tiles/leafTile.png",0,1);
        setPixelImage(E1,"assets/images/Tiles/leafTile.png",0,1);

        setPixelImage(G1,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G2,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G3,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G4,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G5,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G6,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G7,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(G8,"assets/images/Tiles/grassTile.png",0,1);


        setPixelImage(H1,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H2,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H3,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H4,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H5,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H6,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H7,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(H8,"assets/images/Tiles/dirtTile.png",0,1);

        setPixelImage(I1,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I2,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I3,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(I4,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I5,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I6,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(I7,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(I8,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(J1,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J2,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J3,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J4,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J5,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J6,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J7,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(J8,"assets/images/Tiles/rockTile.png",0,1);
        setPixelImage(G0,"assets/images/Tiles/grassTile.png",0,1);
        setPixelImage(H0,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(I0,"assets/images/Tiles/dirtTile.png",0,1);
        setPixelImage(J0,"assets/images/Tiles/rockTile.png",0,1);
    }
}
