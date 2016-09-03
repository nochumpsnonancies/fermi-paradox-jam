local game = require('game')
local loveapp = require('loveapp')

local players = require('players')
local g = game(players[1], players[2])
local app = loveapp(love, g)
app.start()
