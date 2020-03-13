var Model = function() {
	
}

Model.prototype.getModel = function(callback){
	var model = [
		  { group: 'nodes', data: { id: 'strafvordelijk beslag', color: 'green' } },
		  { group: 'nodes', data: { id: 'beheer' } },
		  { group: 'nodes', data: { id: 'beheer goed tijdelijk beslag', parent: 'beheer', foo: 2, bar: 2, baz: 2, bax: 2, color: 'green' } },
		  { group: 'nodes', data: { id: 'beheer goed beslaghuis', parent: 'beheer', foo: 4, bar: 4, baz: 0, bax: 0, color: 'green' } },
		  { group: 'nodes', data: { id: 'beheer spoor FO', parent: 'beheer', foo: 0, bar: 0, baz: 4, bax: 4, color: 'green' } },
		  { group: 'nodes', data: { id: 'beheer goed domeinen', parent: 'beheer', foo: 2, bar: 2, baz: 2, bax: 2, color: 'green' } },
		  { group: 'edges', data: { id: 'e0', source: 'strafvordelijk beslag', target: 'beheer goed tijdelijk beslag', color: 'green' } },
		  { group: 'edges', data: { id: 'e1', source: 'strafvordelijk beslag', target: 'beheer goed beslaghuis', color: 'green' } },		  
		  { group: 'edges', data: { id: 'e2', source: 'strafvordelijk beslag', target: 'beheer spoor FO', color: 'green' } },
		  { group: 'edges', data: { id: 'e3', source: 'strafvordelijk beslag', target: 'beheer goed domeinen', color: 'green' } },
		  { group: 'nodes', data: { id: 'opsporing' , color: 'red' } },
		  { group: 'nodes', data: { id: 'onderzoek' } },
		  { group: 'nodes', data: { id: 'FO onderzoek', parent: 'onderzoek', foo: 2, bar: 2, baz: 2, bax: 2, color: 'red' } },
		  { group: 'nodes', data: { id: 'intern onderzoek', parent: 'onderzoek', foo: 4, bar: 0, baz: 0, bax: 4, color: 'red' } },
		  { group: 'edges', data: { id: 'o1', source: 'opsporing', target: 'FO onderzoek', color: 'red' } },
		  { group: 'edges', data: { id: 'o2', source: 'opsporing', target: 'intern onderzoek', color: 'red' } },
		  { group: 'edges', data: { id: 'o3', source: 'beheer spoor FO', target: 'FO onderzoek', color: 'red' } }
		];
	callback(model) 
}
