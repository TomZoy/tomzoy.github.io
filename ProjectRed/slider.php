
<?php

//set how many photos we want, if given number is bigger than total photos, it resets to the total number
    $desiredNoOfPhotos = 4;

//detech all photos in the folder
    $path = './photos/imageSlider';
    $files = scandir($path);
    $photos =[];

    foreach($files as $value)
    {
        if(preg_match('/\.png$/', $value))
        {
            array_push($photos,$value);
        }
    }

    function selectRandomImages(&$sourceArray,$requredNumber,&$outArray)
    {
        if(count($sourceArray)<$requredNumber)
        {
            $requredNumber = count($sourceArray);
        }

        $tmp = array_rand($sourceArray,$requredNumber);


        foreach($tmp as $value)
        {
            array_push($outArray,$sourceArray[$value]);
        }
    }




//see if the default image is found, for the current page
$selectedSliderImages =[];


/*
muszaki: vasut  slider-kepek-03-920x228pxN.png
referncia: naplemente slider-kepek-07-920x228px.png
bemutatkozas: markolo slider-kepek-12-920x228pxN.png
tervezes: autopalya slider-kepek-08-920x228pxN.png
*/
$defaultPhoto="";

switch ($page) {
    case "bemutatkozas":
        $defaultPhoto = 'slider-kepek-12-920x228pxN.png';
        break;
        
    case "muszaki_ellenorzes":
        $defaultPhoto = 'slider-kepek-03-920x228pxN.png';
        break;
        
    case "referenciak":
        $defaultPhoto = 'slider-kepek-07-920x228px.png';
        break;
        
    case "tervezes":
        $defaultPhoto = 'slider-kepek-08-920x228pxN.png';
      break;


      }


    $tmp = array_search($defaultPhoto,$photos,true);
    if($tmp!="")
    {
        array_push($selectedSliderImages,$defaultPhoto); //make it the first photo
        array_splice($photos,$tmp,1); //remove it from the selectable list
        $desiredNoOfPhotos--;
        selectRandomImages($photos,$desiredNoOfPhotos,$selectedSliderImages);
    }

    //if the desired photo is not found, just pick something else
    else
    {
        selectRandomImages($photos,$desiredNoOfPhotos,$selectedSliderImages);
    }




/*
echo("<br/>");

echo implode(", ",$photos);

echo("<br/>");
echo("<br/>");
echo implode(" ",$selectedSliderImages);
*/
?>



<div class="container">

    <div class="row" style="margin-bottom: 10px;">
        <div class="col l10 offset-l1 imageSlider">  
        
        <?php
            foreach($selectedSliderImages as $value)
            {
                echo('<div>');
                echo("<img class=\"sliderImage\" src=\"photos/imageSlider/$value\" />" );
                echo('<div class="dotBar"></div>');
                echo('</div>');
            }

            ?>
        </div>

    </div>
</div>