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


        if(isset($_POST["name"])&&isset($_POST["email"])&&isset($_POST["phone"])&&isset($_POST["address"])) {

    $cart_data = $_POST["cart_data"];
        $name = $_POST["name"];
            $email = $_POST["email"];
                $phone = $_POST["phone"];
                    $address = $_POST["address"];

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

    // echo $cart_data;
    // echo $name;
    // echo $email;
    // echo $phone;
    // echo $address;


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
    $mail->Body    = '<html>
    <head>
    <title>HTML email</title>
    </head>
    <body>
    <p>A table as email</p>
    <table>
    <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    </tr>
    <tr>
    <td>Fname</td>
    <td>Sname</td>
    </tr>
    </table>
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