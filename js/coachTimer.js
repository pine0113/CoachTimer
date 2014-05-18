 Parse.initialize("swtRMGFGKXZI4XTZ6MxMASTIhMV1ZArZhAX4A4fj", "dQgwEycp8c0qoTCAqtDbior2xsCnsMKbTaUSq69a");

 function loadMenu()
 {
	 
 $("#menu").replaceWith(
'<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">'+
'      <div class="container">'+
'        <div class="navbar-header">'+
'          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
'            <span class="sr-only">Toggle navigation</span>'+
'            <span class="icon-bar"></span>'+
'            <span class="icon-bar"></span>'+
'            <span class="icon-bar"></span>'+
'          </button>'+
'          <a class="navbar-brand" href="./index.html">鍛鍊時計</a>'+
'        </div>'+
'        <div class="collapse navbar-collapse">'+
'          <ul class="nav navbar-nav">'+
'            <li class="active"><a href="./index.html">Home</a></li>'+
'            <li><a href="./history.html">歷史紀錄</a></li>            			           '+
'            <li><a href="./log.html">開發紀錄</a></li>            			           '+
'			<li><a id="loginButton" onclick="login()">以Facebook登入</a>'+
'				<a id="logoutButton" onclick="logout()">登出</a>'+
'			</li> 			'+
'          </ul>'+
'        </div><!--/.nav-collapse -->'+
'      </div>'+
'</div>'
 );
 
	
 }
 
   
 		function messBox(mess)
		{
			$("#messenge").html(mess).fadeIn('slow');							
			setTimeout(
			function()
			{
				$("#messenge").fadeOut('slow');					
				
			},1000
			);
		}
		
		function login()
		{					
			debugger;			
			if (FBresponse.status === 'connected') {
					messBox("FB已登入授權");
					Parse.User.logOut();					
					var user = Parse.User.current();
					
					if(user == null)
					{
						Parse.FacebookUtils.logIn(null, {
						success: function(user) {
				
						/*if (!user.existed()) {
							alert("User signed up and logged in through Facebook!");									
						}else 
						{
							alert("User logged in through Facebook!");					
						}
						*/
						
						messBox("Parse login success");		
						parseLogCheck();
					//	AddRecord()
		
				
						},
						error: function(user, error) {					
							messBox("Parse login Fail");
						}
						});
					}else
					{
						messBox("Parse already login");
					}
					
					//AddRecord();								
			} else if (FBresponse.status === 'not_authorized') {
					messBox("FB未授權");
					
					Parse.FacebookUtils.logIn(null, {
					success: function(user) {
				
						/*if (!user.existed()) {
							alert("User signed up and logged in through Facebook!");									
						}else 
						{
							alert("User logged in through Facebook!");					
						}
						*/
				
						messBox("Parse login success");		
						parseLogCheck();						
						//AddRecord()
		
				
					},
					error: function(user, error) {					
						messBox("Parse login Fail");
					}
					});
					
			} else {
					messBox("未登入FB");																			
			}
			
			
		}
			
		function logout()
		{
			Parse.User.logOut();
			parseLogCheck();
			messBox("登出成功");
		}
		
		function parseLogCheck()
		{
		debugger;
			var user = Parse.User.current();	
			if (user==null)
			{
				$("#loginButton").show();
				$("#logoutButton").hide();
			}else
			{
				$("#loginButton").hide();
				$("#logoutButton").show();
			}
		}