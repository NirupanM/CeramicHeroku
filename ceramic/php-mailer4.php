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

    $lineBreak = 2;
    $pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('Arial','B',16);
    $pdf->Write(5,'Ceramic Collections');
    $pdf->Ln($lineBreak);
    $pdf->Write(4,'Customer Order Receipt');
    $pdf->Ln($lineBreak);
    $pdf->Write(3,$name);
    $pdf->Ln($lineBreak);
    $pdf->Write(3,$email);
    $pdf->Ln($lineBreak);
    $pdf->Write(3,$phone);
    $pdf->Ln($lineBreak);
    $pdf->Write(3,$address);

    // $p1T="",$p2T="",$p3T="",$p4T="",$p5T="",$p6T="",$p7T="",$p8T="",$p9T="",$p10T="",$p11T="",$p12T="",$p13T="";
    // $p1I="",$p2I="",$p3I="",$p4I="",$p5I="",$p6I="",$p7I="",$p8I="",$p9I="",$p10I="",$p11I="",$p12I="",$p13I="";

    


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
    $mail->setFrom('nirupan119@gmail.com', 'Customer Notification');

    $mail->smtpConnect(
    array(
        "ssl" => array(
            "verify_peer" => false,
            "verify_peer_name" => false,
            "allow_self_signed" => true
        )
    )
);


    $mail->addAddress('nirupanm007@gmail.com', 'Customer Order');     // Add a recipient
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
    $mail->AddEmbeddedImage("http://localhost/ceramic/ceramicphotos/pic1.jpg", "my-attach", "pic1.jpg");
    if($p1==1){
        $p1T = 'Product #1';
        $p1I = '<img src="cid:my-attach">';
        $p1H = '<table>
    <tr>
    <th>'.$p1T.'</th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td> '.$p1I.'  </td>
    <td> </td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td>  </td>
    <td> </td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td>  </td>
    <td> </td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td> </td>
    <td> </td>
    <td> </td>
    <td>  </td>
    </tr>
    <tr>
    <td> </td>
    <td> </td>
    <td> </td>
    <td>  </td>
    </tr>
    
    </table>';

    echo "Test";
    echo $p1I;

    }


    
    $mail->Body    = '<html>
    <head>
    <title>Ceramic Collections</title>
    </head>
    <body>
    <p>Customer Order Receipt</p>
    <table>
    <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    </tr>
    <tr>
    <td> Name: </td>
    <td> '.$name.'</td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td> Email: </td>
    <td> '.$email.'</td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td> Phone: </td>
    <td> '.$phone.'</td>
    <td> </td>
    <td> </td>
    </tr>
    <tr>
    <td>Address: </td>
    <td>'.$address.' </td>
    <td> </td>
    <td>  </td>
    </tr>
    
    
    </table>

    '.$p1H.'
    </body>
    </html>';
    $mail->AltBody = 'Customer Order';



// $mail->Subject   = $subject;
//     $mail->Body      = $body;
//     $mail->AddAddress($emails);
    $mail->addStringAttachment($pdf->Output("S",'OrderDetails.pdf'), 'OrderDetails.pdf', $encoding = 'base64', $type = 'application/pdf');
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