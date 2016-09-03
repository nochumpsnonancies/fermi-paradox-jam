local actionphase = function(players)
  local phase = {}

  local mustplay = {}
  local snapshots = {}
  local mustplayrule = function(p)
    local current = {
      decksize = #p.getDeck(),
    }

    mustplay[p] = snapshots[p] == nil or
      snapshots[p].decksize > current.decksize
    snapshots[p] = current
  end

  phase.load = function()
    for _, p in next, players do
      mustplayrule(p)
    end
  end
  phase.update = function()
    for idx, p in next, players do
      if mustplay[p] and not p.play then
        print('p' .. idx .. ' must play')
        return
      end
    end

    local done = true
    for idx, p in next, players do
        print('p' .. idx .. ' ' .. p.play.description)
      if mustplay[p] and p.play then
        p.play.update()
        mustplayrule(p)
      end

      done = done and not mustplay[p]
    end
    phase.done = done
  end
  return phase
end

return actionphase
