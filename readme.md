# metromap

generates a metromap based on a archimate model

#pre

copy the content from the html folder to server.topbraidlive.org/system-applications/server.www/build/
and change te version to edg in ui:client (e.g. let:base="lib/6.2.4.v20190907-2245R/server/build/")
 

# usage

1. create an ontology in edg
1.1 give it a name (e.g at3)
1.2 import the metro ontology (settings > import) 
1.3 add a new source instance
1.4 past the archimate model in the archimate property

2. generate instances:
http://localhost:8083/tbl/swp?_viewClass=importXML:XMLimport&debug=at3&xmlUrl=at3

xmlUrl = at3 (in the future this may be an external url)
debug = at3


3. view the metromap
http://localhost:8083/tbl/swp?_viewClass=ui:client&debug=at3