SELECT  ?sl ?fl ?cl ?dl 
WHERE {
	?assignment a archimate:Assignment .
	?assignment archimate:source ?assignmentSource .  
    ?assignment archimate:target ?assignmentTarget .  
	?assignment archimate:identifier ?assignmentId .

   	?c archimate:identifier ?assignmentSource .
 	?f archimate:identifier ?assignmentTarget .

  	?f a sam:F .
	?f rdfs:label ?fl .
	?f ^sam:X ?c .
	?c rdfs:label ?cl .
	?s ^sam:R ?f .
	?s rdfs:label ?sl .
	 
	OPTIONAL {
		?association archimate:target ?assignmentId .
		?association archimate:source ?dId .
		?d  archimate:identifier ?dId .
        ?d rdfs:label ?dl .
	}

	FILTER (?cl = "LSV" || ?cl = "TRIS" || ?cl = "LCS")
}