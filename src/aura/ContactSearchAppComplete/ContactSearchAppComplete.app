<aura:application >
    <aura:attribute name="contacts" type="Contact[]"/>
    
    <aura:handler event="aura:waiting" action="{!c.showSpinner}"/>
    <aura:handler event="aura:doneWaiting" action="{!c.hideSpinner}"/>
    
    <c:ContactSearchComplete maxResults="5" contactsFoundEvent="{!c.searchResultsFound}"/>
    <!--<c:ContactSearchAutoComplete maxResults="200" contactsFoundEvent="{!c.searchResultsFound}"/>-->
    
    <ui:spinner aura:id="spinner"/>
    
    <c:ContactListComplete records="{!v.contacts}"/>
</aura:application>