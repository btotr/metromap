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
	      'label': 'data(id)',
    	  'pie-size': '80%',
          'pie-1-background-color': '#FFFFFF',
          'pie-1-background-size': 'mapData(foo, 0, 8, 0, 100)',
          'pie-2-background-color': '#DDDDDD',
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
	      'font-size':'8px',
	      'color':'white',
	      "text-background-opacity": 1,
	      "text-background-padding" :  '2px',
	      "text-background-color":'data(color)',
	      "text-background-shape": "roundrectangle",
	      'curve-style': 'bezier',
	      'line-color': 'data(color)',
	      'label': 'data(label)',
	      'target-arrow-color': 'data(color)',
		      'line-style': 'data(style)',
	    	  'line-dash-pattern': [2,4]
	    }
	  },
	  {
		    selector: ':parent',
		    style: {
		    	'background-color':'white',
		      	'label' : 'data(id)',
		      	'text-margin-y': '-20px',
		      	'color':'#888888',
		      	'border-style': 'dashed'
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
