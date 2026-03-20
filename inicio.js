class Inicio extends Phaser.Scene{

constructor(){
super("Inicio");
}

preload(){
    this.load.image("fondo","../assets/BINICIO.jpg");
    this.load.image("fondo2","../assets/FGIRASOLES.jpg");
    this.load.image("bee","../assets/BEE1.png");
    this.load.image("bee2","../assets/BEE2.png");
    this.load.image("bee3","../assets/BEE3.png");
    this.load.image("bee4","../assets/BEE4.png");
    this.load.image("pipe","../assets/PANAL.png");
    this.load.image("boton", "../assets/Boton.png");
    this.load.audio("Music", "../assets/musica.mp3");
}

create(){

let ancho = this.scale.width;
let alto = this.scale.height;

this.musica = this.sound.add("Music", {
    loop: true,
    volume: 0.5
});

this.musica.play();
this.musica.setVolume(0.1);

this.add.image(ancho / 2, alto / 2, "fondo")
    .setDisplaySize(ancho, alto);


this.add.text(ancho / 2, alto * 0.38, "Flappy Bee", {
    fontSize: "40px",
    fill: "#ffffff",
    fontStyle: "bold",
    stroke: "#866c33",
    strokeThickness: 6,
}).setOrigin(0.5);


let botonImg = this.add.image(ancho / 2, alto * 0.6, "boton")
    .setOrigin(0.5)
    .setScale(0.8);

this.bee = this.add.sprite(ancho/6, alto*0.3, "bee4");

this.tweens.add({
    targets: this.bee,
    y: "+=20",
    duration: 800,
    yoyo: true,
    repeat: -1,
    ease: "Sine.easeInOut"
});


let botonTxt = this.add.text(ancho / 2, alto * 0.6, "Play", {
    fontSize: "32px",
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