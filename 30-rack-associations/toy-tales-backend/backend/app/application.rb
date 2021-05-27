class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]

    elsif req.path.match(/toys/) && req.get?
      # konata.to_json(:include => { :posts => {
      #                            :include => { :comments => {
      #                                          :only => :body } },
      #                            :only => :title } })

      toys_json = Toy.all.to_json(:include => { :leases => {
                                      :include => { :car => {
                                                    :only => [:make, :model] } }
                                    }
                                  })

      return [200, { 'Content-Type' => 'application/json' }, [toys_json]]

    elsif req.path.match(/toys/) && req.post?
      toy_hash = JSON.parse(req.body.read)
      new_toy = Toy.create(toy_hash)

      return [201, { 'Content-Type' => 'application/json' }, [ new_toy.display_data ]]

    elsif req.path.match(/toys/) && req.patch?
      like_hash = JSON.parse(req.body.read)

      id = req.path.split("/").last
      found_toy = Toy.find(id)

      found_toy.update(like_hash)

      return [200, { 'Content-Type' => 'application/json' }, [ found_toy.display_data ]]

    elsif req.path.match(/toys/) && req.delete?
      id = req.path.split("/").last
      found_toy = Toy.find(id)
      found_toy.destroy

      return [200, { 'Content-Type' => 'application/json' }, [ found_toy.display_data ]]

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
