local turn = require('turn')
local rules = require('rules')
local game = function(p1, p2)
  local players = { p1, p2 }
  local game = {
    players = players
  }

  game.start = function()
    for _, p in next, players do
      p.initializeDeck()
      p.shuffleDeck(math.random(5, 10))
    end
  end

  local currentTurn
  game.turnCount = 0
  game.update = function(dt)
    if not currentTurn then
      currentTurn = turn(players, rules)
      game.turnCount = game.turnCount + 1
    end
    currentTurn.update(dt)
    if currentTurn.finished then
      currentTurn = nil
    end
    for _, p in next, players do
      p.update(dt)
    end
  end

  game.getTurn = function()
    return currentTurn
  end
  return game
end

return game
