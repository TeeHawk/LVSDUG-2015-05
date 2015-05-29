({
	searchResultsFound : function(component, event) {
		var returnedContacts = event.getParam("contactsList");
        
        component.set("v.contacts", returnedContacts);
	}
})