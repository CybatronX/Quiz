$('.freeGiftForm').attr('action', result.freeGiftLink);

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
		param: "0",
		header: "Your Score was 0/10",
		content:"You can definitely do better! It is time to read the books again! ",
		image:"http://66.media.tumblr.com/tumblr_lo7i4ubT4f1qkmpj8o1_500.gif",
		},
		{
		param: "1",
		header: "Your Score was 1/10",
		content:"You can definitely do better! It is time to read the books again!",
		image:"http://66.media.tumblr.com/tumblr_lo7i4ubT4f1qkmpj8o1_500.gif",
		},
		{
		param: "2",
		header: "Your Score was 2/10",
		content:"You can definitely do better! It is time to read the books again!",
		image:"http://66.media.tumblr.com/tumblr_lo7i4ubT4f1qkmpj8o1_500.gif",
		},
		{
		param: "3",
		header: "Your Score was 3/10",
		content:"You can definitely do better! It is time to read the books again!",
		image:"http://66.media.tumblr.com/tumblr_lo7i4ubT4f1qkmpj8o1_500.gif",
		},
		{
		param: "4",
		header: "Your Score was 4/10",
		content:"You did okay, but you can definitely do better! It might be time to read the books again!",
		image:"http://i.giphy.com/cYYx0b3DcYwOA.gif",
		},
		{
		param: "5",
		header: "Your Score was 5/10",
		content:"You did okay, but you can definitely do better! It might be time to read the books again!",
		image:"http://i.giphy.com/cYYx0b3DcYwOA.gif",
		},
		{
		param: "6",
		header: "Your Score was 6/10",
		content:"You did okay, but you can definitely do better! It might be time to read the books again!",
		image:"http://i.giphy.com/cYYx0b3DcYwOA.gif",
		},
		{
		param: "7",
		header: "Your Score was 7/10",
		content:"You did okay, but you can definitely do better! It might be time to read the books again!",
		image:"http://i.giphy.com/cYYx0b3DcYwOA.gif",
		},
		{
		param: "8",
		header: "Your Score was 8/10",
		content:"Congratulations! You scored more than 80% of others who took this quiz! You really do know your Harry Potter Trivia.. Hermione is very happy indeed!",
		image:"http://31.media.tumblr.com/tumblr_m77eqgzsFK1qdm4v9o1_500.gif",
		},
		{
		param: "9",
		header: "Your Score was 9/10",
		content:"Congratulations! You scored more than 90% of others who took this quiz! You really do know your Harry Potter Trivia.. Hermione is very happy indeed!",
		image:"http://31.media.tumblr.com/tumblr_m77eqgzsFK1qdm4v9o1_500.gif",
		},
		{
		param: "10",
		header: "Your Score was 10/10",
		content:"You did better than 100% of those who took this quiz! 100%! Well, shit. Are you Hermione herself?",
		image:"http://31.media.tumblr.com/tumblr_m77eqgzsFK1qdm4v9o1_500.gif",
		},

		]

		var currentAnswerKey = GetURLParameter('custom_wpvqresults');

		var currentAnswerObjectArray = $.grep(quizOutputs , function(n, i) {
			return n.param == currentAnswerKey ;
			});
			if (currentAnswerObjectArray.length > 0) {
			var currentAnswerObject = currentAnswerObjectArray[0];
			// fill the form elements with answer
			$('.header').text(currentAnswerObject.header);
			$('.content').text(currentAnswerObject.content);
			$('.resultImage').attr("src",currentAnswerObject.image);
			}
			else
			{
			$('.header').text("sorry, we could not calculate your result:(");
			}