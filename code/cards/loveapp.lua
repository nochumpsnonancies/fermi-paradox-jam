local loveapp = function(love, game)
  local app = {}

  app.start = function()
    game.start()
    for method, fn in next, app.lovebindings do
      love[method] = fn
    end
  end

  local playergraphics = require('playergraphics')
  local translated = function(x, y, main)
    local graphics = {}
    graphics.draw = function()
      love.graphics.push()
      love.graphics.translate(x, y)
      main.draw()
      love.graphics.pop()
    end
    return graphics
  end

  local graphics = { }
  for idx, p in ipairs(game.players) do
    table.insert(graphics, translated(10, (idx - 1) * 280, playergraphics(p, idx)))
  end

  local time = 0
  local steps = 0
  app.lovebindings = {
    load = function()
    end,
    update = function(dt)
      time = time + dt
      local step = math.floor(time / 2)
      if step > steps then
        print('updating game')
        game.update(dt)
        steps = step
      end
    end,
    draw  = function()
      for _, g in ipairs(graphics) do
        g.draw()
      end

      love.graphics.origin()
      local phasename = ""
      if game.getTurn() then
        phasename = game.getTurn().getCurrentPhase()
      end
      love.graphics.print('turn ' .. game.turnCount .. ' ' .. phasename, 0, 400)
    end,
  }

  return app
end

return loveapp
