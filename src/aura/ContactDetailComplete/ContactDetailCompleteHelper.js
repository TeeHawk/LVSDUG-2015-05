({
    selectContact : function(component, event) {
        var contactId = component.get("v.record").Id;
        
        var e = component.getEvent("contactSelectedEvent");
        e.setParams({
            "contactId": contactId
        })
        e.fire();
    },
    
	navigateToView : function(component, event) {
        var contactId = event.getParam("contactId");
        
        var sObjectEvent = $A.get("e.force:navigateToSObject");
        
        var insideSalesforce1 = !$A.util.isUndefinedOrNull(sObjectEvent);
        if (insideSalesforce1) {
            sObjectEvent.setParams({
                "recordId": contactId,
                "slideDevName": "detail"
            })
            sObjectEvent.fire();
        }
	}
    
    /*navigateToView : function(component, event) {
        var contactId = component.get("v.record.Id");
        
        var sObjectEvent = $A.get("e.force:navigateToSObject");
        
        var insideSalesforce1 = !$A.util.isUndefinedOrNull(sObjectEvent);
        if (insideSalesforce1) {
            sObjectEvent.setParams({
                "recordId": contactId,
                "slideDevName": "detail"
            })
            sObjectEvent.fire();
        }
	}*/
})