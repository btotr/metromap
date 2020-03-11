window.onload = function(){
	var diagram = new go.Diagram("metromap");
	var $ = go.GraphObject.make;

	diagram.nodeTemplate =
		    $(go.Node, "Auto",
		      $(go.Shape,
		        { figure: "RoundedRectangle",
		          fill: "white" },  
		        new go.Binding("fill", "color")), 
		      $(go.TextBlock,
		        { margin: 5 },
		        new go.Binding("text", "key")) 
		    );
	diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
}