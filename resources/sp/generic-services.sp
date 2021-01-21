SELECT ?source ?target
WHERE {
                        BIND ("data flows between SBB" AS ?comment) .
                        ?idS a m:L .
                        ?sourceS m:T ?idS .
                        ?idS m:T ?targetS .
                        ?sourceS archimate:identifier ?sourceIdentifier .
                        ?idS rdfs:label ?labelC .
                        ?sourceS sam:D ?targetS .
                        ?idS sam:A ?acS .
                        ?acS a archimate:ApplicationService .
                        ?acS archimate:identifier ?acSId .
                        ?serving archimate:target ?acSId .
                        ?serving a archimate:Serving .
                        ?serving archimate:identifier ?servingId .
                       
                        BIND (MD5(CONCAT(str(?idS), str(?sourceS), str(?targetS))) AS ?source) .
                        ?serving archimate:source ?acTId .
                        ?acT archimate:identifier ?acTId .

                        BIND (?acT AS ?target) .
                        BIND (IF(bound(?flowValue), "dotted", "solid") AS ?style) .
                        BIND ("#0000FF" AS ?color) .
                        BIND (?idS AS ?id) .
                        BIND ("1" AS ?width) .
                        BIND ("" AS ?label) .
}