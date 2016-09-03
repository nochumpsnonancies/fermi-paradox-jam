local cardgraphics = require('cardgraphics')
local playerhandgraphics = function(player)
  local graphics = {}
  graphics.draw = function()
    local i = 0
    for idx, card in ipairs(player.getHand()) do
      love.graphics.push()
      love.graphics.translate(idx * 60, 0)
      cardgraphics(card).draw()
      i = i + 1
      love.graphics.pop()
    end
    love.graphics.setColor(0, 233, 140)
    love.graphics.print('hand w ' .. #player.getHand())
  end
  return graphics
end

return playerhandgraphics
