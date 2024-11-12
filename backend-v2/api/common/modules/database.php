<?php

/**
 * Class database
 * 继承自旧版框架的数据库相关操作
 */
class database
{
    // 建立数据库连接
    private function get_connect()
    {
        $connect = mysqli_connect(SOLAR_DATABASE_ADDRESS.':'.SOLAR_DATABASE_PORT, SOLAR_DATABASE_USER_NAME, SOLAR_DATABASE_PASSWORD) or mysqli_error($connect);
        mysqli_set_charset($connect, 'utf8');
        $db = mysqli_select_db($connect, SOLAR_DATABASE_NAME) or exit("数据库在连接时出现问题，可能是设定的数据库不存在。");
        return $connect;
    }

    // 获取单行数据
    public function get_single_data($sql){
        //获取数据库连接
        $connect = $this -> get_connect();
        //提交查询，并接受返回值
        $link = mysqli_query($connect, $sql);
        if($link){
            $result = mysqli_fetch_array($link, MYSQLI_ASSOC);
        }
        else{
            $result = $link;
        }
        return $result;
    }

    // 获取多行数据
    public function get_multi_data($sql){
        //获取数据库连接
        $connect = $this -> get_connect();
        //提交查询，并接受返回值
        $link = mysqli_query($connect, $sql);
        $result = [];
        if($link){
            while ($link_res = mysqli_fetch_array($link, MYSQLI_ASSOC)) {
                $result[] = $link_res;
            }
        }
        return $result;
    }

    // 插入一行数据
    public function add_data($sql){
        $connect = $this -> get_connect();
        return mysqli_query($connect, $sql);
    }

    // 更新一行数据
    public function edit_data($sql){
        $connect = $this -> get_connect();
        return mysqli_query($connect, $sql);
    }

    // 删除一行数据
    public function delete_data($sql){
        $connect = $this -> get_connect();
        return mysqli_query($connect, $sql);
    }

    // 对用户输入的数据拼接进SQL语句以前，对输入数据进行清洗
    public function clean_input_string($string){
        $keywords = ["script","alert","and", "select", "update", "chr", "delete", "from", "insert", "mid", "master", "set", "=", "like", "or", ";", "'", '"'];
        //字符串替换
        for ($i = 0; $i < sizeof($keywords); $i++) {
            $string = str_replace($keywords[$i], "*", $string);
        }
        return addslashes($string);
    }


}
