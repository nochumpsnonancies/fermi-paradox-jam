local cardgraphics = require('cardgraphics')
local cardcollectiongraphics = function(getter, distance)
  local graphics = {}
  graphics.draw = function()
    local i = 0
    for idx, card in ipairs(getter()) do
      love.graphics.push()
      love.graphics.translate(idx * distance, 0)
      cardgraphics(card).draw()
      i = i + 1
      love.graphics.pop()
    end
    love.graphics.setColor(0, 233, 140)
    love.graphics.print('count ' .. #getter())
  end
  return graphics
end

return cardcollectiongraphics

