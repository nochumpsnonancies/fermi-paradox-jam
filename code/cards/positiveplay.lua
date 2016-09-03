local positiveplay = function(player)
  local play = {}
  play.update = function()
    player.getHand()
  end
  return play
end

return positiveplay
