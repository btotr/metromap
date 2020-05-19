var Model = function() {
	this.data = null; 
}

Model.prototype.getModel = function(debugarg, callback){
		var debug = "";
		if(debugarg) debug = "&debug="+debugarg	
	
		var self = this;
		var oReq = new XMLHttpRequest();
		var origin = document.location.origin;
		if (document.location.hostname != "localhost") origin += "/edg"
		oReq.open("GET", origin + "/tbl/sparqlmotion?id=metromap"+debug);
		oReq.send();
		
		oReq.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
    			this.data = JSON.parse(this.responseText).metromap;
    			console.log(this.data);
    	    	callback(this.data);
	    	}
		};

/*
	var model = [
		  { group: 'nodes', data: { id: 'opsporing' } },
	
	
		  { group: 'nodes', data: { id: 'beheren beslag', color: 'black', parent: 'opsporing',  bar: 10} },
		  { group: 'nodes', data: { id: 'veiligstellen voorwerp', color: 'black' , parent: 'opsporing',  bar: 10} },
		  
		  { group: 'nodes', data: { id: 'goed', color: 'black', foo: 10} },
		  { group: 'nodes', data: { id: 'teruggave beslag', color: 'black',  foo: 10} },
		  
		  { group: 'edges', data: { id: 'beheren beslag-goed-bvh', source: 'beheren beslag', target: 'goed', color: 'green' } },
		  { group: 'edges', data: { id: 'veiligstellen voorwerp-goed-opp', source: 'veiligstellen voorwerp', target: 'goed', color: 'blue' } },
		  { group: 'edges', data: { id: 'beheren beslag-goed-summit', source: 'beheren beslag', target: 'goed', color: 'red' } },
		  { group: 'edges', data: { id: 'goed-teruggave beslag-bvh', source: 'goed', target: 'teruggave beslag', color: 'green' } }

		];
	callback(model) */
}
