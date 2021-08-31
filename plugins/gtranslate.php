<?php

if(isset($_SERVER['HTTP_USER_AGENT']) && !isset($_SERVER['HTTP_X_GT_LANG']) && preg_match('/bot|spider|slurp|facebook/i', $_SERVER['HTTP_USER_AGENT']) == 0) {
    $default_language	= "es";
    $allowed_languages 	= ["en", "es", "ca", "eu", "gl", "nl", "ro"];
    $accept_language 	= strtolower(substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2));
    $requested_url 		= 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

    if($accept_language == 'zh')
        $accept_language == 'zh-CN';
    if($accept_language != $default_language && in_array($accept_language, $allowed_languages) && !isset($_COOKIE['gt_auto_switch'])) {
        // set cookie for 30 days and redirect
        setcookie('gt_auto_switch', 1, time() + 2592000);

        header('Location: ' . str_replace($_SERVER['HTTP_HOST'], $_SERVER['HTTP_HOST'] . "/" . $accept_language, $requested_url));
        exit;
    }
}

?>
