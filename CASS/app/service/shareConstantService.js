var app = angular.module('csViewApp.shareConstantService', []);
app.factory('shareConstantService', function () {

    var hostUrl = "localhost";

    return {
        hostUrl: hostUrl
    }

});

//QRY_GET_ACCNT_DETAILS = "CALL `cs_files_db`.`account_spr_getAccountDetails`(?);";
////<{in accountId int(11)}>
//public static final String QRY_DOC_DETAILS = "CALL `cs_files_db`.`account_spr_getDocDetails`(?,?,?);";
////<{in orgId int}>, <{in grpId int}>, <{in docId int}>
//public static final String QRY_GET_DOC_REVISIONS = "CALL `cs_files_db`.`account_spr_getDocRevisions`(?);";
////<{in docId int}>
//public static final String QRY_GET_DOC_INFO = "CALL `cs_files_db`.`account_spr_getDocsInfo`(?,?,?);";
////<{in orgId int}>, <{in groupId int}, <{in accId int}>



//"doc/{docId}/details", method = RequestMethod.GET)
//	public Map<String, Serializable> getdocDetails(@PathVariable int docId,HttpServletRequest request) {
//                                                   
//
//"{accountId}/doc/basicInfo", method = RequestMethod.GET)
//	public Map<String, Serializable> getDocInfo(@PathVariable int accountId,HttpServletRequest request) {
//                                                
// "/basicInfo/{accountId}/update", method = RequestMethod.PUT)
//	public Map<String, Serializable> updateAccountdetails(@RequestBody Map<String, Object> accntMap, @PathVariable int accountId,HttpServletRequest request) {                                                