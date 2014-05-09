<html>
<head>
	<title>Demo ScrollingList</title>
</head>
	<style>
		body {
			font-family: Arial;
			font-size: 15px;
			color: #2E2E2E;
		}
		.scroll-text-container {
			border:1px dashed #aaaaaa;
			padding: 5px;
			width: 300px;
			margin: 50px auto;
		}
		#scroll-text {
			overflow: hidden;
			height: 300px;
		}
		#scroll-text ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
		p {
			margin: 5px 0;
		}
	</style>
<body>
	<div class="scroll-text-container">
		<div id="scroll-text">
			<ul>
				<li><p>1. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine</p></li>
				<li><p>2. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p></li>
				<li><p>3. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary</p></li>
				<li><p>4. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p></li>
				<li><p>5. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p></li>
				<li><p>6. I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies</p></li>
				<li><p>7. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary</p></li>
			</ul>
		</div>
	</div>

<script src="jquery-1.11.0.min.js"></script>
<script src="../jquery.scrollinglist.js"></script>

<script>
	$('#scroll-text').scrollinglist({
		pauseOnHover: true,
		delay: 2000,
		developing: true,
		startFromBottom: true
	});
</script>

</body>
</html>
