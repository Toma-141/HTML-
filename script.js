$(function()
{
	// ①
	$(".four li").eq(0).addClass("select");

	// ②
	$(".four img").click(function()
	{
		// ③
		var img = $(this).attr("src");

		// ④
		$(".four li").removeClass("select");
		$(this).parent().addClass("select");

		// ⑤
		$(".sp img").fadeOut(500, function()
		{
			$(this).attr("src", img),
			$(this).fadeIn(500)
		});
	});
});