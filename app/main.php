<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_errors','On');
$photos = scandir('./photos'); 
/*
unset($photos[0]);
unset($photos[1]);*/
$photos = array_slice($photos, 2, 5);

//print_r($photos);
$i = 0;
foreach($photos as $photo) {
	echo('<div class="photo_holder" style="left:' . $i * 10 . '%">');
		echo('<img src="/photos/'.$photo.'"/>');
	echo('</div>');
	$i++;
}
?>
<style>
	body,html {
		width: 100%;
		height: 100%;
		margin: 0;	
		padding: 0;	
	}
	.photo_holder {
		position: absolute;
		width: 60%;		
		height: 100%;			
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-ms-box-sizing: border-box;
		overflow: hidden;
		border-left: 2px solid #fff;
		border-radius: 10px / 50% 0;
	}

	.photo_holder img {
		width: 100%;
	}
</style>