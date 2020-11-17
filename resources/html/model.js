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
}

Model.prototype.savedQueryCandS = function(s,callback){
	
			var self = this;
		var oReq = new XMLHttpRequest();
		var origin = document.location.origin;
		if (document.location.hostname != "localhost") origin += "/edg"
		oReq.open("GET", origin + "/tbl/sparql?query=SELECT++%3Ffl+%3Fdl+%0AWHERE+%7B%0A%09%3Fassignment+a+archimate%3AAssignment+.%0A%09%3Fassignment+archimate%3Asource+%3FassignmentSource+.++%0A++++%3Fassignment+archimate%3Atarget+%3FassignmentTarget+.++%0A%09%3Fassignment+archimate%3Aidentifier+%3FassignmentId+.%0A%0A+++%09%3Fc+archimate%3Aidentifier+%3FassignmentSource+.%0A+%09%3Ff+archimate%3Aidentifier+%3FassignmentTarget+.%0A%0A++%09%3Ff+a+sam%3AF+.%0A%09%3Ff+rdfs%3Alabel+%3Ffl+.%0A%09%3Ff+%5Esam%3AX+%3Fc+.%0A%09%3Fc+rdfs%3Alabel+%3Fcl+.%0A%09%3Fs+%5Esam%3AR+%3Ff+.%0A%09%3Fs+rdfs%3Alabel+%3Fsl+.%0A%09+%0A%09OPTIONAL+%7B%0A%09%09%3Fassociation+archimate%3Atarget+%3FassignmentId+.%0A%09%09%3Fassociation+archimate%3Asource+%3FdId+.%0A%09%09%3Fd++archimate%3Aidentifier+%3FdId+.%0A++++++++%3Fd+rdfs%3Alabel+%3Fdl+.%0A%09%7D%0A%0A%09FILTER+%28%3Fsl+%3D+%22"+s+"%22+%29+.%0A%7D&default-graph-uri=urn%3Ax-evn-master%3Aarchimate_example_model&format=json&with-imports=true");
		oReq.send();
		
		oReq.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {	
    	    	callback(JSON.parse(this.responseText).results.bindings);
	    	}
		};

}
