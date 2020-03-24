var Actors = {}

function ActorFactory (actor) {

  return new Actors[actor]()
}
