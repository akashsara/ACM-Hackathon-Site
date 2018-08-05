<?php 
    function writeto(){
        $TeamName = $_POST["teamName"];
        $Abstract = $_POST["Abstract"];
        $member1_name = $_POST["member1_name"];
        $member1_college = $_POST["member1_college"];
        $member1_email = $_POST["member1_email"];
        $member1_phone = $_POST["member1_phone"];
        $member1_github = $_POST["member1_github"];
        $member2_name = $_POST["member2_name"];
        $member2_college = $_POST["member2_college"];
        $member2_email = $_POST["member2_email"];
        $member2_phone = $_POST["member2_phone"];
        $member2_github = $_POST["member2_github"];
        $member3_name = $_POST["member3_name"];
        $member3_college = $_POST["member3_college"];
        $member3_email = $_POST["member3_email"];
        $member3_phone = $_POST["member3_phone"];
        $member3_github = $_POST["member3_github"];
        $member4_name = $_POST["member4_name"];
        $member4_college = $_POST["member4_college"];
        $member4_email = $_POST["member4_email"];
        $member4_phone = $_POST["member4_phone"];
        $member4_github = $_POST["member4_github"];

        require __DIR__ . '/vendor/autoload.php';
        $DEFAULT_URL = 'https://yahh-6c917.firebaseio.com';
        #const DEFAULT_TOKEN = 'AIzaSyCHqAnzch1j8NoHivn6cIkY1-I1YysIsJc';
        $DEFAULT_TOKEN = '6Is7IYTGyQkmD2Q0siFLBhqJK8h90fXWFbQzUwY3';
        $DEFAULT_PATH = '/';

        $firebase = new \Firebase\FirebaseLib($DEFAULT_URL, $DEFAULT_TOKEN);

        $test = [
            "MEMBER1" => [
                "Name" => $member1_name,
                "College"   => $member1_college,
                "Email"     => $member1_email,
                "Phone"    =>  $member1_phone,
                "Github"    => $member1_github
            ],
            "MEMBER2" => [
                "Name" => $member2_name,
                "College"   => $member2_college,
                "Email"     => $member2_email,
                "Phone"    =>  $member2_phone,
                "Github"    => $member2_github
            ],
            "MEMBER3" => [
                "Name" => $member3_name,
                "College"   => $member3_college,
                "Email"     => $member3_email,
                "Phone"    =>  $member3_phone,
                "Github"    => $member3_github
            ]
            ];

        $random_test = rand(0,1000);

        $firebase->set($DEFAULT_PATH . "teams/" . $TeamName . "__ref:" . $random_test , $test);
    }

    writeto();

    # Confirm box 

    
    #header("Location: /yah"); /* Redirect browser */  //redirects to YAH hackathon index page.
    exit();
?> 