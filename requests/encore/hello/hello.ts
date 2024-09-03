import { Header, Query, api } from "encore.dev/api";

export const get = api(
  { expose: true, method: "GET", path: "/hello" },
  (): Response => {
    const msg = `Hello World!`;
    return { message: msg };
  }
);

type Foo<T> = {
  id: T;
};

type Params = Foo<number>;

export const path = api(
  { expose: true, method: "GET", path: "/hello/:id" },
  (p: Params): Response => {
    const msg = `hello ${p.id} ${typeof p.id}`;
    return { message: msg };
  }
);

interface Schema {
  foo: Header<"x-foo">;
  name?: Query<string>;
  excitement?: Query<number>;

  someKey?: string;
  someOtherKey?: number;
  requiredKey: number[];
  nullabkeKey?: number | null;
  multipleTypesKey?: boolean | number;
  multipleRestrictedTypesKey?: string | number;
  enumKey?: "John" | "Foo";
}

export const schema = api(
  { expose: true, method: "POST", path: "/schema" },
  (data: Schema): Response => {
    return { message: "Hello, World" };
  }
);

interface Response {
  message: string;
}
