local discardphase = function(players, maxHand)
  local phase = {}
  phase.load = function()
  end
  phase.update = function()
    local done = true
    for _, p in next, players do
      p.discardCards()
      if #p.getHand() > maxHand then
        done = false
      end
    end
    phase.done = done
  end
  return phase
end

return discardphase
