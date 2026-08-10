
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Poll
 * 
 */
export type Poll = $Result.DefaultSelection<Prisma.$PollPayload>
/**
 * Model PollOption
 * 
 */
export type PollOption = $Result.DefaultSelection<Prisma.$PollOptionPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model World
 * 
 */
export type World = $Result.DefaultSelection<Prisma.$WorldPayload>
/**
 * Model WorldMember
 * 
 */
export type WorldMember = $Result.DefaultSelection<Prisma.$WorldMemberPayload>
/**
 * Model WorldBan
 * 
 */
export type WorldBan = $Result.DefaultSelection<Prisma.$WorldBanPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TaskStatus: {
  TODO: 'TODO',
  DOING: 'DOING',
  DONE: 'DONE'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const TaskPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type TaskPriority = $Enums.TaskPriority

export const TaskPriority: typeof $Enums.TaskPriority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poll`: Exposes CRUD operations for the **Poll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Polls
    * const polls = await prisma.poll.findMany()
    * ```
    */
  get poll(): Prisma.PollDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pollOption`: Exposes CRUD operations for the **PollOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PollOptions
    * const pollOptions = await prisma.pollOption.findMany()
    * ```
    */
  get pollOption(): Prisma.PollOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.world`: Exposes CRUD operations for the **World** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Worlds
    * const worlds = await prisma.world.findMany()
    * ```
    */
  get world(): Prisma.WorldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worldMember`: Exposes CRUD operations for the **WorldMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorldMembers
    * const worldMembers = await prisma.worldMember.findMany()
    * ```
    */
  get worldMember(): Prisma.WorldMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worldBan`: Exposes CRUD operations for the **WorldBan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorldBans
    * const worldBans = await prisma.worldBan.findMany()
    * ```
    */
  get worldBan(): Prisma.WorldBanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Poll: 'Poll',
    PollOption: 'PollOption',
    Vote: 'Vote',
    World: 'World',
    WorldMember: 'WorldMember',
    WorldBan: 'WorldBan',
    Category: 'Category',
    Task: 'Task'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "poll" | "pollOption" | "vote" | "world" | "worldMember" | "worldBan" | "category" | "task"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Poll: {
        payload: Prisma.$PollPayload<ExtArgs>
        fields: Prisma.PollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          findFirst: {
            args: Prisma.PollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          findMany: {
            args: Prisma.PollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>[]
          }
          create: {
            args: Prisma.PollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          createMany: {
            args: Prisma.PollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>[]
          }
          delete: {
            args: Prisma.PollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          update: {
            args: Prisma.PollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          deleteMany: {
            args: Prisma.PollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>[]
          }
          upsert: {
            args: Prisma.PollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollPayload>
          }
          aggregate: {
            args: Prisma.PollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoll>
          }
          groupBy: {
            args: Prisma.PollGroupByArgs<ExtArgs>
            result: $Utils.Optional<PollGroupByOutputType>[]
          }
          count: {
            args: Prisma.PollCountArgs<ExtArgs>
            result: $Utils.Optional<PollCountAggregateOutputType> | number
          }
        }
      }
      PollOption: {
        payload: Prisma.$PollOptionPayload<ExtArgs>
        fields: Prisma.PollOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PollOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PollOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>
          }
          findFirst: {
            args: Prisma.PollOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PollOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>
          }
          findMany: {
            args: Prisma.PollOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>[]
          }
          create: {
            args: Prisma.PollOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>
          }
          createMany: {
            args: Prisma.PollOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PollOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>[]
          }
          delete: {
            args: Prisma.PollOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>
          }
          update: {
            args: Prisma.PollOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>
          }
          deleteMany: {
            args: Prisma.PollOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PollOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PollOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>[]
          }
          upsert: {
            args: Prisma.PollOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PollOptionPayload>
          }
          aggregate: {
            args: Prisma.PollOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePollOption>
          }
          groupBy: {
            args: Prisma.PollOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PollOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PollOptionCountArgs<ExtArgs>
            result: $Utils.Optional<PollOptionCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      World: {
        payload: Prisma.$WorldPayload<ExtArgs>
        fields: Prisma.WorldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          findFirst: {
            args: Prisma.WorldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          findMany: {
            args: Prisma.WorldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>[]
          }
          create: {
            args: Prisma.WorldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          createMany: {
            args: Prisma.WorldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>[]
          }
          delete: {
            args: Prisma.WorldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          update: {
            args: Prisma.WorldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          deleteMany: {
            args: Prisma.WorldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>[]
          }
          upsert: {
            args: Prisma.WorldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          aggregate: {
            args: Prisma.WorldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorld>
          }
          groupBy: {
            args: Prisma.WorldGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorldGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorldCountArgs<ExtArgs>
            result: $Utils.Optional<WorldCountAggregateOutputType> | number
          }
        }
      }
      WorldMember: {
        payload: Prisma.$WorldMemberPayload<ExtArgs>
        fields: Prisma.WorldMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorldMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorldMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldMemberPayload>
          }
          findFirst: {
            args: Prisma.WorldMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorldMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldMemberPayload>
          }
          findMany: {
            args: Prisma.WorldMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldMemberPayload>[]
          }
          create: {
            args: Prisma.WorldMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldMemberPayload>
          }
          createMany: {
            args: Prisma.WorldMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorldMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldMemberPayload>[]
          }
          delete: {
            args: Prisma.WorldMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldMemberPayload>
          }
          update: {
            args: Prisma.WorldMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldMemberPayload>
          }
          deleteMany: {
            args: Prisma.WorldMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorldMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorldMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldMemberPayload>[]
          }
          upsert: {
            args: Prisma.WorldMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldMemberPayload>
          }
          aggregate: {
            args: Prisma.WorldMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorldMember>
          }
          groupBy: {
            args: Prisma.WorldMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorldMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorldMemberCountArgs<ExtArgs>
            result: $Utils.Optional<WorldMemberCountAggregateOutputType> | number
          }
        }
      }
      WorldBan: {
        payload: Prisma.$WorldBanPayload<ExtArgs>
        fields: Prisma.WorldBanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorldBanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldBanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorldBanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldBanPayload>
          }
          findFirst: {
            args: Prisma.WorldBanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldBanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorldBanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldBanPayload>
          }
          findMany: {
            args: Prisma.WorldBanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldBanPayload>[]
          }
          create: {
            args: Prisma.WorldBanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldBanPayload>
          }
          createMany: {
            args: Prisma.WorldBanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorldBanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldBanPayload>[]
          }
          delete: {
            args: Prisma.WorldBanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldBanPayload>
          }
          update: {
            args: Prisma.WorldBanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldBanPayload>
          }
          deleteMany: {
            args: Prisma.WorldBanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorldBanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorldBanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldBanPayload>[]
          }
          upsert: {
            args: Prisma.WorldBanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldBanPayload>
          }
          aggregate: {
            args: Prisma.WorldBanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorldBan>
          }
          groupBy: {
            args: Prisma.WorldBanGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorldBanGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorldBanCountArgs<ExtArgs>
            result: $Utils.Optional<WorldBanCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    poll?: PollOmit
    pollOption?: PollOptionOmit
    vote?: VoteOmit
    world?: WorldOmit
    worldMember?: WorldMemberOmit
    worldBan?: WorldBanOmit
    category?: CategoryOmit
    task?: TaskOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    worlds: number
    tasks: number
    votes: number
    bans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worlds?: boolean | UserCountOutputTypeCountWorldsArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    votes?: boolean | UserCountOutputTypeCountVotesArgs
    bans?: boolean | UserCountOutputTypeCountBansArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldBanWhereInput
  }


  /**
   * Count Type PollCountOutputType
   */

  export type PollCountOutputType = {
    options: number
  }

  export type PollCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | PollCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollCountOutputType
     */
    select?: PollCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PollCountOutputType without action
   */
  export type PollCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollOptionWhereInput
  }


  /**
   * Count Type PollOptionCountOutputType
   */

  export type PollOptionCountOutputType = {
    votes: number
  }

  export type PollOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | PollOptionCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * PollOptionCountOutputType without action
   */
  export type PollOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOptionCountOutputType
     */
    select?: PollOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PollOptionCountOutputType without action
   */
  export type PollOptionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type WorldCountOutputType
   */

  export type WorldCountOutputType = {
    members: number
    tasks: number
    polls: number
    categories: number
    bans: number
  }

  export type WorldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | WorldCountOutputTypeCountMembersArgs
    tasks?: boolean | WorldCountOutputTypeCountTasksArgs
    polls?: boolean | WorldCountOutputTypeCountPollsArgs
    categories?: boolean | WorldCountOutputTypeCountCategoriesArgs
    bans?: boolean | WorldCountOutputTypeCountBansArgs
  }

  // Custom InputTypes
  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldCountOutputType
     */
    select?: WorldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldMemberWhereInput
  }

  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountPollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollWhereInput
  }

  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountBansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldBanWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    tasks: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | CategoryCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nickname: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nickname: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nickname: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nickname?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nickname?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nickname?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nickname: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    password?: boolean
    worlds?: boolean | User$worldsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    bans?: boolean | User$bansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nickname?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worlds?: boolean | User$worldsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    bans?: boolean | User$bansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      worlds: Prisma.$WorldMemberPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
      bans: Prisma.$WorldBanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nickname: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    worlds<T extends User$worldsArgs<ExtArgs> = {}>(args?: Subset<T, User$worldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends User$votesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bans<T extends User$bansArgs<ExtArgs> = {}>(args?: Subset<T, User$bansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.worlds
   */
  export type User$worldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberInclude<ExtArgs> | null
    where?: WorldMemberWhereInput
    orderBy?: WorldMemberOrderByWithRelationInput | WorldMemberOrderByWithRelationInput[]
    cursor?: WorldMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorldMemberScalarFieldEnum | WorldMemberScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.votes
   */
  export type User$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * User.bans
   */
  export type User$bansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanInclude<ExtArgs> | null
    where?: WorldBanWhereInput
    orderBy?: WorldBanOrderByWithRelationInput | WorldBanOrderByWithRelationInput[]
    cursor?: WorldBanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorldBanScalarFieldEnum | WorldBanScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Poll
   */

  export type AggregatePoll = {
    _count: PollCountAggregateOutputType | null
    _min: PollMinAggregateOutputType | null
    _max: PollMaxAggregateOutputType | null
  }

  export type PollMinAggregateOutputType = {
    id: string | null
    question: string | null
    worldId: string | null
    createdAt: Date | null
  }

  export type PollMaxAggregateOutputType = {
    id: string | null
    question: string | null
    worldId: string | null
    createdAt: Date | null
  }

  export type PollCountAggregateOutputType = {
    id: number
    question: number
    worldId: number
    createdAt: number
    _all: number
  }


  export type PollMinAggregateInputType = {
    id?: true
    question?: true
    worldId?: true
    createdAt?: true
  }

  export type PollMaxAggregateInputType = {
    id?: true
    question?: true
    worldId?: true
    createdAt?: true
  }

  export type PollCountAggregateInputType = {
    id?: true
    question?: true
    worldId?: true
    createdAt?: true
    _all?: true
  }

  export type PollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Poll to aggregate.
     */
    where?: PollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polls to fetch.
     */
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Polls
    **/
    _count?: true | PollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PollMaxAggregateInputType
  }

  export type GetPollAggregateType<T extends PollAggregateArgs> = {
        [P in keyof T & keyof AggregatePoll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoll[P]>
      : GetScalarType<T[P], AggregatePoll[P]>
  }




  export type PollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollWhereInput
    orderBy?: PollOrderByWithAggregationInput | PollOrderByWithAggregationInput[]
    by: PollScalarFieldEnum[] | PollScalarFieldEnum
    having?: PollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PollCountAggregateInputType | true
    _min?: PollMinAggregateInputType
    _max?: PollMaxAggregateInputType
  }

  export type PollGroupByOutputType = {
    id: string
    question: string
    worldId: string
    createdAt: Date
    _count: PollCountAggregateOutputType | null
    _min: PollMinAggregateOutputType | null
    _max: PollMaxAggregateOutputType | null
  }

  type GetPollGroupByPayload<T extends PollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PollGroupByOutputType[P]>
            : GetScalarType<T[P], PollGroupByOutputType[P]>
        }
      >
    >


  export type PollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    worldId?: boolean
    createdAt?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
    options?: boolean | Poll$optionsArgs<ExtArgs>
    _count?: boolean | PollCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type PollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    worldId?: boolean
    createdAt?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type PollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    worldId?: boolean
    createdAt?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poll"]>

  export type PollSelectScalar = {
    id?: boolean
    question?: boolean
    worldId?: boolean
    createdAt?: boolean
  }

  export type PollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "worldId" | "createdAt", ExtArgs["result"]["poll"]>
  export type PollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
    options?: boolean | Poll$optionsArgs<ExtArgs>
    _count?: boolean | PollCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }
  export type PollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }

  export type $PollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Poll"
    objects: {
      world: Prisma.$WorldPayload<ExtArgs>
      options: Prisma.$PollOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      worldId: string
      createdAt: Date
    }, ExtArgs["result"]["poll"]>
    composites: {}
  }

  type PollGetPayload<S extends boolean | null | undefined | PollDefaultArgs> = $Result.GetResult<Prisma.$PollPayload, S>

  type PollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PollCountAggregateInputType | true
    }

  export interface PollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Poll'], meta: { name: 'Poll' } }
    /**
     * Find zero or one Poll that matches the filter.
     * @param {PollFindUniqueArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PollFindUniqueArgs>(args: SelectSubset<T, PollFindUniqueArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Poll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PollFindUniqueOrThrowArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PollFindUniqueOrThrowArgs>(args: SelectSubset<T, PollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollFindFirstArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PollFindFirstArgs>(args?: SelectSubset<T, PollFindFirstArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Poll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollFindFirstOrThrowArgs} args - Arguments to find a Poll
     * @example
     * // Get one Poll
     * const poll = await prisma.poll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PollFindFirstOrThrowArgs>(args?: SelectSubset<T, PollFindFirstOrThrowArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Polls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Polls
     * const polls = await prisma.poll.findMany()
     * 
     * // Get first 10 Polls
     * const polls = await prisma.poll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pollWithIdOnly = await prisma.poll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PollFindManyArgs>(args?: SelectSubset<T, PollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Poll.
     * @param {PollCreateArgs} args - Arguments to create a Poll.
     * @example
     * // Create one Poll
     * const Poll = await prisma.poll.create({
     *   data: {
     *     // ... data to create a Poll
     *   }
     * })
     * 
     */
    create<T extends PollCreateArgs>(args: SelectSubset<T, PollCreateArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Polls.
     * @param {PollCreateManyArgs} args - Arguments to create many Polls.
     * @example
     * // Create many Polls
     * const poll = await prisma.poll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PollCreateManyArgs>(args?: SelectSubset<T, PollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Polls and returns the data saved in the database.
     * @param {PollCreateManyAndReturnArgs} args - Arguments to create many Polls.
     * @example
     * // Create many Polls
     * const poll = await prisma.poll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Polls and only return the `id`
     * const pollWithIdOnly = await prisma.poll.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PollCreateManyAndReturnArgs>(args?: SelectSubset<T, PollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Poll.
     * @param {PollDeleteArgs} args - Arguments to delete one Poll.
     * @example
     * // Delete one Poll
     * const Poll = await prisma.poll.delete({
     *   where: {
     *     // ... filter to delete one Poll
     *   }
     * })
     * 
     */
    delete<T extends PollDeleteArgs>(args: SelectSubset<T, PollDeleteArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Poll.
     * @param {PollUpdateArgs} args - Arguments to update one Poll.
     * @example
     * // Update one Poll
     * const poll = await prisma.poll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PollUpdateArgs>(args: SelectSubset<T, PollUpdateArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Polls.
     * @param {PollDeleteManyArgs} args - Arguments to filter Polls to delete.
     * @example
     * // Delete a few Polls
     * const { count } = await prisma.poll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PollDeleteManyArgs>(args?: SelectSubset<T, PollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Polls
     * const poll = await prisma.poll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PollUpdateManyArgs>(args: SelectSubset<T, PollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Polls and returns the data updated in the database.
     * @param {PollUpdateManyAndReturnArgs} args - Arguments to update many Polls.
     * @example
     * // Update many Polls
     * const poll = await prisma.poll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Polls and only return the `id`
     * const pollWithIdOnly = await prisma.poll.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PollUpdateManyAndReturnArgs>(args: SelectSubset<T, PollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Poll.
     * @param {PollUpsertArgs} args - Arguments to update or create a Poll.
     * @example
     * // Update or create a Poll
     * const poll = await prisma.poll.upsert({
     *   create: {
     *     // ... data to create a Poll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poll we want to update
     *   }
     * })
     */
    upsert<T extends PollUpsertArgs>(args: SelectSubset<T, PollUpsertArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Polls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollCountArgs} args - Arguments to filter Polls to count.
     * @example
     * // Count the number of Polls
     * const count = await prisma.poll.count({
     *   where: {
     *     // ... the filter for the Polls we want to count
     *   }
     * })
    **/
    count<T extends PollCountArgs>(
      args?: Subset<T, PollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PollAggregateArgs>(args: Subset<T, PollAggregateArgs>): Prisma.PrismaPromise<GetPollAggregateType<T>>

    /**
     * Group by Poll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PollGroupByArgs['orderBy'] }
        : { orderBy?: PollGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Poll model
   */
  readonly fields: PollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Poll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    world<T extends WorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldDefaultArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Poll$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Poll$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Poll model
   */
  interface PollFieldRefs {
    readonly id: FieldRef<"Poll", 'String'>
    readonly question: FieldRef<"Poll", 'String'>
    readonly worldId: FieldRef<"Poll", 'String'>
    readonly createdAt: FieldRef<"Poll", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Poll findUnique
   */
  export type PollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Poll to fetch.
     */
    where: PollWhereUniqueInput
  }

  /**
   * Poll findUniqueOrThrow
   */
  export type PollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Poll to fetch.
     */
    where: PollWhereUniqueInput
  }

  /**
   * Poll findFirst
   */
  export type PollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Poll to fetch.
     */
    where?: PollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polls to fetch.
     */
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Polls.
     */
    cursor?: PollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Polls.
     */
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * Poll findFirstOrThrow
   */
  export type PollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Poll to fetch.
     */
    where?: PollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polls to fetch.
     */
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Polls.
     */
    cursor?: PollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Polls.
     */
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * Poll findMany
   */
  export type PollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter, which Polls to fetch.
     */
    where?: PollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Polls to fetch.
     */
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Polls.
     */
    cursor?: PollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Polls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Polls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Polls.
     */
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * Poll create
   */
  export type PollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * The data needed to create a Poll.
     */
    data: XOR<PollCreateInput, PollUncheckedCreateInput>
  }

  /**
   * Poll createMany
   */
  export type PollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Polls.
     */
    data: PollCreateManyInput | PollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Poll createManyAndReturn
   */
  export type PollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * The data used to create many Polls.
     */
    data: PollCreateManyInput | PollCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Poll update
   */
  export type PollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * The data needed to update a Poll.
     */
    data: XOR<PollUpdateInput, PollUncheckedUpdateInput>
    /**
     * Choose, which Poll to update.
     */
    where: PollWhereUniqueInput
  }

  /**
   * Poll updateMany
   */
  export type PollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Polls.
     */
    data: XOR<PollUpdateManyMutationInput, PollUncheckedUpdateManyInput>
    /**
     * Filter which Polls to update
     */
    where?: PollWhereInput
    /**
     * Limit how many Polls to update.
     */
    limit?: number
  }

  /**
   * Poll updateManyAndReturn
   */
  export type PollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * The data used to update Polls.
     */
    data: XOR<PollUpdateManyMutationInput, PollUncheckedUpdateManyInput>
    /**
     * Filter which Polls to update
     */
    where?: PollWhereInput
    /**
     * Limit how many Polls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Poll upsert
   */
  export type PollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * The filter to search for the Poll to update in case it exists.
     */
    where: PollWhereUniqueInput
    /**
     * In case the Poll found by the `where` argument doesn't exist, create a new Poll with this data.
     */
    create: XOR<PollCreateInput, PollUncheckedCreateInput>
    /**
     * In case the Poll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PollUpdateInput, PollUncheckedUpdateInput>
  }

  /**
   * Poll delete
   */
  export type PollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    /**
     * Filter which Poll to delete.
     */
    where: PollWhereUniqueInput
  }

  /**
   * Poll deleteMany
   */
  export type PollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Polls to delete
     */
    where?: PollWhereInput
    /**
     * Limit how many Polls to delete.
     */
    limit?: number
  }

  /**
   * Poll.options
   */
  export type Poll$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    where?: PollOptionWhereInput
    orderBy?: PollOptionOrderByWithRelationInput | PollOptionOrderByWithRelationInput[]
    cursor?: PollOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollOptionScalarFieldEnum | PollOptionScalarFieldEnum[]
  }

  /**
   * Poll without action
   */
  export type PollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
  }


  /**
   * Model PollOption
   */

  export type AggregatePollOption = {
    _count: PollOptionCountAggregateOutputType | null
    _min: PollOptionMinAggregateOutputType | null
    _max: PollOptionMaxAggregateOutputType | null
  }

  export type PollOptionMinAggregateOutputType = {
    id: string | null
    text: string | null
    pollId: string | null
  }

  export type PollOptionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    pollId: string | null
  }

  export type PollOptionCountAggregateOutputType = {
    id: number
    text: number
    pollId: number
    _all: number
  }


  export type PollOptionMinAggregateInputType = {
    id?: true
    text?: true
    pollId?: true
  }

  export type PollOptionMaxAggregateInputType = {
    id?: true
    text?: true
    pollId?: true
  }

  export type PollOptionCountAggregateInputType = {
    id?: true
    text?: true
    pollId?: true
    _all?: true
  }

  export type PollOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PollOption to aggregate.
     */
    where?: PollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollOptions to fetch.
     */
    orderBy?: PollOptionOrderByWithRelationInput | PollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PollOptions
    **/
    _count?: true | PollOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PollOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PollOptionMaxAggregateInputType
  }

  export type GetPollOptionAggregateType<T extends PollOptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePollOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePollOption[P]>
      : GetScalarType<T[P], AggregatePollOption[P]>
  }




  export type PollOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PollOptionWhereInput
    orderBy?: PollOptionOrderByWithAggregationInput | PollOptionOrderByWithAggregationInput[]
    by: PollOptionScalarFieldEnum[] | PollOptionScalarFieldEnum
    having?: PollOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PollOptionCountAggregateInputType | true
    _min?: PollOptionMinAggregateInputType
    _max?: PollOptionMaxAggregateInputType
  }

  export type PollOptionGroupByOutputType = {
    id: string
    text: string
    pollId: string
    _count: PollOptionCountAggregateOutputType | null
    _min: PollOptionMinAggregateOutputType | null
    _max: PollOptionMaxAggregateOutputType | null
  }

  type GetPollOptionGroupByPayload<T extends PollOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PollOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PollOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PollOptionGroupByOutputType[P]>
            : GetScalarType<T[P], PollOptionGroupByOutputType[P]>
        }
      >
    >


  export type PollOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    pollId?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
    votes?: boolean | PollOption$votesArgs<ExtArgs>
    _count?: boolean | PollOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollOption"]>

  export type PollOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    pollId?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollOption"]>

  export type PollOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    pollId?: boolean
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pollOption"]>

  export type PollOptionSelectScalar = {
    id?: boolean
    text?: boolean
    pollId?: boolean
  }

  export type PollOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "pollId", ExtArgs["result"]["pollOption"]>
  export type PollOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
    votes?: boolean | PollOption$votesArgs<ExtArgs>
    _count?: boolean | PollOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PollOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }
  export type PollOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poll?: boolean | PollDefaultArgs<ExtArgs>
  }

  export type $PollOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PollOption"
    objects: {
      poll: Prisma.$PollPayload<ExtArgs>
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      pollId: string
    }, ExtArgs["result"]["pollOption"]>
    composites: {}
  }

  type PollOptionGetPayload<S extends boolean | null | undefined | PollOptionDefaultArgs> = $Result.GetResult<Prisma.$PollOptionPayload, S>

  type PollOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PollOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PollOptionCountAggregateInputType | true
    }

  export interface PollOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PollOption'], meta: { name: 'PollOption' } }
    /**
     * Find zero or one PollOption that matches the filter.
     * @param {PollOptionFindUniqueArgs} args - Arguments to find a PollOption
     * @example
     * // Get one PollOption
     * const pollOption = await prisma.pollOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PollOptionFindUniqueArgs>(args: SelectSubset<T, PollOptionFindUniqueArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PollOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PollOptionFindUniqueOrThrowArgs} args - Arguments to find a PollOption
     * @example
     * // Get one PollOption
     * const pollOption = await prisma.pollOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PollOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PollOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionFindFirstArgs} args - Arguments to find a PollOption
     * @example
     * // Get one PollOption
     * const pollOption = await prisma.pollOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PollOptionFindFirstArgs>(args?: SelectSubset<T, PollOptionFindFirstArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PollOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionFindFirstOrThrowArgs} args - Arguments to find a PollOption
     * @example
     * // Get one PollOption
     * const pollOption = await prisma.pollOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PollOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PollOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PollOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PollOptions
     * const pollOptions = await prisma.pollOption.findMany()
     * 
     * // Get first 10 PollOptions
     * const pollOptions = await prisma.pollOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pollOptionWithIdOnly = await prisma.pollOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PollOptionFindManyArgs>(args?: SelectSubset<T, PollOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PollOption.
     * @param {PollOptionCreateArgs} args - Arguments to create a PollOption.
     * @example
     * // Create one PollOption
     * const PollOption = await prisma.pollOption.create({
     *   data: {
     *     // ... data to create a PollOption
     *   }
     * })
     * 
     */
    create<T extends PollOptionCreateArgs>(args: SelectSubset<T, PollOptionCreateArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PollOptions.
     * @param {PollOptionCreateManyArgs} args - Arguments to create many PollOptions.
     * @example
     * // Create many PollOptions
     * const pollOption = await prisma.pollOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PollOptionCreateManyArgs>(args?: SelectSubset<T, PollOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PollOptions and returns the data saved in the database.
     * @param {PollOptionCreateManyAndReturnArgs} args - Arguments to create many PollOptions.
     * @example
     * // Create many PollOptions
     * const pollOption = await prisma.pollOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PollOptions and only return the `id`
     * const pollOptionWithIdOnly = await prisma.pollOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PollOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PollOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PollOption.
     * @param {PollOptionDeleteArgs} args - Arguments to delete one PollOption.
     * @example
     * // Delete one PollOption
     * const PollOption = await prisma.pollOption.delete({
     *   where: {
     *     // ... filter to delete one PollOption
     *   }
     * })
     * 
     */
    delete<T extends PollOptionDeleteArgs>(args: SelectSubset<T, PollOptionDeleteArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PollOption.
     * @param {PollOptionUpdateArgs} args - Arguments to update one PollOption.
     * @example
     * // Update one PollOption
     * const pollOption = await prisma.pollOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PollOptionUpdateArgs>(args: SelectSubset<T, PollOptionUpdateArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PollOptions.
     * @param {PollOptionDeleteManyArgs} args - Arguments to filter PollOptions to delete.
     * @example
     * // Delete a few PollOptions
     * const { count } = await prisma.pollOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PollOptionDeleteManyArgs>(args?: SelectSubset<T, PollOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PollOptions
     * const pollOption = await prisma.pollOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PollOptionUpdateManyArgs>(args: SelectSubset<T, PollOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PollOptions and returns the data updated in the database.
     * @param {PollOptionUpdateManyAndReturnArgs} args - Arguments to update many PollOptions.
     * @example
     * // Update many PollOptions
     * const pollOption = await prisma.pollOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PollOptions and only return the `id`
     * const pollOptionWithIdOnly = await prisma.pollOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PollOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PollOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PollOption.
     * @param {PollOptionUpsertArgs} args - Arguments to update or create a PollOption.
     * @example
     * // Update or create a PollOption
     * const pollOption = await prisma.pollOption.upsert({
     *   create: {
     *     // ... data to create a PollOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PollOption we want to update
     *   }
     * })
     */
    upsert<T extends PollOptionUpsertArgs>(args: SelectSubset<T, PollOptionUpsertArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PollOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionCountArgs} args - Arguments to filter PollOptions to count.
     * @example
     * // Count the number of PollOptions
     * const count = await prisma.pollOption.count({
     *   where: {
     *     // ... the filter for the PollOptions we want to count
     *   }
     * })
    **/
    count<T extends PollOptionCountArgs>(
      args?: Subset<T, PollOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PollOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PollOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PollOptionAggregateArgs>(args: Subset<T, PollOptionAggregateArgs>): Prisma.PrismaPromise<GetPollOptionAggregateType<T>>

    /**
     * Group by PollOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PollOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PollOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PollOptionGroupByArgs['orderBy'] }
        : { orderBy?: PollOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PollOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPollOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PollOption model
   */
  readonly fields: PollOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PollOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PollOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poll<T extends PollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PollDefaultArgs<ExtArgs>>): Prisma__PollClient<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends PollOption$votesArgs<ExtArgs> = {}>(args?: Subset<T, PollOption$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PollOption model
   */
  interface PollOptionFieldRefs {
    readonly id: FieldRef<"PollOption", 'String'>
    readonly text: FieldRef<"PollOption", 'String'>
    readonly pollId: FieldRef<"PollOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PollOption findUnique
   */
  export type PollOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * Filter, which PollOption to fetch.
     */
    where: PollOptionWhereUniqueInput
  }

  /**
   * PollOption findUniqueOrThrow
   */
  export type PollOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * Filter, which PollOption to fetch.
     */
    where: PollOptionWhereUniqueInput
  }

  /**
   * PollOption findFirst
   */
  export type PollOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * Filter, which PollOption to fetch.
     */
    where?: PollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollOptions to fetch.
     */
    orderBy?: PollOptionOrderByWithRelationInput | PollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PollOptions.
     */
    cursor?: PollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PollOptions.
     */
    distinct?: PollOptionScalarFieldEnum | PollOptionScalarFieldEnum[]
  }

  /**
   * PollOption findFirstOrThrow
   */
  export type PollOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * Filter, which PollOption to fetch.
     */
    where?: PollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollOptions to fetch.
     */
    orderBy?: PollOptionOrderByWithRelationInput | PollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PollOptions.
     */
    cursor?: PollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PollOptions.
     */
    distinct?: PollOptionScalarFieldEnum | PollOptionScalarFieldEnum[]
  }

  /**
   * PollOption findMany
   */
  export type PollOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * Filter, which PollOptions to fetch.
     */
    where?: PollOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PollOptions to fetch.
     */
    orderBy?: PollOptionOrderByWithRelationInput | PollOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PollOptions.
     */
    cursor?: PollOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PollOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PollOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PollOptions.
     */
    distinct?: PollOptionScalarFieldEnum | PollOptionScalarFieldEnum[]
  }

  /**
   * PollOption create
   */
  export type PollOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a PollOption.
     */
    data: XOR<PollOptionCreateInput, PollOptionUncheckedCreateInput>
  }

  /**
   * PollOption createMany
   */
  export type PollOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PollOptions.
     */
    data: PollOptionCreateManyInput | PollOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PollOption createManyAndReturn
   */
  export type PollOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * The data used to create many PollOptions.
     */
    data: PollOptionCreateManyInput | PollOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PollOption update
   */
  export type PollOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a PollOption.
     */
    data: XOR<PollOptionUpdateInput, PollOptionUncheckedUpdateInput>
    /**
     * Choose, which PollOption to update.
     */
    where: PollOptionWhereUniqueInput
  }

  /**
   * PollOption updateMany
   */
  export type PollOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PollOptions.
     */
    data: XOR<PollOptionUpdateManyMutationInput, PollOptionUncheckedUpdateManyInput>
    /**
     * Filter which PollOptions to update
     */
    where?: PollOptionWhereInput
    /**
     * Limit how many PollOptions to update.
     */
    limit?: number
  }

  /**
   * PollOption updateManyAndReturn
   */
  export type PollOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * The data used to update PollOptions.
     */
    data: XOR<PollOptionUpdateManyMutationInput, PollOptionUncheckedUpdateManyInput>
    /**
     * Filter which PollOptions to update
     */
    where?: PollOptionWhereInput
    /**
     * Limit how many PollOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PollOption upsert
   */
  export type PollOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the PollOption to update in case it exists.
     */
    where: PollOptionWhereUniqueInput
    /**
     * In case the PollOption found by the `where` argument doesn't exist, create a new PollOption with this data.
     */
    create: XOR<PollOptionCreateInput, PollOptionUncheckedCreateInput>
    /**
     * In case the PollOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PollOptionUpdateInput, PollOptionUncheckedUpdateInput>
  }

  /**
   * PollOption delete
   */
  export type PollOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
    /**
     * Filter which PollOption to delete.
     */
    where: PollOptionWhereUniqueInput
  }

  /**
   * PollOption deleteMany
   */
  export type PollOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PollOptions to delete
     */
    where?: PollOptionWhereInput
    /**
     * Limit how many PollOptions to delete.
     */
    limit?: number
  }

  /**
   * PollOption.votes
   */
  export type PollOption$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * PollOption without action
   */
  export type PollOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PollOption
     */
    select?: PollOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PollOption
     */
    omit?: PollOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollOptionInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    optionId: string | null
    userId: string | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    optionId: string | null
    userId: string | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    optionId: number
    userId: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    optionId?: true
    userId?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    optionId?: true
    userId?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    optionId?: true
    userId?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    optionId: string
    userId: string
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optionId?: boolean
    userId?: boolean
    option?: boolean | PollOptionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optionId?: boolean
    userId?: boolean
    option?: boolean | PollOptionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optionId?: boolean
    userId?: boolean
    option?: boolean | PollOptionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id?: boolean
    optionId?: boolean
    userId?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "optionId" | "userId", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | PollOptionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | PollOptionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | PollOptionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      option: Prisma.$PollOptionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      optionId: string
      userId: string
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {VoteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoteUpdateManyAndReturnArgs>(args: SelectSubset<T, VoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    option<T extends PollOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PollOptionDefaultArgs<ExtArgs>>): Prisma__PollOptionClient<$Result.GetResult<Prisma.$PollOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly optionId: FieldRef<"Vote", 'String'>
    readonly userId: FieldRef<"Vote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote updateManyAndReturn
   */
  export type VoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Model World
   */

  export type AggregateWorld = {
    _count: WorldCountAggregateOutputType | null
    _min: WorldMinAggregateOutputType | null
    _max: WorldMaxAggregateOutputType | null
  }

  export type WorldMinAggregateOutputType = {
    id: string | null
    name: string | null
    inviteCode: string | null
    ownerId: string | null
  }

  export type WorldMaxAggregateOutputType = {
    id: string | null
    name: string | null
    inviteCode: string | null
    ownerId: string | null
  }

  export type WorldCountAggregateOutputType = {
    id: number
    name: number
    inviteCode: number
    ownerId: number
    _all: number
  }


  export type WorldMinAggregateInputType = {
    id?: true
    name?: true
    inviteCode?: true
    ownerId?: true
  }

  export type WorldMaxAggregateInputType = {
    id?: true
    name?: true
    inviteCode?: true
    ownerId?: true
  }

  export type WorldCountAggregateInputType = {
    id?: true
    name?: true
    inviteCode?: true
    ownerId?: true
    _all?: true
  }

  export type WorldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which World to aggregate.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Worlds
    **/
    _count?: true | WorldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldMaxAggregateInputType
  }

  export type GetWorldAggregateType<T extends WorldAggregateArgs> = {
        [P in keyof T & keyof AggregateWorld]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorld[P]>
      : GetScalarType<T[P], AggregateWorld[P]>
  }




  export type WorldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldWhereInput
    orderBy?: WorldOrderByWithAggregationInput | WorldOrderByWithAggregationInput[]
    by: WorldScalarFieldEnum[] | WorldScalarFieldEnum
    having?: WorldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldCountAggregateInputType | true
    _min?: WorldMinAggregateInputType
    _max?: WorldMaxAggregateInputType
  }

  export type WorldGroupByOutputType = {
    id: string
    name: string
    inviteCode: string
    ownerId: string
    _count: WorldCountAggregateOutputType | null
    _min: WorldMinAggregateOutputType | null
    _max: WorldMaxAggregateOutputType | null
  }

  type GetWorldGroupByPayload<T extends WorldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldGroupByOutputType[P]>
            : GetScalarType<T[P], WorldGroupByOutputType[P]>
        }
      >
    >


  export type WorldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    inviteCode?: boolean
    ownerId?: boolean
    members?: boolean | World$membersArgs<ExtArgs>
    tasks?: boolean | World$tasksArgs<ExtArgs>
    polls?: boolean | World$pollsArgs<ExtArgs>
    categories?: boolean | World$categoriesArgs<ExtArgs>
    bans?: boolean | World$bansArgs<ExtArgs>
    _count?: boolean | WorldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["world"]>

  export type WorldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    inviteCode?: boolean
    ownerId?: boolean
  }, ExtArgs["result"]["world"]>

  export type WorldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    inviteCode?: boolean
    ownerId?: boolean
  }, ExtArgs["result"]["world"]>

  export type WorldSelectScalar = {
    id?: boolean
    name?: boolean
    inviteCode?: boolean
    ownerId?: boolean
  }

  export type WorldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "inviteCode" | "ownerId", ExtArgs["result"]["world"]>
  export type WorldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | World$membersArgs<ExtArgs>
    tasks?: boolean | World$tasksArgs<ExtArgs>
    polls?: boolean | World$pollsArgs<ExtArgs>
    categories?: boolean | World$categoriesArgs<ExtArgs>
    bans?: boolean | World$bansArgs<ExtArgs>
    _count?: boolean | WorldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "World"
    objects: {
      members: Prisma.$WorldMemberPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      polls: Prisma.$PollPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      bans: Prisma.$WorldBanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      inviteCode: string
      ownerId: string
    }, ExtArgs["result"]["world"]>
    composites: {}
  }

  type WorldGetPayload<S extends boolean | null | undefined | WorldDefaultArgs> = $Result.GetResult<Prisma.$WorldPayload, S>

  type WorldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorldCountAggregateInputType | true
    }

  export interface WorldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['World'], meta: { name: 'World' } }
    /**
     * Find zero or one World that matches the filter.
     * @param {WorldFindUniqueArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorldFindUniqueArgs>(args: SelectSubset<T, WorldFindUniqueArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one World that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorldFindUniqueOrThrowArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorldFindUniqueOrThrowArgs>(args: SelectSubset<T, WorldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first World that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldFindFirstArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorldFindFirstArgs>(args?: SelectSubset<T, WorldFindFirstArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first World that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldFindFirstOrThrowArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorldFindFirstOrThrowArgs>(args?: SelectSubset<T, WorldFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Worlds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Worlds
     * const worlds = await prisma.world.findMany()
     * 
     * // Get first 10 Worlds
     * const worlds = await prisma.world.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldWithIdOnly = await prisma.world.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorldFindManyArgs>(args?: SelectSubset<T, WorldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a World.
     * @param {WorldCreateArgs} args - Arguments to create a World.
     * @example
     * // Create one World
     * const World = await prisma.world.create({
     *   data: {
     *     // ... data to create a World
     *   }
     * })
     * 
     */
    create<T extends WorldCreateArgs>(args: SelectSubset<T, WorldCreateArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Worlds.
     * @param {WorldCreateManyArgs} args - Arguments to create many Worlds.
     * @example
     * // Create many Worlds
     * const world = await prisma.world.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorldCreateManyArgs>(args?: SelectSubset<T, WorldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Worlds and returns the data saved in the database.
     * @param {WorldCreateManyAndReturnArgs} args - Arguments to create many Worlds.
     * @example
     * // Create many Worlds
     * const world = await prisma.world.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Worlds and only return the `id`
     * const worldWithIdOnly = await prisma.world.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorldCreateManyAndReturnArgs>(args?: SelectSubset<T, WorldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a World.
     * @param {WorldDeleteArgs} args - Arguments to delete one World.
     * @example
     * // Delete one World
     * const World = await prisma.world.delete({
     *   where: {
     *     // ... filter to delete one World
     *   }
     * })
     * 
     */
    delete<T extends WorldDeleteArgs>(args: SelectSubset<T, WorldDeleteArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one World.
     * @param {WorldUpdateArgs} args - Arguments to update one World.
     * @example
     * // Update one World
     * const world = await prisma.world.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorldUpdateArgs>(args: SelectSubset<T, WorldUpdateArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Worlds.
     * @param {WorldDeleteManyArgs} args - Arguments to filter Worlds to delete.
     * @example
     * // Delete a few Worlds
     * const { count } = await prisma.world.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorldDeleteManyArgs>(args?: SelectSubset<T, WorldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worlds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Worlds
     * const world = await prisma.world.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorldUpdateManyArgs>(args: SelectSubset<T, WorldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worlds and returns the data updated in the database.
     * @param {WorldUpdateManyAndReturnArgs} args - Arguments to update many Worlds.
     * @example
     * // Update many Worlds
     * const world = await prisma.world.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Worlds and only return the `id`
     * const worldWithIdOnly = await prisma.world.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorldUpdateManyAndReturnArgs>(args: SelectSubset<T, WorldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one World.
     * @param {WorldUpsertArgs} args - Arguments to update or create a World.
     * @example
     * // Update or create a World
     * const world = await prisma.world.upsert({
     *   create: {
     *     // ... data to create a World
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the World we want to update
     *   }
     * })
     */
    upsert<T extends WorldUpsertArgs>(args: SelectSubset<T, WorldUpsertArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Worlds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldCountArgs} args - Arguments to filter Worlds to count.
     * @example
     * // Count the number of Worlds
     * const count = await prisma.world.count({
     *   where: {
     *     // ... the filter for the Worlds we want to count
     *   }
     * })
    **/
    count<T extends WorldCountArgs>(
      args?: Subset<T, WorldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a World.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorldAggregateArgs>(args: Subset<T, WorldAggregateArgs>): Prisma.PrismaPromise<GetWorldAggregateType<T>>

    /**
     * Group by World.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldGroupByArgs['orderBy'] }
        : { orderBy?: WorldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the World model
   */
  readonly fields: WorldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for World.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends World$membersArgs<ExtArgs> = {}>(args?: Subset<T, World$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends World$tasksArgs<ExtArgs> = {}>(args?: Subset<T, World$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    polls<T extends World$pollsArgs<ExtArgs> = {}>(args?: Subset<T, World$pollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends World$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, World$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bans<T extends World$bansArgs<ExtArgs> = {}>(args?: Subset<T, World$bansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the World model
   */
  interface WorldFieldRefs {
    readonly id: FieldRef<"World", 'String'>
    readonly name: FieldRef<"World", 'String'>
    readonly inviteCode: FieldRef<"World", 'String'>
    readonly ownerId: FieldRef<"World", 'String'>
  }
    

  // Custom InputTypes
  /**
   * World findUnique
   */
  export type WorldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where: WorldWhereUniqueInput
  }

  /**
   * World findUniqueOrThrow
   */
  export type WorldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where: WorldWhereUniqueInput
  }

  /**
   * World findFirst
   */
  export type WorldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worlds.
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worlds.
     */
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }

  /**
   * World findFirstOrThrow
   */
  export type WorldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worlds.
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worlds.
     */
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }

  /**
   * World findMany
   */
  export type WorldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which Worlds to fetch.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Worlds.
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worlds.
     */
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }

  /**
   * World create
   */
  export type WorldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * The data needed to create a World.
     */
    data: XOR<WorldCreateInput, WorldUncheckedCreateInput>
  }

  /**
   * World createMany
   */
  export type WorldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Worlds.
     */
    data: WorldCreateManyInput | WorldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * World createManyAndReturn
   */
  export type WorldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * The data used to create many Worlds.
     */
    data: WorldCreateManyInput | WorldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * World update
   */
  export type WorldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * The data needed to update a World.
     */
    data: XOR<WorldUpdateInput, WorldUncheckedUpdateInput>
    /**
     * Choose, which World to update.
     */
    where: WorldWhereUniqueInput
  }

  /**
   * World updateMany
   */
  export type WorldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Worlds.
     */
    data: XOR<WorldUpdateManyMutationInput, WorldUncheckedUpdateManyInput>
    /**
     * Filter which Worlds to update
     */
    where?: WorldWhereInput
    /**
     * Limit how many Worlds to update.
     */
    limit?: number
  }

  /**
   * World updateManyAndReturn
   */
  export type WorldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * The data used to update Worlds.
     */
    data: XOR<WorldUpdateManyMutationInput, WorldUncheckedUpdateManyInput>
    /**
     * Filter which Worlds to update
     */
    where?: WorldWhereInput
    /**
     * Limit how many Worlds to update.
     */
    limit?: number
  }

  /**
   * World upsert
   */
  export type WorldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * The filter to search for the World to update in case it exists.
     */
    where: WorldWhereUniqueInput
    /**
     * In case the World found by the `where` argument doesn't exist, create a new World with this data.
     */
    create: XOR<WorldCreateInput, WorldUncheckedCreateInput>
    /**
     * In case the World was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldUpdateInput, WorldUncheckedUpdateInput>
  }

  /**
   * World delete
   */
  export type WorldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter which World to delete.
     */
    where: WorldWhereUniqueInput
  }

  /**
   * World deleteMany
   */
  export type WorldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worlds to delete
     */
    where?: WorldWhereInput
    /**
     * Limit how many Worlds to delete.
     */
    limit?: number
  }

  /**
   * World.members
   */
  export type World$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberInclude<ExtArgs> | null
    where?: WorldMemberWhereInput
    orderBy?: WorldMemberOrderByWithRelationInput | WorldMemberOrderByWithRelationInput[]
    cursor?: WorldMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorldMemberScalarFieldEnum | WorldMemberScalarFieldEnum[]
  }

  /**
   * World.tasks
   */
  export type World$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * World.polls
   */
  export type World$pollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Poll
     */
    select?: PollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Poll
     */
    omit?: PollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PollInclude<ExtArgs> | null
    where?: PollWhereInput
    orderBy?: PollOrderByWithRelationInput | PollOrderByWithRelationInput[]
    cursor?: PollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PollScalarFieldEnum | PollScalarFieldEnum[]
  }

  /**
   * World.categories
   */
  export type World$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * World.bans
   */
  export type World$bansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanInclude<ExtArgs> | null
    where?: WorldBanWhereInput
    orderBy?: WorldBanOrderByWithRelationInput | WorldBanOrderByWithRelationInput[]
    cursor?: WorldBanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorldBanScalarFieldEnum | WorldBanScalarFieldEnum[]
  }

  /**
   * World without action
   */
  export type WorldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
  }


  /**
   * Model WorldMember
   */

  export type AggregateWorldMember = {
    _count: WorldMemberCountAggregateOutputType | null
    _min: WorldMemberMinAggregateOutputType | null
    _max: WorldMemberMaxAggregateOutputType | null
  }

  export type WorldMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    worldId: string | null
    role: $Enums.Role | null
  }

  export type WorldMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    worldId: string | null
    role: $Enums.Role | null
  }

  export type WorldMemberCountAggregateOutputType = {
    id: number
    userId: number
    worldId: number
    role: number
    _all: number
  }


  export type WorldMemberMinAggregateInputType = {
    id?: true
    userId?: true
    worldId?: true
    role?: true
  }

  export type WorldMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    worldId?: true
    role?: true
  }

  export type WorldMemberCountAggregateInputType = {
    id?: true
    userId?: true
    worldId?: true
    role?: true
    _all?: true
  }

  export type WorldMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldMember to aggregate.
     */
    where?: WorldMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMembers to fetch.
     */
    orderBy?: WorldMemberOrderByWithRelationInput | WorldMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorldMembers
    **/
    _count?: true | WorldMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldMemberMaxAggregateInputType
  }

  export type GetWorldMemberAggregateType<T extends WorldMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateWorldMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorldMember[P]>
      : GetScalarType<T[P], AggregateWorldMember[P]>
  }




  export type WorldMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldMemberWhereInput
    orderBy?: WorldMemberOrderByWithAggregationInput | WorldMemberOrderByWithAggregationInput[]
    by: WorldMemberScalarFieldEnum[] | WorldMemberScalarFieldEnum
    having?: WorldMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldMemberCountAggregateInputType | true
    _min?: WorldMemberMinAggregateInputType
    _max?: WorldMemberMaxAggregateInputType
  }

  export type WorldMemberGroupByOutputType = {
    id: string
    userId: string
    worldId: string
    role: $Enums.Role
    _count: WorldMemberCountAggregateOutputType | null
    _min: WorldMemberMinAggregateOutputType | null
    _max: WorldMemberMaxAggregateOutputType | null
  }

  type GetWorldMemberGroupByPayload<T extends WorldMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorldMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldMemberGroupByOutputType[P]>
            : GetScalarType<T[P], WorldMemberGroupByOutputType[P]>
        }
      >
    >


  export type WorldMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    worldId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worldMember"]>

  export type WorldMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    worldId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worldMember"]>

  export type WorldMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    worldId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worldMember"]>

  export type WorldMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    worldId?: boolean
    role?: boolean
  }

  export type WorldMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "worldId" | "role", ExtArgs["result"]["worldMember"]>
  export type WorldMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }
  export type WorldMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }
  export type WorldMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }

  export type $WorldMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorldMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      world: Prisma.$WorldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      worldId: string
      role: $Enums.Role
    }, ExtArgs["result"]["worldMember"]>
    composites: {}
  }

  type WorldMemberGetPayload<S extends boolean | null | undefined | WorldMemberDefaultArgs> = $Result.GetResult<Prisma.$WorldMemberPayload, S>

  type WorldMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorldMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorldMemberCountAggregateInputType | true
    }

  export interface WorldMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorldMember'], meta: { name: 'WorldMember' } }
    /**
     * Find zero or one WorldMember that matches the filter.
     * @param {WorldMemberFindUniqueArgs} args - Arguments to find a WorldMember
     * @example
     * // Get one WorldMember
     * const worldMember = await prisma.worldMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorldMemberFindUniqueArgs>(args: SelectSubset<T, WorldMemberFindUniqueArgs<ExtArgs>>): Prisma__WorldMemberClient<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorldMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorldMemberFindUniqueOrThrowArgs} args - Arguments to find a WorldMember
     * @example
     * // Get one WorldMember
     * const worldMember = await prisma.worldMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorldMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, WorldMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorldMemberClient<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorldMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMemberFindFirstArgs} args - Arguments to find a WorldMember
     * @example
     * // Get one WorldMember
     * const worldMember = await prisma.worldMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorldMemberFindFirstArgs>(args?: SelectSubset<T, WorldMemberFindFirstArgs<ExtArgs>>): Prisma__WorldMemberClient<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorldMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMemberFindFirstOrThrowArgs} args - Arguments to find a WorldMember
     * @example
     * // Get one WorldMember
     * const worldMember = await prisma.worldMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorldMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, WorldMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorldMemberClient<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorldMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorldMembers
     * const worldMembers = await prisma.worldMember.findMany()
     * 
     * // Get first 10 WorldMembers
     * const worldMembers = await prisma.worldMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldMemberWithIdOnly = await prisma.worldMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorldMemberFindManyArgs>(args?: SelectSubset<T, WorldMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorldMember.
     * @param {WorldMemberCreateArgs} args - Arguments to create a WorldMember.
     * @example
     * // Create one WorldMember
     * const WorldMember = await prisma.worldMember.create({
     *   data: {
     *     // ... data to create a WorldMember
     *   }
     * })
     * 
     */
    create<T extends WorldMemberCreateArgs>(args: SelectSubset<T, WorldMemberCreateArgs<ExtArgs>>): Prisma__WorldMemberClient<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorldMembers.
     * @param {WorldMemberCreateManyArgs} args - Arguments to create many WorldMembers.
     * @example
     * // Create many WorldMembers
     * const worldMember = await prisma.worldMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorldMemberCreateManyArgs>(args?: SelectSubset<T, WorldMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorldMembers and returns the data saved in the database.
     * @param {WorldMemberCreateManyAndReturnArgs} args - Arguments to create many WorldMembers.
     * @example
     * // Create many WorldMembers
     * const worldMember = await prisma.worldMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorldMembers and only return the `id`
     * const worldMemberWithIdOnly = await prisma.worldMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorldMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, WorldMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorldMember.
     * @param {WorldMemberDeleteArgs} args - Arguments to delete one WorldMember.
     * @example
     * // Delete one WorldMember
     * const WorldMember = await prisma.worldMember.delete({
     *   where: {
     *     // ... filter to delete one WorldMember
     *   }
     * })
     * 
     */
    delete<T extends WorldMemberDeleteArgs>(args: SelectSubset<T, WorldMemberDeleteArgs<ExtArgs>>): Prisma__WorldMemberClient<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorldMember.
     * @param {WorldMemberUpdateArgs} args - Arguments to update one WorldMember.
     * @example
     * // Update one WorldMember
     * const worldMember = await prisma.worldMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorldMemberUpdateArgs>(args: SelectSubset<T, WorldMemberUpdateArgs<ExtArgs>>): Prisma__WorldMemberClient<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorldMembers.
     * @param {WorldMemberDeleteManyArgs} args - Arguments to filter WorldMembers to delete.
     * @example
     * // Delete a few WorldMembers
     * const { count } = await prisma.worldMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorldMemberDeleteManyArgs>(args?: SelectSubset<T, WorldMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorldMembers
     * const worldMember = await prisma.worldMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorldMemberUpdateManyArgs>(args: SelectSubset<T, WorldMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldMembers and returns the data updated in the database.
     * @param {WorldMemberUpdateManyAndReturnArgs} args - Arguments to update many WorldMembers.
     * @example
     * // Update many WorldMembers
     * const worldMember = await prisma.worldMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorldMembers and only return the `id`
     * const worldMemberWithIdOnly = await prisma.worldMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorldMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, WorldMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorldMember.
     * @param {WorldMemberUpsertArgs} args - Arguments to update or create a WorldMember.
     * @example
     * // Update or create a WorldMember
     * const worldMember = await prisma.worldMember.upsert({
     *   create: {
     *     // ... data to create a WorldMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorldMember we want to update
     *   }
     * })
     */
    upsert<T extends WorldMemberUpsertArgs>(args: SelectSubset<T, WorldMemberUpsertArgs<ExtArgs>>): Prisma__WorldMemberClient<$Result.GetResult<Prisma.$WorldMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorldMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMemberCountArgs} args - Arguments to filter WorldMembers to count.
     * @example
     * // Count the number of WorldMembers
     * const count = await prisma.worldMember.count({
     *   where: {
     *     // ... the filter for the WorldMembers we want to count
     *   }
     * })
    **/
    count<T extends WorldMemberCountArgs>(
      args?: Subset<T, WorldMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorldMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorldMemberAggregateArgs>(args: Subset<T, WorldMemberAggregateArgs>): Prisma.PrismaPromise<GetWorldMemberAggregateType<T>>

    /**
     * Group by WorldMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorldMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldMemberGroupByArgs['orderBy'] }
        : { orderBy?: WorldMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorldMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorldMember model
   */
  readonly fields: WorldMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorldMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorldMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    world<T extends WorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldDefaultArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorldMember model
   */
  interface WorldMemberFieldRefs {
    readonly id: FieldRef<"WorldMember", 'String'>
    readonly userId: FieldRef<"WorldMember", 'String'>
    readonly worldId: FieldRef<"WorldMember", 'String'>
    readonly role: FieldRef<"WorldMember", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * WorldMember findUnique
   */
  export type WorldMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorldMember to fetch.
     */
    where: WorldMemberWhereUniqueInput
  }

  /**
   * WorldMember findUniqueOrThrow
   */
  export type WorldMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorldMember to fetch.
     */
    where: WorldMemberWhereUniqueInput
  }

  /**
   * WorldMember findFirst
   */
  export type WorldMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorldMember to fetch.
     */
    where?: WorldMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMembers to fetch.
     */
    orderBy?: WorldMemberOrderByWithRelationInput | WorldMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldMembers.
     */
    cursor?: WorldMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldMembers.
     */
    distinct?: WorldMemberScalarFieldEnum | WorldMemberScalarFieldEnum[]
  }

  /**
   * WorldMember findFirstOrThrow
   */
  export type WorldMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorldMember to fetch.
     */
    where?: WorldMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMembers to fetch.
     */
    orderBy?: WorldMemberOrderByWithRelationInput | WorldMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldMembers.
     */
    cursor?: WorldMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldMembers.
     */
    distinct?: WorldMemberScalarFieldEnum | WorldMemberScalarFieldEnum[]
  }

  /**
   * WorldMember findMany
   */
  export type WorldMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorldMembers to fetch.
     */
    where?: WorldMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldMembers to fetch.
     */
    orderBy?: WorldMemberOrderByWithRelationInput | WorldMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorldMembers.
     */
    cursor?: WorldMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldMembers.
     */
    distinct?: WorldMemberScalarFieldEnum | WorldMemberScalarFieldEnum[]
  }

  /**
   * WorldMember create
   */
  export type WorldMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a WorldMember.
     */
    data: XOR<WorldMemberCreateInput, WorldMemberUncheckedCreateInput>
  }

  /**
   * WorldMember createMany
   */
  export type WorldMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorldMembers.
     */
    data: WorldMemberCreateManyInput | WorldMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorldMember createManyAndReturn
   */
  export type WorldMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * The data used to create many WorldMembers.
     */
    data: WorldMemberCreateManyInput | WorldMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorldMember update
   */
  export type WorldMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a WorldMember.
     */
    data: XOR<WorldMemberUpdateInput, WorldMemberUncheckedUpdateInput>
    /**
     * Choose, which WorldMember to update.
     */
    where: WorldMemberWhereUniqueInput
  }

  /**
   * WorldMember updateMany
   */
  export type WorldMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorldMembers.
     */
    data: XOR<WorldMemberUpdateManyMutationInput, WorldMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorldMembers to update
     */
    where?: WorldMemberWhereInput
    /**
     * Limit how many WorldMembers to update.
     */
    limit?: number
  }

  /**
   * WorldMember updateManyAndReturn
   */
  export type WorldMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * The data used to update WorldMembers.
     */
    data: XOR<WorldMemberUpdateManyMutationInput, WorldMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorldMembers to update
     */
    where?: WorldMemberWhereInput
    /**
     * Limit how many WorldMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorldMember upsert
   */
  export type WorldMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the WorldMember to update in case it exists.
     */
    where: WorldMemberWhereUniqueInput
    /**
     * In case the WorldMember found by the `where` argument doesn't exist, create a new WorldMember with this data.
     */
    create: XOR<WorldMemberCreateInput, WorldMemberUncheckedCreateInput>
    /**
     * In case the WorldMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldMemberUpdateInput, WorldMemberUncheckedUpdateInput>
  }

  /**
   * WorldMember delete
   */
  export type WorldMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberInclude<ExtArgs> | null
    /**
     * Filter which WorldMember to delete.
     */
    where: WorldMemberWhereUniqueInput
  }

  /**
   * WorldMember deleteMany
   */
  export type WorldMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldMembers to delete
     */
    where?: WorldMemberWhereInput
    /**
     * Limit how many WorldMembers to delete.
     */
    limit?: number
  }

  /**
   * WorldMember without action
   */
  export type WorldMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldMember
     */
    select?: WorldMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldMember
     */
    omit?: WorldMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldMemberInclude<ExtArgs> | null
  }


  /**
   * Model WorldBan
   */

  export type AggregateWorldBan = {
    _count: WorldBanCountAggregateOutputType | null
    _min: WorldBanMinAggregateOutputType | null
    _max: WorldBanMaxAggregateOutputType | null
  }

  export type WorldBanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    worldId: string | null
  }

  export type WorldBanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    worldId: string | null
  }

  export type WorldBanCountAggregateOutputType = {
    id: number
    userId: number
    worldId: number
    _all: number
  }


  export type WorldBanMinAggregateInputType = {
    id?: true
    userId?: true
    worldId?: true
  }

  export type WorldBanMaxAggregateInputType = {
    id?: true
    userId?: true
    worldId?: true
  }

  export type WorldBanCountAggregateInputType = {
    id?: true
    userId?: true
    worldId?: true
    _all?: true
  }

  export type WorldBanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldBan to aggregate.
     */
    where?: WorldBanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldBans to fetch.
     */
    orderBy?: WorldBanOrderByWithRelationInput | WorldBanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldBanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldBans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldBans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorldBans
    **/
    _count?: true | WorldBanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldBanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldBanMaxAggregateInputType
  }

  export type GetWorldBanAggregateType<T extends WorldBanAggregateArgs> = {
        [P in keyof T & keyof AggregateWorldBan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorldBan[P]>
      : GetScalarType<T[P], AggregateWorldBan[P]>
  }




  export type WorldBanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldBanWhereInput
    orderBy?: WorldBanOrderByWithAggregationInput | WorldBanOrderByWithAggregationInput[]
    by: WorldBanScalarFieldEnum[] | WorldBanScalarFieldEnum
    having?: WorldBanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldBanCountAggregateInputType | true
    _min?: WorldBanMinAggregateInputType
    _max?: WorldBanMaxAggregateInputType
  }

  export type WorldBanGroupByOutputType = {
    id: string
    userId: string
    worldId: string
    _count: WorldBanCountAggregateOutputType | null
    _min: WorldBanMinAggregateOutputType | null
    _max: WorldBanMaxAggregateOutputType | null
  }

  type GetWorldBanGroupByPayload<T extends WorldBanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorldBanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldBanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldBanGroupByOutputType[P]>
            : GetScalarType<T[P], WorldBanGroupByOutputType[P]>
        }
      >
    >


  export type WorldBanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    worldId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worldBan"]>

  export type WorldBanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    worldId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worldBan"]>

  export type WorldBanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    worldId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worldBan"]>

  export type WorldBanSelectScalar = {
    id?: boolean
    userId?: boolean
    worldId?: boolean
  }

  export type WorldBanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "worldId", ExtArgs["result"]["worldBan"]>
  export type WorldBanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }
  export type WorldBanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }
  export type WorldBanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }

  export type $WorldBanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorldBan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      world: Prisma.$WorldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      worldId: string
    }, ExtArgs["result"]["worldBan"]>
    composites: {}
  }

  type WorldBanGetPayload<S extends boolean | null | undefined | WorldBanDefaultArgs> = $Result.GetResult<Prisma.$WorldBanPayload, S>

  type WorldBanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorldBanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorldBanCountAggregateInputType | true
    }

  export interface WorldBanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorldBan'], meta: { name: 'WorldBan' } }
    /**
     * Find zero or one WorldBan that matches the filter.
     * @param {WorldBanFindUniqueArgs} args - Arguments to find a WorldBan
     * @example
     * // Get one WorldBan
     * const worldBan = await prisma.worldBan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorldBanFindUniqueArgs>(args: SelectSubset<T, WorldBanFindUniqueArgs<ExtArgs>>): Prisma__WorldBanClient<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorldBan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorldBanFindUniqueOrThrowArgs} args - Arguments to find a WorldBan
     * @example
     * // Get one WorldBan
     * const worldBan = await prisma.worldBan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorldBanFindUniqueOrThrowArgs>(args: SelectSubset<T, WorldBanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorldBanClient<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorldBan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldBanFindFirstArgs} args - Arguments to find a WorldBan
     * @example
     * // Get one WorldBan
     * const worldBan = await prisma.worldBan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorldBanFindFirstArgs>(args?: SelectSubset<T, WorldBanFindFirstArgs<ExtArgs>>): Prisma__WorldBanClient<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorldBan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldBanFindFirstOrThrowArgs} args - Arguments to find a WorldBan
     * @example
     * // Get one WorldBan
     * const worldBan = await prisma.worldBan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorldBanFindFirstOrThrowArgs>(args?: SelectSubset<T, WorldBanFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorldBanClient<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorldBans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldBanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorldBans
     * const worldBans = await prisma.worldBan.findMany()
     * 
     * // Get first 10 WorldBans
     * const worldBans = await prisma.worldBan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldBanWithIdOnly = await prisma.worldBan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorldBanFindManyArgs>(args?: SelectSubset<T, WorldBanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorldBan.
     * @param {WorldBanCreateArgs} args - Arguments to create a WorldBan.
     * @example
     * // Create one WorldBan
     * const WorldBan = await prisma.worldBan.create({
     *   data: {
     *     // ... data to create a WorldBan
     *   }
     * })
     * 
     */
    create<T extends WorldBanCreateArgs>(args: SelectSubset<T, WorldBanCreateArgs<ExtArgs>>): Prisma__WorldBanClient<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorldBans.
     * @param {WorldBanCreateManyArgs} args - Arguments to create many WorldBans.
     * @example
     * // Create many WorldBans
     * const worldBan = await prisma.worldBan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorldBanCreateManyArgs>(args?: SelectSubset<T, WorldBanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorldBans and returns the data saved in the database.
     * @param {WorldBanCreateManyAndReturnArgs} args - Arguments to create many WorldBans.
     * @example
     * // Create many WorldBans
     * const worldBan = await prisma.worldBan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorldBans and only return the `id`
     * const worldBanWithIdOnly = await prisma.worldBan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorldBanCreateManyAndReturnArgs>(args?: SelectSubset<T, WorldBanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorldBan.
     * @param {WorldBanDeleteArgs} args - Arguments to delete one WorldBan.
     * @example
     * // Delete one WorldBan
     * const WorldBan = await prisma.worldBan.delete({
     *   where: {
     *     // ... filter to delete one WorldBan
     *   }
     * })
     * 
     */
    delete<T extends WorldBanDeleteArgs>(args: SelectSubset<T, WorldBanDeleteArgs<ExtArgs>>): Prisma__WorldBanClient<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorldBan.
     * @param {WorldBanUpdateArgs} args - Arguments to update one WorldBan.
     * @example
     * // Update one WorldBan
     * const worldBan = await prisma.worldBan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorldBanUpdateArgs>(args: SelectSubset<T, WorldBanUpdateArgs<ExtArgs>>): Prisma__WorldBanClient<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorldBans.
     * @param {WorldBanDeleteManyArgs} args - Arguments to filter WorldBans to delete.
     * @example
     * // Delete a few WorldBans
     * const { count } = await prisma.worldBan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorldBanDeleteManyArgs>(args?: SelectSubset<T, WorldBanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldBans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldBanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorldBans
     * const worldBan = await prisma.worldBan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorldBanUpdateManyArgs>(args: SelectSubset<T, WorldBanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldBans and returns the data updated in the database.
     * @param {WorldBanUpdateManyAndReturnArgs} args - Arguments to update many WorldBans.
     * @example
     * // Update many WorldBans
     * const worldBan = await prisma.worldBan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorldBans and only return the `id`
     * const worldBanWithIdOnly = await prisma.worldBan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorldBanUpdateManyAndReturnArgs>(args: SelectSubset<T, WorldBanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorldBan.
     * @param {WorldBanUpsertArgs} args - Arguments to update or create a WorldBan.
     * @example
     * // Update or create a WorldBan
     * const worldBan = await prisma.worldBan.upsert({
     *   create: {
     *     // ... data to create a WorldBan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorldBan we want to update
     *   }
     * })
     */
    upsert<T extends WorldBanUpsertArgs>(args: SelectSubset<T, WorldBanUpsertArgs<ExtArgs>>): Prisma__WorldBanClient<$Result.GetResult<Prisma.$WorldBanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorldBans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldBanCountArgs} args - Arguments to filter WorldBans to count.
     * @example
     * // Count the number of WorldBans
     * const count = await prisma.worldBan.count({
     *   where: {
     *     // ... the filter for the WorldBans we want to count
     *   }
     * })
    **/
    count<T extends WorldBanCountArgs>(
      args?: Subset<T, WorldBanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldBanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorldBan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldBanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorldBanAggregateArgs>(args: Subset<T, WorldBanAggregateArgs>): Prisma.PrismaPromise<GetWorldBanAggregateType<T>>

    /**
     * Group by WorldBan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldBanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorldBanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldBanGroupByArgs['orderBy'] }
        : { orderBy?: WorldBanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorldBanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldBanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorldBan model
   */
  readonly fields: WorldBanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorldBan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorldBanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    world<T extends WorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldDefaultArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorldBan model
   */
  interface WorldBanFieldRefs {
    readonly id: FieldRef<"WorldBan", 'String'>
    readonly userId: FieldRef<"WorldBan", 'String'>
    readonly worldId: FieldRef<"WorldBan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorldBan findUnique
   */
  export type WorldBanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanInclude<ExtArgs> | null
    /**
     * Filter, which WorldBan to fetch.
     */
    where: WorldBanWhereUniqueInput
  }

  /**
   * WorldBan findUniqueOrThrow
   */
  export type WorldBanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanInclude<ExtArgs> | null
    /**
     * Filter, which WorldBan to fetch.
     */
    where: WorldBanWhereUniqueInput
  }

  /**
   * WorldBan findFirst
   */
  export type WorldBanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanInclude<ExtArgs> | null
    /**
     * Filter, which WorldBan to fetch.
     */
    where?: WorldBanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldBans to fetch.
     */
    orderBy?: WorldBanOrderByWithRelationInput | WorldBanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldBans.
     */
    cursor?: WorldBanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldBans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldBans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldBans.
     */
    distinct?: WorldBanScalarFieldEnum | WorldBanScalarFieldEnum[]
  }

  /**
   * WorldBan findFirstOrThrow
   */
  export type WorldBanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanInclude<ExtArgs> | null
    /**
     * Filter, which WorldBan to fetch.
     */
    where?: WorldBanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldBans to fetch.
     */
    orderBy?: WorldBanOrderByWithRelationInput | WorldBanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldBans.
     */
    cursor?: WorldBanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldBans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldBans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldBans.
     */
    distinct?: WorldBanScalarFieldEnum | WorldBanScalarFieldEnum[]
  }

  /**
   * WorldBan findMany
   */
  export type WorldBanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanInclude<ExtArgs> | null
    /**
     * Filter, which WorldBans to fetch.
     */
    where?: WorldBanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldBans to fetch.
     */
    orderBy?: WorldBanOrderByWithRelationInput | WorldBanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorldBans.
     */
    cursor?: WorldBanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldBans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldBans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldBans.
     */
    distinct?: WorldBanScalarFieldEnum | WorldBanScalarFieldEnum[]
  }

  /**
   * WorldBan create
   */
  export type WorldBanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanInclude<ExtArgs> | null
    /**
     * The data needed to create a WorldBan.
     */
    data: XOR<WorldBanCreateInput, WorldBanUncheckedCreateInput>
  }

  /**
   * WorldBan createMany
   */
  export type WorldBanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorldBans.
     */
    data: WorldBanCreateManyInput | WorldBanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorldBan createManyAndReturn
   */
  export type WorldBanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * The data used to create many WorldBans.
     */
    data: WorldBanCreateManyInput | WorldBanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorldBan update
   */
  export type WorldBanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanInclude<ExtArgs> | null
    /**
     * The data needed to update a WorldBan.
     */
    data: XOR<WorldBanUpdateInput, WorldBanUncheckedUpdateInput>
    /**
     * Choose, which WorldBan to update.
     */
    where: WorldBanWhereUniqueInput
  }

  /**
   * WorldBan updateMany
   */
  export type WorldBanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorldBans.
     */
    data: XOR<WorldBanUpdateManyMutationInput, WorldBanUncheckedUpdateManyInput>
    /**
     * Filter which WorldBans to update
     */
    where?: WorldBanWhereInput
    /**
     * Limit how many WorldBans to update.
     */
    limit?: number
  }

  /**
   * WorldBan updateManyAndReturn
   */
  export type WorldBanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * The data used to update WorldBans.
     */
    data: XOR<WorldBanUpdateManyMutationInput, WorldBanUncheckedUpdateManyInput>
    /**
     * Filter which WorldBans to update
     */
    where?: WorldBanWhereInput
    /**
     * Limit how many WorldBans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorldBan upsert
   */
  export type WorldBanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanInclude<ExtArgs> | null
    /**
     * The filter to search for the WorldBan to update in case it exists.
     */
    where: WorldBanWhereUniqueInput
    /**
     * In case the WorldBan found by the `where` argument doesn't exist, create a new WorldBan with this data.
     */
    create: XOR<WorldBanCreateInput, WorldBanUncheckedCreateInput>
    /**
     * In case the WorldBan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldBanUpdateInput, WorldBanUncheckedUpdateInput>
  }

  /**
   * WorldBan delete
   */
  export type WorldBanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanInclude<ExtArgs> | null
    /**
     * Filter which WorldBan to delete.
     */
    where: WorldBanWhereUniqueInput
  }

  /**
   * WorldBan deleteMany
   */
  export type WorldBanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldBans to delete
     */
    where?: WorldBanWhereInput
    /**
     * Limit how many WorldBans to delete.
     */
    limit?: number
  }

  /**
   * WorldBan without action
   */
  export type WorldBanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldBan
     */
    select?: WorldBanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldBan
     */
    omit?: WorldBanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldBanInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    worldId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    worldId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    color: number
    worldId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    worldId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    worldId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    worldId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    color: string
    worldId: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    worldId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
    tasks?: boolean | Category$tasksArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    worldId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    worldId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    worldId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "worldId" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
    tasks?: boolean | Category$tasksArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      world: Prisma.$WorldPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string
      worldId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    world<T extends WorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldDefaultArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Category$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Category$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly color: FieldRef<"Category", 'String'>
    readonly worldId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.tasks
   */
  export type Category$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    hasResources: boolean | null
    resources: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.TaskPriority | null
    categoryId: string | null
    worldId: string | null
    assigneeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    hasResources: boolean | null
    resources: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.TaskPriority | null
    categoryId: string | null
    worldId: string | null
    assigneeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    hasResources: number
    resources: number
    status: number
    priority: number
    categoryId: number
    worldId: number
    assigneeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    hasResources?: true
    resources?: true
    status?: true
    priority?: true
    categoryId?: true
    worldId?: true
    assigneeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    hasResources?: true
    resources?: true
    status?: true
    priority?: true
    categoryId?: true
    worldId?: true
    assigneeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    hasResources?: true
    resources?: true
    status?: true
    priority?: true
    categoryId?: true
    worldId?: true
    assigneeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    hasResources: boolean
    resources: string | null
    status: $Enums.TaskStatus
    priority: $Enums.TaskPriority
    categoryId: string
    worldId: string
    assigneeId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    hasResources?: boolean
    resources?: boolean
    status?: boolean
    priority?: boolean
    categoryId?: boolean
    worldId?: boolean
    assigneeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    hasResources?: boolean
    resources?: boolean
    status?: boolean
    priority?: boolean
    categoryId?: boolean
    worldId?: boolean
    assigneeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    hasResources?: boolean
    resources?: boolean
    status?: boolean
    priority?: boolean
    categoryId?: boolean
    worldId?: boolean
    assigneeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    hasResources?: boolean
    resources?: boolean
    status?: boolean
    priority?: boolean
    categoryId?: boolean
    worldId?: boolean
    assigneeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "hasResources" | "resources" | "status" | "priority" | "categoryId" | "worldId" | "assigneeId" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      world: Prisma.$WorldPayload<ExtArgs>
      assignee: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      hasResources: boolean
      resources: string | null
      status: $Enums.TaskStatus
      priority: $Enums.TaskPriority
      categoryId: string
      worldId: string
      assigneeId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    world<T extends WorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldDefaultArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignee<T extends Task$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, Task$assigneeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly hasResources: FieldRef<"Task", 'Boolean'>
    readonly resources: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly priority: FieldRef<"Task", 'TaskPriority'>
    readonly categoryId: FieldRef<"Task", 'String'>
    readonly worldId: FieldRef<"Task", 'String'>
    readonly assigneeId: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.assignee
   */
  export type Task$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PollScalarFieldEnum: {
    id: 'id',
    question: 'question',
    worldId: 'worldId',
    createdAt: 'createdAt'
  };

  export type PollScalarFieldEnum = (typeof PollScalarFieldEnum)[keyof typeof PollScalarFieldEnum]


  export const PollOptionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    pollId: 'pollId'
  };

  export type PollOptionScalarFieldEnum = (typeof PollOptionScalarFieldEnum)[keyof typeof PollOptionScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    optionId: 'optionId',
    userId: 'userId'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const WorldScalarFieldEnum: {
    id: 'id',
    name: 'name',
    inviteCode: 'inviteCode',
    ownerId: 'ownerId'
  };

  export type WorldScalarFieldEnum = (typeof WorldScalarFieldEnum)[keyof typeof WorldScalarFieldEnum]


  export const WorldMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    worldId: 'worldId',
    role: 'role'
  };

  export type WorldMemberScalarFieldEnum = (typeof WorldMemberScalarFieldEnum)[keyof typeof WorldMemberScalarFieldEnum]


  export const WorldBanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    worldId: 'worldId'
  };

  export type WorldBanScalarFieldEnum = (typeof WorldBanScalarFieldEnum)[keyof typeof WorldBanScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    worldId: 'worldId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    hasResources: 'hasResources',
    resources: 'resources',
    status: 'status',
    priority: 'priority',
    categoryId: 'categoryId',
    worldId: 'worldId',
    assigneeId: 'assigneeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'TaskPriority'
   */
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority'>
    


  /**
   * Reference to a field of type 'TaskPriority[]'
   */
  export type ListEnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nickname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    worlds?: WorldMemberListRelationFilter
    tasks?: TaskListRelationFilter
    votes?: VoteListRelationFilter
    bans?: WorldBanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    worlds?: WorldMemberOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
    bans?: WorldBanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nickname?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    worlds?: WorldMemberListRelationFilter
    tasks?: TaskListRelationFilter
    votes?: VoteListRelationFilter
    bans?: WorldBanListRelationFilter
  }, "id" | "nickname">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type PollWhereInput = {
    AND?: PollWhereInput | PollWhereInput[]
    OR?: PollWhereInput[]
    NOT?: PollWhereInput | PollWhereInput[]
    id?: StringFilter<"Poll"> | string
    question?: StringFilter<"Poll"> | string
    worldId?: StringFilter<"Poll"> | string
    createdAt?: DateTimeFilter<"Poll"> | Date | string
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
    options?: PollOptionListRelationFilter
  }

  export type PollOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    worldId?: SortOrder
    createdAt?: SortOrder
    world?: WorldOrderByWithRelationInput
    options?: PollOptionOrderByRelationAggregateInput
  }

  export type PollWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PollWhereInput | PollWhereInput[]
    OR?: PollWhereInput[]
    NOT?: PollWhereInput | PollWhereInput[]
    question?: StringFilter<"Poll"> | string
    worldId?: StringFilter<"Poll"> | string
    createdAt?: DateTimeFilter<"Poll"> | Date | string
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
    options?: PollOptionListRelationFilter
  }, "id">

  export type PollOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    worldId?: SortOrder
    createdAt?: SortOrder
    _count?: PollCountOrderByAggregateInput
    _max?: PollMaxOrderByAggregateInput
    _min?: PollMinOrderByAggregateInput
  }

  export type PollScalarWhereWithAggregatesInput = {
    AND?: PollScalarWhereWithAggregatesInput | PollScalarWhereWithAggregatesInput[]
    OR?: PollScalarWhereWithAggregatesInput[]
    NOT?: PollScalarWhereWithAggregatesInput | PollScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Poll"> | string
    question?: StringWithAggregatesFilter<"Poll"> | string
    worldId?: StringWithAggregatesFilter<"Poll"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Poll"> | Date | string
  }

  export type PollOptionWhereInput = {
    AND?: PollOptionWhereInput | PollOptionWhereInput[]
    OR?: PollOptionWhereInput[]
    NOT?: PollOptionWhereInput | PollOptionWhereInput[]
    id?: StringFilter<"PollOption"> | string
    text?: StringFilter<"PollOption"> | string
    pollId?: StringFilter<"PollOption"> | string
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
    votes?: VoteListRelationFilter
  }

  export type PollOptionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    pollId?: SortOrder
    poll?: PollOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type PollOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PollOptionWhereInput | PollOptionWhereInput[]
    OR?: PollOptionWhereInput[]
    NOT?: PollOptionWhereInput | PollOptionWhereInput[]
    text?: StringFilter<"PollOption"> | string
    pollId?: StringFilter<"PollOption"> | string
    poll?: XOR<PollScalarRelationFilter, PollWhereInput>
    votes?: VoteListRelationFilter
  }, "id">

  export type PollOptionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    pollId?: SortOrder
    _count?: PollOptionCountOrderByAggregateInput
    _max?: PollOptionMaxOrderByAggregateInput
    _min?: PollOptionMinOrderByAggregateInput
  }

  export type PollOptionScalarWhereWithAggregatesInput = {
    AND?: PollOptionScalarWhereWithAggregatesInput | PollOptionScalarWhereWithAggregatesInput[]
    OR?: PollOptionScalarWhereWithAggregatesInput[]
    NOT?: PollOptionScalarWhereWithAggregatesInput | PollOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PollOption"> | string
    text?: StringWithAggregatesFilter<"PollOption"> | string
    pollId?: StringWithAggregatesFilter<"PollOption"> | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    optionId?: StringFilter<"Vote"> | string
    userId?: StringFilter<"Vote"> | string
    option?: XOR<PollOptionScalarRelationFilter, PollOptionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
    option?: PollOptionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_optionId?: VoteUserIdOptionIdCompoundUniqueInput
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    optionId?: StringFilter<"Vote"> | string
    userId?: StringFilter<"Vote"> | string
    option?: XOR<PollOptionScalarRelationFilter, PollOptionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_optionId">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    optionId?: StringWithAggregatesFilter<"Vote"> | string
    userId?: StringWithAggregatesFilter<"Vote"> | string
  }

  export type WorldWhereInput = {
    AND?: WorldWhereInput | WorldWhereInput[]
    OR?: WorldWhereInput[]
    NOT?: WorldWhereInput | WorldWhereInput[]
    id?: StringFilter<"World"> | string
    name?: StringFilter<"World"> | string
    inviteCode?: StringFilter<"World"> | string
    ownerId?: StringFilter<"World"> | string
    members?: WorldMemberListRelationFilter
    tasks?: TaskListRelationFilter
    polls?: PollListRelationFilter
    categories?: CategoryListRelationFilter
    bans?: WorldBanListRelationFilter
  }

  export type WorldOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    inviteCode?: SortOrder
    ownerId?: SortOrder
    members?: WorldMemberOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    polls?: PollOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    bans?: WorldBanOrderByRelationAggregateInput
  }

  export type WorldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inviteCode?: string
    AND?: WorldWhereInput | WorldWhereInput[]
    OR?: WorldWhereInput[]
    NOT?: WorldWhereInput | WorldWhereInput[]
    name?: StringFilter<"World"> | string
    ownerId?: StringFilter<"World"> | string
    members?: WorldMemberListRelationFilter
    tasks?: TaskListRelationFilter
    polls?: PollListRelationFilter
    categories?: CategoryListRelationFilter
    bans?: WorldBanListRelationFilter
  }, "id" | "inviteCode">

  export type WorldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    inviteCode?: SortOrder
    ownerId?: SortOrder
    _count?: WorldCountOrderByAggregateInput
    _max?: WorldMaxOrderByAggregateInput
    _min?: WorldMinOrderByAggregateInput
  }

  export type WorldScalarWhereWithAggregatesInput = {
    AND?: WorldScalarWhereWithAggregatesInput | WorldScalarWhereWithAggregatesInput[]
    OR?: WorldScalarWhereWithAggregatesInput[]
    NOT?: WorldScalarWhereWithAggregatesInput | WorldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"World"> | string
    name?: StringWithAggregatesFilter<"World"> | string
    inviteCode?: StringWithAggregatesFilter<"World"> | string
    ownerId?: StringWithAggregatesFilter<"World"> | string
  }

  export type WorldMemberWhereInput = {
    AND?: WorldMemberWhereInput | WorldMemberWhereInput[]
    OR?: WorldMemberWhereInput[]
    NOT?: WorldMemberWhereInput | WorldMemberWhereInput[]
    id?: StringFilter<"WorldMember"> | string
    userId?: StringFilter<"WorldMember"> | string
    worldId?: StringFilter<"WorldMember"> | string
    role?: EnumRoleFilter<"WorldMember"> | $Enums.Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
  }

  export type WorldMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    worldId?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    world?: WorldOrderByWithRelationInput
  }

  export type WorldMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_worldId?: WorldMemberUserIdWorldIdCompoundUniqueInput
    AND?: WorldMemberWhereInput | WorldMemberWhereInput[]
    OR?: WorldMemberWhereInput[]
    NOT?: WorldMemberWhereInput | WorldMemberWhereInput[]
    userId?: StringFilter<"WorldMember"> | string
    worldId?: StringFilter<"WorldMember"> | string
    role?: EnumRoleFilter<"WorldMember"> | $Enums.Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
  }, "id" | "userId_worldId">

  export type WorldMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    worldId?: SortOrder
    role?: SortOrder
    _count?: WorldMemberCountOrderByAggregateInput
    _max?: WorldMemberMaxOrderByAggregateInput
    _min?: WorldMemberMinOrderByAggregateInput
  }

  export type WorldMemberScalarWhereWithAggregatesInput = {
    AND?: WorldMemberScalarWhereWithAggregatesInput | WorldMemberScalarWhereWithAggregatesInput[]
    OR?: WorldMemberScalarWhereWithAggregatesInput[]
    NOT?: WorldMemberScalarWhereWithAggregatesInput | WorldMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorldMember"> | string
    userId?: StringWithAggregatesFilter<"WorldMember"> | string
    worldId?: StringWithAggregatesFilter<"WorldMember"> | string
    role?: EnumRoleWithAggregatesFilter<"WorldMember"> | $Enums.Role
  }

  export type WorldBanWhereInput = {
    AND?: WorldBanWhereInput | WorldBanWhereInput[]
    OR?: WorldBanWhereInput[]
    NOT?: WorldBanWhereInput | WorldBanWhereInput[]
    id?: StringFilter<"WorldBan"> | string
    userId?: StringFilter<"WorldBan"> | string
    worldId?: StringFilter<"WorldBan"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
  }

  export type WorldBanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    worldId?: SortOrder
    user?: UserOrderByWithRelationInput
    world?: WorldOrderByWithRelationInput
  }

  export type WorldBanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_worldId?: WorldBanUserIdWorldIdCompoundUniqueInput
    AND?: WorldBanWhereInput | WorldBanWhereInput[]
    OR?: WorldBanWhereInput[]
    NOT?: WorldBanWhereInput | WorldBanWhereInput[]
    userId?: StringFilter<"WorldBan"> | string
    worldId?: StringFilter<"WorldBan"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
  }, "id" | "userId_worldId">

  export type WorldBanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    worldId?: SortOrder
    _count?: WorldBanCountOrderByAggregateInput
    _max?: WorldBanMaxOrderByAggregateInput
    _min?: WorldBanMinOrderByAggregateInput
  }

  export type WorldBanScalarWhereWithAggregatesInput = {
    AND?: WorldBanScalarWhereWithAggregatesInput | WorldBanScalarWhereWithAggregatesInput[]
    OR?: WorldBanScalarWhereWithAggregatesInput[]
    NOT?: WorldBanScalarWhereWithAggregatesInput | WorldBanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorldBan"> | string
    userId?: StringWithAggregatesFilter<"WorldBan"> | string
    worldId?: StringWithAggregatesFilter<"WorldBan"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    color?: StringFilter<"Category"> | string
    worldId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    worldId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    world?: WorldOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    color?: StringFilter<"Category"> | string
    worldId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
    tasks?: TaskListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    worldId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    color?: StringWithAggregatesFilter<"Category"> | string
    worldId?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    hasResources?: BoolFilter<"Task"> | boolean
    resources?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    categoryId?: StringFilter<"Task"> | string
    worldId?: StringFilter<"Task"> | string
    assigneeId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    hasResources?: SortOrder
    resources?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    categoryId?: SortOrder
    worldId?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    world?: WorldOrderByWithRelationInput
    assignee?: UserOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    hasResources?: BoolFilter<"Task"> | boolean
    resources?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    categoryId?: StringFilter<"Task"> | string
    worldId?: StringFilter<"Task"> | string
    assigneeId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    hasResources?: SortOrder
    resources?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    categoryId?: SortOrder
    worldId?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    hasResources?: BoolWithAggregatesFilter<"Task"> | boolean
    resources?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityWithAggregatesFilter<"Task"> | $Enums.TaskPriority
    categoryId?: StringWithAggregatesFilter<"Task"> | string
    worldId?: StringWithAggregatesFilter<"Task"> | string
    assigneeId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    nickname: string
    password: string
    worlds?: WorldMemberCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutAssigneeInput
    votes?: VoteCreateNestedManyWithoutUserInput
    bans?: WorldBanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nickname: string
    password: string
    worlds?: WorldMemberUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    bans?: WorldBanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    worlds?: WorldMemberUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    bans?: WorldBanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    worlds?: WorldMemberUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    bans?: WorldBanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nickname: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PollCreateInput = {
    id?: string
    question: string
    createdAt?: Date | string
    world: WorldCreateNestedOneWithoutPollsInput
    options?: PollOptionCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateInput = {
    id?: string
    question: string
    worldId: string
    createdAt?: Date | string
    options?: PollOptionUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    world?: WorldUpdateOneRequiredWithoutPollsNestedInput
    options?: PollOptionUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: PollOptionUncheckedUpdateManyWithoutPollNestedInput
  }

  export type PollCreateManyInput = {
    id?: string
    question: string
    worldId: string
    createdAt?: Date | string
  }

  export type PollUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PollUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PollOptionCreateInput = {
    id?: string
    text: string
    poll: PollCreateNestedOneWithoutOptionsInput
    votes?: VoteCreateNestedManyWithoutOptionInput
  }

  export type PollOptionUncheckedCreateInput = {
    id?: string
    text: string
    pollId: string
    votes?: VoteUncheckedCreateNestedManyWithoutOptionInput
  }

  export type PollOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    poll?: PollUpdateOneRequiredWithoutOptionsNestedInput
    votes?: VoteUpdateManyWithoutOptionNestedInput
  }

  export type PollOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
    votes?: VoteUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type PollOptionCreateManyInput = {
    id?: string
    text: string
    pollId: string
  }

  export type PollOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PollOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateInput = {
    id?: string
    option: PollOptionCreateNestedOneWithoutVotesInput
    user: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    optionId: string
    userId: string
  }

  export type VoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: PollOptionUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateManyInput = {
    id?: string
    optionId: string
    userId: string
  }

  export type VoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WorldCreateInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
    members?: WorldMemberCreateNestedManyWithoutWorldInput
    tasks?: TaskCreateNestedManyWithoutWorldInput
    polls?: PollCreateNestedManyWithoutWorldInput
    categories?: CategoryCreateNestedManyWithoutWorldInput
    bans?: WorldBanCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
    members?: WorldMemberUncheckedCreateNestedManyWithoutWorldInput
    tasks?: TaskUncheckedCreateNestedManyWithoutWorldInput
    polls?: PollUncheckedCreateNestedManyWithoutWorldInput
    categories?: CategoryUncheckedCreateNestedManyWithoutWorldInput
    bans?: WorldBanUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: WorldMemberUpdateManyWithoutWorldNestedInput
    tasks?: TaskUpdateManyWithoutWorldNestedInput
    polls?: PollUpdateManyWithoutWorldNestedInput
    categories?: CategoryUpdateManyWithoutWorldNestedInput
    bans?: WorldBanUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: WorldMemberUncheckedUpdateManyWithoutWorldNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutWorldNestedInput
    polls?: PollUncheckedUpdateManyWithoutWorldNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutWorldNestedInput
    bans?: WorldBanUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type WorldCreateManyInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
  }

  export type WorldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type WorldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type WorldMemberCreateInput = {
    id?: string
    role?: $Enums.Role
    user: UserCreateNestedOneWithoutWorldsInput
    world: WorldCreateNestedOneWithoutMembersInput
  }

  export type WorldMemberUncheckedCreateInput = {
    id?: string
    userId: string
    worldId: string
    role?: $Enums.Role
  }

  export type WorldMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutWorldsNestedInput
    world?: WorldUpdateOneRequiredWithoutMembersNestedInput
  }

  export type WorldMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type WorldMemberCreateManyInput = {
    id?: string
    userId: string
    worldId: string
    role?: $Enums.Role
  }

  export type WorldMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type WorldMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type WorldBanCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutBansInput
    world: WorldCreateNestedOneWithoutBansInput
  }

  export type WorldBanUncheckedCreateInput = {
    id?: string
    userId: string
    worldId: string
  }

  export type WorldBanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBansNestedInput
    world?: WorldUpdateOneRequiredWithoutBansNestedInput
  }

  export type WorldBanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
  }

  export type WorldBanCreateManyInput = {
    id?: string
    userId: string
    worldId: string
  }

  export type WorldBanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type WorldBanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    world: WorldCreateNestedOneWithoutCategoriesInput
    tasks?: TaskCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    color: string
    worldId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    world?: WorldUpdateOneRequiredWithoutCategoriesNestedInput
    tasks?: TaskUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    color: string
    worldId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    hasResources?: boolean
    resources?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutTasksInput
    world: WorldCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    hasResources?: boolean
    resources?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    categoryId: string
    worldId: string
    assigneeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutTasksNestedInput
    world?: WorldUpdateOneRequiredWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    categoryId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    hasResources?: boolean
    resources?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    categoryId: string
    worldId: string
    assigneeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    categoryId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type WorldMemberListRelationFilter = {
    every?: WorldMemberWhereInput
    some?: WorldMemberWhereInput
    none?: WorldMemberWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type WorldBanListRelationFilter = {
    every?: WorldBanWhereInput
    some?: WorldBanWhereInput
    none?: WorldBanWhereInput
  }

  export type WorldMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorldBanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorldScalarRelationFilter = {
    is?: WorldWhereInput
    isNot?: WorldWhereInput
  }

  export type PollOptionListRelationFilter = {
    every?: PollOptionWhereInput
    some?: PollOptionWhereInput
    none?: PollOptionWhereInput
  }

  export type PollOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PollCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    worldId?: SortOrder
    createdAt?: SortOrder
  }

  export type PollMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    worldId?: SortOrder
    createdAt?: SortOrder
  }

  export type PollMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    worldId?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PollScalarRelationFilter = {
    is?: PollWhereInput
    isNot?: PollWhereInput
  }

  export type PollOptionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    pollId?: SortOrder
  }

  export type PollOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    pollId?: SortOrder
  }

  export type PollOptionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    pollId?: SortOrder
  }

  export type PollOptionScalarRelationFilter = {
    is?: PollOptionWhereInput
    isNot?: PollOptionWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VoteUserIdOptionIdCompoundUniqueInput = {
    userId: string
    optionId: string
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
  }

  export type PollListRelationFilter = {
    every?: PollWhereInput
    some?: PollWhereInput
    none?: PollWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type PollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    inviteCode?: SortOrder
    ownerId?: SortOrder
  }

  export type WorldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    inviteCode?: SortOrder
    ownerId?: SortOrder
  }

  export type WorldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    inviteCode?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type WorldMemberUserIdWorldIdCompoundUniqueInput = {
    userId: string
    worldId: string
  }

  export type WorldMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    worldId?: SortOrder
    role?: SortOrder
  }

  export type WorldMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    worldId?: SortOrder
    role?: SortOrder
  }

  export type WorldMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    worldId?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type WorldBanUserIdWorldIdCompoundUniqueInput = {
    userId: string
    worldId: string
  }

  export type WorldBanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    worldId?: SortOrder
  }

  export type WorldBanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    worldId?: SortOrder
  }

  export type WorldBanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    worldId?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    worldId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    worldId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    worldId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hasResources?: SortOrder
    resources?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    categoryId?: SortOrder
    worldId?: SortOrder
    assigneeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hasResources?: SortOrder
    resources?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    categoryId?: SortOrder
    worldId?: SortOrder
    assigneeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    hasResources?: SortOrder
    resources?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    categoryId?: SortOrder
    worldId?: SortOrder
    assigneeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type WorldMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<WorldMemberCreateWithoutUserInput, WorldMemberUncheckedCreateWithoutUserInput> | WorldMemberCreateWithoutUserInput[] | WorldMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorldMemberCreateOrConnectWithoutUserInput | WorldMemberCreateOrConnectWithoutUserInput[]
    createMany?: WorldMemberCreateManyUserInputEnvelope
    connect?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type WorldBanCreateNestedManyWithoutUserInput = {
    create?: XOR<WorldBanCreateWithoutUserInput, WorldBanUncheckedCreateWithoutUserInput> | WorldBanCreateWithoutUserInput[] | WorldBanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorldBanCreateOrConnectWithoutUserInput | WorldBanCreateOrConnectWithoutUserInput[]
    createMany?: WorldBanCreateManyUserInputEnvelope
    connect?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
  }

  export type WorldMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorldMemberCreateWithoutUserInput, WorldMemberUncheckedCreateWithoutUserInput> | WorldMemberCreateWithoutUserInput[] | WorldMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorldMemberCreateOrConnectWithoutUserInput | WorldMemberCreateOrConnectWithoutUserInput[]
    createMany?: WorldMemberCreateManyUserInputEnvelope
    connect?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type WorldBanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorldBanCreateWithoutUserInput, WorldBanUncheckedCreateWithoutUserInput> | WorldBanCreateWithoutUserInput[] | WorldBanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorldBanCreateOrConnectWithoutUserInput | WorldBanCreateOrConnectWithoutUserInput[]
    createMany?: WorldBanCreateManyUserInputEnvelope
    connect?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type WorldMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorldMemberCreateWithoutUserInput, WorldMemberUncheckedCreateWithoutUserInput> | WorldMemberCreateWithoutUserInput[] | WorldMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorldMemberCreateOrConnectWithoutUserInput | WorldMemberCreateOrConnectWithoutUserInput[]
    upsert?: WorldMemberUpsertWithWhereUniqueWithoutUserInput | WorldMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorldMemberCreateManyUserInputEnvelope
    set?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    disconnect?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    delete?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    connect?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    update?: WorldMemberUpdateWithWhereUniqueWithoutUserInput | WorldMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorldMemberUpdateManyWithWhereWithoutUserInput | WorldMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorldMemberScalarWhereInput | WorldMemberScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type WorldBanUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorldBanCreateWithoutUserInput, WorldBanUncheckedCreateWithoutUserInput> | WorldBanCreateWithoutUserInput[] | WorldBanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorldBanCreateOrConnectWithoutUserInput | WorldBanCreateOrConnectWithoutUserInput[]
    upsert?: WorldBanUpsertWithWhereUniqueWithoutUserInput | WorldBanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorldBanCreateManyUserInputEnvelope
    set?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    disconnect?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    delete?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    connect?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    update?: WorldBanUpdateWithWhereUniqueWithoutUserInput | WorldBanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorldBanUpdateManyWithWhereWithoutUserInput | WorldBanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorldBanScalarWhereInput | WorldBanScalarWhereInput[]
  }

  export type WorldMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorldMemberCreateWithoutUserInput, WorldMemberUncheckedCreateWithoutUserInput> | WorldMemberCreateWithoutUserInput[] | WorldMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorldMemberCreateOrConnectWithoutUserInput | WorldMemberCreateOrConnectWithoutUserInput[]
    upsert?: WorldMemberUpsertWithWhereUniqueWithoutUserInput | WorldMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorldMemberCreateManyUserInputEnvelope
    set?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    disconnect?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    delete?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    connect?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    update?: WorldMemberUpdateWithWhereUniqueWithoutUserInput | WorldMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorldMemberUpdateManyWithWhereWithoutUserInput | WorldMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorldMemberScalarWhereInput | WorldMemberScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type WorldBanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorldBanCreateWithoutUserInput, WorldBanUncheckedCreateWithoutUserInput> | WorldBanCreateWithoutUserInput[] | WorldBanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorldBanCreateOrConnectWithoutUserInput | WorldBanCreateOrConnectWithoutUserInput[]
    upsert?: WorldBanUpsertWithWhereUniqueWithoutUserInput | WorldBanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorldBanCreateManyUserInputEnvelope
    set?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    disconnect?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    delete?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    connect?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    update?: WorldBanUpdateWithWhereUniqueWithoutUserInput | WorldBanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorldBanUpdateManyWithWhereWithoutUserInput | WorldBanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorldBanScalarWhereInput | WorldBanScalarWhereInput[]
  }

  export type WorldCreateNestedOneWithoutPollsInput = {
    create?: XOR<WorldCreateWithoutPollsInput, WorldUncheckedCreateWithoutPollsInput>
    connectOrCreate?: WorldCreateOrConnectWithoutPollsInput
    connect?: WorldWhereUniqueInput
  }

  export type PollOptionCreateNestedManyWithoutPollInput = {
    create?: XOR<PollOptionCreateWithoutPollInput, PollOptionUncheckedCreateWithoutPollInput> | PollOptionCreateWithoutPollInput[] | PollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollOptionCreateOrConnectWithoutPollInput | PollOptionCreateOrConnectWithoutPollInput[]
    createMany?: PollOptionCreateManyPollInputEnvelope
    connect?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
  }

  export type PollOptionUncheckedCreateNestedManyWithoutPollInput = {
    create?: XOR<PollOptionCreateWithoutPollInput, PollOptionUncheckedCreateWithoutPollInput> | PollOptionCreateWithoutPollInput[] | PollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollOptionCreateOrConnectWithoutPollInput | PollOptionCreateOrConnectWithoutPollInput[]
    createMany?: PollOptionCreateManyPollInputEnvelope
    connect?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorldUpdateOneRequiredWithoutPollsNestedInput = {
    create?: XOR<WorldCreateWithoutPollsInput, WorldUncheckedCreateWithoutPollsInput>
    connectOrCreate?: WorldCreateOrConnectWithoutPollsInput
    upsert?: WorldUpsertWithoutPollsInput
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutPollsInput, WorldUpdateWithoutPollsInput>, WorldUncheckedUpdateWithoutPollsInput>
  }

  export type PollOptionUpdateManyWithoutPollNestedInput = {
    create?: XOR<PollOptionCreateWithoutPollInput, PollOptionUncheckedCreateWithoutPollInput> | PollOptionCreateWithoutPollInput[] | PollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollOptionCreateOrConnectWithoutPollInput | PollOptionCreateOrConnectWithoutPollInput[]
    upsert?: PollOptionUpsertWithWhereUniqueWithoutPollInput | PollOptionUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: PollOptionCreateManyPollInputEnvelope
    set?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    disconnect?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    delete?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    connect?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    update?: PollOptionUpdateWithWhereUniqueWithoutPollInput | PollOptionUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: PollOptionUpdateManyWithWhereWithoutPollInput | PollOptionUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: PollOptionScalarWhereInput | PollOptionScalarWhereInput[]
  }

  export type PollOptionUncheckedUpdateManyWithoutPollNestedInput = {
    create?: XOR<PollOptionCreateWithoutPollInput, PollOptionUncheckedCreateWithoutPollInput> | PollOptionCreateWithoutPollInput[] | PollOptionUncheckedCreateWithoutPollInput[]
    connectOrCreate?: PollOptionCreateOrConnectWithoutPollInput | PollOptionCreateOrConnectWithoutPollInput[]
    upsert?: PollOptionUpsertWithWhereUniqueWithoutPollInput | PollOptionUpsertWithWhereUniqueWithoutPollInput[]
    createMany?: PollOptionCreateManyPollInputEnvelope
    set?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    disconnect?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    delete?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    connect?: PollOptionWhereUniqueInput | PollOptionWhereUniqueInput[]
    update?: PollOptionUpdateWithWhereUniqueWithoutPollInput | PollOptionUpdateWithWhereUniqueWithoutPollInput[]
    updateMany?: PollOptionUpdateManyWithWhereWithoutPollInput | PollOptionUpdateManyWithWhereWithoutPollInput[]
    deleteMany?: PollOptionScalarWhereInput | PollOptionScalarWhereInput[]
  }

  export type PollCreateNestedOneWithoutOptionsInput = {
    create?: XOR<PollCreateWithoutOptionsInput, PollUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: PollCreateOrConnectWithoutOptionsInput
    connect?: PollWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutOptionInput = {
    create?: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput> | VoteCreateWithoutOptionInput[] | VoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutOptionInput | VoteCreateOrConnectWithoutOptionInput[]
    createMany?: VoteCreateManyOptionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput> | VoteCreateWithoutOptionInput[] | VoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutOptionInput | VoteCreateOrConnectWithoutOptionInput[]
    createMany?: VoteCreateManyOptionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type PollUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<PollCreateWithoutOptionsInput, PollUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: PollCreateOrConnectWithoutOptionsInput
    upsert?: PollUpsertWithoutOptionsInput
    connect?: PollWhereUniqueInput
    update?: XOR<XOR<PollUpdateToOneWithWhereWithoutOptionsInput, PollUpdateWithoutOptionsInput>, PollUncheckedUpdateWithoutOptionsInput>
  }

  export type VoteUpdateManyWithoutOptionNestedInput = {
    create?: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput> | VoteCreateWithoutOptionInput[] | VoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutOptionInput | VoteCreateOrConnectWithoutOptionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutOptionInput | VoteUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: VoteCreateManyOptionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutOptionInput | VoteUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutOptionInput | VoteUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput> | VoteCreateWithoutOptionInput[] | VoteUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutOptionInput | VoteCreateOrConnectWithoutOptionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutOptionInput | VoteUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: VoteCreateManyOptionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutOptionInput | VoteUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutOptionInput | VoteUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type PollOptionCreateNestedOneWithoutVotesInput = {
    create?: XOR<PollOptionCreateWithoutVotesInput, PollOptionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PollOptionCreateOrConnectWithoutVotesInput
    connect?: PollOptionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type PollOptionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<PollOptionCreateWithoutVotesInput, PollOptionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PollOptionCreateOrConnectWithoutVotesInput
    upsert?: PollOptionUpsertWithoutVotesInput
    connect?: PollOptionWhereUniqueInput
    update?: XOR<XOR<PollOptionUpdateToOneWithWhereWithoutVotesInput, PollOptionUpdateWithoutVotesInput>, PollOptionUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
  }

  export type WorldMemberCreateNestedManyWithoutWorldInput = {
    create?: XOR<WorldMemberCreateWithoutWorldInput, WorldMemberUncheckedCreateWithoutWorldInput> | WorldMemberCreateWithoutWorldInput[] | WorldMemberUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldMemberCreateOrConnectWithoutWorldInput | WorldMemberCreateOrConnectWithoutWorldInput[]
    createMany?: WorldMemberCreateManyWorldInputEnvelope
    connect?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutWorldInput = {
    create?: XOR<TaskCreateWithoutWorldInput, TaskUncheckedCreateWithoutWorldInput> | TaskCreateWithoutWorldInput[] | TaskUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorldInput | TaskCreateOrConnectWithoutWorldInput[]
    createMany?: TaskCreateManyWorldInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type PollCreateNestedManyWithoutWorldInput = {
    create?: XOR<PollCreateWithoutWorldInput, PollUncheckedCreateWithoutWorldInput> | PollCreateWithoutWorldInput[] | PollUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: PollCreateOrConnectWithoutWorldInput | PollCreateOrConnectWithoutWorldInput[]
    createMany?: PollCreateManyWorldInputEnvelope
    connect?: PollWhereUniqueInput | PollWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutWorldInput = {
    create?: XOR<CategoryCreateWithoutWorldInput, CategoryUncheckedCreateWithoutWorldInput> | CategoryCreateWithoutWorldInput[] | CategoryUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutWorldInput | CategoryCreateOrConnectWithoutWorldInput[]
    createMany?: CategoryCreateManyWorldInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type WorldBanCreateNestedManyWithoutWorldInput = {
    create?: XOR<WorldBanCreateWithoutWorldInput, WorldBanUncheckedCreateWithoutWorldInput> | WorldBanCreateWithoutWorldInput[] | WorldBanUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldBanCreateOrConnectWithoutWorldInput | WorldBanCreateOrConnectWithoutWorldInput[]
    createMany?: WorldBanCreateManyWorldInputEnvelope
    connect?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
  }

  export type WorldMemberUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<WorldMemberCreateWithoutWorldInput, WorldMemberUncheckedCreateWithoutWorldInput> | WorldMemberCreateWithoutWorldInput[] | WorldMemberUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldMemberCreateOrConnectWithoutWorldInput | WorldMemberCreateOrConnectWithoutWorldInput[]
    createMany?: WorldMemberCreateManyWorldInputEnvelope
    connect?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<TaskCreateWithoutWorldInput, TaskUncheckedCreateWithoutWorldInput> | TaskCreateWithoutWorldInput[] | TaskUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorldInput | TaskCreateOrConnectWithoutWorldInput[]
    createMany?: TaskCreateManyWorldInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type PollUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<PollCreateWithoutWorldInput, PollUncheckedCreateWithoutWorldInput> | PollCreateWithoutWorldInput[] | PollUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: PollCreateOrConnectWithoutWorldInput | PollCreateOrConnectWithoutWorldInput[]
    createMany?: PollCreateManyWorldInputEnvelope
    connect?: PollWhereUniqueInput | PollWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<CategoryCreateWithoutWorldInput, CategoryUncheckedCreateWithoutWorldInput> | CategoryCreateWithoutWorldInput[] | CategoryUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutWorldInput | CategoryCreateOrConnectWithoutWorldInput[]
    createMany?: CategoryCreateManyWorldInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type WorldBanUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<WorldBanCreateWithoutWorldInput, WorldBanUncheckedCreateWithoutWorldInput> | WorldBanCreateWithoutWorldInput[] | WorldBanUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldBanCreateOrConnectWithoutWorldInput | WorldBanCreateOrConnectWithoutWorldInput[]
    createMany?: WorldBanCreateManyWorldInputEnvelope
    connect?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
  }

  export type WorldMemberUpdateManyWithoutWorldNestedInput = {
    create?: XOR<WorldMemberCreateWithoutWorldInput, WorldMemberUncheckedCreateWithoutWorldInput> | WorldMemberCreateWithoutWorldInput[] | WorldMemberUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldMemberCreateOrConnectWithoutWorldInput | WorldMemberCreateOrConnectWithoutWorldInput[]
    upsert?: WorldMemberUpsertWithWhereUniqueWithoutWorldInput | WorldMemberUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: WorldMemberCreateManyWorldInputEnvelope
    set?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    disconnect?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    delete?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    connect?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    update?: WorldMemberUpdateWithWhereUniqueWithoutWorldInput | WorldMemberUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: WorldMemberUpdateManyWithWhereWithoutWorldInput | WorldMemberUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: WorldMemberScalarWhereInput | WorldMemberScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutWorldNestedInput = {
    create?: XOR<TaskCreateWithoutWorldInput, TaskUncheckedCreateWithoutWorldInput> | TaskCreateWithoutWorldInput[] | TaskUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorldInput | TaskCreateOrConnectWithoutWorldInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutWorldInput | TaskUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: TaskCreateManyWorldInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutWorldInput | TaskUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutWorldInput | TaskUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type PollUpdateManyWithoutWorldNestedInput = {
    create?: XOR<PollCreateWithoutWorldInput, PollUncheckedCreateWithoutWorldInput> | PollCreateWithoutWorldInput[] | PollUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: PollCreateOrConnectWithoutWorldInput | PollCreateOrConnectWithoutWorldInput[]
    upsert?: PollUpsertWithWhereUniqueWithoutWorldInput | PollUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: PollCreateManyWorldInputEnvelope
    set?: PollWhereUniqueInput | PollWhereUniqueInput[]
    disconnect?: PollWhereUniqueInput | PollWhereUniqueInput[]
    delete?: PollWhereUniqueInput | PollWhereUniqueInput[]
    connect?: PollWhereUniqueInput | PollWhereUniqueInput[]
    update?: PollUpdateWithWhereUniqueWithoutWorldInput | PollUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: PollUpdateManyWithWhereWithoutWorldInput | PollUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: PollScalarWhereInput | PollScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutWorldNestedInput = {
    create?: XOR<CategoryCreateWithoutWorldInput, CategoryUncheckedCreateWithoutWorldInput> | CategoryCreateWithoutWorldInput[] | CategoryUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutWorldInput | CategoryCreateOrConnectWithoutWorldInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutWorldInput | CategoryUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: CategoryCreateManyWorldInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutWorldInput | CategoryUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutWorldInput | CategoryUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type WorldBanUpdateManyWithoutWorldNestedInput = {
    create?: XOR<WorldBanCreateWithoutWorldInput, WorldBanUncheckedCreateWithoutWorldInput> | WorldBanCreateWithoutWorldInput[] | WorldBanUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldBanCreateOrConnectWithoutWorldInput | WorldBanCreateOrConnectWithoutWorldInput[]
    upsert?: WorldBanUpsertWithWhereUniqueWithoutWorldInput | WorldBanUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: WorldBanCreateManyWorldInputEnvelope
    set?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    disconnect?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    delete?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    connect?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    update?: WorldBanUpdateWithWhereUniqueWithoutWorldInput | WorldBanUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: WorldBanUpdateManyWithWhereWithoutWorldInput | WorldBanUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: WorldBanScalarWhereInput | WorldBanScalarWhereInput[]
  }

  export type WorldMemberUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<WorldMemberCreateWithoutWorldInput, WorldMemberUncheckedCreateWithoutWorldInput> | WorldMemberCreateWithoutWorldInput[] | WorldMemberUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldMemberCreateOrConnectWithoutWorldInput | WorldMemberCreateOrConnectWithoutWorldInput[]
    upsert?: WorldMemberUpsertWithWhereUniqueWithoutWorldInput | WorldMemberUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: WorldMemberCreateManyWorldInputEnvelope
    set?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    disconnect?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    delete?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    connect?: WorldMemberWhereUniqueInput | WorldMemberWhereUniqueInput[]
    update?: WorldMemberUpdateWithWhereUniqueWithoutWorldInput | WorldMemberUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: WorldMemberUpdateManyWithWhereWithoutWorldInput | WorldMemberUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: WorldMemberScalarWhereInput | WorldMemberScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<TaskCreateWithoutWorldInput, TaskUncheckedCreateWithoutWorldInput> | TaskCreateWithoutWorldInput[] | TaskUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorldInput | TaskCreateOrConnectWithoutWorldInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutWorldInput | TaskUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: TaskCreateManyWorldInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutWorldInput | TaskUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutWorldInput | TaskUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type PollUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<PollCreateWithoutWorldInput, PollUncheckedCreateWithoutWorldInput> | PollCreateWithoutWorldInput[] | PollUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: PollCreateOrConnectWithoutWorldInput | PollCreateOrConnectWithoutWorldInput[]
    upsert?: PollUpsertWithWhereUniqueWithoutWorldInput | PollUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: PollCreateManyWorldInputEnvelope
    set?: PollWhereUniqueInput | PollWhereUniqueInput[]
    disconnect?: PollWhereUniqueInput | PollWhereUniqueInput[]
    delete?: PollWhereUniqueInput | PollWhereUniqueInput[]
    connect?: PollWhereUniqueInput | PollWhereUniqueInput[]
    update?: PollUpdateWithWhereUniqueWithoutWorldInput | PollUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: PollUpdateManyWithWhereWithoutWorldInput | PollUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: PollScalarWhereInput | PollScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<CategoryCreateWithoutWorldInput, CategoryUncheckedCreateWithoutWorldInput> | CategoryCreateWithoutWorldInput[] | CategoryUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutWorldInput | CategoryCreateOrConnectWithoutWorldInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutWorldInput | CategoryUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: CategoryCreateManyWorldInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutWorldInput | CategoryUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutWorldInput | CategoryUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type WorldBanUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<WorldBanCreateWithoutWorldInput, WorldBanUncheckedCreateWithoutWorldInput> | WorldBanCreateWithoutWorldInput[] | WorldBanUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: WorldBanCreateOrConnectWithoutWorldInput | WorldBanCreateOrConnectWithoutWorldInput[]
    upsert?: WorldBanUpsertWithWhereUniqueWithoutWorldInput | WorldBanUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: WorldBanCreateManyWorldInputEnvelope
    set?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    disconnect?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    delete?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    connect?: WorldBanWhereUniqueInput | WorldBanWhereUniqueInput[]
    update?: WorldBanUpdateWithWhereUniqueWithoutWorldInput | WorldBanUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: WorldBanUpdateManyWithWhereWithoutWorldInput | WorldBanUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: WorldBanScalarWhereInput | WorldBanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorldsInput = {
    create?: XOR<UserCreateWithoutWorldsInput, UserUncheckedCreateWithoutWorldsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorldsInput
    connect?: UserWhereUniqueInput
  }

  export type WorldCreateNestedOneWithoutMembersInput = {
    create?: XOR<WorldCreateWithoutMembersInput, WorldUncheckedCreateWithoutMembersInput>
    connectOrCreate?: WorldCreateOrConnectWithoutMembersInput
    connect?: WorldWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneRequiredWithoutWorldsNestedInput = {
    create?: XOR<UserCreateWithoutWorldsInput, UserUncheckedCreateWithoutWorldsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorldsInput
    upsert?: UserUpsertWithoutWorldsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorldsInput, UserUpdateWithoutWorldsInput>, UserUncheckedUpdateWithoutWorldsInput>
  }

  export type WorldUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<WorldCreateWithoutMembersInput, WorldUncheckedCreateWithoutMembersInput>
    connectOrCreate?: WorldCreateOrConnectWithoutMembersInput
    upsert?: WorldUpsertWithoutMembersInput
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutMembersInput, WorldUpdateWithoutMembersInput>, WorldUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutBansInput = {
    create?: XOR<UserCreateWithoutBansInput, UserUncheckedCreateWithoutBansInput>
    connectOrCreate?: UserCreateOrConnectWithoutBansInput
    connect?: UserWhereUniqueInput
  }

  export type WorldCreateNestedOneWithoutBansInput = {
    create?: XOR<WorldCreateWithoutBansInput, WorldUncheckedCreateWithoutBansInput>
    connectOrCreate?: WorldCreateOrConnectWithoutBansInput
    connect?: WorldWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBansNestedInput = {
    create?: XOR<UserCreateWithoutBansInput, UserUncheckedCreateWithoutBansInput>
    connectOrCreate?: UserCreateOrConnectWithoutBansInput
    upsert?: UserUpsertWithoutBansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBansInput, UserUpdateWithoutBansInput>, UserUncheckedUpdateWithoutBansInput>
  }

  export type WorldUpdateOneRequiredWithoutBansNestedInput = {
    create?: XOR<WorldCreateWithoutBansInput, WorldUncheckedCreateWithoutBansInput>
    connectOrCreate?: WorldCreateOrConnectWithoutBansInput
    upsert?: WorldUpsertWithoutBansInput
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutBansInput, WorldUpdateWithoutBansInput>, WorldUncheckedUpdateWithoutBansInput>
  }

  export type WorldCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<WorldCreateWithoutCategoriesInput, WorldUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: WorldCreateOrConnectWithoutCategoriesInput
    connect?: WorldWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput> | TaskCreateWithoutCategoryInput[] | TaskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCategoryInput | TaskCreateOrConnectWithoutCategoryInput[]
    createMany?: TaskCreateManyCategoryInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput> | TaskCreateWithoutCategoryInput[] | TaskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCategoryInput | TaskCreateOrConnectWithoutCategoryInput[]
    createMany?: TaskCreateManyCategoryInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type WorldUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<WorldCreateWithoutCategoriesInput, WorldUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: WorldCreateOrConnectWithoutCategoriesInput
    upsert?: WorldUpsertWithoutCategoriesInput
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutCategoriesInput, WorldUpdateWithoutCategoriesInput>, WorldUncheckedUpdateWithoutCategoriesInput>
  }

  export type TaskUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput> | TaskCreateWithoutCategoryInput[] | TaskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCategoryInput | TaskCreateOrConnectWithoutCategoryInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCategoryInput | TaskUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TaskCreateManyCategoryInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCategoryInput | TaskUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCategoryInput | TaskUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput> | TaskCreateWithoutCategoryInput[] | TaskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCategoryInput | TaskCreateOrConnectWithoutCategoryInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCategoryInput | TaskUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TaskCreateManyCategoryInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCategoryInput | TaskUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCategoryInput | TaskUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutTasksInput = {
    create?: XOR<CategoryCreateWithoutTasksInput, CategoryUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTasksInput
    connect?: CategoryWhereUniqueInput
  }

  export type WorldCreateNestedOneWithoutTasksInput = {
    create?: XOR<WorldCreateWithoutTasksInput, WorldUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorldCreateOrConnectWithoutTasksInput
    connect?: WorldWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority
  }

  export type CategoryUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<CategoryCreateWithoutTasksInput, CategoryUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTasksInput
    upsert?: CategoryUpsertWithoutTasksInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTasksInput, CategoryUpdateWithoutTasksInput>, CategoryUncheckedUpdateWithoutTasksInput>
  }

  export type WorldUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<WorldCreateWithoutTasksInput, WorldUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorldCreateOrConnectWithoutTasksInput
    upsert?: WorldUpsertWithoutTasksInput
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutTasksInput, WorldUpdateWithoutTasksInput>, WorldUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type WorldMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.Role
    world: WorldCreateNestedOneWithoutMembersInput
  }

  export type WorldMemberUncheckedCreateWithoutUserInput = {
    id?: string
    worldId: string
    role?: $Enums.Role
  }

  export type WorldMemberCreateOrConnectWithoutUserInput = {
    where: WorldMemberWhereUniqueInput
    create: XOR<WorldMemberCreateWithoutUserInput, WorldMemberUncheckedCreateWithoutUserInput>
  }

  export type WorldMemberCreateManyUserInputEnvelope = {
    data: WorldMemberCreateManyUserInput | WorldMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    hasResources?: boolean
    resources?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutTasksInput
    world: WorldCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    hasResources?: boolean
    resources?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    categoryId: string
    worldId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }

  export type TaskCreateManyAssigneeInputEnvelope = {
    data: TaskCreateManyAssigneeInput | TaskCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutUserInput = {
    id?: string
    option: PollOptionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutUserInput = {
    id?: string
    optionId: string
  }

  export type VoteCreateOrConnectWithoutUserInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteCreateManyUserInputEnvelope = {
    data: VoteCreateManyUserInput | VoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorldBanCreateWithoutUserInput = {
    id?: string
    world: WorldCreateNestedOneWithoutBansInput
  }

  export type WorldBanUncheckedCreateWithoutUserInput = {
    id?: string
    worldId: string
  }

  export type WorldBanCreateOrConnectWithoutUserInput = {
    where: WorldBanWhereUniqueInput
    create: XOR<WorldBanCreateWithoutUserInput, WorldBanUncheckedCreateWithoutUserInput>
  }

  export type WorldBanCreateManyUserInputEnvelope = {
    data: WorldBanCreateManyUserInput | WorldBanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorldMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: WorldMemberWhereUniqueInput
    update: XOR<WorldMemberUpdateWithoutUserInput, WorldMemberUncheckedUpdateWithoutUserInput>
    create: XOR<WorldMemberCreateWithoutUserInput, WorldMemberUncheckedCreateWithoutUserInput>
  }

  export type WorldMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: WorldMemberWhereUniqueInput
    data: XOR<WorldMemberUpdateWithoutUserInput, WorldMemberUncheckedUpdateWithoutUserInput>
  }

  export type WorldMemberUpdateManyWithWhereWithoutUserInput = {
    where: WorldMemberScalarWhereInput
    data: XOR<WorldMemberUpdateManyMutationInput, WorldMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type WorldMemberScalarWhereInput = {
    AND?: WorldMemberScalarWhereInput | WorldMemberScalarWhereInput[]
    OR?: WorldMemberScalarWhereInput[]
    NOT?: WorldMemberScalarWhereInput | WorldMemberScalarWhereInput[]
    id?: StringFilter<"WorldMember"> | string
    userId?: StringFilter<"WorldMember"> | string
    worldId?: StringFilter<"WorldMember"> | string
    role?: EnumRoleFilter<"WorldMember"> | $Enums.Role
  }

  export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    hasResources?: BoolFilter<"Task"> | boolean
    resources?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    categoryId?: StringFilter<"Task"> | string
    worldId?: StringFilter<"Task"> | string
    assigneeId?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type VoteUpsertWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
  }

  export type VoteUpdateManyWithWhereWithoutUserInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutUserInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    optionId?: StringFilter<"Vote"> | string
    userId?: StringFilter<"Vote"> | string
  }

  export type WorldBanUpsertWithWhereUniqueWithoutUserInput = {
    where: WorldBanWhereUniqueInput
    update: XOR<WorldBanUpdateWithoutUserInput, WorldBanUncheckedUpdateWithoutUserInput>
    create: XOR<WorldBanCreateWithoutUserInput, WorldBanUncheckedCreateWithoutUserInput>
  }

  export type WorldBanUpdateWithWhereUniqueWithoutUserInput = {
    where: WorldBanWhereUniqueInput
    data: XOR<WorldBanUpdateWithoutUserInput, WorldBanUncheckedUpdateWithoutUserInput>
  }

  export type WorldBanUpdateManyWithWhereWithoutUserInput = {
    where: WorldBanScalarWhereInput
    data: XOR<WorldBanUpdateManyMutationInput, WorldBanUncheckedUpdateManyWithoutUserInput>
  }

  export type WorldBanScalarWhereInput = {
    AND?: WorldBanScalarWhereInput | WorldBanScalarWhereInput[]
    OR?: WorldBanScalarWhereInput[]
    NOT?: WorldBanScalarWhereInput | WorldBanScalarWhereInput[]
    id?: StringFilter<"WorldBan"> | string
    userId?: StringFilter<"WorldBan"> | string
    worldId?: StringFilter<"WorldBan"> | string
  }

  export type WorldCreateWithoutPollsInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
    members?: WorldMemberCreateNestedManyWithoutWorldInput
    tasks?: TaskCreateNestedManyWithoutWorldInput
    categories?: CategoryCreateNestedManyWithoutWorldInput
    bans?: WorldBanCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutPollsInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
    members?: WorldMemberUncheckedCreateNestedManyWithoutWorldInput
    tasks?: TaskUncheckedCreateNestedManyWithoutWorldInput
    categories?: CategoryUncheckedCreateNestedManyWithoutWorldInput
    bans?: WorldBanUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutPollsInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutPollsInput, WorldUncheckedCreateWithoutPollsInput>
  }

  export type PollOptionCreateWithoutPollInput = {
    id?: string
    text: string
    votes?: VoteCreateNestedManyWithoutOptionInput
  }

  export type PollOptionUncheckedCreateWithoutPollInput = {
    id?: string
    text: string
    votes?: VoteUncheckedCreateNestedManyWithoutOptionInput
  }

  export type PollOptionCreateOrConnectWithoutPollInput = {
    where: PollOptionWhereUniqueInput
    create: XOR<PollOptionCreateWithoutPollInput, PollOptionUncheckedCreateWithoutPollInput>
  }

  export type PollOptionCreateManyPollInputEnvelope = {
    data: PollOptionCreateManyPollInput | PollOptionCreateManyPollInput[]
    skipDuplicates?: boolean
  }

  export type WorldUpsertWithoutPollsInput = {
    update: XOR<WorldUpdateWithoutPollsInput, WorldUncheckedUpdateWithoutPollsInput>
    create: XOR<WorldCreateWithoutPollsInput, WorldUncheckedCreateWithoutPollsInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutPollsInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutPollsInput, WorldUncheckedUpdateWithoutPollsInput>
  }

  export type WorldUpdateWithoutPollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: WorldMemberUpdateManyWithoutWorldNestedInput
    tasks?: TaskUpdateManyWithoutWorldNestedInput
    categories?: CategoryUpdateManyWithoutWorldNestedInput
    bans?: WorldBanUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutPollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: WorldMemberUncheckedUpdateManyWithoutWorldNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutWorldNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutWorldNestedInput
    bans?: WorldBanUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type PollOptionUpsertWithWhereUniqueWithoutPollInput = {
    where: PollOptionWhereUniqueInput
    update: XOR<PollOptionUpdateWithoutPollInput, PollOptionUncheckedUpdateWithoutPollInput>
    create: XOR<PollOptionCreateWithoutPollInput, PollOptionUncheckedCreateWithoutPollInput>
  }

  export type PollOptionUpdateWithWhereUniqueWithoutPollInput = {
    where: PollOptionWhereUniqueInput
    data: XOR<PollOptionUpdateWithoutPollInput, PollOptionUncheckedUpdateWithoutPollInput>
  }

  export type PollOptionUpdateManyWithWhereWithoutPollInput = {
    where: PollOptionScalarWhereInput
    data: XOR<PollOptionUpdateManyMutationInput, PollOptionUncheckedUpdateManyWithoutPollInput>
  }

  export type PollOptionScalarWhereInput = {
    AND?: PollOptionScalarWhereInput | PollOptionScalarWhereInput[]
    OR?: PollOptionScalarWhereInput[]
    NOT?: PollOptionScalarWhereInput | PollOptionScalarWhereInput[]
    id?: StringFilter<"PollOption"> | string
    text?: StringFilter<"PollOption"> | string
    pollId?: StringFilter<"PollOption"> | string
  }

  export type PollCreateWithoutOptionsInput = {
    id?: string
    question: string
    createdAt?: Date | string
    world: WorldCreateNestedOneWithoutPollsInput
  }

  export type PollUncheckedCreateWithoutOptionsInput = {
    id?: string
    question: string
    worldId: string
    createdAt?: Date | string
  }

  export type PollCreateOrConnectWithoutOptionsInput = {
    where: PollWhereUniqueInput
    create: XOR<PollCreateWithoutOptionsInput, PollUncheckedCreateWithoutOptionsInput>
  }

  export type VoteCreateWithoutOptionInput = {
    id?: string
    user: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutOptionInput = {
    id?: string
    userId: string
  }

  export type VoteCreateOrConnectWithoutOptionInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput>
  }

  export type VoteCreateManyOptionInputEnvelope = {
    data: VoteCreateManyOptionInput | VoteCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type PollUpsertWithoutOptionsInput = {
    update: XOR<PollUpdateWithoutOptionsInput, PollUncheckedUpdateWithoutOptionsInput>
    create: XOR<PollCreateWithoutOptionsInput, PollUncheckedCreateWithoutOptionsInput>
    where?: PollWhereInput
  }

  export type PollUpdateToOneWithWhereWithoutOptionsInput = {
    where?: PollWhereInput
    data: XOR<PollUpdateWithoutOptionsInput, PollUncheckedUpdateWithoutOptionsInput>
  }

  export type PollUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    world?: WorldUpdateOneRequiredWithoutPollsNestedInput
  }

  export type PollUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpsertWithWhereUniqueWithoutOptionInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutOptionInput, VoteUncheckedUpdateWithoutOptionInput>
    create: XOR<VoteCreateWithoutOptionInput, VoteUncheckedCreateWithoutOptionInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutOptionInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutOptionInput, VoteUncheckedUpdateWithoutOptionInput>
  }

  export type VoteUpdateManyWithWhereWithoutOptionInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutOptionInput>
  }

  export type PollOptionCreateWithoutVotesInput = {
    id?: string
    text: string
    poll: PollCreateNestedOneWithoutOptionsInput
  }

  export type PollOptionUncheckedCreateWithoutVotesInput = {
    id?: string
    text: string
    pollId: string
  }

  export type PollOptionCreateOrConnectWithoutVotesInput = {
    where: PollOptionWhereUniqueInput
    create: XOR<PollOptionCreateWithoutVotesInput, PollOptionUncheckedCreateWithoutVotesInput>
  }

  export type UserCreateWithoutVotesInput = {
    id?: string
    nickname: string
    password: string
    worlds?: WorldMemberCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutAssigneeInput
    bans?: WorldBanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: string
    nickname: string
    password: string
    worlds?: WorldMemberUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    bans?: WorldBanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type PollOptionUpsertWithoutVotesInput = {
    update: XOR<PollOptionUpdateWithoutVotesInput, PollOptionUncheckedUpdateWithoutVotesInput>
    create: XOR<PollOptionCreateWithoutVotesInput, PollOptionUncheckedCreateWithoutVotesInput>
    where?: PollOptionWhereInput
  }

  export type PollOptionUpdateToOneWithWhereWithoutVotesInput = {
    where?: PollOptionWhereInput
    data: XOR<PollOptionUpdateWithoutVotesInput, PollOptionUncheckedUpdateWithoutVotesInput>
  }

  export type PollOptionUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    poll?: PollUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type PollOptionUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    pollId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    worlds?: WorldMemberUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    bans?: WorldBanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    worlds?: WorldMemberUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    bans?: WorldBanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorldMemberCreateWithoutWorldInput = {
    id?: string
    role?: $Enums.Role
    user: UserCreateNestedOneWithoutWorldsInput
  }

  export type WorldMemberUncheckedCreateWithoutWorldInput = {
    id?: string
    userId: string
    role?: $Enums.Role
  }

  export type WorldMemberCreateOrConnectWithoutWorldInput = {
    where: WorldMemberWhereUniqueInput
    create: XOR<WorldMemberCreateWithoutWorldInput, WorldMemberUncheckedCreateWithoutWorldInput>
  }

  export type WorldMemberCreateManyWorldInputEnvelope = {
    data: WorldMemberCreateManyWorldInput | WorldMemberCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutWorldInput = {
    id?: string
    title: string
    description?: string | null
    hasResources?: boolean
    resources?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutWorldInput = {
    id?: string
    title: string
    description?: string | null
    hasResources?: boolean
    resources?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    categoryId: string
    assigneeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutWorldInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutWorldInput, TaskUncheckedCreateWithoutWorldInput>
  }

  export type TaskCreateManyWorldInputEnvelope = {
    data: TaskCreateManyWorldInput | TaskCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type PollCreateWithoutWorldInput = {
    id?: string
    question: string
    createdAt?: Date | string
    options?: PollOptionCreateNestedManyWithoutPollInput
  }

  export type PollUncheckedCreateWithoutWorldInput = {
    id?: string
    question: string
    createdAt?: Date | string
    options?: PollOptionUncheckedCreateNestedManyWithoutPollInput
  }

  export type PollCreateOrConnectWithoutWorldInput = {
    where: PollWhereUniqueInput
    create: XOR<PollCreateWithoutWorldInput, PollUncheckedCreateWithoutWorldInput>
  }

  export type PollCreateManyWorldInputEnvelope = {
    data: PollCreateManyWorldInput | PollCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutWorldInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutWorldInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutWorldInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutWorldInput, CategoryUncheckedCreateWithoutWorldInput>
  }

  export type CategoryCreateManyWorldInputEnvelope = {
    data: CategoryCreateManyWorldInput | CategoryCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type WorldBanCreateWithoutWorldInput = {
    id?: string
    user: UserCreateNestedOneWithoutBansInput
  }

  export type WorldBanUncheckedCreateWithoutWorldInput = {
    id?: string
    userId: string
  }

  export type WorldBanCreateOrConnectWithoutWorldInput = {
    where: WorldBanWhereUniqueInput
    create: XOR<WorldBanCreateWithoutWorldInput, WorldBanUncheckedCreateWithoutWorldInput>
  }

  export type WorldBanCreateManyWorldInputEnvelope = {
    data: WorldBanCreateManyWorldInput | WorldBanCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type WorldMemberUpsertWithWhereUniqueWithoutWorldInput = {
    where: WorldMemberWhereUniqueInput
    update: XOR<WorldMemberUpdateWithoutWorldInput, WorldMemberUncheckedUpdateWithoutWorldInput>
    create: XOR<WorldMemberCreateWithoutWorldInput, WorldMemberUncheckedCreateWithoutWorldInput>
  }

  export type WorldMemberUpdateWithWhereUniqueWithoutWorldInput = {
    where: WorldMemberWhereUniqueInput
    data: XOR<WorldMemberUpdateWithoutWorldInput, WorldMemberUncheckedUpdateWithoutWorldInput>
  }

  export type WorldMemberUpdateManyWithWhereWithoutWorldInput = {
    where: WorldMemberScalarWhereInput
    data: XOR<WorldMemberUpdateManyMutationInput, WorldMemberUncheckedUpdateManyWithoutWorldInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutWorldInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutWorldInput, TaskUncheckedUpdateWithoutWorldInput>
    create: XOR<TaskCreateWithoutWorldInput, TaskUncheckedCreateWithoutWorldInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutWorldInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutWorldInput, TaskUncheckedUpdateWithoutWorldInput>
  }

  export type TaskUpdateManyWithWhereWithoutWorldInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutWorldInput>
  }

  export type PollUpsertWithWhereUniqueWithoutWorldInput = {
    where: PollWhereUniqueInput
    update: XOR<PollUpdateWithoutWorldInput, PollUncheckedUpdateWithoutWorldInput>
    create: XOR<PollCreateWithoutWorldInput, PollUncheckedCreateWithoutWorldInput>
  }

  export type PollUpdateWithWhereUniqueWithoutWorldInput = {
    where: PollWhereUniqueInput
    data: XOR<PollUpdateWithoutWorldInput, PollUncheckedUpdateWithoutWorldInput>
  }

  export type PollUpdateManyWithWhereWithoutWorldInput = {
    where: PollScalarWhereInput
    data: XOR<PollUpdateManyMutationInput, PollUncheckedUpdateManyWithoutWorldInput>
  }

  export type PollScalarWhereInput = {
    AND?: PollScalarWhereInput | PollScalarWhereInput[]
    OR?: PollScalarWhereInput[]
    NOT?: PollScalarWhereInput | PollScalarWhereInput[]
    id?: StringFilter<"Poll"> | string
    question?: StringFilter<"Poll"> | string
    worldId?: StringFilter<"Poll"> | string
    createdAt?: DateTimeFilter<"Poll"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutWorldInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutWorldInput, CategoryUncheckedUpdateWithoutWorldInput>
    create: XOR<CategoryCreateWithoutWorldInput, CategoryUncheckedCreateWithoutWorldInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutWorldInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutWorldInput, CategoryUncheckedUpdateWithoutWorldInput>
  }

  export type CategoryUpdateManyWithWhereWithoutWorldInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutWorldInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    color?: StringFilter<"Category"> | string
    worldId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type WorldBanUpsertWithWhereUniqueWithoutWorldInput = {
    where: WorldBanWhereUniqueInput
    update: XOR<WorldBanUpdateWithoutWorldInput, WorldBanUncheckedUpdateWithoutWorldInput>
    create: XOR<WorldBanCreateWithoutWorldInput, WorldBanUncheckedCreateWithoutWorldInput>
  }

  export type WorldBanUpdateWithWhereUniqueWithoutWorldInput = {
    where: WorldBanWhereUniqueInput
    data: XOR<WorldBanUpdateWithoutWorldInput, WorldBanUncheckedUpdateWithoutWorldInput>
  }

  export type WorldBanUpdateManyWithWhereWithoutWorldInput = {
    where: WorldBanScalarWhereInput
    data: XOR<WorldBanUpdateManyMutationInput, WorldBanUncheckedUpdateManyWithoutWorldInput>
  }

  export type UserCreateWithoutWorldsInput = {
    id?: string
    nickname: string
    password: string
    tasks?: TaskCreateNestedManyWithoutAssigneeInput
    votes?: VoteCreateNestedManyWithoutUserInput
    bans?: WorldBanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorldsInput = {
    id?: string
    nickname: string
    password: string
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    bans?: WorldBanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorldsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorldsInput, UserUncheckedCreateWithoutWorldsInput>
  }

  export type WorldCreateWithoutMembersInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
    tasks?: TaskCreateNestedManyWithoutWorldInput
    polls?: PollCreateNestedManyWithoutWorldInput
    categories?: CategoryCreateNestedManyWithoutWorldInput
    bans?: WorldBanCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
    tasks?: TaskUncheckedCreateNestedManyWithoutWorldInput
    polls?: PollUncheckedCreateNestedManyWithoutWorldInput
    categories?: CategoryUncheckedCreateNestedManyWithoutWorldInput
    bans?: WorldBanUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutMembersInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutMembersInput, WorldUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutWorldsInput = {
    update: XOR<UserUpdateWithoutWorldsInput, UserUncheckedUpdateWithoutWorldsInput>
    create: XOR<UserCreateWithoutWorldsInput, UserUncheckedCreateWithoutWorldsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorldsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorldsInput, UserUncheckedUpdateWithoutWorldsInput>
  }

  export type UserUpdateWithoutWorldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    bans?: WorldBanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    bans?: WorldBanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorldUpsertWithoutMembersInput = {
    update: XOR<WorldUpdateWithoutMembersInput, WorldUncheckedUpdateWithoutMembersInput>
    create: XOR<WorldCreateWithoutMembersInput, WorldUncheckedCreateWithoutMembersInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutMembersInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutMembersInput, WorldUncheckedUpdateWithoutMembersInput>
  }

  export type WorldUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutWorldNestedInput
    polls?: PollUpdateManyWithoutWorldNestedInput
    categories?: CategoryUpdateManyWithoutWorldNestedInput
    bans?: WorldBanUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutWorldNestedInput
    polls?: PollUncheckedUpdateManyWithoutWorldNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutWorldNestedInput
    bans?: WorldBanUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type UserCreateWithoutBansInput = {
    id?: string
    nickname: string
    password: string
    worlds?: WorldMemberCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutAssigneeInput
    votes?: VoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBansInput = {
    id?: string
    nickname: string
    password: string
    worlds?: WorldMemberUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBansInput, UserUncheckedCreateWithoutBansInput>
  }

  export type WorldCreateWithoutBansInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
    members?: WorldMemberCreateNestedManyWithoutWorldInput
    tasks?: TaskCreateNestedManyWithoutWorldInput
    polls?: PollCreateNestedManyWithoutWorldInput
    categories?: CategoryCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutBansInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
    members?: WorldMemberUncheckedCreateNestedManyWithoutWorldInput
    tasks?: TaskUncheckedCreateNestedManyWithoutWorldInput
    polls?: PollUncheckedCreateNestedManyWithoutWorldInput
    categories?: CategoryUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutBansInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutBansInput, WorldUncheckedCreateWithoutBansInput>
  }

  export type UserUpsertWithoutBansInput = {
    update: XOR<UserUpdateWithoutBansInput, UserUncheckedUpdateWithoutBansInput>
    create: XOR<UserCreateWithoutBansInput, UserUncheckedCreateWithoutBansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBansInput, UserUncheckedUpdateWithoutBansInput>
  }

  export type UserUpdateWithoutBansInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    worlds?: WorldMemberUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutAssigneeNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBansInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    worlds?: WorldMemberUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorldUpsertWithoutBansInput = {
    update: XOR<WorldUpdateWithoutBansInput, WorldUncheckedUpdateWithoutBansInput>
    create: XOR<WorldCreateWithoutBansInput, WorldUncheckedCreateWithoutBansInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutBansInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutBansInput, WorldUncheckedUpdateWithoutBansInput>
  }

  export type WorldUpdateWithoutBansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: WorldMemberUpdateManyWithoutWorldNestedInput
    tasks?: TaskUpdateManyWithoutWorldNestedInput
    polls?: PollUpdateManyWithoutWorldNestedInput
    categories?: CategoryUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutBansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: WorldMemberUncheckedUpdateManyWithoutWorldNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutWorldNestedInput
    polls?: PollUncheckedUpdateManyWithoutWorldNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type WorldCreateWithoutCategoriesInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
    members?: WorldMemberCreateNestedManyWithoutWorldInput
    tasks?: TaskCreateNestedManyWithoutWorldInput
    polls?: PollCreateNestedManyWithoutWorldInput
    bans?: WorldBanCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
    members?: WorldMemberUncheckedCreateNestedManyWithoutWorldInput
    tasks?: TaskUncheckedCreateNestedManyWithoutWorldInput
    polls?: PollUncheckedCreateNestedManyWithoutWorldInput
    bans?: WorldBanUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutCategoriesInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutCategoriesInput, WorldUncheckedCreateWithoutCategoriesInput>
  }

  export type TaskCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    hasResources?: boolean
    resources?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    world: WorldCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    hasResources?: boolean
    resources?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    worldId: string
    assigneeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutCategoryInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput>
  }

  export type TaskCreateManyCategoryInputEnvelope = {
    data: TaskCreateManyCategoryInput | TaskCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type WorldUpsertWithoutCategoriesInput = {
    update: XOR<WorldUpdateWithoutCategoriesInput, WorldUncheckedUpdateWithoutCategoriesInput>
    create: XOR<WorldCreateWithoutCategoriesInput, WorldUncheckedCreateWithoutCategoriesInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutCategoriesInput, WorldUncheckedUpdateWithoutCategoriesInput>
  }

  export type WorldUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: WorldMemberUpdateManyWithoutWorldNestedInput
    tasks?: TaskUpdateManyWithoutWorldNestedInput
    polls?: PollUpdateManyWithoutWorldNestedInput
    bans?: WorldBanUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: WorldMemberUncheckedUpdateManyWithoutWorldNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutWorldNestedInput
    polls?: PollUncheckedUpdateManyWithoutWorldNestedInput
    bans?: WorldBanUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCategoryInput, TaskUncheckedUpdateWithoutCategoryInput>
    create: XOR<TaskCreateWithoutCategoryInput, TaskUncheckedCreateWithoutCategoryInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCategoryInput, TaskUncheckedUpdateWithoutCategoryInput>
  }

  export type TaskUpdateManyWithWhereWithoutCategoryInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutTasksInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    world: WorldCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    color: string
    worldId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutTasksInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTasksInput, CategoryUncheckedCreateWithoutTasksInput>
  }

  export type WorldCreateWithoutTasksInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
    members?: WorldMemberCreateNestedManyWithoutWorldInput
    polls?: PollCreateNestedManyWithoutWorldInput
    categories?: CategoryCreateNestedManyWithoutWorldInput
    bans?: WorldBanCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    inviteCode?: string
    ownerId: string
    members?: WorldMemberUncheckedCreateNestedManyWithoutWorldInput
    polls?: PollUncheckedCreateNestedManyWithoutWorldInput
    categories?: CategoryUncheckedCreateNestedManyWithoutWorldInput
    bans?: WorldBanUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutTasksInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutTasksInput, WorldUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    nickname: string
    password: string
    worlds?: WorldMemberCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutUserInput
    bans?: WorldBanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    nickname: string
    password: string
    worlds?: WorldMemberUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    bans?: WorldBanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type CategoryUpsertWithoutTasksInput = {
    update: XOR<CategoryUpdateWithoutTasksInput, CategoryUncheckedUpdateWithoutTasksInput>
    create: XOR<CategoryCreateWithoutTasksInput, CategoryUncheckedCreateWithoutTasksInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTasksInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTasksInput, CategoryUncheckedUpdateWithoutTasksInput>
  }

  export type CategoryUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    world?: WorldUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldUpsertWithoutTasksInput = {
    update: XOR<WorldUpdateWithoutTasksInput, WorldUncheckedUpdateWithoutTasksInput>
    create: XOR<WorldCreateWithoutTasksInput, WorldUncheckedCreateWithoutTasksInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutTasksInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutTasksInput, WorldUncheckedUpdateWithoutTasksInput>
  }

  export type WorldUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: WorldMemberUpdateManyWithoutWorldNestedInput
    polls?: PollUpdateManyWithoutWorldNestedInput
    categories?: CategoryUpdateManyWithoutWorldNestedInput
    bans?: WorldBanUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    members?: WorldMemberUncheckedUpdateManyWithoutWorldNestedInput
    polls?: PollUncheckedUpdateManyWithoutWorldNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutWorldNestedInput
    bans?: WorldBanUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    worlds?: WorldMemberUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutUserNestedInput
    bans?: WorldBanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    worlds?: WorldMemberUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    bans?: WorldBanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorldMemberCreateManyUserInput = {
    id?: string
    worldId: string
    role?: $Enums.Role
  }

  export type TaskCreateManyAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    hasResources?: boolean
    resources?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    categoryId: string
    worldId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoteCreateManyUserInput = {
    id?: string
    optionId: string
  }

  export type WorldBanCreateManyUserInput = {
    id?: string
    worldId: string
  }

  export type WorldMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    world?: WorldUpdateOneRequiredWithoutMembersNestedInput
  }

  export type WorldMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type WorldMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type TaskUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutTasksNestedInput
    world?: WorldUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    categoryId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    categoryId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: PollOptionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type WorldBanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    world?: WorldUpdateOneRequiredWithoutBansNestedInput
  }

  export type WorldBanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
  }

  export type WorldBanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
  }

  export type PollOptionCreateManyPollInput = {
    id?: string
    text: string
  }

  export type PollOptionUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    votes?: VoteUpdateManyWithoutOptionNestedInput
  }

  export type PollOptionUncheckedUpdateWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    votes?: VoteUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type PollOptionUncheckedUpdateManyWithoutPollInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateManyOptionInput = {
    id?: string
    userId: string
  }

  export type VoteUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WorldMemberCreateManyWorldInput = {
    id?: string
    userId: string
    role?: $Enums.Role
  }

  export type TaskCreateManyWorldInput = {
    id?: string
    title: string
    description?: string | null
    hasResources?: boolean
    resources?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    categoryId: string
    assigneeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PollCreateManyWorldInput = {
    id?: string
    question: string
    createdAt?: Date | string
  }

  export type CategoryCreateManyWorldInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorldBanCreateManyWorldInput = {
    id?: string
    userId: string
  }

  export type WorldMemberUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutWorldsNestedInput
  }

  export type WorldMemberUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type WorldMemberUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type TaskUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    categoryId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    categoryId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PollUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: PollOptionUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: PollOptionUncheckedUpdateManyWithoutPollNestedInput
  }

  export type PollUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldBanUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBansNestedInput
  }

  export type WorldBanUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WorldBanUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyCategoryInput = {
    id?: string
    title: string
    description?: string | null
    hasResources?: boolean
    resources?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    worldId: string
    assigneeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    world?: WorldUpdateOneRequiredWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    worldId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasResources?: BoolFieldUpdateOperationsInput | boolean
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    worldId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}