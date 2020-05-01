var Model = function() {
	
}

Model.prototype.getModel = function(callback){
		var oReq = new XMLHttpRequest();
		oReq.open("GET", "http://localhost:8083/tbl/sparqlmotion?id=metromap");
		oReq.send();
		
		oReq.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
    			console.log(JSON.parse(this.responseText).metromap)
    	    	callback(JSON.parse(this.responseText).metromap);
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
