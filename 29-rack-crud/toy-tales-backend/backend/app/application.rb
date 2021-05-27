class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]

    elsif req.path.match(/toys/) && req.get?
      # Toy.all
      return [200, { 'Content-Type' => 'application/json' }, [ Toy.all.to_json ]]

    elsif req.path.match(/toys/) && req.post?
      toy_hash = JSON.parse(req.body.read)
      new_toy = Toy.create(toy_hash)

      return [201, { 'Content-Type' => 'application/json' }, [ new_toy.to_json ]]

    elsif req.path.match(/toys/) && req.patch?
      like_hash = JSON.parse(req.body.read)

      id = req.path.split("/").last
      found_toy = Toy.find(id)

      found_toy.update(like_hash)

      return [200, { 'Content-Type' => 'application/json' }, [ found_toy.to_json ]]

    elsif req.path.match(/toys/) && req.delete?
      id = req.path.split("/").last
      found_toy = Toy.find(id)
      found_toy.destroy

      return [200, { 'Content-Type' => 'application/json' }, [ found_toy.to_json ]]

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
