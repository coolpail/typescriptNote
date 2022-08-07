export type Entity =
  | {
      type: "user";
    }
  | {
      type: "post";
    }
  | {
      type: "comment";
    };
// expect result
type EntityWithId =
  | {
      type: "user";
      userId: string;
    }
  | {
      type: "post";
      useId: string;
    }
  | {
      type: "comment";
      userId: string;
    };

// what can i do

type EntityType = Entity["type"];

type MyEntityWithId = {
  [K in Entity["type"]]: {
    type: K;
    userId: string;
  };
}[Entity["type"]];

// 上面什么意思就是
// {user: { type: user, userId: string }} | {post: { type: post, userId: string }} | {comment: { type: comment, userId: string }}[user | post | comment]
// 联合类型 循环匹配
