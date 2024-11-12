<?php

/**
 * Class router
 * 路由相关操作
 */
class router
{

    // 初始化路由方法
    public function init_router($production_path){
        $file_path = $this->get_router($production_path);

        // 检查权限。无权则重写
        $file_path = $this -> checkPermission($production_path, $file_path);

        include $production_path.$file_path.'.php';
    }




    // 获取用户请求的路由
    private function get_router($production_path){

        $file_path = "";

        if(SOLAR_ROUTER_MODE === 'history'){
            //TODO: 通过 URL 获取请求目标
            $uri = explode("?", $_SERVER['REQUEST_URI']);
            $file_path = $uri[0];
        }
        elseif(SOLAR_ROUTER_MODE === 'param'){
            // 通过 参数 获取目标。 根据?将请求路径取出
            $uri_explode = explode('?',$_SERVER['REQUEST_URI']);
            $file_path = $uri_explode[1] ?? '';
            $file_path = explode('&', $file_path);
            $file_path = $file_path[0] ?? '';
        }
        else{
            echo "路由解析失败。";
            die;
        }
        if($file_path===""){
            $file_path = "/index";
        }
        return $file_path;

    }

    // 检查路由权限
    private function checkPermission($production_path, $path){
        $cors_permission = new CORSPermission();
        $token_status = $cors_permission -> check_token();
        $is_white_list = in_array($path, SOLAR_ROUTER_WHITE_LIST);

        // 检查是否在白名单
        if($is_white_list){
            // 判断文件是否存在。不存在转向404页面
            if(!file_exists($production_path.$path.'.php')){
                $path = '/404';
            }
        }
        // elseif(substr($path, 0, 19) === '/api/v1/updateNote/'){
        //     // $path = '/api/v1/updateNote/' 
        // }
        else{
            //检查Token
            if($token_status){
                // 判断文件是否存在。不存在转向404页面
                if(!file_exists($production_path.$path.'.php')){
                    $path = '/404';
                }
            }
            else{
                // 不在白名单并且Token无效，这里跳转到 500 错误页面
                $path = '/500';
            }
        }

        // 这里应该得到最终的 php path

        return $path;
    }
}
