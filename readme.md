exampel

SELECT ?capabilityName ?capabilityBusinessABBName  ?capabilityBusinessSBBName
WHERE {
	?capability rdf:type archimate:Capability .
	?capability archimate:nameRef ?capabilityRef .
	?capabilityRef dtype:value ?capabilityName .
	?capability archimate:identifier ?capabilityId .
	?capabilityId functions:connectedElement ?capabilityBusinessABB .
	?capabilityBusinessABB  archimate:identifier ?capabilityBusinessABBId .
	?capabilityBusinessABB archimate:nameRef ?capabilityBusinessABBRef .
	?capabilityBusinessABBRef dtype:value ?capabilityBusinessABBName .
	?capabilityBusinessABBId functions:connectedElement ?capabilityBusinessSBB .
	?capabilityBusinessSBB archimate:nameRef ?capabilityBusinessSBBRef .
	?capabilityBusinessSBBRef dtype:value ?capabilityBusinessSBBName .
}