local buyphase = function(players, buySize)
  local phase = {}
  phase.load = function()
  end
  phase.update = function()
    for _, p in next, players do
      p.buyCards(buySize)
      p.initializeRound()
    end
    phase.done = true
  end
  return phase
end

return buyphase
