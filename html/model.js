var Model = function() {
	
}

Model.prototype.getModel = function(callback){
	var model = [
		  { group: 'nodes', data: { id: 'bvh', color: 'green' } },
		  { group: 'nodes', data: { id: 'opp', color: 'purple' } },
		  
		  { group: 'nodes', data: { id: 'melding' } },
		  { group: 'nodes', data: { id: 'bvh-melding', parent: 'melding',  color: 'green' } },
		  { group: 'nodes', data: { id: 'opp-melding', parent: 'melding', color: 'purple' } },
		  { group: 'edges', data: { id: 'bvh-bvh-melding', source: 'bvh', target: 'bvh-melding', color: 'green' } },
		  { group: 'edges', data: { id: 'opp-opp-melding', source: 'opp', target: 'opp-melding', color: 'purple' } },	

		  { group: 'nodes', data: { id: 'aangifte' } },
		  { group: 'nodes', data: { id: 'bvh-aangifte', parent: 'aangifte',  color: 'green' } },
		  { group: 'nodes', data: { id: 'opp-aangifte', parent: 'aangifte', color: 'purple' } },
		  { group: 'edges', data: { id: 'bvh-verklaring', source: 'bvh-melding', target: 'bvh-aangifte', color: 'green' } },
		  { group: 'edges', data: { id: 'opp-verklaring', source: 'opp-melding', target: 'opp-aangifte', color: 'purple' } },	
		  

		];
	callback(model) 
}
