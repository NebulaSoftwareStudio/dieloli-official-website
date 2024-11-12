<?php


class CORSPermission
{

    // 创建 Token
    public function create_token ($uid){
        $this -> cors();
        $time = time();
        $token = hash('sha256', $uid.$time);

        // 将生成的 token 数据插入数据库
        $this -> save_token($token, $uid, $time);

        return $token;
    }

    // 检查 Token
    public function check_token(){
        $this -> cors();

        if(isset($_SERVER['HTTP_ACCESS_TOKEN'])){
            $token = $_SERVER['HTTP_ACCESS_TOKEN'];
            // 获取token对象
            return $this->get_token($token);
        }
        else{
            return false;
        }
    }





    /**
     * Token 操作
     */

    // 保存新生成的 Token
    private function save_token($token, $uid, $time){
        if(SOLAR_TOKEN_STORAGE === 'mysql'){
            $database = new database();
            $database -> add_data("INSERT INTO `solar_app_access_token` (`ID`, `token`, `target_index`, `time`) ".
                "VALUES (NULL, '$token', '$uid', '$time');");
            return true;
        }
        elseif (SOLAR_TOKEN_STORAGE === 'redis'){
            if(SOLAR_REDIS_ADDRESS === ''){
                return false;
            }
            else{
                //TODO: link to redis and save token key
                return true;
            }
        }
        return false;
    }

    // 获取 Token 键值对
    private function get_token($token){
        if(SOLAR_TOKEN_STORAGE === 'mysql'){
            $database = new database();
            $token_result = $database -> get_single_data("select * from `solar_app_access_token` where `token` = '$token'");
            if($token_result){
                if(time() - $token_result["time"] > SOLAR_TOKEN_EXPIRE_TIME){
                    $this->delete_token($token);
                    return false;
                }
                else{
                    return $token_result;
                }
            }
            else{
                return false;
            }
        }
        elseif(SOLAR_TOKEN_STORAGE === 'redis'){
            //TODO: link to redis and get token object
            return array();
        }

        return false;
    }

    // 删除 Token
    private function delete_token($token){
        if(SOLAR_TOKEN_STORAGE === 'mysql'){
            $database = new database();
            $database -> delete_data("delete from `solar_app_access_token` where `token` = '$token'");
            return true;
        }
        elseif(SOLAR_TOKEN_STORAGE === 'redis'){
            //TODO: link to redis and remove token object
            return true;
        }

        return false;
    }

    // 不定期清理失效 token
    private function delete_expired_token(){
        if(SOLAR_TOKEN_STORAGE === 'mysql'){
            $start_time = time()-SOLAR_TOKEN_EXPIRE_TIME;
            $database = new database();
            $database -> delete_data("delete from `solar_app_access_token` where `time` < '".$start_time."'");
            return true;
        }
        elseif(SOLAR_TOKEN_STORAGE === 'redis'){
            //TODO: link to redis and remove token object
            return true;
        }

        return false;
    }



    /**
     *  An example CORS-compliant method.  It will allow any GET, POST, or OPTIONS requests from any
     *  origin.
     *
     *  In a production environment, you probably want to be more restrictive, but this gives you
     *  the general idea of what is involved.  For the nitty-gritty low-down, read:
     *
     *  - https://developer.mozilla.org/en/HTTP_access_control
     *  - http://www.w3.org/TR/cors/
     *
     */
    private function cors() {

        // Allow from any origin
        if (isset($_SERVER['HTTP_ORIGIN'])) {
            // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
            // you want to allow, and if so:
            header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');    // cache for 1 day
        }

        // Access-Control headers are received during OPTIONS requests
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                // may also be using PUT, PATCH, HEAD etc
                header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

            exit(0);
        }

    }



}
