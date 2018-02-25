 <?php

// // require __DIR__ . '/PHPMailer/autoload.php';
//  require('lib/FPDF/fpdf.php');
 require __DIR__ . '/fpdf181/fpdf.php';
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

// use src\Exception;
// use src\PHPMailer;
// use src\SMTP;

// use PHPMailer\PHPMailer;
// use PHPMailer\Exception;

// require 'path/to/PHPMailer/src/Exception.php';
// require 'path/to/PHPMailer/src/PHPMailer.php';
// require 'path/to/PHPMailer/src/SMTP.php';

//$mail = new PHPMailer(true);                              // Passing `true` enables exceptions

 
    // require 'lib/PHPMailer/PHPMailerAutoload.php';

    //if (isset($_POST["cart-data"])&&


        if(isset($_POST["name"])&&isset($_POST["email"])&&isset($_POST["phone"])&&isset($_POST["address"])&&isset($_POST["p1"])&&isset($_POST["p2"])&&isset($_POST["p3"])&&isset($_POST["p4"])&&isset($_POST["p5"])&&isset($_POST["p6"])&&isset($_POST["p7"])&&isset($_POST["p8"])&&isset($_POST["p9"])&&isset($_POST["p10"])&&isset($_POST["p11"])&&isset($_POST["p12"])&&isset($_POST["p13"])) {

    $cart_data = $_POST["cart_data"];
        $name = $_POST["name"];
            $email = $_POST["email"];
                $phone = $_POST["phone"];
                    $address = $_POST["address"];

                    $p1 = $_POST["p1"];$p2 = $_POST["p2"];$p3 = $_POST["p3"];$p4 = $_POST["p4"];$p5 = $_POST["p5"];$p6 = $_POST["p6"];$p7 = $_POST["p7"];$p8 = $_POST["p8"];$p9 = $_POST["p9"];$p10 = $_POST["p10"];$p11 = $_POST["p11"];$p12 = $_POST["p12"];$p13 = $_POST["p13"];

                    // $sub  = $_POST["sub-total-value"];
                    // $shipping = $_POST["shipping-value"];
                    // $total = $_POST["total-value"]; 

                   $sub = 0;
                   $shipping = 10;
                   $total = 0; 

//    $lineBreak = 2;
    // $pdf = new FPDF();
    // $pdf->AddPage();
    // $pdf->SetFont('Arial','B',16);
    // $pdf->Write(5,'Ceramic Collections');
    // $pdf->Ln($lineBreak);
    // $pdf->Write(4,'Customer Order Receipt');
    // $pdf->Ln($lineBreak);
    // $pdf->Write(3,$name);
    // $pdf->Ln($lineBreak);
    // $pdf->Write(3,$email);
    // $pdf->Ln($lineBreak);
    // $pdf->Write(3,$phone);
    // $pdf->Ln($lineBreak);
    // $pdf->Write(3,$address);

    // $p1T="",$p2T="",$p3T="",$p4T="",$p5T="",$p6T="",$p7T="",$p8T="",$p9T="",$p10T="",$p11T="",$p12T="",$p13T="";
    // $p1I="",$p2I="",$p3I="",$p4I="",$p5I="",$p6I="",$p7I="",$p8I="",$p9I="",$p10I="",$p11I="",$p12I="",$p13I="";

    if($p1==1){
        //$p1T = 'Product #1';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg"  style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        
        $p1T = 'Product #1';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p1H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p1T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="width:250px;">';

        $sub = $sub + 25;



    // echo "Test";
    // echo $p1I;

    }

        if($p2==1){
                $p2T = 'Product #2';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p2H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p2T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic2.jpg" style="width:250px;" >';

        $sub = $sub + 25;


    }

            if($p3==1){
        $p3T = 'Product #3';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p3H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p3T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic3.jpg" style="width:250px;">';

        $sub = $sub + 25;
    }
            if($p4==1){
               $p4T = 'Product #4';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p4H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p4T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic4.jpg" style="width:250px;">';

        $sub = $sub + 25;

    }
            if($p5==1){
                $p5T = 'Product #2';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p5H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p5T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic5.jpg" style="width:250px;">';

        $sub = $sub + 25;

    }
            if($p6==1){
        $p6T = 'Product #2';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p6H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p6T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic6.jpg" style="width:250px;">';

        $sub = $sub + 25;

    }

            if($p7==1){
        $p7T = 'Product #7';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p7H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p7T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic7.jpg" style="width:250px;">';

        $sub = $sub + 25;

    }
            if($p8==1){
        $p8T = 'Product #8';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p8H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p8T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic8.jpg" style="width:250px;">';

        $sub = $sub + 25;

    }
            if($p9==1){
        $p9T = 'Product #9';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p9H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p9T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic9.jpg" style="width:250px;">';

        $sub = $sub + 25;

    }
            if($p10==1){
        $p10T = 'Product #10';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p10H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p10T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic10.jpg" style="width:250px;">';

        $sub = $sub + 25;

    }
            if($p11==1){
        $p11T = 'Product #11';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p11H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p11T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic11.jpg" style="width:250px;">';

        $sub = $sub + 25;

    }
            if($p12==1){
                $p12T = 'Product #12';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p12H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p12T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic12.jpg" style="width:250px;">';

        $sub = $sub + 25;


    }

            if($p13==1){
        $p13T = 'Product #13';
    //     $p1I = '<img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic1.jpg" style="display: block;
    // margin-left: auto;
    // margin-right: auto; width:100px;height:100px;">';
        $p13H = '

                <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
        <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3> '.$p13T.'</h3></td>
    <td>  </td>
    <td></td>
    <td> </td>
    <td> </td>
    <td><div style="margin-left:280%;">$25.00</div> </td>
    <td></td>
    </tr>
    </table>
        <img src="https://nirupanm.github.io/Ceramic/ceramicphotos/pic13.jpg" style="width:250px;">';

        $sub = $sub + 25;

    }


    $total = $sub + $shipping;

    // echo $cart_data;
    // echo $name;
    // echo $email;
    // echo $phone;
    // echo $address;

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com;';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'nirupan119@gmail.com';                 // SMTP username
    $mail->Password = 'PassTest123';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587; 

                                       // TCP port to connect to

    //Recipients
    $mail->setFrom('nirupan119@gmail.com', 'Ceramic Collections Customer Notification');

    $mail->smtpConnect(
    array(
        "ssl" => array(
            "verify_peer" => false,
            "verify_peer_name" => false,
            "allow_self_signed" => true
        )
    )
);


    $mail->addAddress('gulermry7@gmail.com', 'Owner');
    $mail->addAddress('nirupanm007@gmail.com', 'Admin');     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('rjuassociates@gmail.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('bas.csv','bay_schedule.csv');
    // $mail->addAttachment('fms.csv','other_schedule.csv');
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New Customer Order';
    $mail->msgHTML( '
        <html>
    <head>
    <body style="border:solid 2px #211f1f;">
    <title>Meerai Ceramic Collections</title>
    </head>
    <body>
    <h1>The order has been placed by</h1>
    <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h4> Name: '.$name.'<h4></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td>  </td>
    </tr>
    
    
    </table>
    <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h4> Email: '.$email.' </h4></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td>  </td>
    </tr>
    
    
    </table>
    <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h4> Phone: '.$phone.'</h4></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td>  </td>
    </tr>
    
    
    </table>
    <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h4>Address: '.$address.'</h4></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td>  </td>
    </tr>
    
    
    </table>



    '.$p1H.'
    '.$p2H.'
    '.$p3H.'
    '.$p4H.'
    '.$p5H.'
    '.$p6H.'
    '.$p7H.'
    '.$p8H.'
    '.$p9H.'
    '.$p10H.'
    '.$p11H.'
    '.$p12H.'
    '.$p13H.'


    <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3>Subtotal: </h3></td>
    <td></td>
    <td> </td>
    <td> </td>
    <td></td>
     <td><div style="margin-left:280%;">$'.$sub.'.00</div> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td>  </td>
    </tr>
    
    
    </table>
    <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>    
    <td><h3>Shipping:  </h3></td>
    <td></td>
    <td> </td>
    <td> </td>
    <td></td>
    <td><div style="margin-left:280%;">$'.$shipping.'.00</div> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td>  </td>
    </tr>
    
    
    </table>
    <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td><h3>Total: </h3></td>
    <td></td>
    <td> </td>
    <td> </td>
    <td></td>
    <td><div style="margin-left:280%;">$'.$total.'.00</div> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td> </td>
    <td>  </td>
    </tr>
    
    
    </table>


    </body>
    </html>');
    $mail->AltBody = 'Customer Order';



// $mail->Subject   = $subject;
//     $mail->Body      = $body;
//     $mail->AddAddress($emails);
   // $mail->addStringAttachment($pdf->Output("S",'OrderDetails.pdf'), 'OrderDetails.pdf', $encoding = 'base64', $type = 'application/pdf');
    //return $mail->Send();


    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}


}
else{
    echo 'var not set';
}
?>