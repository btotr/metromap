var View = function() {
	
}

View.prototype.createCy = function(id){
	this.cy = cytoscape({
		container: document.getElementById(id), 
		style: this.style,
		layout: this.layout
	});
}


View.prototype.style = [
    {
	    selector: 'node',
	    style: {
	      'background-color': 'data(color)' ,
	      'label': 'data(parent)',
    	  'pie-size': '80%',
          'pie-1-background-color': '#E8747C',
          'pie-1-background-size': 'mapData(foo, 0, 8, 0, 100)',
          'pie-2-background-color': '#74CBE8',
          'pie-2-background-size': 'mapData(bar, 0, 8, 0, 100)',
          'pie-3-background-color': '#74E883',
          'pie-3-background-size': 'mapData(baz, 0, 8, 0, 100)',
          'pie-4-background-color': '#74E8FF',
           'pie-4-background-size': 'mapData(bax, 0, 8, 0, 100)'
	    }
	  },
	  {
	    selector: 'edge',
	    style: {
	      'width': 3,
	      'curve-style': 'unbundled-bezier',
	      'line-color': 'data(color)',
	      'target-arrow-color': 'data(color)',
	      'target-arrow-shape': 'straight'
	    }
	  },
	  {
	    selector: 'parent',
	    style: {
	    	'background': 'none',
	      	'border':'1px',
	      	'label' : ''
	    }
	  }
];


View.prototype.layout =  {
		name: 'grid',
		 columns: 4
		
};

View.prototype.addMenu = function(controller){
	let defaults = {
	  menuRadius: 120, 
	  selector: 'node',
	  commands: [ 
	    { 
	      fillColor: 'rgba(200, 0, 0, 0.75)', 
	      content: 'definitie', 
	      contentStyle: {},
	      select: function(ele){
	    	  controller.menuSelected(1,ele.id()) 
	      },
	      enabled: true 
	    },
	    { 
	      fillColor: 'rgba(0, 200, 200, 0.75)', 
	      content: 'grondslag', 
	      contentStyle: {},
	      select: function(ele){
	    	  controller.menuSelected(2,ele.id()) 
	      },
	      enabled: true 
		 },
	    { 
	      fillColor: 'rgba(0, 0, 200, 0.75)', 
	      content: 'opmerking', 
	      contentStyle: {},
	      select: function(ele){
	    	  controller.menuSelected(3,ele.id()) 
	      },
	      enabled: true 
	    },
		    
	  ], 
	  fillColor: 'rgba(0, 0, 0, 0.75)', 
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
