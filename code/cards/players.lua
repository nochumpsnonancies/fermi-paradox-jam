local player = require('player')
local noopaction = require('noopaction')
local playcardaction = require('playcardaction')
local naivediscard = require('naivediscard')
local p1 = player("hearts", "spade")
local p1discard = naivediscard(p1)
p1.update = function(dt)
  local mostPositive
  for _, c in ipairs(p1.getHand()) do
    if not mostPositive then
      mostPositive = c
    else
      if mostPositive.value < c.value then
        mostPositive = c
      end
    end
  end
  p1.play = playcardaction(p1, mostPositive)
  p1.discards = {}
  p1discard.run()
end
local p2 = player("clubs", "diamond")
local p2discard = naivediscard(p2)
p2.update = function(dt)
  p2.play = noopaction()
  p2.discards = {}
  p2discard.run()
end

return {
  p1, p2
}
