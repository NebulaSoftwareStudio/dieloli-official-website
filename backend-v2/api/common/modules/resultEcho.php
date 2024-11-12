<?php

/**
 * Class resultEcho
 * 框架输出相关操作。
 * 输出主要包括后端渲染和前端渲染两种，该类包含两种输出模式
 * 其一是 API 输出模式，将以 JSON 形式输出 result；
 * 其二是后端渲染模式，将直接输出html文档、文件二进制流、图片流等。
 */
class resultEcho
{
    public function printJson($success, $message, $result, $code){
        $echo_array = array(
            "success"=>$success,
            "message"=>$message,
            "code"=>$code,
            "result"=>$result
        );

        if(isset($code)){
            switch ($code){
                case 301: $code="301 Moved Permanently";break;
                case 302: $code="302 Found";break;
                case 401: $code="401 Unauthorized";break;
                case 403: $code="403 Forbidden";break;
                case 404: $code="404 Not Found";break;
                case 500: $code="500 Internal Server Error";break;
                default: $code="200 OK";$echo_array["code"]=200;break;
            }
            header('HTTP/1.1 '.$code);
        }

        echo json_encode($echo_array);
    }
}
