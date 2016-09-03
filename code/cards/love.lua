local loveapp = function(love, game)
  local app = {}

  app.start = function()
    game.start()
    for method, fn in next, app.lovebindings do
      love[method] = fn
    end
  end

  app.lovebindings = {
    load = function()
    end,
    update = function(dt)
    end,
    draw  = function()
    end,
  }

  return app
end

return loveapp
