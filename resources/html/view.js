var View = function() {
	
}

View.prototype.createCy = function(id){
	
	
	this.cy = cytoscape({
		container: document.getElementById(id), 
		style: this.style,
		layout: this.layout
	});
}

View.prototype.addEdges = function(edges){
	console.log("add edges", edges)
	this.cy.edgeConnections().addEdges(edges)
	//this.cy.edgeConnections().addEdge({data:{id:"test", "source":"c3a0abfca805c2b2ac96c2cb4ad2b58f", "target":"cb28ca7dfa09d5bc6e77e626391052a2"}})
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
	      'width': 3,
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
	        'label': '',
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
	      fillColor: 'rgba(120, 0, 0, 1)', 
	      content: 'annotatie toevoegen', 
	      contentStyle: {},
	      select: function(ele){
	    	  controller.menuSelected(1,ele) 
	      },
	      enabled: true 
	    },
	    { 
	      fillColor: 'rgba(0, 0, 150, 1)', 
	      content: 'documentatie', 
	      contentStyle: {},
	      select: function(ele){
	    	  controller.menuSelected(2,ele) 
	      },
	      enabled: true 
		 },
	    {
		      fillColor: 'rgba(0, 130, 0, 1)', 
		      content: 'versie', 
		      contentStyle: {},
		      select: function(ele){
		    	  controller.menuSelected(3,ele) 
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
