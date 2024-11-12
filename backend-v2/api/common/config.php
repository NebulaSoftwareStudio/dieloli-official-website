<?php
/**
 * Nebula Solar Platform Global Config
 * Docs and Results https://docs.solar.nebula-soft.com
 * Created by Hanawa Hinata
 */

/**
 * ====================  数据库操作部分所需常量  ====================
 */

// 数据库地址
const SOLAR_DATABASE_ADDRESS = "localhost";
const SOLAR_DATABASE_PORT = "3306";

// 数据库名称
const SOLAR_DATABASE_USER_NAME = "root";

// 数据库密码
const SOLAR_DATABASE_PASSWORD = "";

// 数据库名称
const SOLAR_DATABASE_NAME = "dieloli";


/**
 * ====================  路由部分所需常量  ====================
 */

// 路由模式。history - 原生历史模式； param - 参数模式
// history 模式需要 nginx 配合设置。具体请参看 nebula solar 文档的路由部分
const SOLAR_ROUTER_MODE = "history";

// 项目的业务路径。不能以 / 结尾。
const SOLAR_PRODUCTION_PATH = "../src";

// 白名单。不能以 / 结尾。
const SOLAR_ROUTER_WHITE_LIST = [
    "/api/v1/version/getLatest",
    "/api/v1/version/getHistory",
    "/api/v1/updateNote/queryById",
    "/api/v1/updateNote/list",
];

// Token 存储方式。 mysql - 数据库存储；redis - redis 存储

const SOLAR_TOKEN_STORAGE = "mysql";

// Token 过期时间。 秒。
const SOLAR_TOKEN_EXPIRE_TIME = 1800;

// 如果上述配置使用 Redis ，这里需要配置 Redis 相关信息
const SOLAR_REDIS_ADDRESS = "";
//const SOLAR_REDIS_USERNAME = "";
//const SOLAR_REDIS_PASSWORD = "";
//const SOLAR_REDIS_PORT = "";
