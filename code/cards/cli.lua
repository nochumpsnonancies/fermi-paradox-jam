local printPlayer = function(player)
  local hand = player.getHand()
  for idx, card in next, hand do
    print(idx .. ')', card.value, card.suit)
  end
end

local timers = {}
local advanceAndPrint = function(game)
  timers[game] = timers[game] or os.time()
  game.update(os.time() - timers[game])
  for idx, p in ipairs(game.players) do
    print('p' .. idx)
    printPlayer(p)
  end
  print('----------------')
end
