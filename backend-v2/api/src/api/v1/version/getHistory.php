<?php
/**
 * 获取历史版本
 */

$database = new database();
$echo = new resultEcho();

// 获取所有历史版本的版本号列表
$historyVersionList = $database -> get_multi_data("SELECT *, count(*) as count FROM `release_version` group by `version_name` order by `id` desc");

$resultList = array();

for($i=0;$i<sizeof($historyVersionList);$i++){
    $versionReleaseList = $database -> get_multi_data("SELECT * FROM `release_version` WHERE `version_name` = '".$historyVersionList[$i]["version_name"]."' order by `platform` desc");
    
    $fileList = array();
    for($j=0;$j<sizeof($versionReleaseList);$j++){
        array_push($fileList, array(
            "platform" => $versionReleaseList[$j]["platform"],
            "sha256" => $versionReleaseList[$j]["sha256"],
            "downloadUrl" => $versionReleaseList[$j]["download_url"],
            "downloadCount" => $versionReleaseList[$j]["download_count"],
            "size" => $versionReleaseList[$j]["size"],
        ));
    }
    
    
    array_push($resultList, array(
        "commit" => $historyVersionList[$i]["commit"],
        "versionName" => $historyVersionList[$i]["version_name"],
        "author" => $historyVersionList[$i]["author"],
        "pullRequest" => $historyVersionList[$i]["pull_request"],
        "createTime" => $historyVersionList[$i]["create_time"],
        "count" => $historyVersionList[$i]["count"],
        "releaseFile" => $fileList
    ));
}


$echo -> printJson(true, "查询成功！", $resultList, 200);

