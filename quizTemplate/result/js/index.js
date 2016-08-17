function GetURLParameter(sParam)
		{
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
		for (var i = 0; i < sURLVariables.length; i++)
		{
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam)
		{
		return sParameterName[1];
		}
		}
		};
		var quizOutputs = [
		{
		param: "OverTheTopOrganizer",
		header: "Header for OverTheTopOrganizer",
		content:"this is some test content"
		},
		{
		param: "CleanClutterConsious",
		header: "Header For CleanClutterConsious",
		content:"this is some test content"
		},
		{
		param: "StateOfControlledChaos",
		header: "#Header For StateOfControlledChaos",
		content:"this is some test content"
		},
		{
		param: "StylishlyScrambled",
		header: "#Header For StylishlyScrambled",
		content:"this is some test content"
		},
		];
		

		var currentAnswerKey = GetURLParameter('custom_wpvqresults');

		var currentAnswerObjectArray = $.grep(quizOutputs , function(n, i) {
			return n.param == currentAnswerKey ;
			});
			if (currentAnswerObjectArray.length > 0) {
			var currentAnswerObject = currentAnswerObjectArray[0];
			// fill the form elements with answer
			$('.header').text(currentAnswerObject.header);
			$('.content').text(currentAnswerObject.content);
			}
			else
			{
			$('.header').text("sorry, no match found");
			}