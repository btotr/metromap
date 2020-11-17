var View = function() {

}

View.prototype.addDataLineageToggle = function(container, callback){
	var dataLineageToggle = document.createElement("button");
	dataLineageToggle.innerHTML = "datalineage";
	container.appendChild(dataLineageToggle);
	callback.call(this, dataLineageToggle);
}

View.prototype.addPrintButton = function(container, callback){
	var printButton = document.createElement("button");
	printButton.innerHTML = "export";
	container.appendChild(printButton);
	callback.call(this, printButton);
}

View.prototype.addPainterButton = function(container, callback){
	var painterButton = document.createElement("button");
	painterButton.innerHTML = "tekenen";
	container.appendChild(painterButton);
	callback.call(this, painterButton);
}

View.prototype.addTimeline = function(container, date, callback){
	var timeline = document.createElement("select");
	for (var i=0; i<date.length; i++) {
		let option = document.createElement("option");
		option.innerHTML = date[i];
		option.setAttribute("value", date[i]);
		timeline.appendChild(option);
	}
	container.appendChild(timeline);
	callback.call(this, timeline);
}

View.prototype.addCapabilityFilter = function(container, capabilities, callback){
	var capabilityFilter  = document.createElement("select");
	for (var i=0; i<capabilities.length; i++) {
		let option = document.createElement("option");
		option.innerHTML = capabilities[i];
		option.setAttribute("value", capabilities[i]);
		capabilityFilter.appendChild(option);
	}
	capabilityFilter.setAttribute("multiple", "multiple");
	container.appendChild(capabilityFilter);
	callback.call(this, capabilityFilter);
}


View.prototype.createCy = function(id){
	this.cy = cytoscape({
		container: document.getElementById(id), 
		style: this.style,
		layout: this.layout
	});
	

	
}

View.prototype.localPosition = function(){
	var nodes = this.cy.$('*');
	console.log(nodes)
	for (let i=0;i<nodes.length;i++) {
		var node = nodes[i].id();
		var position = localStorage.getItem(node);
		console.log(node, position)
		if(position){
			this.cy.getElementById(node).position(JSON.parse(position));
		}
	}
}


View.prototype.addEdges = function(edges){
	console.log("add edges", edges)
	this.cy.edgeConnections().addEdges(edges)
	
	//this.cy.edgeConnections().addEdge({data:{id:"test", "source":"909ea6993b58d44456cfed939c5f4708", "target":"5e7fa3083f35d8440c9e5da65aba0c2f", "color":"blue"}})
}





View.prototype.style = [
    {
	    selector: 'node',
	    style: {
	      'background-color': 'data(color)' ,
	      'label': 'data(id)',
    	  'pie-size': '80%',
    	  'pie-size': '80%',
          'pie-1-background-color': '#FFFFFF',
          'pie-1-background-size': '100'
	    }
	  },
	  {
	    selector: 'edge',
	    style: {
	      'width': 'data(width)',
	      'font-size':'8px',
	      'color':'white',
	      "text-background-opacity": 1,
	      "text-background-padding" :  '2px',
	      "text-background-color":'data(color)',
	      "text-background-shape": "roundrectangle",
	      'curve-style': 'bezier',
	      'line-color': 'data(color)',
	      'label': 'data(label)',
	      'line-style': 'data(style)',
    	  'line-dash-pattern': [2,4]
	    }
	  },
	    {
	      selector: 'node.aux-node',
	      style: {
	    	'label': 'data(label)',
	        'width': 1,
	        'height': 1
	      }
	    }
];


View.prototype.layout =  {
		name: 'grid',
		rows: 1,
		cols: 10,
		fit: false
		
};

View.prototype.addMenu = function(controller){
	let defaults = {
	  menuRadius: 120, 
	  selector: 'node',
	  commands: [ 
	    { 
	      fillColor: 'rgba(0, 130, 0, 1)', 
	      content: 'annotatie', 
	      contentStyle: {},
	      select: function(ele){
	    	  controller.menuSelected(1,ele) 
	      },
	      enabled: false 
	    },
	    { 
	      fillColor: 'rgba(0, 0, 120, 1)', 
	      content: 'definitie', 
	      contentStyle: {},
	      select: function(ele){
	    	  controller.menuSelected(2,ele) 
	      },
	      enabled: true 
		 },
	    {
		      fillColor: 'rgba(0, 0, 120, 1)', 
		      content: 'capabilities (SAFe)', 
		      contentStyle: {},
		      select: function(ele){
		    	  controller.menuSelected(3,ele) 
		      },
		      enabled: true 
			 },
			    {
			      fillColor: 'rgba(0, 130, 0, 1)', 
			      content: 'enablers (SAFe)', 
			      contentStyle: {},
			      select: function(ele){
			    	  controller.menuSelected(3,ele) 
			      },
			      enabled: false 
				 }
			 ,
			    {
			      fillColor: 'rgba(0, 130, 0, 1)', 
			      content: ' processen', 
			      contentStyle: {},
			      select: function(ele){
			    	  controller.menuSelected(3,ele) 
			      },
			      enabled: false 
				 }
			 ,
			    {
			      fillColor: 'rgba(0, 130, 0, 1)', 
			      content: ' werkstromen', 
			      contentStyle: {},
			      select: function(ele){
			    	  controller.menuSelected(3,ele) 
			      },
			      enabled: false 
				 }
			 ,
			    {
			      fillColor: 'rgba(0, 130, 0, 1)', 
			      content: 'rollen', 
			      contentStyle: {},
			      select: function(ele){
			    	  controller.menuSelected(3,ele) 
			      },
			      enabled: false 
				 }
			 ,
			    {
			      fillColor: 'rgba(0, 0, 120, 1)', 
			      content: 'functies', 
			      contentStyle: {},
			      select: function(ele){
			    	  controller.menuSelected(1,ele) 
			      },
			      enabled: true 
				 }
	  ], 
	  fillColor: 'rgba(0, 0, 0, 1)', 
	  activeFillColor: 'rgba(1, 105, 217, 0.75)', 
	  activePadding: 20, 
	  indicatorSize: 24, 
	  separatorWidth: 3, 
	  spotlightPadding: 4, 
	  minSpotlightRadius: 24, 
	  maxSpotlightRadius: 38, 
	  openMenuEvents: 'cxttapstart taphold', 
	  itemColor: 'white', 
	  itemTextShadowColor: 'transparent', 
	  zIndex: 9999,
	  atMouse: false 
	};
	this.cy.cxtmenu( defaults );
}
