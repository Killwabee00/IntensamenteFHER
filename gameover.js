class GameOver extends Phaser.Scene{

    constructor(){
        super("GameOver");
    }

    preload(){
    this.load.image("boton", "Boton.png");
}

create(data){

let ancho = this.scale.width;
let alto = this.scale.height;

this.add.image(ancho / 2, alto / 2,"fondo");

this.add.text(ancho / 2, alto * 0.35, "Game Over", {
    fontSize: "40px",
    fill: "#ffffff",
    fontStyle: "bold",
    stroke: "#866c33",
    strokeThickness: 6,
}).setOrigin(0.5);

this.add.text(ancho / 2, alto * 0.45,"Puntos: " + data.puntos,{ 
    fontSize: "30px",
    fill: "#ffffff",
    fontStyle: "bold",
    stroke: "#866c33",
    strokeThickness: 6,
}).setOrigin(0.5);

let botonImg = this.add.image(ancho / 2, alto * 0.6, "boton")
    .setOrigin(0.5)
    .setScale(0.8);


let botonTxt = this.add.text(ancho / 2, alto * 0.6, "Reintentar", {
    fontSize: "24px",
    color: "#ffffff",
    stroke: "#16522a",
    fontStyle: "bold",
    strokeThickness: 3,
}).setOrigin(0.5);

this.tweens.add({
    targets: botonImg,
    scale: 0.85,
    duration: 600,
    yoyo: true,
    repeat: -1
});


botonImg.setInteractive();

botonImg.on("pointerdown", () => {
    botonImg.setScale(0.7);
    this.scene.start("Juego");
});

botonTxt.setInteractive();

botonTxt.on("pointerdown", () => {
    this.scene.start("Juego");
});

}
}