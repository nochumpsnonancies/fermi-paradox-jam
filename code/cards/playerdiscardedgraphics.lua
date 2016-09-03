local playerdiscardedgraphics = function(player)
  local graphics = {}
  graphics.draw = function()
    for idx, _ in ipairs(player.getDiscarded()) do
      love.graphics.translate(idx * 10, 0)
    end
  end
  return graphics
end

return playerdiscardedgraphics
