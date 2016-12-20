	function myFunctionde() {
		var PMaa = document.getElementById("PMnumber").value/1;
		var PMan = PMaa.toLocaleString("de-DE");
		document.getElementById("PMnblo").value = PMan;				   	


		var dtoption = {weekday: "long",
						year: "numeric",
					    month: "long",
					    day: "numeric"};

		var PMdt = new Date(document.getElementById("PMdate").value);
		document.getElementById("PMdtlo").value = PMdt.toLocaleDateString("de-DE");
		document.getElementById("PMdtfull").value = PMdt.toLocaleDateString("de",dtoption);
		var PMformat = new Intl.DateTimeFormat("de", dtoption);
		aaa = PMformat.format(PMdt);
		console.log(aaa);

	}

    function myFunctionbr() {
		var PMaa = document.getElementById("PMnumber").value/1;
		var PMan = PMaa.toLocaleString();
		document.getElementById("PMnblo").value = PMan;		

		var dtoption = {weekday: "long",
						year: "numeric",
					    month: "long",
					    day: "numeric"};

		var PMdt = new Date(document.getElementById("PMdate").value);
		document.getElementById("PMdtlo").value = PMdt.toLocaleDateString();
		document.getElementById("PMdtfull").value = PMdt.toLocaleDateString("us", dtoption);
		   	
	}

	function myFunctionca() {
		var PMaa = document.getElementById("PMnumber").value/1;
		var PMan = PMaa.toLocaleString("fr-CA");
		document.getElementById("PMnblo").value = PMan;		

		var dtoption = {weekday: "long",
						year: "numeric",
					    month: "long",
					    day: "numeric"};

		var PMdt = new Date(document.getElementById("PMdate").value);
		document.getElementById("PMdtlo").value = PMdt.toLocaleDateString("fr-CA");
		document.getElementById("PMdtfull").value = PMdt.toLocaleDateString("fr",dtoption);
		   	
	}


