// For fuzzy search - Seeds the turtle logs into the DB collection "turtlelogs" 500 at a time
var turtlelogDump = Assets.getText('turtlelogs.dump').split('\n').filter(function(p) {
  return !!p;
});

if(TurtleLogs.find().count() < turtlelogDump.length) {
  console.log("adding initial set of turtlelogs (%s)", turtlelogDump.length);
  for(var lc=0; lc<turtlelogDump.length-1; lc++) {
    if(lc > 0 && lc % 500 == 0) {
      console.log("  added turtlelogs: ", lc);
    }
    var p = turtlelogDump[lc];
    p = EJSON.parse(p);
    SavePackage(p.nest_ID, p);
  };
  console.log("completed!");
}