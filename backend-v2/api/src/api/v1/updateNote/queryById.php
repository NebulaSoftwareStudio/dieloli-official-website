<?php

/**
 * 根据ID获取更新日志详情
 */

$database = new database();
$echo = new resultEcho();

$releaseNoteId = $_GET["id"]??'0';
$releaseNoteId = $database -> clean_input_string($releaseNoteId);

// 获取最新源代码版本
$note_info = $database -> get_single_data("select * from `release_note` where `id` = '".$releaseNoteId."' and `is_delete` = 0");

if(isset($note_info)){
    $echo -> printJson(true, "查询成功！", $note_info, 200);
}else{
    $echo -> printJson(false, "指定的更新日志不存在！", null, 404);
}