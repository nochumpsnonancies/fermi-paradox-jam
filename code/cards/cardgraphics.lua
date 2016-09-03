local cardgraphics = function(card)
  local graphics = {}
  graphics.draw = function()
    love.graphics.setColor(255, 255, 255)
    love.graphics.rectangle('fill', 0, 0, 100, 130)
    local color = { 230, 30, 30 }
    if card.mod < 0 then
      color = { 20, 66, 66 }
    end
    love.graphics.setColor(color)
    love.graphics.printf(card.value .. ' ' .. card.suit, 0, 50, 100, 'center')
  end
  return graphics
end

return cardgraphics
