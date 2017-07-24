import Core from './core'

Core.utils.load = function () {
  Core.utils.addTexture('hero', 'hero_female.png')
  Core.utils.addTexture('chest', 'chest.png')
  Core.utils.addTexture('zombie', 'zombie.png')
}

Core.utils.render = function () {
  console.log('Rendering Phase')

  var hero = this.addSprite('hero')
  hero.width = 70
  hero.height = 70
  hero.y = 250
  hero.x = 40

  var chest = this.addSprite('chest')
  chest.width = 40
  chest.height = 40
  chest.y = 270
  chest.x = 500

  // var numMonsters = 6
  // for (var i = 0; i < numMonsters; i++) {
  //   var name = `zombie_${i}`
  //   var zombie = this.addSprite(name)
  //   zombie.x = parseInt(Math.random() * 600)
  //   zombie.y = parseInt(Math.random() * 600)
  //   this.renderSprite('mainStage', name)
  // }

  this.renderSprite('mainStage', 'hero')
  this.renderSprite('mainStage', 'chest')
}

Core.utils.game()
