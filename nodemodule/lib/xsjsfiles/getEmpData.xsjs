var conn = $.hdb.getConnection();
var query = 'SELECT * FROM "Z_MTA_XSJS_DEMO.hanamodule.Tables::EmpData"';
        
var rs = conn.executeQuery(query);

var body = "";

for(var i = 0; i < rs.length; i++){
   
	body += rs[i]["EMPID"] + "\t" + rs[i]["EMPNAME"] + "\t" + 
			rs[i]["ADDRESS"] + "\t" + rs[i]["CITY"] + "\n";
   }

$.response.setBody(body);
$.response.contentType = "application/vnd.ms-excel; charset=utf-16le";
$.response.headers.set("Content-Disposition",
		"attachment; filename=Excel.xls");
$.response.status = $.net.http.OK;