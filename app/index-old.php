<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_errors','On');
$photos = scandir('./photos'); 

unset($photos[0]);
unset($photos[1]);

//print_r($photos);

foreach($photos as $photo) {
	echo('<div class="photo_holder">');
		echo('<img src="/photos/'.$photo.'"/>');
	echo('</div>');
}
?>
<style>
	.photo_holder {
		float: left;
		width: 130px;		
		height: 130px;		
		margin: 10px;		
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-ms-box-sizing: border-box;
		overflow: hidden;
		border-radius: 50%;

	}

	.photo_holder img {
		max-width: 100%;
	}
</style>