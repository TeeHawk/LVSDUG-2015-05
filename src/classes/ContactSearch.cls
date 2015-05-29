public with sharing class ContactSearch {
	
    @AuraEnabled
    public static List<Contact> getContacts(String searchTerm, Integer maxResults) {
        List<Contact> results = new List<Contact>();
        
        if (String.isNotEmpty(searchTerm)) {
            String wildcardSearchTerm = searchTerm + '%';
            Integer recordLimit = Integer.valueOf(maxResults);
            
            results = [
                SELECT Id, Name, Phone, Email
                FROM Contact 
                WHERE Name LIKE :wildcardSearchTerm 
                ORDER BY Name
                LIMIT :recordLimit
            ];
        }
        return results;
    }
}