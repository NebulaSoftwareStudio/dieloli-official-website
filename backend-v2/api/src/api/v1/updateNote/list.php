<?php
/**
 * 获取更新日志列表
 */
$database = new database();
$echo = new resultEcho();

$page = $_GET["page"]??0;
$page = $database -> clean_input_string($page);
$pageSize = $_GET["pageSize"]??10;
$pageSize = $database -> clean_input_string($pageSize);

// 获取最新源代码版本
$release_note_list = $database -> get_multi_data("select * from `release_note` where `is_delete` = 0 order by `ID` desc limit ".$pageSize);

if(isset($release_note_list)){
    $echo -> printJson(true, "查询成功！", $release_note_list, 200);
}else{
    $echo -> printJson(false, "指定的更新日志不存在！", null, 404);
}