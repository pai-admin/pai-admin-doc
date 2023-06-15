## 接口地址

```
(http|https)://{域名}/admin/login
```

## 请求方式
POST

## 请求参数
| 参数         | 类型     | 描述         |
|:-----------|:-------|:-----------|
| verifyId   | string | 验证码ID      |
| verifyCode | number | 验证码        |
| username   | string | 用户名        |
| password   | number | 密码(需md5加密) |

## 返回参数
| 参数    | 类型     | 描述     |
|:------|:-------|:-------|
| token | string | 身份验证令牌 |

## 示例
```json
{
  "code": 200,
  "msg": "成功",
  "data": {
    "token": "67dcfc03587f98f4da9f95f31f9ec4ddAuPfGt"
  }
}
```