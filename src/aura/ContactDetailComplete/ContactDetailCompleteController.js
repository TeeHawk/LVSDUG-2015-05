({
    selectContact : function(component, event, helper) {
		helper.selectContact(component, event);
	},
    
	navigateToView : function(component, event, helper) {
        console.log('navigate 1');
		helper.navigateToView(component, event);
	},
    
    navigateToView2 : function(component, event, helper) {
        console.log('navigate 2');
		helper.navigateToView(component, event);
	}
})