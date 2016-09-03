local rules = require('rules')
local naivediscard = function(player)
  local discard = {}
  discard.run = function()
    local t = #player.getHand()
    if t > rules.maxHand then
      discard.take(t - rules.maxHand)
    end
  end
  discard.take = function(n)
    local t = n
    while t > 0 do
      table.insert(player.discards, player.getHand()[1])
      t = t - 1
    end
  end
  return discard
end

return naivediscard
