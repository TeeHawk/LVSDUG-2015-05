({
	helperSearch : function(component, event) {
		var searchText = event.getSource().get("v.value");
        var recordLimit = component.get("v.maxResults");
        
        var action = component.get("c.getContacts");
        
        action.setParams({
            searchTerm: searchText,
            maxResults: recordLimit
        });
        
        action.setCallback(this, function(a){
            
            var contactsFoundEvent = component.getEvent("contactsFoundEvent");
            contactsFoundEvent.setParams({
                contactsList: a.getReturnValue()
            });
            contactsFoundEvent.fire();
        });
        
        action.setAbortable();
        
        $A.enqueueAction(action);
	}
})