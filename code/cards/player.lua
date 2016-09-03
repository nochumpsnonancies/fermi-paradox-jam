local cards = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 }
local suits = { "hearts", "diamond", "clubs", "spade" }
local player = function(positive, negative)
  local player = {
    table = {}
  }
  local hand = {}
  local deck = {}
  local discarded = {}
  local suits = { positive, negative }
  player.initializeDeck = function()
    hand = {}
    deck = {}
    discarded = {}
    player.table = {}
    for _, suit in next, suits do
      local mod = 1
      if suit == negative then
        mod = -1
      end
      for _, card in next, cards do
        table.insert(deck, {
          value = card,
          suit = suit,
          mod = mod,
        })
      end
    end
  end
  player.shuffleDeck = function(passes)
    local i = 0
    while i < passes do
      math.randomseed(os.time())
      local shuffled = {}
      while #deck > 0 do
        local idx = math.random(#deck)
        table.insert(shuffled, deck[idx])
        table.remove(deck, idx)
      end
      deck = shuffled
      i = i + 1
    end
  end
  player.initializeRound = function()
    player.play = nil
    player.discards = {}
  end
  player.buyCards = function(count)
    local i = 0
    while i < count do
      if #deck ~= 0 then
        hand[#hand+1] = deck[1]
        table.remove(deck, 1)
        i = i + 1
      end
    end
  end
  player.playCard = function(card)
    for idx, c in ipairs(hand) do
      if c == card then
        table.remove(hand, idx)
        table.insert(player.table, card)
        return true
      end
    end
  end
  player.discardCards = function()
    for _, card in next, player.discards do
      for idx, c in next, hand do
        if c.value == card.value and c.suit == card.suit then
          table.remove(hand, idx)
          table.insert(discarded, card)
        end
      end
    end
  end
  player.update = function()
  end
  player.getHand = function()
    return hand
  end
  player.getDeck = function()
    return deck
  end
  player.getDiscarded = function()
    return discarded
  end
  return player
end

return player
