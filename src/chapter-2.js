export {};
// 上面什么意思就是
// {user: { type: user, userId: string }} | {post: { type: post, userId: string }} | {comment: { type: comment, userId: string }}[user | post | comment]
// 联合类型 循环匹配
