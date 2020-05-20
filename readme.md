# metromap

generates a metromap based on a archimate model (archimate exchange format)

# prerequisite
- Topbraid Composer
- copy the content from the html folder to server.topbraidlive.org/system-applications/server.www/build/ (if you not working locally you have to depoy those files as-well)
 

# usage

1. create an ontology in edg and give it a name (e.g archimate_example_model)

2. view the metromap
http://localhost:8083/tbl/swp?_viewClass=importXML:XMLimport&graph=archimate_example_model&model=%22model2%22&source=%22metromap_source%22&xmlUrl=https://gist.githubusercontent.com/btotr/4268e3c034ef0423dadb9e79655acaad/raw/7de8597a199d67352105712ec23ffc80d8cd18c3/archimate-example

instead of the xmlUrl you may use a source ontology
1. create an ontology in edg with the name metromap_source
2 import the metro ontology (settings > import) 
3 add a new source instance
4 past the archimate model in the archimate property
