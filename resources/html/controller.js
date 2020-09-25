function Controller() {
    var self = this;
    
    this.model = new Model();
    this.view = new View();
    
    var container = document.getElementsByTagName("body")[0];
    this.view.addDataLineageToggle(container, self.toggleDataLineage)
    //this.view.addTimeline(container, ["2020 Q2", "2020 Q3"], self.selectPeriod)
    //  this.view.addCapabilityFilter(container, ["Opsporing", "Handhaving", "Sturing"], self.capabilityFilter)
    this.view.createCy('cy'); 
    this.view.addMenu(self);
    // new Painter();
    this.model.getModel(getQueryParams('debug',document.location.search), function(model){
    	 self.view.cy.add(model.filter(filterByNode));
    	 var layout = self.view.cy.layout(self.view.layout);
    	 layout.run();
    	 self.view.addEdges(model.filter(filterByEdge));
    });
}

var aux;
Controller.prototype.toggleDataLineage = function(button) {
	var self = this;
	button.addEventListener("click", function(e){
		console.log(aux);
		if (aux && aux.removed()) aux.restore();
		else aux = self.cy.$('.aux-node').remove();
		console.log(aux);
	});

}


Controller.prototype.capabilityFilter = function(capabilityFilter) {
	var self = this;
	capabilityFilter.addEventListener("click", function(e){
		console.log(this);
	});

}

Controller.prototype.selectPeriod = function(timeline) {
	var self = this;
	timeline.addEventListener("click", function(e){
		console.log(this);
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


// PAINTER (TODO)


function Painter(){
	var canvas = document.getElementsByTagName("canvas")[1],
    ctx = canvas.getContext("2d"),
    painting = false,
    lastX = 0,
    lastY = 0,
    lineThickness = 1;

    window.addEventListener("mousedown", function(e) {    	
    	if(!e.which == 3) return
            painting = true;
            ctx.fillStyle = "black";
            lastX = e.pageX 
            lastY = e.pageY 
 
    });

    window.addEventListener("mouseup", function(e){
    	if(!e.which == 3) return
        painting = false;
    });

    window.addEventListener("mousemove", function(e) {
    	console.log("s",e.which)
		if(!e.which == 3) return
		console.log("sss")
		e.preventDefault();
		e.stopImmediatePropagation();
	
        if (painting) {
            mouseX = e.pageX
            mouseY = e.pageY 
    
            var x1 = mouseX,
                x2 = lastX,
                y1 = mouseY,
                y2 = lastY;
            
  

            var steep = (Math.abs(y2 - y1) > Math.abs(x2 - x1));
            if (steep){
                var x = x1;
                x1 = y1;
                y1 = x;

                var y = y2;
                y2 = x2;
                x2 = y;
            }
            if (x1 > x2) {
                var x = x1;
                x1 = x2;
                x2 = x;

                var y = y1;
                y1 = y2;
                y2 = y;
            }

            var dx = x2 - x1,
                dy = Math.abs(y2 - y1),
                error = 0,
                de = dy / dx,
                yStep = -1,
                y = y1;

            if (y1 < y2) {
                yStep = 1;
            }

            lineThickness = 5 - Math.sqrt((x2 - x1) *(x2-x1) + (y2 - y1) * (y2-y1))/10;
            if(lineThickness < 1){
                lineThickness = 1;   
            }
            	
            for (var x = x1; x < x2; x++) {
                if (steep) {
                	console.log(y, x, lineThickness , lineThickness)
                    ctx.fillRect(y, x, lineThickness , lineThickness );
                } else {
                	console.log(x)
                    ctx.fillRect(x, y, lineThickness , lineThickness );
                }

                error += de;
                if (error >= 0.5) {
                    y += yStep;
                    error -= 1.0;
                }
            }



            lastX = mouseX;
            lastY = mouseY;

        }
    })
	
}


