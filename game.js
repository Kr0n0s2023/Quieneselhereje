var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload() {
  // Cargar las imágenes
  this.load.image('imagen1', 'imagen1.png');
  this.load.image('imagen2', 'imagen2.png');
  this.load.image('imagen3', 'imagen3.png');
  this.load.image('mensaje', 'mensaje.png');
}

function create() {
	
  // Mostrar las imágenes en el centro de la pantalla
  var imagen1 = this.add.image(400, 300, 'imagen1');
  var imagen2 = this.add.image(400, 300, 'imagen2');
  var imagen3 = this.add.image(400, 300, 'imagen3');
  
  // Asignar identificador único a la imagen correcta
  imagen2.nombre = 'correcta';
  
  // Habilitar la interacción con las imágenes
  imagen1.setInteractive();
  imagen2.setInteractive();
  imagen3.setInteractive();
  
  // Al hacer clic en una imagen, comprobar si es la correcta
  this.input.on('gameobjectdown', function (pointer, object) {
    if (object.nombre === 'correcta') {
      // Mostrar la escena de felicitaciones
      this.scene.start('Felicitaciones');
    }
  }, this);
  
  // Crear la escena de felicitaciones
  var felicitacionesScene = this.scene.add('Felicitaciones', {
    create: function () {
      var mensaje = this.add.image(400, 300, 'mensaje');
    }
  }, true);
}
