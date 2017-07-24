var PIXI = require('pixi.js')

var Core = {
  'stages': {},
  'renderer': {},
  'sprites': {},
  'textures': {},
  'utils': {}
}

Core.utils.addTexture = function (name, filePath) {
  console.log(`Adding new texture: [${name}] -> [${filePath}]`)

  PIXI.loader.add(`./images/${filePath}`)
  Core.textures[name] = PIXI.loader.resources[`./images/${filePath}`]
}

// ------------------------------------------------

Core.utils.addSprite = function (textureName) {
  var resource = Core.textures[textureName]
  var sprite = new PIXI.Sprite(resource.texture)
  Core.sprites[textureName] = sprite
  return sprite
}

// ------------------------------------------------

Core.utils.renderSprite = function (stageName, spriteName) {
  console.log(`Rendering Sprite: [${spriteName}] at Stage: [${stageName}]`)
  var stage = Core.stages[stageName]
  var sprite = Core.sprites[spriteName]
  var renderer = Core.renderer

  stage.addChild(sprite)
  renderer.render(stage)
}

// ------------------------------------------------

Core.utils.setup = function () {
  console.log('Setuping Game')

  var renderer = PIXI.autoDetectRenderer(600, 600)

  document.body.appendChild(renderer.view)

  var mainStage = new PIXI.Container()

  renderer.render(mainStage)

  Core.stages['mainStage'] = mainStage
  Core['renderer'] = renderer
}

// ------------------------------------------------

Core.utils.load = function () {
  console.log('YOU MUST DEFINE A LOAD METHOD')
}

// ------------------------------------------------

Core.utils.game = function () {
  console.log('Starting game...')

  this.setup()
  this.load()

  PIXI.loader.load(() => {
    this.render()
  })
}

// ------------------------------------------------

Core.utils.render = function () {
  console.log('YOU MUST DEFINE A RENDER METHOD')
}

// ------------------------------------------------

export default Core
