
var names = [];
var obj = {};
var test = "POP"

var nodes = new vis.DataSet([

]);
console.log("hello");

  $.ajax({url: "/myjsonfile.json",  success: function(Name){
  
   obj = Name;
   for (let i=0;i<obj.length;i++)
    {
    var namest= obj[i]
    names.push(namest.Name)
     
    console.log(namest.Name)
    nodes.add({label:names[i]})
  } 
  
  console.log(names)  
  }}); 

  console.log("hello");
  console.log(obj)
  
    
  obj[0] = 
  console.log("hello");
console.log(nodes)

var edges = new vis.DataSet();

var container = document.getElementById('bubbles');
var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  nodes: {borderWidth:0,shape:"circle",color:{background:'#F92C55', highlight:{background:'#F92C55', border: '#F92C55'}},font:{color:'#fff'}},
  physics: {
    stabilization: false,
    minVelocity:  0.01,
    solver: "repulsion",
    repulsion: {
      nodeDistance: 40
     
    }
  }
};
var network = new vis.Network(container, data, options);



// Events
network.on("click", function(e) {
  if (e.nodes.length) {
    var node = nodes.get(e.nodes[0]);
    // Do something
    nodes.update(node);
  }
});

container.on("mouse-wheel", function(event) {
  // prevents zooming with the mouse-wheel event
  event.stopPropagation();
});

console.log("hello");