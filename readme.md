# metromap (WIP)

generates a metromap based on a archimate model

# usage

1. create an ontology in edg

for example at3

2. import a archimate model. e.g.:
http://localhost:8083/tbl/swp?_viewClass=importXML:XMLimport&debug=at3&xmlUrl=https://gist.githubusercontent.com/btotr/4268e3c034ef0423dadb9e79655acaad/raw/c6b8dce44c479a763bc6975d96bd2551e4f4e85e/archimate-example

xmlUrl = url to the archimate model
debug = is the newly created ontology


3. view the metromap
http://localhost:8083/tbl/swp?_viewClass=ui:client&debug=at3