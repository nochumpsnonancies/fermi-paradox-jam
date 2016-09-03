local cardcollectiongraphics = require('cardcollectiongraphics')

local playergraphics = function(player, id)
  local graphics = {}

  local hand = cardcollectiongraphics(player.getHand, 60)
  local discarded = cardcollectiongraphics(player.getDiscarded, 10)
  local deck = cardcollectiongraphics(player.getDeck, 5)
  local table = cardcollectiongraphics(player.getTable, 100)

  graphics.draw = function()
    hand.draw()
    love.graphics.push()
    love.graphics.translate(400, 0)
    discarded.draw()
    love.graphics.pop()
  end
  return graphics
end

return playergraphics
