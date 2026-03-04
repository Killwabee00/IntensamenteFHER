const config = {
    type: Phaser.AUTO,
    width: 360,
    height: 640,
    parent: 'juego',
    backgroundColor: "#86ade7",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        create: crear
    }
}

const game = new Phaser.Game(config)

let boton
let contador = 0
let textoContador
let textoEstado

let colores = [
    0x0000ff,
    0xff0000,
    0x00ff00,
    0xffff00,
    0xff00ff
]

let indiceColor = 0
let juegoTerminado = false

function crear(){

    // Creamos graphics
    boton = this.add.graphics()

    dibujarEstrella(boton, colores[indiceColor])

    // Área interactiva (círculo invisible)
    boton.setInteractive(
        new Phaser.Geom.Circle(180, 250, 80),
        Phaser.Geom.Circle.Contains
    )

    this.add.text(140, 240, "Haz clic", {
        fontSize: "20px",
        color: "#ffffff"
    })

    textoContador = this.add.text(120, 50, "Clics: 0", {
        fontSize: "24px",
        color: "#ffffff"
    })

    textoEstado = this.add.text(110, 90, "", {
        fontSize: "24px",
        color: "#e04c85"
    })

    boton.on("pointerdown", () => cambiarColor(this))
}

function dibujarEstrella(graphics, color){

    graphics.clear()
    graphics.fillStyle(color, 1)

    const cx = 180
    const cy = 250
    const spikes = 5
    const outerRadius = 80
    const innerRadius = 40

    let rot = Math.PI / 2 * 3
    let step = Math.PI / spikes
    let x, y

    graphics.beginPath()
    graphics.moveTo(cx, cy - outerRadius)

    for (let i = 0; i < spikes; i++) {

        x = cx + Math.cos(rot) * outerRadius
        y = cy + Math.sin(rot) * outerRadius
        graphics.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius
        y = cy + Math.sin(rot) * innerRadius
        graphics.lineTo(x, y)
        rot += step
    }

    graphics.lineTo(cx, cy - outerRadius)
    graphics.closePath()
    graphics.fillPath()
}

function cambiarColor(scene){

    if (juegoTerminado) return

    scene.tweens.add({
        targets: boton,
        scaleX: 1.2,
        scaleY: 1.2,
        duration: 100,
        yoyo: true
    })

    contador++
    textoContador.setText("Clics: " + contador)

    indiceColor++

    if (indiceColor >= colores.length){
        textoEstado.setText("¡Ganaste!")
        boton.disableInteractive()
        juegoTerminado = true
        return
    }

    // Redibujamos la estrella con nuevo color
    dibujarEstrella(boton, colores[indiceColor])
}