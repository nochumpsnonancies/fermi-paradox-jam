local noopaction = function()
  local action = {}
  action.description = 'no op'
  action.update = function()
  end
  return action
end

return noopaction
