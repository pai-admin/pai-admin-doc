## 接口地址

```
(http|https)://{域名}/admin/info
```

## 请求方式
GET

## 返回参数
| 参数        | 类型     | 描述   |
|:----------|:-------|:-----|
| accountId | number | 账号ID |
| username  | string | 用户名  |
| avatar    | string | 头像   |
| deptName  | string | 部门名称 |

## 示例
```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "accountId": 1,
    "username": "admin",
    "avatar": "",
    "deptName": null
  }
}
```