local buyphase = require('buyphase')
local actionphase = require('actionphase')
local discardphase = require('discardphase')

local turn = function(players, rules)
  local turn = {
    finished = false
  }
  local currentPhase = 1
  local phases = {
    buy = buyphase(players, rules.buySize),
    action = actionphase(players),
    discard = discardphase(players, rules.maxHand),
  }
  local order = { 'buy', 'action', 'discard' }

  turn.getCurrentPhase = function()
    return order[currentPhase]
  end

  local time = 0
  turn.update = function(dt)
    if turn.finished then
      return
    end

    time = time + dt
    print('phase', currentPhase, order[currentPhase])
    phases[order[currentPhase]].update()
    if phases[order[currentPhase]].done then
      if currentPhase + 1 > #order then
        turn.finished = true
      else
        currentPhase = currentPhase + 1
        phases[order[currentPhase]].load()
      end
    end
  end

  return turn
end

return turn
