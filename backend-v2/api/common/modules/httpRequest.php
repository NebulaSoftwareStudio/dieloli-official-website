<?php

/**
 * Class httpRequest
 * 外部 HTTP 请求相关操作
 */
class httpRequest
{
    private function curl_request($url, $param, $method){
        $ch = curl_init(); //初始化cURL
        if($method == 'POST'){
            curl_setopt($ch,CURLOPT_POST,1);//Post请求方式
            curl_setopt($ch,CURLOPT_POSTFIELDS,$param);//Post变量
        }
        if($method === 'GET'){
            if(isset($param)){
                $url = $url."?";
                foreach($param as $key => $value){
                    $url = $url.$key."=".$value."&";
                }

            }
            $url = $url."_t=".time();
        }
        // echo "<p><b>".$url."</b></p>";

        curl_setopt($ch,CURLOPT_URL,$url);//抓取指定网页
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);//要求结果为字符串并输出到屏幕上
        curl_setopt($ch, CURLOPT_HEADER, 0);
        //设置header
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
        ));
        $result = curl_exec($ch);
//        $requestInfo = curl_getinfo($ch);
//        echo "<p>".json_encode($requestInfo)."</p>";
        // 关闭cURL资源，并且释放系统资源
        curl_close($ch);
        return $result;
    }

    public function get_action($url, $param){
        return $this -> curl_request($url, $param, 'GET');
    }

    public function post_action($url, $param){
        return $this -> curl_request($url, $param, 'POST');
    }
}
