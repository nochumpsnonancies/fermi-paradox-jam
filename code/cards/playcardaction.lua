local playcardaction = function(player, card)
  local action = {}
  action.description = 'play ' .. card.value .. ' ' .. card.suit
  action.update = function()
    local top = player.table[#player.table]
    if player.playCard(card) then
      if top then
        if top.mod == card.mod then
          player.buyCards(math.abs(top.value - card.value))
        end
      end
    end
  end
  return action
end

return playcardaction
