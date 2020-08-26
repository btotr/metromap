function Controller() {
    var self = this;
    this.model = new Model();
    this.view = new View();
    this.view.createCy('cy'); 
    this.view.addMenu(self);
    this.model.getModel(getQueryParams('debug',document.location.search), function(model){
    	 self.view.cy.add(model.filter(filterByNode));
    	 var layout = self.view.cy.layout(self.view.layout);
    	 layout.run();
    	 self.view.addEdges(model.filter(filterByEdge));
    });
}


function filterByNode(obj) {
	  if (obj.group == "nodes") return true;
}

function filterByEdge(obj) {
	  if (obj.group == "edges") return true;
	  console.log(obj)
}

Controller.prototype.menuSelected = function(menuId, node){
	if (menuId == 3) {
		console.log(node._private.data.version);
	}
	
	if (menuId == 2) {
		console.log(node._private.data.documentation);
	}
}

window.addEventListener('load', function(){
    new Controller()
} , false);

const getQueryParams = ( params, url ) => {  
	  let href = url;
	  let reg = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
	  let queryString = reg.exec(href);
	  return queryString ? queryString[1] : null;
};
