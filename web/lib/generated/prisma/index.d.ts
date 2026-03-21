
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Todo
 * 
 */
export type Todo = $Result.DefaultSelection<Prisma.$TodoPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model CollectionTodo
 * 
 */
export type CollectionTodo = $Result.DefaultSelection<Prisma.$CollectionTodoPayload>
/**
 * Model Habit
 * 
 */
export type Habit = $Result.DefaultSelection<Prisma.$HabitPayload>
/**
 * Model HabitDailyProgress
 * 
 */
export type HabitDailyProgress = $Result.DefaultSelection<Prisma.$HabitDailyProgressPayload>
/**
 * Model Routine
 * 
 */
export type Routine = $Result.DefaultSelection<Prisma.$RoutinePayload>
/**
 * Model RoutineHabit
 * 
 */
export type RoutineHabit = $Result.DefaultSelection<Prisma.$RoutineHabitPayload>
/**
 * Model PostHabit
 * 
 */
export type PostHabit = $Result.DefaultSelection<Prisma.$PostHabitPayload>
/**
 * Model PostHabitVote
 * 
 */
export type PostHabitVote = $Result.DefaultSelection<Prisma.$PostHabitVotePayload>
/**
 * Model NotificationRead
 * 
 */
export type NotificationRead = $Result.DefaultSelection<Prisma.$NotificationReadPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TodoPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type TodoPriority = (typeof TodoPriority)[keyof typeof TodoPriority]


export const TodoStatus: {
  PLANNED: 'PLANNED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  MISSED: 'MISSED'
};

export type TodoStatus = (typeof TodoStatus)[keyof typeof TodoStatus]


export const HabitCategory: {
  Movement: 'Movement',
  Energy: 'Energy',
  Focus: 'Focus',
  Recovery: 'Recovery',
  Mindset: 'Mindset',
  Health: 'Health'
};

export type HabitCategory = (typeof HabitCategory)[keyof typeof HabitCategory]


export const RoutineTimeWindow: {
  Anytime: 'Anytime',
  Morning: 'Morning',
  Workday: 'Workday',
  Evening: 'Evening'
};

export type RoutineTimeWindow = (typeof RoutineTimeWindow)[keyof typeof RoutineTimeWindow]

}

export type TodoPriority = $Enums.TodoPriority

export const TodoPriority: typeof $Enums.TodoPriority

export type TodoStatus = $Enums.TodoStatus

export const TodoStatus: typeof $Enums.TodoStatus

export type HabitCategory = $Enums.HabitCategory

export const HabitCategory: typeof $Enums.HabitCategory

export type RoutineTimeWindow = $Enums.RoutineTimeWindow

export const RoutineTimeWindow: typeof $Enums.RoutineTimeWindow

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.todo`: Exposes CRUD operations for the **Todo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todos
    * const todos = await prisma.todo.findMany()
    * ```
    */
  get todo(): Prisma.TodoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collectionTodo`: Exposes CRUD operations for the **CollectionTodo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollectionTodos
    * const collectionTodos = await prisma.collectionTodo.findMany()
    * ```
    */
  get collectionTodo(): Prisma.CollectionTodoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitDailyProgress`: Exposes CRUD operations for the **HabitDailyProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitDailyProgresses
    * const habitDailyProgresses = await prisma.habitDailyProgress.findMany()
    * ```
    */
  get habitDailyProgress(): Prisma.HabitDailyProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routine`: Exposes CRUD operations for the **Routine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routines
    * const routines = await prisma.routine.findMany()
    * ```
    */
  get routine(): Prisma.RoutineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routineHabit`: Exposes CRUD operations for the **RoutineHabit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutineHabits
    * const routineHabits = await prisma.routineHabit.findMany()
    * ```
    */
  get routineHabit(): Prisma.RoutineHabitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postHabit`: Exposes CRUD operations for the **PostHabit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostHabits
    * const postHabits = await prisma.postHabit.findMany()
    * ```
    */
  get postHabit(): Prisma.PostHabitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postHabitVote`: Exposes CRUD operations for the **PostHabitVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostHabitVotes
    * const postHabitVotes = await prisma.postHabitVote.findMany()
    * ```
    */
  get postHabitVote(): Prisma.PostHabitVoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationRead`: Exposes CRUD operations for the **NotificationRead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationReads
    * const notificationReads = await prisma.notificationRead.findMany()
    * ```
    */
  get notificationRead(): Prisma.NotificationReadDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Todo: 'Todo',
    Collection: 'Collection',
    CollectionTodo: 'CollectionTodo',
    Habit: 'Habit',
    HabitDailyProgress: 'HabitDailyProgress',
    Routine: 'Routine',
    RoutineHabit: 'RoutineHabit',
    PostHabit: 'PostHabit',
    PostHabitVote: 'PostHabitVote',
    NotificationRead: 'NotificationRead'
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
      modelProps: "user" | "session" | "account" | "verification" | "todo" | "collection" | "collectionTodo" | "habit" | "habitDailyProgress" | "routine" | "routineHabit" | "postHabit" | "postHabitVote" | "notificationRead"
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Todo: {
        payload: Prisma.$TodoPayload<ExtArgs>
        fields: Prisma.TodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findFirst: {
            args: Prisma.TodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findMany: {
            args: Prisma.TodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          create: {
            args: Prisma.TodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          createMany: {
            args: Prisma.TodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TodoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          delete: {
            args: Prisma.TodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          update: {
            args: Prisma.TodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          deleteMany: {
            args: Prisma.TodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TodoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          upsert: {
            args: Prisma.TodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          aggregate: {
            args: Prisma.TodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTodo>
          }
          groupBy: {
            args: Prisma.TodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodoCountArgs<ExtArgs>
            result: $Utils.Optional<TodoCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      CollectionTodo: {
        payload: Prisma.$CollectionTodoPayload<ExtArgs>
        fields: Prisma.CollectionTodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionTodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionTodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionTodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionTodoPayload>
          }
          findFirst: {
            args: Prisma.CollectionTodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionTodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionTodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionTodoPayload>
          }
          findMany: {
            args: Prisma.CollectionTodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionTodoPayload>[]
          }
          create: {
            args: Prisma.CollectionTodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionTodoPayload>
          }
          createMany: {
            args: Prisma.CollectionTodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionTodoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionTodoPayload>[]
          }
          delete: {
            args: Prisma.CollectionTodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionTodoPayload>
          }
          update: {
            args: Prisma.CollectionTodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionTodoPayload>
          }
          deleteMany: {
            args: Prisma.CollectionTodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionTodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollectionTodoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionTodoPayload>[]
          }
          upsert: {
            args: Prisma.CollectionTodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionTodoPayload>
          }
          aggregate: {
            args: Prisma.CollectionTodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollectionTodo>
          }
          groupBy: {
            args: Prisma.CollectionTodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionTodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionTodoCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionTodoCountAggregateOutputType> | number
          }
        }
      }
      Habit: {
        payload: Prisma.$HabitPayload<ExtArgs>
        fields: Prisma.HabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findFirst: {
            args: Prisma.HabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findMany: {
            args: Prisma.HabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          create: {
            args: Prisma.HabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          createMany: {
            args: Prisma.HabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          delete: {
            args: Prisma.HabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          update: {
            args: Prisma.HabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          deleteMany: {
            args: Prisma.HabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          upsert: {
            args: Prisma.HabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          aggregate: {
            args: Prisma.HabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit>
          }
          groupBy: {
            args: Prisma.HabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCountAggregateOutputType> | number
          }
        }
      }
      HabitDailyProgress: {
        payload: Prisma.$HabitDailyProgressPayload<ExtArgs>
        fields: Prisma.HabitDailyProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitDailyProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDailyProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitDailyProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDailyProgressPayload>
          }
          findFirst: {
            args: Prisma.HabitDailyProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDailyProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitDailyProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDailyProgressPayload>
          }
          findMany: {
            args: Prisma.HabitDailyProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDailyProgressPayload>[]
          }
          create: {
            args: Prisma.HabitDailyProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDailyProgressPayload>
          }
          createMany: {
            args: Prisma.HabitDailyProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitDailyProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDailyProgressPayload>[]
          }
          delete: {
            args: Prisma.HabitDailyProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDailyProgressPayload>
          }
          update: {
            args: Prisma.HabitDailyProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDailyProgressPayload>
          }
          deleteMany: {
            args: Prisma.HabitDailyProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitDailyProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitDailyProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDailyProgressPayload>[]
          }
          upsert: {
            args: Prisma.HabitDailyProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitDailyProgressPayload>
          }
          aggregate: {
            args: Prisma.HabitDailyProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitDailyProgress>
          }
          groupBy: {
            args: Prisma.HabitDailyProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitDailyProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitDailyProgressCountArgs<ExtArgs>
            result: $Utils.Optional<HabitDailyProgressCountAggregateOutputType> | number
          }
        }
      }
      Routine: {
        payload: Prisma.$RoutinePayload<ExtArgs>
        fields: Prisma.RoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findFirst: {
            args: Prisma.RoutineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findMany: {
            args: Prisma.RoutineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          create: {
            args: Prisma.RoutineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          createMany: {
            args: Prisma.RoutineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          delete: {
            args: Prisma.RoutineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          update: {
            args: Prisma.RoutineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          deleteMany: {
            args: Prisma.RoutineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoutineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          upsert: {
            args: Prisma.RoutineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          aggregate: {
            args: Prisma.RoutineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutine>
          }
          groupBy: {
            args: Prisma.RoutineGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineCountAggregateOutputType> | number
          }
        }
      }
      RoutineHabit: {
        payload: Prisma.$RoutineHabitPayload<ExtArgs>
        fields: Prisma.RoutineHabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineHabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineHabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHabitPayload>
          }
          findFirst: {
            args: Prisma.RoutineHabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineHabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHabitPayload>
          }
          findMany: {
            args: Prisma.RoutineHabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHabitPayload>[]
          }
          create: {
            args: Prisma.RoutineHabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHabitPayload>
          }
          createMany: {
            args: Prisma.RoutineHabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutineHabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHabitPayload>[]
          }
          delete: {
            args: Prisma.RoutineHabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHabitPayload>
          }
          update: {
            args: Prisma.RoutineHabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHabitPayload>
          }
          deleteMany: {
            args: Prisma.RoutineHabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineHabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoutineHabitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHabitPayload>[]
          }
          upsert: {
            args: Prisma.RoutineHabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHabitPayload>
          }
          aggregate: {
            args: Prisma.RoutineHabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutineHabit>
          }
          groupBy: {
            args: Prisma.RoutineHabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineHabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineHabitCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineHabitCountAggregateOutputType> | number
          }
        }
      }
      PostHabit: {
        payload: Prisma.$PostHabitPayload<ExtArgs>
        fields: Prisma.PostHabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostHabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostHabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitPayload>
          }
          findFirst: {
            args: Prisma.PostHabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostHabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitPayload>
          }
          findMany: {
            args: Prisma.PostHabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitPayload>[]
          }
          create: {
            args: Prisma.PostHabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitPayload>
          }
          createMany: {
            args: Prisma.PostHabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostHabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitPayload>[]
          }
          delete: {
            args: Prisma.PostHabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitPayload>
          }
          update: {
            args: Prisma.PostHabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitPayload>
          }
          deleteMany: {
            args: Prisma.PostHabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostHabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostHabitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitPayload>[]
          }
          upsert: {
            args: Prisma.PostHabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitPayload>
          }
          aggregate: {
            args: Prisma.PostHabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostHabit>
          }
          groupBy: {
            args: Prisma.PostHabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostHabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostHabitCountArgs<ExtArgs>
            result: $Utils.Optional<PostHabitCountAggregateOutputType> | number
          }
        }
      }
      PostHabitVote: {
        payload: Prisma.$PostHabitVotePayload<ExtArgs>
        fields: Prisma.PostHabitVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostHabitVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostHabitVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitVotePayload>
          }
          findFirst: {
            args: Prisma.PostHabitVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostHabitVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitVotePayload>
          }
          findMany: {
            args: Prisma.PostHabitVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitVotePayload>[]
          }
          create: {
            args: Prisma.PostHabitVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitVotePayload>
          }
          createMany: {
            args: Prisma.PostHabitVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostHabitVoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitVotePayload>[]
          }
          delete: {
            args: Prisma.PostHabitVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitVotePayload>
          }
          update: {
            args: Prisma.PostHabitVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitVotePayload>
          }
          deleteMany: {
            args: Prisma.PostHabitVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostHabitVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostHabitVoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitVotePayload>[]
          }
          upsert: {
            args: Prisma.PostHabitVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostHabitVotePayload>
          }
          aggregate: {
            args: Prisma.PostHabitVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostHabitVote>
          }
          groupBy: {
            args: Prisma.PostHabitVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostHabitVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostHabitVoteCountArgs<ExtArgs>
            result: $Utils.Optional<PostHabitVoteCountAggregateOutputType> | number
          }
        }
      }
      NotificationRead: {
        payload: Prisma.$NotificationReadPayload<ExtArgs>
        fields: Prisma.NotificationReadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationReadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationReadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          findFirst: {
            args: Prisma.NotificationReadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationReadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          findMany: {
            args: Prisma.NotificationReadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>[]
          }
          create: {
            args: Prisma.NotificationReadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          createMany: {
            args: Prisma.NotificationReadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationReadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>[]
          }
          delete: {
            args: Prisma.NotificationReadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          update: {
            args: Prisma.NotificationReadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          deleteMany: {
            args: Prisma.NotificationReadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationReadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationReadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>[]
          }
          upsert: {
            args: Prisma.NotificationReadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationReadPayload>
          }
          aggregate: {
            args: Prisma.NotificationReadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationRead>
          }
          groupBy: {
            args: Prisma.NotificationReadGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationReadGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationReadCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationReadCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    todo?: TodoOmit
    collection?: CollectionOmit
    collectionTodo?: CollectionTodoOmit
    habit?: HabitOmit
    habitDailyProgress?: HabitDailyProgressOmit
    routine?: RoutineOmit
    routineHabit?: RoutineHabitOmit
    postHabit?: PostHabitOmit
    postHabitVote?: PostHabitVoteOmit
    notificationRead?: NotificationReadOmit
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
    accounts: number
    collections: number
    habits: number
    notification_read: number
    postHabits: number
    postHabitVotes: number
    routines: number
    sessions: number
    todos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    collections?: boolean | UserCountOutputTypeCountCollectionsArgs
    habits?: boolean | UserCountOutputTypeCountHabitsArgs
    notification_read?: boolean | UserCountOutputTypeCountNotification_readArgs
    postHabits?: boolean | UserCountOutputTypeCountPostHabitsArgs
    postHabitVotes?: boolean | UserCountOutputTypeCountPostHabitVotesArgs
    routines?: boolean | UserCountOutputTypeCountRoutinesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    todos?: boolean | UserCountOutputTypeCountTodosArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotification_readArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationReadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHabitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostHabitVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHabitVoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
  }


  /**
   * Count Type TodoCountOutputType
   */

  export type TodoCountOutputType = {
    collections: number
  }

  export type TodoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | TodoCountOutputTypeCountCollectionsArgs
  }

  // Custom InputTypes
  /**
   * TodoCountOutputType without action
   */
  export type TodoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TodoCountOutputType
     */
    select?: TodoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TodoCountOutputType without action
   */
  export type TodoCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionTodoWhereInput
  }


  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    items: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CollectionCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionTodoWhereInput
  }


  /**
   * Count Type HabitCountOutputType
   */

  export type HabitCountOutputType = {
    dailyProgressEntries: number
    post_habit: number
    routineHabits: number
  }

  export type HabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyProgressEntries?: boolean | HabitCountOutputTypeCountDailyProgressEntriesArgs
    post_habit?: boolean | HabitCountOutputTypeCountPost_habitArgs
    routineHabits?: boolean | HabitCountOutputTypeCountRoutineHabitsArgs
  }

  // Custom InputTypes
  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCountOutputType
     */
    select?: HabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountDailyProgressEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitDailyProgressWhereInput
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountPost_habitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHabitWhereInput
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountRoutineHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineHabitWhereInput
  }


  /**
   * Count Type RoutineCountOutputType
   */

  export type RoutineCountOutputType = {
    habits: number
  }

  export type RoutineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habits?: boolean | RoutineCountOutputTypeCountHabitsArgs
  }

  // Custom InputTypes
  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineCountOutputType
     */
    select?: RoutineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineHabitWhereInput
  }


  /**
   * Count Type PostHabitCountOutputType
   */

  export type PostHabitCountOutputType = {
    votes: number
  }

  export type PostHabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | PostHabitCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * PostHabitCountOutputType without action
   */
  export type PostHabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitCountOutputType
     */
    select?: PostHabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostHabitCountOutputType without action
   */
  export type PostHabitCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHabitVoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    streakGoalDays: number | null
  }

  export type UserSumAggregateOutputType = {
    streakGoalDays: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    streakGoalDays: number | null
    privateAccount: boolean | null
    username: string | null
    focusArea: string | null
    bio: string | null
    location: string | null
    bannerColor: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    streakGoalDays: number | null
    privateAccount: boolean | null
    username: string | null
    focusArea: string | null
    bio: string | null
    location: string | null
    bannerColor: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    streakGoalDays: number
    privateAccount: number
    username: number
    focusArea: number
    bio: number
    location: number
    bannerColor: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    streakGoalDays?: true
  }

  export type UserSumAggregateInputType = {
    streakGoalDays?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    streakGoalDays?: true
    privateAccount?: true
    username?: true
    focusArea?: true
    bio?: true
    location?: true
    bannerColor?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    streakGoalDays?: true
    privateAccount?: true
    username?: true
    focusArea?: true
    bio?: true
    location?: true
    bannerColor?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    streakGoalDays?: true
    privateAccount?: true
    username?: true
    focusArea?: true
    bio?: true
    location?: true
    bannerColor?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
    streakGoalDays: number | null
    privateAccount: boolean
    username: string | null
    focusArea: string | null
    bio: string | null
    location: string | null
    bannerColor: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streakGoalDays?: boolean
    privateAccount?: boolean
    username?: boolean
    focusArea?: boolean
    bio?: boolean
    location?: boolean
    bannerColor?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    notification_read?: boolean | User$notification_readArgs<ExtArgs>
    postHabits?: boolean | User$postHabitsArgs<ExtArgs>
    postHabitVotes?: boolean | User$postHabitVotesArgs<ExtArgs>
    routines?: boolean | User$routinesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    todos?: boolean | User$todosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streakGoalDays?: boolean
    privateAccount?: boolean
    username?: boolean
    focusArea?: boolean
    bio?: boolean
    location?: boolean
    bannerColor?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streakGoalDays?: boolean
    privateAccount?: boolean
    username?: boolean
    focusArea?: boolean
    bio?: boolean
    location?: boolean
    bannerColor?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streakGoalDays?: boolean
    privateAccount?: boolean
    username?: boolean
    focusArea?: boolean
    bio?: boolean
    location?: boolean
    bannerColor?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "updatedAt" | "streakGoalDays" | "privateAccount" | "username" | "focusArea" | "bio" | "location" | "bannerColor", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    notification_read?: boolean | User$notification_readArgs<ExtArgs>
    postHabits?: boolean | User$postHabitsArgs<ExtArgs>
    postHabitVotes?: boolean | User$postHabitVotesArgs<ExtArgs>
    routines?: boolean | User$routinesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    todos?: boolean | User$todosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      collections: Prisma.$CollectionPayload<ExtArgs>[]
      habits: Prisma.$HabitPayload<ExtArgs>[]
      notification_read: Prisma.$NotificationReadPayload<ExtArgs>[]
      postHabits: Prisma.$PostHabitPayload<ExtArgs>[]
      postHabitVotes: Prisma.$PostHabitVotePayload<ExtArgs>[]
      routines: Prisma.$RoutinePayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      todos: Prisma.$TodoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      createdAt: Date
      updatedAt: Date
      streakGoalDays: number | null
      privateAccount: boolean
      username: string | null
      focusArea: string | null
      bio: string | null
      location: string | null
      bannerColor: string | null
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collections<T extends User$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    habits<T extends User$habitsArgs<ExtArgs> = {}>(args?: Subset<T, User$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification_read<T extends User$notification_readArgs<ExtArgs> = {}>(args?: Subset<T, User$notification_readArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postHabits<T extends User$postHabitsArgs<ExtArgs> = {}>(args?: Subset<T, User$postHabitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postHabitVotes<T extends User$postHabitVotesArgs<ExtArgs> = {}>(args?: Subset<T, User$postHabitVotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routines<T extends User$routinesArgs<ExtArgs> = {}>(args?: Subset<T, User$routinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    todos<T extends User$todosArgs<ExtArgs> = {}>(args?: Subset<T, User$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly streakGoalDays: FieldRef<"User", 'Int'>
    readonly privateAccount: FieldRef<"User", 'Boolean'>
    readonly username: FieldRef<"User", 'String'>
    readonly focusArea: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly bannerColor: FieldRef<"User", 'String'>
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.collections
   */
  export type User$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * User.habits
   */
  export type User$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    cursor?: HabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * User.notification_read
   */
  export type User$notification_readArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    where?: NotificationReadWhereInput
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    cursor?: NotificationReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * User.postHabits
   */
  export type User$postHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitInclude<ExtArgs> | null
    where?: PostHabitWhereInput
    orderBy?: PostHabitOrderByWithRelationInput | PostHabitOrderByWithRelationInput[]
    cursor?: PostHabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostHabitScalarFieldEnum | PostHabitScalarFieldEnum[]
  }

  /**
   * User.postHabitVotes
   */
  export type User$postHabitVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteInclude<ExtArgs> | null
    where?: PostHabitVoteWhereInput
    orderBy?: PostHabitVoteOrderByWithRelationInput | PostHabitVoteOrderByWithRelationInput[]
    cursor?: PostHabitVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostHabitVoteScalarFieldEnum | PostHabitVoteScalarFieldEnum[]
  }

  /**
   * User.routines
   */
  export type User$routinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    cursor?: RoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.todos
   */
  export type User$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    cursor?: TodoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Todo
   */

  export type AggregateTodo = {
    _count: TodoCountAggregateOutputType | null
    _avg: TodoAvgAggregateOutputType | null
    _sum: TodoSumAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  export type TodoAvgAggregateOutputType = {
    durationMinutes: number | null
  }

  export type TodoSumAggregateOutputType = {
    durationMinutes: number | null
  }

  export type TodoMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    priority: $Enums.TodoPriority | null
    status: $Enums.TodoStatus | null
    dueAt: Date | null
    scheduledTime: string | null
    durationMinutes: number | null
    location: string | null
    reminder: string | null
    recurrence: string | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    iconColor: string | null
    iconName: string | null
    archived: boolean | null
  }

  export type TodoMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    priority: $Enums.TodoPriority | null
    status: $Enums.TodoStatus | null
    dueAt: Date | null
    scheduledTime: string | null
    durationMinutes: number | null
    location: string | null
    reminder: string | null
    recurrence: string | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    iconColor: string | null
    iconName: string | null
    archived: boolean | null
  }

  export type TodoCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    priority: number
    status: number
    dueAt: number
    scheduledTime: number
    durationMinutes: number
    location: number
    reminder: number
    recurrence: number
    tags: number
    createdAt: number
    updatedAt: number
    userId: number
    iconColor: number
    iconName: number
    archived: number
    _all: number
  }


  export type TodoAvgAggregateInputType = {
    durationMinutes?: true
  }

  export type TodoSumAggregateInputType = {
    durationMinutes?: true
  }

  export type TodoMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    priority?: true
    status?: true
    dueAt?: true
    scheduledTime?: true
    durationMinutes?: true
    location?: true
    reminder?: true
    recurrence?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    iconColor?: true
    iconName?: true
    archived?: true
  }

  export type TodoMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    priority?: true
    status?: true
    dueAt?: true
    scheduledTime?: true
    durationMinutes?: true
    location?: true
    reminder?: true
    recurrence?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    iconColor?: true
    iconName?: true
    archived?: true
  }

  export type TodoCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    priority?: true
    status?: true
    dueAt?: true
    scheduledTime?: true
    durationMinutes?: true
    location?: true
    reminder?: true
    recurrence?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    iconColor?: true
    iconName?: true
    archived?: true
    _all?: true
  }

  export type TodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todo to aggregate.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todos
    **/
    _count?: true | TodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TodoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TodoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoMaxAggregateInputType
  }

  export type GetTodoAggregateType<T extends TodoAggregateArgs> = {
        [P in keyof T & keyof AggregateTodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodo[P]>
      : GetScalarType<T[P], AggregateTodo[P]>
  }




  export type TodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithAggregationInput | TodoOrderByWithAggregationInput[]
    by: TodoScalarFieldEnum[] | TodoScalarFieldEnum
    having?: TodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoCountAggregateInputType | true
    _avg?: TodoAvgAggregateInputType
    _sum?: TodoSumAggregateInputType
    _min?: TodoMinAggregateInputType
    _max?: TodoMaxAggregateInputType
  }

  export type TodoGroupByOutputType = {
    id: string
    title: string
    description: string | null
    category: string | null
    priority: $Enums.TodoPriority
    status: $Enums.TodoStatus
    dueAt: Date | null
    scheduledTime: string | null
    durationMinutes: number | null
    location: string | null
    reminder: string | null
    recurrence: string | null
    tags: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    iconColor: string
    iconName: string
    archived: boolean
    _count: TodoCountAggregateOutputType | null
    _avg: TodoAvgAggregateOutputType | null
    _sum: TodoSumAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  type GetTodoGroupByPayload<T extends TodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoGroupByOutputType[P]>
            : GetScalarType<T[P], TodoGroupByOutputType[P]>
        }
      >
    >


  export type TodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    dueAt?: boolean
    scheduledTime?: boolean
    durationMinutes?: boolean
    location?: boolean
    reminder?: boolean
    recurrence?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    iconColor?: boolean
    iconName?: boolean
    archived?: boolean
    collections?: boolean | Todo$collectionsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TodoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>

  export type TodoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    dueAt?: boolean
    scheduledTime?: boolean
    durationMinutes?: boolean
    location?: boolean
    reminder?: boolean
    recurrence?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    iconColor?: boolean
    iconName?: boolean
    archived?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>

  export type TodoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    dueAt?: boolean
    scheduledTime?: boolean
    durationMinutes?: boolean
    location?: boolean
    reminder?: boolean
    recurrence?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    iconColor?: boolean
    iconName?: boolean
    archived?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>

  export type TodoSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    dueAt?: boolean
    scheduledTime?: boolean
    durationMinutes?: boolean
    location?: boolean
    reminder?: boolean
    recurrence?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    iconColor?: boolean
    iconName?: boolean
    archived?: boolean
  }

  export type TodoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "priority" | "status" | "dueAt" | "scheduledTime" | "durationMinutes" | "location" | "reminder" | "recurrence" | "tags" | "createdAt" | "updatedAt" | "userId" | "iconColor" | "iconName" | "archived", ExtArgs["result"]["todo"]>
  export type TodoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | Todo$collectionsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TodoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TodoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TodoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Todo"
    objects: {
      collections: Prisma.$CollectionTodoPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      category: string | null
      priority: $Enums.TodoPriority
      status: $Enums.TodoStatus
      dueAt: Date | null
      scheduledTime: string | null
      durationMinutes: number | null
      location: string | null
      reminder: string | null
      recurrence: string | null
      tags: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      iconColor: string
      iconName: string
      archived: boolean
    }, ExtArgs["result"]["todo"]>
    composites: {}
  }

  type TodoGetPayload<S extends boolean | null | undefined | TodoDefaultArgs> = $Result.GetResult<Prisma.$TodoPayload, S>

  type TodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TodoCountAggregateInputType | true
    }

  export interface TodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Todo'], meta: { name: 'Todo' } }
    /**
     * Find zero or one Todo that matches the filter.
     * @param {TodoFindUniqueArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TodoFindUniqueArgs>(args: SelectSubset<T, TodoFindUniqueArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Todo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TodoFindUniqueOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TodoFindUniqueOrThrowArgs>(args: SelectSubset<T, TodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TodoFindFirstArgs>(args?: SelectSubset<T, TodoFindFirstArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Todo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TodoFindFirstOrThrowArgs>(args?: SelectSubset<T, TodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todos
     * const todos = await prisma.todo.findMany()
     * 
     * // Get first 10 Todos
     * const todos = await prisma.todo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todoWithIdOnly = await prisma.todo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TodoFindManyArgs>(args?: SelectSubset<T, TodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Todo.
     * @param {TodoCreateArgs} args - Arguments to create a Todo.
     * @example
     * // Create one Todo
     * const Todo = await prisma.todo.create({
     *   data: {
     *     // ... data to create a Todo
     *   }
     * })
     * 
     */
    create<T extends TodoCreateArgs>(args: SelectSubset<T, TodoCreateArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Todos.
     * @param {TodoCreateManyArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todo = await prisma.todo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TodoCreateManyArgs>(args?: SelectSubset<T, TodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Todos and returns the data saved in the database.
     * @param {TodoCreateManyAndReturnArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todo = await prisma.todo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Todos and only return the `id`
     * const todoWithIdOnly = await prisma.todo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TodoCreateManyAndReturnArgs>(args?: SelectSubset<T, TodoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Todo.
     * @param {TodoDeleteArgs} args - Arguments to delete one Todo.
     * @example
     * // Delete one Todo
     * const Todo = await prisma.todo.delete({
     *   where: {
     *     // ... filter to delete one Todo
     *   }
     * })
     * 
     */
    delete<T extends TodoDeleteArgs>(args: SelectSubset<T, TodoDeleteArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Todo.
     * @param {TodoUpdateArgs} args - Arguments to update one Todo.
     * @example
     * // Update one Todo
     * const todo = await prisma.todo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TodoUpdateArgs>(args: SelectSubset<T, TodoUpdateArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Todos.
     * @param {TodoDeleteManyArgs} args - Arguments to filter Todos to delete.
     * @example
     * // Delete a few Todos
     * const { count } = await prisma.todo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TodoDeleteManyArgs>(args?: SelectSubset<T, TodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todos
     * const todo = await prisma.todo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TodoUpdateManyArgs>(args: SelectSubset<T, TodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos and returns the data updated in the database.
     * @param {TodoUpdateManyAndReturnArgs} args - Arguments to update many Todos.
     * @example
     * // Update many Todos
     * const todo = await prisma.todo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Todos and only return the `id`
     * const todoWithIdOnly = await prisma.todo.updateManyAndReturn({
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
    updateManyAndReturn<T extends TodoUpdateManyAndReturnArgs>(args: SelectSubset<T, TodoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Todo.
     * @param {TodoUpsertArgs} args - Arguments to update or create a Todo.
     * @example
     * // Update or create a Todo
     * const todo = await prisma.todo.upsert({
     *   create: {
     *     // ... data to create a Todo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todo we want to update
     *   }
     * })
     */
    upsert<T extends TodoUpsertArgs>(args: SelectSubset<T, TodoUpsertArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoCountArgs} args - Arguments to filter Todos to count.
     * @example
     * // Count the number of Todos
     * const count = await prisma.todo.count({
     *   where: {
     *     // ... the filter for the Todos we want to count
     *   }
     * })
    **/
    count<T extends TodoCountArgs>(
      args?: Subset<T, TodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TodoAggregateArgs>(args: Subset<T, TodoAggregateArgs>): Prisma.PrismaPromise<GetTodoAggregateType<T>>

    /**
     * Group by Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoGroupByArgs} args - Group by arguments.
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
      T extends TodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoGroupByArgs['orderBy'] }
        : { orderBy?: TodoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Todo model
   */
  readonly fields: TodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Todo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collections<T extends Todo$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, Todo$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Todo model
   */
  interface TodoFieldRefs {
    readonly id: FieldRef<"Todo", 'String'>
    readonly title: FieldRef<"Todo", 'String'>
    readonly description: FieldRef<"Todo", 'String'>
    readonly category: FieldRef<"Todo", 'String'>
    readonly priority: FieldRef<"Todo", 'TodoPriority'>
    readonly status: FieldRef<"Todo", 'TodoStatus'>
    readonly dueAt: FieldRef<"Todo", 'DateTime'>
    readonly scheduledTime: FieldRef<"Todo", 'String'>
    readonly durationMinutes: FieldRef<"Todo", 'Int'>
    readonly location: FieldRef<"Todo", 'String'>
    readonly reminder: FieldRef<"Todo", 'String'>
    readonly recurrence: FieldRef<"Todo", 'String'>
    readonly tags: FieldRef<"Todo", 'String'>
    readonly createdAt: FieldRef<"Todo", 'DateTime'>
    readonly updatedAt: FieldRef<"Todo", 'DateTime'>
    readonly userId: FieldRef<"Todo", 'String'>
    readonly iconColor: FieldRef<"Todo", 'String'>
    readonly iconName: FieldRef<"Todo", 'String'>
    readonly archived: FieldRef<"Todo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Todo findUnique
   */
  export type TodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findUniqueOrThrow
   */
  export type TodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findFirst
   */
  export type TodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findFirstOrThrow
   */
  export type TodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findMany
   */
  export type TodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todos to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo create
   */
  export type TodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The data needed to create a Todo.
     */
    data: XOR<TodoCreateInput, TodoUncheckedCreateInput>
  }

  /**
   * Todo createMany
   */
  export type TodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Todos.
     */
    data: TodoCreateManyInput | TodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Todo createManyAndReturn
   */
  export type TodoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * The data used to create many Todos.
     */
    data: TodoCreateManyInput | TodoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Todo update
   */
  export type TodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The data needed to update a Todo.
     */
    data: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
    /**
     * Choose, which Todo to update.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo updateMany
   */
  export type TodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Todos.
     */
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyInput>
    /**
     * Filter which Todos to update
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to update.
     */
    limit?: number
  }

  /**
   * Todo updateManyAndReturn
   */
  export type TodoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * The data used to update Todos.
     */
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyInput>
    /**
     * Filter which Todos to update
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Todo upsert
   */
  export type TodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The filter to search for the Todo to update in case it exists.
     */
    where: TodoWhereUniqueInput
    /**
     * In case the Todo found by the `where` argument doesn't exist, create a new Todo with this data.
     */
    create: XOR<TodoCreateInput, TodoUncheckedCreateInput>
    /**
     * In case the Todo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
  }

  /**
   * Todo delete
   */
  export type TodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter which Todo to delete.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo deleteMany
   */
  export type TodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todos to delete
     */
    where?: TodoWhereInput
    /**
     * Limit how many Todos to delete.
     */
    limit?: number
  }

  /**
   * Todo.collections
   */
  export type Todo$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoInclude<ExtArgs> | null
    where?: CollectionTodoWhereInput
    orderBy?: CollectionTodoOrderByWithRelationInput | CollectionTodoOrderByWithRelationInput[]
    cursor?: CollectionTodoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionTodoScalarFieldEnum | CollectionTodoScalarFieldEnum[]
  }

  /**
   * Todo without action
   */
  export type TodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Todo
     */
    omit?: TodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollectionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Collection$itemsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["collection"]>
  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Collection$itemsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$CollectionTodoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collections and returns the data saved in the database.
     * @param {CollectionCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections and returns the data updated in the database.
     * @param {CollectionUpdateManyAndReturnArgs} args - Arguments to update many Collections.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.updateManyAndReturn({
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
    updateManyAndReturn<T extends CollectionUpdateManyAndReturnArgs>(args: SelectSubset<T, CollectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
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
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Collection$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Collection$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'String'>
    readonly name: FieldRef<"Collection", 'String'>
    readonly description: FieldRef<"Collection", 'String'>
    readonly userId: FieldRef<"Collection", 'String'>
    readonly createdAt: FieldRef<"Collection", 'DateTime'>
    readonly updatedAt: FieldRef<"Collection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collection createManyAndReturn
   */
  export type CollectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
  }

  /**
   * Collection updateManyAndReturn
   */
  export type CollectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to delete.
     */
    limit?: number
  }

  /**
   * Collection.items
   */
  export type Collection$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoInclude<ExtArgs> | null
    where?: CollectionTodoWhereInput
    orderBy?: CollectionTodoOrderByWithRelationInput | CollectionTodoOrderByWithRelationInput[]
    cursor?: CollectionTodoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionTodoScalarFieldEnum | CollectionTodoScalarFieldEnum[]
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model CollectionTodo
   */

  export type AggregateCollectionTodo = {
    _count: CollectionTodoCountAggregateOutputType | null
    _min: CollectionTodoMinAggregateOutputType | null
    _max: CollectionTodoMaxAggregateOutputType | null
  }

  export type CollectionTodoMinAggregateOutputType = {
    id: string | null
    collectionId: string | null
    todoId: string | null
    createdAt: Date | null
  }

  export type CollectionTodoMaxAggregateOutputType = {
    id: string | null
    collectionId: string | null
    todoId: string | null
    createdAt: Date | null
  }

  export type CollectionTodoCountAggregateOutputType = {
    id: number
    collectionId: number
    todoId: number
    createdAt: number
    _all: number
  }


  export type CollectionTodoMinAggregateInputType = {
    id?: true
    collectionId?: true
    todoId?: true
    createdAt?: true
  }

  export type CollectionTodoMaxAggregateInputType = {
    id?: true
    collectionId?: true
    todoId?: true
    createdAt?: true
  }

  export type CollectionTodoCountAggregateInputType = {
    id?: true
    collectionId?: true
    todoId?: true
    createdAt?: true
    _all?: true
  }

  export type CollectionTodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionTodo to aggregate.
     */
    where?: CollectionTodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionTodos to fetch.
     */
    orderBy?: CollectionTodoOrderByWithRelationInput | CollectionTodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionTodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionTodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionTodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollectionTodos
    **/
    _count?: true | CollectionTodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionTodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionTodoMaxAggregateInputType
  }

  export type GetCollectionTodoAggregateType<T extends CollectionTodoAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectionTodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectionTodo[P]>
      : GetScalarType<T[P], AggregateCollectionTodo[P]>
  }




  export type CollectionTodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionTodoWhereInput
    orderBy?: CollectionTodoOrderByWithAggregationInput | CollectionTodoOrderByWithAggregationInput[]
    by: CollectionTodoScalarFieldEnum[] | CollectionTodoScalarFieldEnum
    having?: CollectionTodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionTodoCountAggregateInputType | true
    _min?: CollectionTodoMinAggregateInputType
    _max?: CollectionTodoMaxAggregateInputType
  }

  export type CollectionTodoGroupByOutputType = {
    id: string
    collectionId: string
    todoId: string
    createdAt: Date
    _count: CollectionTodoCountAggregateOutputType | null
    _min: CollectionTodoMinAggregateOutputType | null
    _max: CollectionTodoMaxAggregateOutputType | null
  }

  type GetCollectionTodoGroupByPayload<T extends CollectionTodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionTodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionTodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionTodoGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionTodoGroupByOutputType[P]>
        }
      >
    >


  export type CollectionTodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collectionId?: boolean
    todoId?: boolean
    createdAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    todo?: boolean | TodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionTodo"]>

  export type CollectionTodoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collectionId?: boolean
    todoId?: boolean
    createdAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    todo?: boolean | TodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionTodo"]>

  export type CollectionTodoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collectionId?: boolean
    todoId?: boolean
    createdAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    todo?: boolean | TodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionTodo"]>

  export type CollectionTodoSelectScalar = {
    id?: boolean
    collectionId?: boolean
    todoId?: boolean
    createdAt?: boolean
  }

  export type CollectionTodoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "collectionId" | "todoId" | "createdAt", ExtArgs["result"]["collectionTodo"]>
  export type CollectionTodoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    todo?: boolean | TodoDefaultArgs<ExtArgs>
  }
  export type CollectionTodoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    todo?: boolean | TodoDefaultArgs<ExtArgs>
  }
  export type CollectionTodoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    todo?: boolean | TodoDefaultArgs<ExtArgs>
  }

  export type $CollectionTodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollectionTodo"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs>
      todo: Prisma.$TodoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      collectionId: string
      todoId: string
      createdAt: Date
    }, ExtArgs["result"]["collectionTodo"]>
    composites: {}
  }

  type CollectionTodoGetPayload<S extends boolean | null | undefined | CollectionTodoDefaultArgs> = $Result.GetResult<Prisma.$CollectionTodoPayload, S>

  type CollectionTodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionTodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionTodoCountAggregateInputType | true
    }

  export interface CollectionTodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollectionTodo'], meta: { name: 'CollectionTodo' } }
    /**
     * Find zero or one CollectionTodo that matches the filter.
     * @param {CollectionTodoFindUniqueArgs} args - Arguments to find a CollectionTodo
     * @example
     * // Get one CollectionTodo
     * const collectionTodo = await prisma.collectionTodo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionTodoFindUniqueArgs>(args: SelectSubset<T, CollectionTodoFindUniqueArgs<ExtArgs>>): Prisma__CollectionTodoClient<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollectionTodo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionTodoFindUniqueOrThrowArgs} args - Arguments to find a CollectionTodo
     * @example
     * // Get one CollectionTodo
     * const collectionTodo = await prisma.collectionTodo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionTodoFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionTodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionTodoClient<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionTodo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionTodoFindFirstArgs} args - Arguments to find a CollectionTodo
     * @example
     * // Get one CollectionTodo
     * const collectionTodo = await prisma.collectionTodo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionTodoFindFirstArgs>(args?: SelectSubset<T, CollectionTodoFindFirstArgs<ExtArgs>>): Prisma__CollectionTodoClient<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionTodo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionTodoFindFirstOrThrowArgs} args - Arguments to find a CollectionTodo
     * @example
     * // Get one CollectionTodo
     * const collectionTodo = await prisma.collectionTodo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionTodoFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionTodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionTodoClient<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollectionTodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionTodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollectionTodos
     * const collectionTodos = await prisma.collectionTodo.findMany()
     * 
     * // Get first 10 CollectionTodos
     * const collectionTodos = await prisma.collectionTodo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionTodoWithIdOnly = await prisma.collectionTodo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionTodoFindManyArgs>(args?: SelectSubset<T, CollectionTodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollectionTodo.
     * @param {CollectionTodoCreateArgs} args - Arguments to create a CollectionTodo.
     * @example
     * // Create one CollectionTodo
     * const CollectionTodo = await prisma.collectionTodo.create({
     *   data: {
     *     // ... data to create a CollectionTodo
     *   }
     * })
     * 
     */
    create<T extends CollectionTodoCreateArgs>(args: SelectSubset<T, CollectionTodoCreateArgs<ExtArgs>>): Prisma__CollectionTodoClient<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollectionTodos.
     * @param {CollectionTodoCreateManyArgs} args - Arguments to create many CollectionTodos.
     * @example
     * // Create many CollectionTodos
     * const collectionTodo = await prisma.collectionTodo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionTodoCreateManyArgs>(args?: SelectSubset<T, CollectionTodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollectionTodos and returns the data saved in the database.
     * @param {CollectionTodoCreateManyAndReturnArgs} args - Arguments to create many CollectionTodos.
     * @example
     * // Create many CollectionTodos
     * const collectionTodo = await prisma.collectionTodo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollectionTodos and only return the `id`
     * const collectionTodoWithIdOnly = await prisma.collectionTodo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionTodoCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionTodoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollectionTodo.
     * @param {CollectionTodoDeleteArgs} args - Arguments to delete one CollectionTodo.
     * @example
     * // Delete one CollectionTodo
     * const CollectionTodo = await prisma.collectionTodo.delete({
     *   where: {
     *     // ... filter to delete one CollectionTodo
     *   }
     * })
     * 
     */
    delete<T extends CollectionTodoDeleteArgs>(args: SelectSubset<T, CollectionTodoDeleteArgs<ExtArgs>>): Prisma__CollectionTodoClient<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollectionTodo.
     * @param {CollectionTodoUpdateArgs} args - Arguments to update one CollectionTodo.
     * @example
     * // Update one CollectionTodo
     * const collectionTodo = await prisma.collectionTodo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionTodoUpdateArgs>(args: SelectSubset<T, CollectionTodoUpdateArgs<ExtArgs>>): Prisma__CollectionTodoClient<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollectionTodos.
     * @param {CollectionTodoDeleteManyArgs} args - Arguments to filter CollectionTodos to delete.
     * @example
     * // Delete a few CollectionTodos
     * const { count } = await prisma.collectionTodo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionTodoDeleteManyArgs>(args?: SelectSubset<T, CollectionTodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionTodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionTodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollectionTodos
     * const collectionTodo = await prisma.collectionTodo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionTodoUpdateManyArgs>(args: SelectSubset<T, CollectionTodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionTodos and returns the data updated in the database.
     * @param {CollectionTodoUpdateManyAndReturnArgs} args - Arguments to update many CollectionTodos.
     * @example
     * // Update many CollectionTodos
     * const collectionTodo = await prisma.collectionTodo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollectionTodos and only return the `id`
     * const collectionTodoWithIdOnly = await prisma.collectionTodo.updateManyAndReturn({
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
    updateManyAndReturn<T extends CollectionTodoUpdateManyAndReturnArgs>(args: SelectSubset<T, CollectionTodoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollectionTodo.
     * @param {CollectionTodoUpsertArgs} args - Arguments to update or create a CollectionTodo.
     * @example
     * // Update or create a CollectionTodo
     * const collectionTodo = await prisma.collectionTodo.upsert({
     *   create: {
     *     // ... data to create a CollectionTodo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectionTodo we want to update
     *   }
     * })
     */
    upsert<T extends CollectionTodoUpsertArgs>(args: SelectSubset<T, CollectionTodoUpsertArgs<ExtArgs>>): Prisma__CollectionTodoClient<$Result.GetResult<Prisma.$CollectionTodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollectionTodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionTodoCountArgs} args - Arguments to filter CollectionTodos to count.
     * @example
     * // Count the number of CollectionTodos
     * const count = await prisma.collectionTodo.count({
     *   where: {
     *     // ... the filter for the CollectionTodos we want to count
     *   }
     * })
    **/
    count<T extends CollectionTodoCountArgs>(
      args?: Subset<T, CollectionTodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionTodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollectionTodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionTodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionTodoAggregateArgs>(args: Subset<T, CollectionTodoAggregateArgs>): Prisma.PrismaPromise<GetCollectionTodoAggregateType<T>>

    /**
     * Group by CollectionTodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionTodoGroupByArgs} args - Group by arguments.
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
      T extends CollectionTodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionTodoGroupByArgs['orderBy'] }
        : { orderBy?: CollectionTodoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionTodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionTodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollectionTodo model
   */
  readonly fields: CollectionTodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollectionTodo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionTodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    todo<T extends TodoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TodoDefaultArgs<ExtArgs>>): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CollectionTodo model
   */
  interface CollectionTodoFieldRefs {
    readonly id: FieldRef<"CollectionTodo", 'String'>
    readonly collectionId: FieldRef<"CollectionTodo", 'String'>
    readonly todoId: FieldRef<"CollectionTodo", 'String'>
    readonly createdAt: FieldRef<"CollectionTodo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CollectionTodo findUnique
   */
  export type CollectionTodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoInclude<ExtArgs> | null
    /**
     * Filter, which CollectionTodo to fetch.
     */
    where: CollectionTodoWhereUniqueInput
  }

  /**
   * CollectionTodo findUniqueOrThrow
   */
  export type CollectionTodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoInclude<ExtArgs> | null
    /**
     * Filter, which CollectionTodo to fetch.
     */
    where: CollectionTodoWhereUniqueInput
  }

  /**
   * CollectionTodo findFirst
   */
  export type CollectionTodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoInclude<ExtArgs> | null
    /**
     * Filter, which CollectionTodo to fetch.
     */
    where?: CollectionTodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionTodos to fetch.
     */
    orderBy?: CollectionTodoOrderByWithRelationInput | CollectionTodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionTodos.
     */
    cursor?: CollectionTodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionTodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionTodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionTodos.
     */
    distinct?: CollectionTodoScalarFieldEnum | CollectionTodoScalarFieldEnum[]
  }

  /**
   * CollectionTodo findFirstOrThrow
   */
  export type CollectionTodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoInclude<ExtArgs> | null
    /**
     * Filter, which CollectionTodo to fetch.
     */
    where?: CollectionTodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionTodos to fetch.
     */
    orderBy?: CollectionTodoOrderByWithRelationInput | CollectionTodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionTodos.
     */
    cursor?: CollectionTodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionTodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionTodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionTodos.
     */
    distinct?: CollectionTodoScalarFieldEnum | CollectionTodoScalarFieldEnum[]
  }

  /**
   * CollectionTodo findMany
   */
  export type CollectionTodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoInclude<ExtArgs> | null
    /**
     * Filter, which CollectionTodos to fetch.
     */
    where?: CollectionTodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionTodos to fetch.
     */
    orderBy?: CollectionTodoOrderByWithRelationInput | CollectionTodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollectionTodos.
     */
    cursor?: CollectionTodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionTodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionTodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionTodos.
     */
    distinct?: CollectionTodoScalarFieldEnum | CollectionTodoScalarFieldEnum[]
  }

  /**
   * CollectionTodo create
   */
  export type CollectionTodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoInclude<ExtArgs> | null
    /**
     * The data needed to create a CollectionTodo.
     */
    data: XOR<CollectionTodoCreateInput, CollectionTodoUncheckedCreateInput>
  }

  /**
   * CollectionTodo createMany
   */
  export type CollectionTodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollectionTodos.
     */
    data: CollectionTodoCreateManyInput | CollectionTodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollectionTodo createManyAndReturn
   */
  export type CollectionTodoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * The data used to create many CollectionTodos.
     */
    data: CollectionTodoCreateManyInput | CollectionTodoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollectionTodo update
   */
  export type CollectionTodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoInclude<ExtArgs> | null
    /**
     * The data needed to update a CollectionTodo.
     */
    data: XOR<CollectionTodoUpdateInput, CollectionTodoUncheckedUpdateInput>
    /**
     * Choose, which CollectionTodo to update.
     */
    where: CollectionTodoWhereUniqueInput
  }

  /**
   * CollectionTodo updateMany
   */
  export type CollectionTodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollectionTodos.
     */
    data: XOR<CollectionTodoUpdateManyMutationInput, CollectionTodoUncheckedUpdateManyInput>
    /**
     * Filter which CollectionTodos to update
     */
    where?: CollectionTodoWhereInput
    /**
     * Limit how many CollectionTodos to update.
     */
    limit?: number
  }

  /**
   * CollectionTodo updateManyAndReturn
   */
  export type CollectionTodoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * The data used to update CollectionTodos.
     */
    data: XOR<CollectionTodoUpdateManyMutationInput, CollectionTodoUncheckedUpdateManyInput>
    /**
     * Filter which CollectionTodos to update
     */
    where?: CollectionTodoWhereInput
    /**
     * Limit how many CollectionTodos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollectionTodo upsert
   */
  export type CollectionTodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoInclude<ExtArgs> | null
    /**
     * The filter to search for the CollectionTodo to update in case it exists.
     */
    where: CollectionTodoWhereUniqueInput
    /**
     * In case the CollectionTodo found by the `where` argument doesn't exist, create a new CollectionTodo with this data.
     */
    create: XOR<CollectionTodoCreateInput, CollectionTodoUncheckedCreateInput>
    /**
     * In case the CollectionTodo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionTodoUpdateInput, CollectionTodoUncheckedUpdateInput>
  }

  /**
   * CollectionTodo delete
   */
  export type CollectionTodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoInclude<ExtArgs> | null
    /**
     * Filter which CollectionTodo to delete.
     */
    where: CollectionTodoWhereUniqueInput
  }

  /**
   * CollectionTodo deleteMany
   */
  export type CollectionTodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionTodos to delete
     */
    where?: CollectionTodoWhereInput
    /**
     * Limit how many CollectionTodos to delete.
     */
    limit?: number
  }

  /**
   * CollectionTodo without action
   */
  export type CollectionTodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionTodo
     */
    select?: CollectionTodoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionTodo
     */
    omit?: CollectionTodoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionTodoInclude<ExtArgs> | null
  }


  /**
   * Model Habit
   */

  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitAvgAggregateOutputType = {
    goalAmount: number | null
    dailyProgress: number | null
  }

  export type HabitSumAggregateOutputType = {
    goalAmount: number | null
    dailyProgress: number | null
  }

  export type HabitMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    cadence: string | null
    startDate: Date | null
    timeWindow: string | null
    goalAmount: number | null
    goalUnit: string | null
    goalUnitCategory: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    sourcePopularPostId: string | null
    dailyProgress: number | null
  }

  export type HabitMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    cadence: string | null
    startDate: Date | null
    timeWindow: string | null
    goalAmount: number | null
    goalUnit: string | null
    goalUnitCategory: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    sourcePopularPostId: string | null
    dailyProgress: number | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    name: number
    description: number
    cadence: number
    startDate: number
    timeWindow: number
    goalAmount: number
    goalUnit: number
    goalUnitCategory: number
    createdAt: number
    updatedAt: number
    userId: number
    sourcePopularPostId: number
    dailyProgress: number
    _all: number
  }


  export type HabitAvgAggregateInputType = {
    goalAmount?: true
    dailyProgress?: true
  }

  export type HabitSumAggregateInputType = {
    goalAmount?: true
    dailyProgress?: true
  }

  export type HabitMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cadence?: true
    startDate?: true
    timeWindow?: true
    goalAmount?: true
    goalUnit?: true
    goalUnitCategory?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    sourcePopularPostId?: true
    dailyProgress?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cadence?: true
    startDate?: true
    timeWindow?: true
    goalAmount?: true
    goalUnit?: true
    goalUnitCategory?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    sourcePopularPostId?: true
    dailyProgress?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cadence?: true
    startDate?: true
    timeWindow?: true
    goalAmount?: true
    goalUnit?: true
    goalUnitCategory?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    sourcePopularPostId?: true
    dailyProgress?: true
    _all?: true
  }

  export type HabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithAggregationInput | HabitOrderByWithAggregationInput[]
    by: HabitScalarFieldEnum[] | HabitScalarFieldEnum
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _avg?: HabitAvgAggregateInputType
    _sum?: HabitSumAggregateInputType
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }

  export type HabitGroupByOutputType = {
    id: string
    name: string
    description: string | null
    cadence: string
    startDate: Date
    timeWindow: string | null
    goalAmount: number
    goalUnit: string
    goalUnitCategory: string
    createdAt: Date
    updatedAt: Date
    userId: string
    sourcePopularPostId: string | null
    dailyProgress: number
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cadence?: boolean
    startDate?: boolean
    timeWindow?: boolean
    goalAmount?: boolean
    goalUnit?: boolean
    goalUnitCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    sourcePopularPostId?: boolean
    dailyProgress?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dailyProgressEntries?: boolean | Habit$dailyProgressEntriesArgs<ExtArgs>
    post_habit?: boolean | Habit$post_habitArgs<ExtArgs>
    routineHabits?: boolean | Habit$routineHabitsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cadence?: boolean
    startDate?: boolean
    timeWindow?: boolean
    goalAmount?: boolean
    goalUnit?: boolean
    goalUnitCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    sourcePopularPostId?: boolean
    dailyProgress?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cadence?: boolean
    startDate?: boolean
    timeWindow?: boolean
    goalAmount?: boolean
    goalUnit?: boolean
    goalUnitCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    sourcePopularPostId?: boolean
    dailyProgress?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    cadence?: boolean
    startDate?: boolean
    timeWindow?: boolean
    goalAmount?: boolean
    goalUnit?: boolean
    goalUnitCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    sourcePopularPostId?: boolean
    dailyProgress?: boolean
  }

  export type HabitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "cadence" | "startDate" | "timeWindow" | "goalAmount" | "goalUnit" | "goalUnitCategory" | "createdAt" | "updatedAt" | "userId" | "sourcePopularPostId" | "dailyProgress", ExtArgs["result"]["habit"]>
  export type HabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dailyProgressEntries?: boolean | Habit$dailyProgressEntriesArgs<ExtArgs>
    post_habit?: boolean | Habit$post_habitArgs<ExtArgs>
    routineHabits?: boolean | Habit$routineHabitsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HabitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      dailyProgressEntries: Prisma.$HabitDailyProgressPayload<ExtArgs>[]
      post_habit: Prisma.$PostHabitPayload<ExtArgs>[]
      routineHabits: Prisma.$RoutineHabitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      cadence: string
      startDate: Date
      timeWindow: string | null
      goalAmount: number
      goalUnit: string
      goalUnitCategory: string
      createdAt: Date
      updatedAt: Date
      userId: string
      sourcePopularPostId: string | null
      dailyProgress: number
    }, ExtArgs["result"]["habit"]>
    composites: {}
  }

  type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = $Result.GetResult<Prisma.$HabitPayload, S>

  type HabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit'], meta: { name: 'Habit' } }
    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitFindUniqueArgs>(args: SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitFindFirstArgs>(args?: SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitFindManyArgs>(args?: SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
     */
    create<T extends HabitCreateArgs>(args: SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habits.
     * @param {HabitCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCreateManyArgs>(args?: SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habits and returns the data saved in the database.
     * @param {HabitCreateManyAndReturnArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
     */
    delete<T extends HabitDeleteArgs>(args: SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitUpdateArgs>(args: SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDeleteManyArgs>(args?: SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitUpdateManyArgs>(args: SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits and returns the data updated in the database.
     * @param {HabitUpdateManyAndReturnArgs} args - Arguments to update many Habits.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.updateManyAndReturn({
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
    updateManyAndReturn<T extends HabitUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
     */
    upsert<T extends HabitUpsertArgs>(args: SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
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
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit model
   */
  readonly fields: HabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dailyProgressEntries<T extends Habit$dailyProgressEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Habit$dailyProgressEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitDailyProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post_habit<T extends Habit$post_habitArgs<ExtArgs> = {}>(args?: Subset<T, Habit$post_habitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routineHabits<T extends Habit$routineHabitsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$routineHabitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Habit model
   */
  interface HabitFieldRefs {
    readonly id: FieldRef<"Habit", 'String'>
    readonly name: FieldRef<"Habit", 'String'>
    readonly description: FieldRef<"Habit", 'String'>
    readonly cadence: FieldRef<"Habit", 'String'>
    readonly startDate: FieldRef<"Habit", 'DateTime'>
    readonly timeWindow: FieldRef<"Habit", 'String'>
    readonly goalAmount: FieldRef<"Habit", 'Float'>
    readonly goalUnit: FieldRef<"Habit", 'String'>
    readonly goalUnitCategory: FieldRef<"Habit", 'String'>
    readonly createdAt: FieldRef<"Habit", 'DateTime'>
    readonly updatedAt: FieldRef<"Habit", 'DateTime'>
    readonly userId: FieldRef<"Habit", 'String'>
    readonly sourcePopularPostId: FieldRef<"Habit", 'String'>
    readonly dailyProgress: FieldRef<"Habit", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Habit findUnique
   */
  export type HabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findFirst
   */
  export type HabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findMany
   */
  export type HabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit create
   */
  export type HabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }

  /**
   * Habit createMany
   */
  export type HabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit createManyAndReturn
   */
  export type HabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit update
   */
  export type HabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
  }

  /**
   * Habit updateManyAndReturn
   */
  export type HabitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit upsert
   */
  export type HabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }

  /**
   * Habit delete
   */
  export type HabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to delete.
     */
    limit?: number
  }

  /**
   * Habit.dailyProgressEntries
   */
  export type Habit$dailyProgressEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressInclude<ExtArgs> | null
    where?: HabitDailyProgressWhereInput
    orderBy?: HabitDailyProgressOrderByWithRelationInput | HabitDailyProgressOrderByWithRelationInput[]
    cursor?: HabitDailyProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitDailyProgressScalarFieldEnum | HabitDailyProgressScalarFieldEnum[]
  }

  /**
   * Habit.post_habit
   */
  export type Habit$post_habitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitInclude<ExtArgs> | null
    where?: PostHabitWhereInput
    orderBy?: PostHabitOrderByWithRelationInput | PostHabitOrderByWithRelationInput[]
    cursor?: PostHabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostHabitScalarFieldEnum | PostHabitScalarFieldEnum[]
  }

  /**
   * Habit.routineHabits
   */
  export type Habit$routineHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitInclude<ExtArgs> | null
    where?: RoutineHabitWhereInput
    orderBy?: RoutineHabitOrderByWithRelationInput | RoutineHabitOrderByWithRelationInput[]
    cursor?: RoutineHabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineHabitScalarFieldEnum | RoutineHabitScalarFieldEnum[]
  }

  /**
   * Habit without action
   */
  export type HabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
  }


  /**
   * Model HabitDailyProgress
   */

  export type AggregateHabitDailyProgress = {
    _count: HabitDailyProgressCountAggregateOutputType | null
    _avg: HabitDailyProgressAvgAggregateOutputType | null
    _sum: HabitDailyProgressSumAggregateOutputType | null
    _min: HabitDailyProgressMinAggregateOutputType | null
    _max: HabitDailyProgressMaxAggregateOutputType | null
  }

  export type HabitDailyProgressAvgAggregateOutputType = {
    progress: number | null
  }

  export type HabitDailyProgressSumAggregateOutputType = {
    progress: number | null
  }

  export type HabitDailyProgressMinAggregateOutputType = {
    id: string | null
    habitId: string | null
    date: Date | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitDailyProgressMaxAggregateOutputType = {
    id: string | null
    habitId: string | null
    date: Date | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitDailyProgressCountAggregateOutputType = {
    id: number
    habitId: number
    date: number
    progress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HabitDailyProgressAvgAggregateInputType = {
    progress?: true
  }

  export type HabitDailyProgressSumAggregateInputType = {
    progress?: true
  }

  export type HabitDailyProgressMinAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitDailyProgressMaxAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitDailyProgressCountAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HabitDailyProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitDailyProgress to aggregate.
     */
    where?: HabitDailyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitDailyProgresses to fetch.
     */
    orderBy?: HabitDailyProgressOrderByWithRelationInput | HabitDailyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitDailyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitDailyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitDailyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitDailyProgresses
    **/
    _count?: true | HabitDailyProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitDailyProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitDailyProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitDailyProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitDailyProgressMaxAggregateInputType
  }

  export type GetHabitDailyProgressAggregateType<T extends HabitDailyProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitDailyProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitDailyProgress[P]>
      : GetScalarType<T[P], AggregateHabitDailyProgress[P]>
  }




  export type HabitDailyProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitDailyProgressWhereInput
    orderBy?: HabitDailyProgressOrderByWithAggregationInput | HabitDailyProgressOrderByWithAggregationInput[]
    by: HabitDailyProgressScalarFieldEnum[] | HabitDailyProgressScalarFieldEnum
    having?: HabitDailyProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitDailyProgressCountAggregateInputType | true
    _avg?: HabitDailyProgressAvgAggregateInputType
    _sum?: HabitDailyProgressSumAggregateInputType
    _min?: HabitDailyProgressMinAggregateInputType
    _max?: HabitDailyProgressMaxAggregateInputType
  }

  export type HabitDailyProgressGroupByOutputType = {
    id: string
    habitId: string
    date: Date
    progress: number
    createdAt: Date
    updatedAt: Date
    _count: HabitDailyProgressCountAggregateOutputType | null
    _avg: HabitDailyProgressAvgAggregateOutputType | null
    _sum: HabitDailyProgressSumAggregateOutputType | null
    _min: HabitDailyProgressMinAggregateOutputType | null
    _max: HabitDailyProgressMaxAggregateOutputType | null
  }

  type GetHabitDailyProgressGroupByPayload<T extends HabitDailyProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitDailyProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitDailyProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitDailyProgressGroupByOutputType[P]>
            : GetScalarType<T[P], HabitDailyProgressGroupByOutputType[P]>
        }
      >
    >


  export type HabitDailyProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    date?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitDailyProgress"]>

  export type HabitDailyProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    date?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitDailyProgress"]>

  export type HabitDailyProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    date?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitDailyProgress"]>

  export type HabitDailyProgressSelectScalar = {
    id?: boolean
    habitId?: boolean
    date?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HabitDailyProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "habitId" | "date" | "progress" | "createdAt" | "updatedAt", ExtArgs["result"]["habitDailyProgress"]>
  export type HabitDailyProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }
  export type HabitDailyProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }
  export type HabitDailyProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }

  export type $HabitDailyProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HabitDailyProgress"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      habitId: string
      date: Date
      progress: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["habitDailyProgress"]>
    composites: {}
  }

  type HabitDailyProgressGetPayload<S extends boolean | null | undefined | HabitDailyProgressDefaultArgs> = $Result.GetResult<Prisma.$HabitDailyProgressPayload, S>

  type HabitDailyProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitDailyProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitDailyProgressCountAggregateInputType | true
    }

  export interface HabitDailyProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabitDailyProgress'], meta: { name: 'HabitDailyProgress' } }
    /**
     * Find zero or one HabitDailyProgress that matches the filter.
     * @param {HabitDailyProgressFindUniqueArgs} args - Arguments to find a HabitDailyProgress
     * @example
     * // Get one HabitDailyProgress
     * const habitDailyProgress = await prisma.habitDailyProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitDailyProgressFindUniqueArgs>(args: SelectSubset<T, HabitDailyProgressFindUniqueArgs<ExtArgs>>): Prisma__HabitDailyProgressClient<$Result.GetResult<Prisma.$HabitDailyProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HabitDailyProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitDailyProgressFindUniqueOrThrowArgs} args - Arguments to find a HabitDailyProgress
     * @example
     * // Get one HabitDailyProgress
     * const habitDailyProgress = await prisma.habitDailyProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitDailyProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitDailyProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitDailyProgressClient<$Result.GetResult<Prisma.$HabitDailyProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitDailyProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDailyProgressFindFirstArgs} args - Arguments to find a HabitDailyProgress
     * @example
     * // Get one HabitDailyProgress
     * const habitDailyProgress = await prisma.habitDailyProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitDailyProgressFindFirstArgs>(args?: SelectSubset<T, HabitDailyProgressFindFirstArgs<ExtArgs>>): Prisma__HabitDailyProgressClient<$Result.GetResult<Prisma.$HabitDailyProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitDailyProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDailyProgressFindFirstOrThrowArgs} args - Arguments to find a HabitDailyProgress
     * @example
     * // Get one HabitDailyProgress
     * const habitDailyProgress = await prisma.habitDailyProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitDailyProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitDailyProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitDailyProgressClient<$Result.GetResult<Prisma.$HabitDailyProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HabitDailyProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDailyProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitDailyProgresses
     * const habitDailyProgresses = await prisma.habitDailyProgress.findMany()
     * 
     * // Get first 10 HabitDailyProgresses
     * const habitDailyProgresses = await prisma.habitDailyProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitDailyProgressWithIdOnly = await prisma.habitDailyProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitDailyProgressFindManyArgs>(args?: SelectSubset<T, HabitDailyProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitDailyProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HabitDailyProgress.
     * @param {HabitDailyProgressCreateArgs} args - Arguments to create a HabitDailyProgress.
     * @example
     * // Create one HabitDailyProgress
     * const HabitDailyProgress = await prisma.habitDailyProgress.create({
     *   data: {
     *     // ... data to create a HabitDailyProgress
     *   }
     * })
     * 
     */
    create<T extends HabitDailyProgressCreateArgs>(args: SelectSubset<T, HabitDailyProgressCreateArgs<ExtArgs>>): Prisma__HabitDailyProgressClient<$Result.GetResult<Prisma.$HabitDailyProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HabitDailyProgresses.
     * @param {HabitDailyProgressCreateManyArgs} args - Arguments to create many HabitDailyProgresses.
     * @example
     * // Create many HabitDailyProgresses
     * const habitDailyProgress = await prisma.habitDailyProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitDailyProgressCreateManyArgs>(args?: SelectSubset<T, HabitDailyProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HabitDailyProgresses and returns the data saved in the database.
     * @param {HabitDailyProgressCreateManyAndReturnArgs} args - Arguments to create many HabitDailyProgresses.
     * @example
     * // Create many HabitDailyProgresses
     * const habitDailyProgress = await prisma.habitDailyProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HabitDailyProgresses and only return the `id`
     * const habitDailyProgressWithIdOnly = await prisma.habitDailyProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitDailyProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitDailyProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitDailyProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HabitDailyProgress.
     * @param {HabitDailyProgressDeleteArgs} args - Arguments to delete one HabitDailyProgress.
     * @example
     * // Delete one HabitDailyProgress
     * const HabitDailyProgress = await prisma.habitDailyProgress.delete({
     *   where: {
     *     // ... filter to delete one HabitDailyProgress
     *   }
     * })
     * 
     */
    delete<T extends HabitDailyProgressDeleteArgs>(args: SelectSubset<T, HabitDailyProgressDeleteArgs<ExtArgs>>): Prisma__HabitDailyProgressClient<$Result.GetResult<Prisma.$HabitDailyProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HabitDailyProgress.
     * @param {HabitDailyProgressUpdateArgs} args - Arguments to update one HabitDailyProgress.
     * @example
     * // Update one HabitDailyProgress
     * const habitDailyProgress = await prisma.habitDailyProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitDailyProgressUpdateArgs>(args: SelectSubset<T, HabitDailyProgressUpdateArgs<ExtArgs>>): Prisma__HabitDailyProgressClient<$Result.GetResult<Prisma.$HabitDailyProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HabitDailyProgresses.
     * @param {HabitDailyProgressDeleteManyArgs} args - Arguments to filter HabitDailyProgresses to delete.
     * @example
     * // Delete a few HabitDailyProgresses
     * const { count } = await prisma.habitDailyProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDailyProgressDeleteManyArgs>(args?: SelectSubset<T, HabitDailyProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitDailyProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDailyProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitDailyProgresses
     * const habitDailyProgress = await prisma.habitDailyProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitDailyProgressUpdateManyArgs>(args: SelectSubset<T, HabitDailyProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitDailyProgresses and returns the data updated in the database.
     * @param {HabitDailyProgressUpdateManyAndReturnArgs} args - Arguments to update many HabitDailyProgresses.
     * @example
     * // Update many HabitDailyProgresses
     * const habitDailyProgress = await prisma.habitDailyProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HabitDailyProgresses and only return the `id`
     * const habitDailyProgressWithIdOnly = await prisma.habitDailyProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends HabitDailyProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitDailyProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitDailyProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HabitDailyProgress.
     * @param {HabitDailyProgressUpsertArgs} args - Arguments to update or create a HabitDailyProgress.
     * @example
     * // Update or create a HabitDailyProgress
     * const habitDailyProgress = await prisma.habitDailyProgress.upsert({
     *   create: {
     *     // ... data to create a HabitDailyProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitDailyProgress we want to update
     *   }
     * })
     */
    upsert<T extends HabitDailyProgressUpsertArgs>(args: SelectSubset<T, HabitDailyProgressUpsertArgs<ExtArgs>>): Prisma__HabitDailyProgressClient<$Result.GetResult<Prisma.$HabitDailyProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HabitDailyProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDailyProgressCountArgs} args - Arguments to filter HabitDailyProgresses to count.
     * @example
     * // Count the number of HabitDailyProgresses
     * const count = await prisma.habitDailyProgress.count({
     *   where: {
     *     // ... the filter for the HabitDailyProgresses we want to count
     *   }
     * })
    **/
    count<T extends HabitDailyProgressCountArgs>(
      args?: Subset<T, HabitDailyProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitDailyProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitDailyProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDailyProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabitDailyProgressAggregateArgs>(args: Subset<T, HabitDailyProgressAggregateArgs>): Prisma.PrismaPromise<GetHabitDailyProgressAggregateType<T>>

    /**
     * Group by HabitDailyProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitDailyProgressGroupByArgs} args - Group by arguments.
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
      T extends HabitDailyProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitDailyProgressGroupByArgs['orderBy'] }
        : { orderBy?: HabitDailyProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HabitDailyProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitDailyProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HabitDailyProgress model
   */
  readonly fields: HabitDailyProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitDailyProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitDailyProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HabitDailyProgress model
   */
  interface HabitDailyProgressFieldRefs {
    readonly id: FieldRef<"HabitDailyProgress", 'String'>
    readonly habitId: FieldRef<"HabitDailyProgress", 'String'>
    readonly date: FieldRef<"HabitDailyProgress", 'DateTime'>
    readonly progress: FieldRef<"HabitDailyProgress", 'Float'>
    readonly createdAt: FieldRef<"HabitDailyProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"HabitDailyProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HabitDailyProgress findUnique
   */
  export type HabitDailyProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressInclude<ExtArgs> | null
    /**
     * Filter, which HabitDailyProgress to fetch.
     */
    where: HabitDailyProgressWhereUniqueInput
  }

  /**
   * HabitDailyProgress findUniqueOrThrow
   */
  export type HabitDailyProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressInclude<ExtArgs> | null
    /**
     * Filter, which HabitDailyProgress to fetch.
     */
    where: HabitDailyProgressWhereUniqueInput
  }

  /**
   * HabitDailyProgress findFirst
   */
  export type HabitDailyProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressInclude<ExtArgs> | null
    /**
     * Filter, which HabitDailyProgress to fetch.
     */
    where?: HabitDailyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitDailyProgresses to fetch.
     */
    orderBy?: HabitDailyProgressOrderByWithRelationInput | HabitDailyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitDailyProgresses.
     */
    cursor?: HabitDailyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitDailyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitDailyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitDailyProgresses.
     */
    distinct?: HabitDailyProgressScalarFieldEnum | HabitDailyProgressScalarFieldEnum[]
  }

  /**
   * HabitDailyProgress findFirstOrThrow
   */
  export type HabitDailyProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressInclude<ExtArgs> | null
    /**
     * Filter, which HabitDailyProgress to fetch.
     */
    where?: HabitDailyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitDailyProgresses to fetch.
     */
    orderBy?: HabitDailyProgressOrderByWithRelationInput | HabitDailyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitDailyProgresses.
     */
    cursor?: HabitDailyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitDailyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitDailyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitDailyProgresses.
     */
    distinct?: HabitDailyProgressScalarFieldEnum | HabitDailyProgressScalarFieldEnum[]
  }

  /**
   * HabitDailyProgress findMany
   */
  export type HabitDailyProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressInclude<ExtArgs> | null
    /**
     * Filter, which HabitDailyProgresses to fetch.
     */
    where?: HabitDailyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitDailyProgresses to fetch.
     */
    orderBy?: HabitDailyProgressOrderByWithRelationInput | HabitDailyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitDailyProgresses.
     */
    cursor?: HabitDailyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitDailyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitDailyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitDailyProgresses.
     */
    distinct?: HabitDailyProgressScalarFieldEnum | HabitDailyProgressScalarFieldEnum[]
  }

  /**
   * HabitDailyProgress create
   */
  export type HabitDailyProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a HabitDailyProgress.
     */
    data: XOR<HabitDailyProgressCreateInput, HabitDailyProgressUncheckedCreateInput>
  }

  /**
   * HabitDailyProgress createMany
   */
  export type HabitDailyProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabitDailyProgresses.
     */
    data: HabitDailyProgressCreateManyInput | HabitDailyProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HabitDailyProgress createManyAndReturn
   */
  export type HabitDailyProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * The data used to create many HabitDailyProgresses.
     */
    data: HabitDailyProgressCreateManyInput | HabitDailyProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitDailyProgress update
   */
  export type HabitDailyProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a HabitDailyProgress.
     */
    data: XOR<HabitDailyProgressUpdateInput, HabitDailyProgressUncheckedUpdateInput>
    /**
     * Choose, which HabitDailyProgress to update.
     */
    where: HabitDailyProgressWhereUniqueInput
  }

  /**
   * HabitDailyProgress updateMany
   */
  export type HabitDailyProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabitDailyProgresses.
     */
    data: XOR<HabitDailyProgressUpdateManyMutationInput, HabitDailyProgressUncheckedUpdateManyInput>
    /**
     * Filter which HabitDailyProgresses to update
     */
    where?: HabitDailyProgressWhereInput
    /**
     * Limit how many HabitDailyProgresses to update.
     */
    limit?: number
  }

  /**
   * HabitDailyProgress updateManyAndReturn
   */
  export type HabitDailyProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * The data used to update HabitDailyProgresses.
     */
    data: XOR<HabitDailyProgressUpdateManyMutationInput, HabitDailyProgressUncheckedUpdateManyInput>
    /**
     * Filter which HabitDailyProgresses to update
     */
    where?: HabitDailyProgressWhereInput
    /**
     * Limit how many HabitDailyProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitDailyProgress upsert
   */
  export type HabitDailyProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the HabitDailyProgress to update in case it exists.
     */
    where: HabitDailyProgressWhereUniqueInput
    /**
     * In case the HabitDailyProgress found by the `where` argument doesn't exist, create a new HabitDailyProgress with this data.
     */
    create: XOR<HabitDailyProgressCreateInput, HabitDailyProgressUncheckedCreateInput>
    /**
     * In case the HabitDailyProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitDailyProgressUpdateInput, HabitDailyProgressUncheckedUpdateInput>
  }

  /**
   * HabitDailyProgress delete
   */
  export type HabitDailyProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressInclude<ExtArgs> | null
    /**
     * Filter which HabitDailyProgress to delete.
     */
    where: HabitDailyProgressWhereUniqueInput
  }

  /**
   * HabitDailyProgress deleteMany
   */
  export type HabitDailyProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitDailyProgresses to delete
     */
    where?: HabitDailyProgressWhereInput
    /**
     * Limit how many HabitDailyProgresses to delete.
     */
    limit?: number
  }

  /**
   * HabitDailyProgress without action
   */
  export type HabitDailyProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitDailyProgress
     */
    select?: HabitDailyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitDailyProgress
     */
    omit?: HabitDailyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitDailyProgressInclude<ExtArgs> | null
  }


  /**
   * Model Routine
   */

  export type AggregateRoutine = {
    _count: RoutineCountAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  export type RoutineMinAggregateOutputType = {
    id: string | null
    name: string | null
    anchor: string | null
    notes: string | null
    timeWindow: $Enums.RoutineTimeWindow | null
    isDefault: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    anchor: string | null
    notes: string | null
    timeWindow: $Enums.RoutineTimeWindow | null
    isDefault: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineCountAggregateOutputType = {
    id: number
    name: number
    anchor: number
    notes: number
    timeWindow: number
    isDefault: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoutineMinAggregateInputType = {
    id?: true
    name?: true
    anchor?: true
    notes?: true
    timeWindow?: true
    isDefault?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineMaxAggregateInputType = {
    id?: true
    name?: true
    anchor?: true
    notes?: true
    timeWindow?: true
    isDefault?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineCountAggregateInputType = {
    id?: true
    name?: true
    anchor?: true
    notes?: true
    timeWindow?: true
    isDefault?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routine to aggregate.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routines
    **/
    _count?: true | RoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineMaxAggregateInputType
  }

  export type GetRoutineAggregateType<T extends RoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutine[P]>
      : GetScalarType<T[P], AggregateRoutine[P]>
  }




  export type RoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithAggregationInput | RoutineOrderByWithAggregationInput[]
    by: RoutineScalarFieldEnum[] | RoutineScalarFieldEnum
    having?: RoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineCountAggregateInputType | true
    _min?: RoutineMinAggregateInputType
    _max?: RoutineMaxAggregateInputType
  }

  export type RoutineGroupByOutputType = {
    id: string
    name: string
    anchor: string | null
    notes: string | null
    timeWindow: $Enums.RoutineTimeWindow
    isDefault: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: RoutineCountAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  type GetRoutineGroupByPayload<T extends RoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineGroupByOutputType[P]>
        }
      >
    >


  export type RoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    anchor?: boolean
    notes?: boolean
    timeWindow?: boolean
    isDefault?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    habits?: boolean | Routine$habitsArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    anchor?: boolean
    notes?: boolean
    timeWindow?: boolean
    isDefault?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    anchor?: boolean
    notes?: boolean
    timeWindow?: boolean
    isDefault?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectScalar = {
    id?: boolean
    name?: boolean
    anchor?: boolean
    notes?: boolean
    timeWindow?: boolean
    isDefault?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoutineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "anchor" | "notes" | "timeWindow" | "isDefault" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["routine"]>
  export type RoutineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    habits?: boolean | Routine$habitsArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoutineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoutineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Routine"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      habits: Prisma.$RoutineHabitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      anchor: string | null
      notes: string | null
      timeWindow: $Enums.RoutineTimeWindow
      isDefault: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["routine"]>
    composites: {}
  }

  type RoutineGetPayload<S extends boolean | null | undefined | RoutineDefaultArgs> = $Result.GetResult<Prisma.$RoutinePayload, S>

  type RoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutineCountAggregateInputType | true
    }

  export interface RoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Routine'], meta: { name: 'Routine' } }
    /**
     * Find zero or one Routine that matches the filter.
     * @param {RoutineFindUniqueArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineFindUniqueArgs>(args: SelectSubset<T, RoutineFindUniqueArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Routine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutineFindUniqueOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineFindFirstArgs>(args?: SelectSubset<T, RoutineFindFirstArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routines
     * const routines = await prisma.routine.findMany()
     * 
     * // Get first 10 Routines
     * const routines = await prisma.routine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineWithIdOnly = await prisma.routine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineFindManyArgs>(args?: SelectSubset<T, RoutineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Routine.
     * @param {RoutineCreateArgs} args - Arguments to create a Routine.
     * @example
     * // Create one Routine
     * const Routine = await prisma.routine.create({
     *   data: {
     *     // ... data to create a Routine
     *   }
     * })
     * 
     */
    create<T extends RoutineCreateArgs>(args: SelectSubset<T, RoutineCreateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routines.
     * @param {RoutineCreateManyArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineCreateManyArgs>(args?: SelectSubset<T, RoutineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routines and returns the data saved in the database.
     * @param {RoutineCreateManyAndReturnArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routines and only return the `id`
     * const routineWithIdOnly = await prisma.routine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutineCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Routine.
     * @param {RoutineDeleteArgs} args - Arguments to delete one Routine.
     * @example
     * // Delete one Routine
     * const Routine = await prisma.routine.delete({
     *   where: {
     *     // ... filter to delete one Routine
     *   }
     * })
     * 
     */
    delete<T extends RoutineDeleteArgs>(args: SelectSubset<T, RoutineDeleteArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Routine.
     * @param {RoutineUpdateArgs} args - Arguments to update one Routine.
     * @example
     * // Update one Routine
     * const routine = await prisma.routine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineUpdateArgs>(args: SelectSubset<T, RoutineUpdateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routines.
     * @param {RoutineDeleteManyArgs} args - Arguments to filter Routines to delete.
     * @example
     * // Delete a few Routines
     * const { count } = await prisma.routine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineDeleteManyArgs>(args?: SelectSubset<T, RoutineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routines
     * const routine = await prisma.routine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineUpdateManyArgs>(args: SelectSubset<T, RoutineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines and returns the data updated in the database.
     * @param {RoutineUpdateManyAndReturnArgs} args - Arguments to update many Routines.
     * @example
     * // Update many Routines
     * const routine = await prisma.routine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routines and only return the `id`
     * const routineWithIdOnly = await prisma.routine.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoutineUpdateManyAndReturnArgs>(args: SelectSubset<T, RoutineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Routine.
     * @param {RoutineUpsertArgs} args - Arguments to update or create a Routine.
     * @example
     * // Update or create a Routine
     * const routine = await prisma.routine.upsert({
     *   create: {
     *     // ... data to create a Routine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Routine we want to update
     *   }
     * })
     */
    upsert<T extends RoutineUpsertArgs>(args: SelectSubset<T, RoutineUpsertArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineCountArgs} args - Arguments to filter Routines to count.
     * @example
     * // Count the number of Routines
     * const count = await prisma.routine.count({
     *   where: {
     *     // ... the filter for the Routines we want to count
     *   }
     * })
    **/
    count<T extends RoutineCountArgs>(
      args?: Subset<T, RoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineAggregateArgs>(args: Subset<T, RoutineAggregateArgs>): Prisma.PrismaPromise<GetRoutineAggregateType<T>>

    /**
     * Group by Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineGroupByArgs} args - Group by arguments.
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
      T extends RoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineGroupByArgs['orderBy'] }
        : { orderBy?: RoutineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Routine model
   */
  readonly fields: RoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Routine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    habits<T extends Routine$habitsArgs<ExtArgs> = {}>(args?: Subset<T, Routine$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Routine model
   */
  interface RoutineFieldRefs {
    readonly id: FieldRef<"Routine", 'String'>
    readonly name: FieldRef<"Routine", 'String'>
    readonly anchor: FieldRef<"Routine", 'String'>
    readonly notes: FieldRef<"Routine", 'String'>
    readonly timeWindow: FieldRef<"Routine", 'RoutineTimeWindow'>
    readonly isDefault: FieldRef<"Routine", 'Boolean'>
    readonly userId: FieldRef<"Routine", 'String'>
    readonly createdAt: FieldRef<"Routine", 'DateTime'>
    readonly updatedAt: FieldRef<"Routine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Routine findUnique
   */
  export type RoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findUniqueOrThrow
   */
  export type RoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findFirst
   */
  export type RoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findFirstOrThrow
   */
  export type RoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findMany
   */
  export type RoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routines to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine create
   */
  export type RoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to create a Routine.
     */
    data: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
  }

  /**
   * Routine createMany
   */
  export type RoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Routine createManyAndReturn
   */
  export type RoutineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Routine update
   */
  export type RoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to update a Routine.
     */
    data: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
    /**
     * Choose, which Routine to update.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine updateMany
   */
  export type RoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routines.
     */
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyInput>
    /**
     * Filter which Routines to update
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to update.
     */
    limit?: number
  }

  /**
   * Routine updateManyAndReturn
   */
  export type RoutineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * The data used to update Routines.
     */
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyInput>
    /**
     * Filter which Routines to update
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Routine upsert
   */
  export type RoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The filter to search for the Routine to update in case it exists.
     */
    where: RoutineWhereUniqueInput
    /**
     * In case the Routine found by the `where` argument doesn't exist, create a new Routine with this data.
     */
    create: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
    /**
     * In case the Routine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
  }

  /**
   * Routine delete
   */
  export type RoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter which Routine to delete.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine deleteMany
   */
  export type RoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routines to delete
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to delete.
     */
    limit?: number
  }

  /**
   * Routine.habits
   */
  export type Routine$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitInclude<ExtArgs> | null
    where?: RoutineHabitWhereInput
    orderBy?: RoutineHabitOrderByWithRelationInput | RoutineHabitOrderByWithRelationInput[]
    cursor?: RoutineHabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineHabitScalarFieldEnum | RoutineHabitScalarFieldEnum[]
  }

  /**
   * Routine without action
   */
  export type RoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
  }


  /**
   * Model RoutineHabit
   */

  export type AggregateRoutineHabit = {
    _count: RoutineHabitCountAggregateOutputType | null
    _avg: RoutineHabitAvgAggregateOutputType | null
    _sum: RoutineHabitSumAggregateOutputType | null
    _min: RoutineHabitMinAggregateOutputType | null
    _max: RoutineHabitMaxAggregateOutputType | null
  }

  export type RoutineHabitAvgAggregateOutputType = {
    position: number | null
  }

  export type RoutineHabitSumAggregateOutputType = {
    position: number | null
  }

  export type RoutineHabitMinAggregateOutputType = {
    id: string | null
    routineId: string | null
    habitId: string | null
    position: number | null
    createdAt: Date | null
  }

  export type RoutineHabitMaxAggregateOutputType = {
    id: string | null
    routineId: string | null
    habitId: string | null
    position: number | null
    createdAt: Date | null
  }

  export type RoutineHabitCountAggregateOutputType = {
    id: number
    routineId: number
    habitId: number
    position: number
    createdAt: number
    _all: number
  }


  export type RoutineHabitAvgAggregateInputType = {
    position?: true
  }

  export type RoutineHabitSumAggregateInputType = {
    position?: true
  }

  export type RoutineHabitMinAggregateInputType = {
    id?: true
    routineId?: true
    habitId?: true
    position?: true
    createdAt?: true
  }

  export type RoutineHabitMaxAggregateInputType = {
    id?: true
    routineId?: true
    habitId?: true
    position?: true
    createdAt?: true
  }

  export type RoutineHabitCountAggregateInputType = {
    id?: true
    routineId?: true
    habitId?: true
    position?: true
    createdAt?: true
    _all?: true
  }

  export type RoutineHabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineHabit to aggregate.
     */
    where?: RoutineHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineHabits to fetch.
     */
    orderBy?: RoutineHabitOrderByWithRelationInput | RoutineHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutineHabits
    **/
    _count?: true | RoutineHabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutineHabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutineHabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineHabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineHabitMaxAggregateInputType
  }

  export type GetRoutineHabitAggregateType<T extends RoutineHabitAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutineHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutineHabit[P]>
      : GetScalarType<T[P], AggregateRoutineHabit[P]>
  }




  export type RoutineHabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineHabitWhereInput
    orderBy?: RoutineHabitOrderByWithAggregationInput | RoutineHabitOrderByWithAggregationInput[]
    by: RoutineHabitScalarFieldEnum[] | RoutineHabitScalarFieldEnum
    having?: RoutineHabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineHabitCountAggregateInputType | true
    _avg?: RoutineHabitAvgAggregateInputType
    _sum?: RoutineHabitSumAggregateInputType
    _min?: RoutineHabitMinAggregateInputType
    _max?: RoutineHabitMaxAggregateInputType
  }

  export type RoutineHabitGroupByOutputType = {
    id: string
    routineId: string
    habitId: string
    position: number
    createdAt: Date
    _count: RoutineHabitCountAggregateOutputType | null
    _avg: RoutineHabitAvgAggregateOutputType | null
    _sum: RoutineHabitSumAggregateOutputType | null
    _min: RoutineHabitMinAggregateOutputType | null
    _max: RoutineHabitMaxAggregateOutputType | null
  }

  type GetRoutineHabitGroupByPayload<T extends RoutineHabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineHabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineHabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineHabitGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineHabitGroupByOutputType[P]>
        }
      >
    >


  export type RoutineHabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    habitId?: boolean
    position?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineHabit"]>

  export type RoutineHabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    habitId?: boolean
    position?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineHabit"]>

  export type RoutineHabitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    habitId?: boolean
    position?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineHabit"]>

  export type RoutineHabitSelectScalar = {
    id?: boolean
    routineId?: boolean
    habitId?: boolean
    position?: boolean
    createdAt?: boolean
  }

  export type RoutineHabitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routineId" | "habitId" | "position" | "createdAt", ExtArgs["result"]["routineHabit"]>
  export type RoutineHabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }
  export type RoutineHabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }
  export type RoutineHabitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }

  export type $RoutineHabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutineHabit"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
      routine: Prisma.$RoutinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routineId: string
      habitId: string
      position: number
      createdAt: Date
    }, ExtArgs["result"]["routineHabit"]>
    composites: {}
  }

  type RoutineHabitGetPayload<S extends boolean | null | undefined | RoutineHabitDefaultArgs> = $Result.GetResult<Prisma.$RoutineHabitPayload, S>

  type RoutineHabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutineHabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutineHabitCountAggregateInputType | true
    }

  export interface RoutineHabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutineHabit'], meta: { name: 'RoutineHabit' } }
    /**
     * Find zero or one RoutineHabit that matches the filter.
     * @param {RoutineHabitFindUniqueArgs} args - Arguments to find a RoutineHabit
     * @example
     * // Get one RoutineHabit
     * const routineHabit = await prisma.routineHabit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineHabitFindUniqueArgs>(args: SelectSubset<T, RoutineHabitFindUniqueArgs<ExtArgs>>): Prisma__RoutineHabitClient<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoutineHabit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutineHabitFindUniqueOrThrowArgs} args - Arguments to find a RoutineHabit
     * @example
     * // Get one RoutineHabit
     * const routineHabit = await prisma.routineHabit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineHabitFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineHabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineHabitClient<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutineHabit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHabitFindFirstArgs} args - Arguments to find a RoutineHabit
     * @example
     * // Get one RoutineHabit
     * const routineHabit = await prisma.routineHabit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineHabitFindFirstArgs>(args?: SelectSubset<T, RoutineHabitFindFirstArgs<ExtArgs>>): Prisma__RoutineHabitClient<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutineHabit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHabitFindFirstOrThrowArgs} args - Arguments to find a RoutineHabit
     * @example
     * // Get one RoutineHabit
     * const routineHabit = await prisma.routineHabit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineHabitFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineHabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineHabitClient<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoutineHabits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutineHabits
     * const routineHabits = await prisma.routineHabit.findMany()
     * 
     * // Get first 10 RoutineHabits
     * const routineHabits = await prisma.routineHabit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineHabitWithIdOnly = await prisma.routineHabit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineHabitFindManyArgs>(args?: SelectSubset<T, RoutineHabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoutineHabit.
     * @param {RoutineHabitCreateArgs} args - Arguments to create a RoutineHabit.
     * @example
     * // Create one RoutineHabit
     * const RoutineHabit = await prisma.routineHabit.create({
     *   data: {
     *     // ... data to create a RoutineHabit
     *   }
     * })
     * 
     */
    create<T extends RoutineHabitCreateArgs>(args: SelectSubset<T, RoutineHabitCreateArgs<ExtArgs>>): Prisma__RoutineHabitClient<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoutineHabits.
     * @param {RoutineHabitCreateManyArgs} args - Arguments to create many RoutineHabits.
     * @example
     * // Create many RoutineHabits
     * const routineHabit = await prisma.routineHabit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineHabitCreateManyArgs>(args?: SelectSubset<T, RoutineHabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoutineHabits and returns the data saved in the database.
     * @param {RoutineHabitCreateManyAndReturnArgs} args - Arguments to create many RoutineHabits.
     * @example
     * // Create many RoutineHabits
     * const routineHabit = await prisma.routineHabit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoutineHabits and only return the `id`
     * const routineHabitWithIdOnly = await prisma.routineHabit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutineHabitCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutineHabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoutineHabit.
     * @param {RoutineHabitDeleteArgs} args - Arguments to delete one RoutineHabit.
     * @example
     * // Delete one RoutineHabit
     * const RoutineHabit = await prisma.routineHabit.delete({
     *   where: {
     *     // ... filter to delete one RoutineHabit
     *   }
     * })
     * 
     */
    delete<T extends RoutineHabitDeleteArgs>(args: SelectSubset<T, RoutineHabitDeleteArgs<ExtArgs>>): Prisma__RoutineHabitClient<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoutineHabit.
     * @param {RoutineHabitUpdateArgs} args - Arguments to update one RoutineHabit.
     * @example
     * // Update one RoutineHabit
     * const routineHabit = await prisma.routineHabit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineHabitUpdateArgs>(args: SelectSubset<T, RoutineHabitUpdateArgs<ExtArgs>>): Prisma__RoutineHabitClient<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoutineHabits.
     * @param {RoutineHabitDeleteManyArgs} args - Arguments to filter RoutineHabits to delete.
     * @example
     * // Delete a few RoutineHabits
     * const { count } = await prisma.routineHabit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineHabitDeleteManyArgs>(args?: SelectSubset<T, RoutineHabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutineHabits
     * const routineHabit = await prisma.routineHabit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineHabitUpdateManyArgs>(args: SelectSubset<T, RoutineHabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineHabits and returns the data updated in the database.
     * @param {RoutineHabitUpdateManyAndReturnArgs} args - Arguments to update many RoutineHabits.
     * @example
     * // Update many RoutineHabits
     * const routineHabit = await prisma.routineHabit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoutineHabits and only return the `id`
     * const routineHabitWithIdOnly = await prisma.routineHabit.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoutineHabitUpdateManyAndReturnArgs>(args: SelectSubset<T, RoutineHabitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoutineHabit.
     * @param {RoutineHabitUpsertArgs} args - Arguments to update or create a RoutineHabit.
     * @example
     * // Update or create a RoutineHabit
     * const routineHabit = await prisma.routineHabit.upsert({
     *   create: {
     *     // ... data to create a RoutineHabit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutineHabit we want to update
     *   }
     * })
     */
    upsert<T extends RoutineHabitUpsertArgs>(args: SelectSubset<T, RoutineHabitUpsertArgs<ExtArgs>>): Prisma__RoutineHabitClient<$Result.GetResult<Prisma.$RoutineHabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoutineHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHabitCountArgs} args - Arguments to filter RoutineHabits to count.
     * @example
     * // Count the number of RoutineHabits
     * const count = await prisma.routineHabit.count({
     *   where: {
     *     // ... the filter for the RoutineHabits we want to count
     *   }
     * })
    **/
    count<T extends RoutineHabitCountArgs>(
      args?: Subset<T, RoutineHabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineHabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutineHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineHabitAggregateArgs>(args: Subset<T, RoutineHabitAggregateArgs>): Prisma.PrismaPromise<GetRoutineHabitAggregateType<T>>

    /**
     * Group by RoutineHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHabitGroupByArgs} args - Group by arguments.
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
      T extends RoutineHabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineHabitGroupByArgs['orderBy'] }
        : { orderBy?: RoutineHabitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineHabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutineHabit model
   */
  readonly fields: RoutineHabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutineHabit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineHabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    routine<T extends RoutineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoutineDefaultArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoutineHabit model
   */
  interface RoutineHabitFieldRefs {
    readonly id: FieldRef<"RoutineHabit", 'String'>
    readonly routineId: FieldRef<"RoutineHabit", 'String'>
    readonly habitId: FieldRef<"RoutineHabit", 'String'>
    readonly position: FieldRef<"RoutineHabit", 'Int'>
    readonly createdAt: FieldRef<"RoutineHabit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoutineHabit findUnique
   */
  export type RoutineHabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitInclude<ExtArgs> | null
    /**
     * Filter, which RoutineHabit to fetch.
     */
    where: RoutineHabitWhereUniqueInput
  }

  /**
   * RoutineHabit findUniqueOrThrow
   */
  export type RoutineHabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitInclude<ExtArgs> | null
    /**
     * Filter, which RoutineHabit to fetch.
     */
    where: RoutineHabitWhereUniqueInput
  }

  /**
   * RoutineHabit findFirst
   */
  export type RoutineHabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitInclude<ExtArgs> | null
    /**
     * Filter, which RoutineHabit to fetch.
     */
    where?: RoutineHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineHabits to fetch.
     */
    orderBy?: RoutineHabitOrderByWithRelationInput | RoutineHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineHabits.
     */
    cursor?: RoutineHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineHabits.
     */
    distinct?: RoutineHabitScalarFieldEnum | RoutineHabitScalarFieldEnum[]
  }

  /**
   * RoutineHabit findFirstOrThrow
   */
  export type RoutineHabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitInclude<ExtArgs> | null
    /**
     * Filter, which RoutineHabit to fetch.
     */
    where?: RoutineHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineHabits to fetch.
     */
    orderBy?: RoutineHabitOrderByWithRelationInput | RoutineHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineHabits.
     */
    cursor?: RoutineHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineHabits.
     */
    distinct?: RoutineHabitScalarFieldEnum | RoutineHabitScalarFieldEnum[]
  }

  /**
   * RoutineHabit findMany
   */
  export type RoutineHabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitInclude<ExtArgs> | null
    /**
     * Filter, which RoutineHabits to fetch.
     */
    where?: RoutineHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineHabits to fetch.
     */
    orderBy?: RoutineHabitOrderByWithRelationInput | RoutineHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutineHabits.
     */
    cursor?: RoutineHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineHabits.
     */
    distinct?: RoutineHabitScalarFieldEnum | RoutineHabitScalarFieldEnum[]
  }

  /**
   * RoutineHabit create
   */
  export type RoutineHabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitInclude<ExtArgs> | null
    /**
     * The data needed to create a RoutineHabit.
     */
    data: XOR<RoutineHabitCreateInput, RoutineHabitUncheckedCreateInput>
  }

  /**
   * RoutineHabit createMany
   */
  export type RoutineHabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutineHabits.
     */
    data: RoutineHabitCreateManyInput | RoutineHabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoutineHabit createManyAndReturn
   */
  export type RoutineHabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * The data used to create many RoutineHabits.
     */
    data: RoutineHabitCreateManyInput | RoutineHabitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutineHabit update
   */
  export type RoutineHabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitInclude<ExtArgs> | null
    /**
     * The data needed to update a RoutineHabit.
     */
    data: XOR<RoutineHabitUpdateInput, RoutineHabitUncheckedUpdateInput>
    /**
     * Choose, which RoutineHabit to update.
     */
    where: RoutineHabitWhereUniqueInput
  }

  /**
   * RoutineHabit updateMany
   */
  export type RoutineHabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutineHabits.
     */
    data: XOR<RoutineHabitUpdateManyMutationInput, RoutineHabitUncheckedUpdateManyInput>
    /**
     * Filter which RoutineHabits to update
     */
    where?: RoutineHabitWhereInput
    /**
     * Limit how many RoutineHabits to update.
     */
    limit?: number
  }

  /**
   * RoutineHabit updateManyAndReturn
   */
  export type RoutineHabitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * The data used to update RoutineHabits.
     */
    data: XOR<RoutineHabitUpdateManyMutationInput, RoutineHabitUncheckedUpdateManyInput>
    /**
     * Filter which RoutineHabits to update
     */
    where?: RoutineHabitWhereInput
    /**
     * Limit how many RoutineHabits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutineHabit upsert
   */
  export type RoutineHabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitInclude<ExtArgs> | null
    /**
     * The filter to search for the RoutineHabit to update in case it exists.
     */
    where: RoutineHabitWhereUniqueInput
    /**
     * In case the RoutineHabit found by the `where` argument doesn't exist, create a new RoutineHabit with this data.
     */
    create: XOR<RoutineHabitCreateInput, RoutineHabitUncheckedCreateInput>
    /**
     * In case the RoutineHabit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineHabitUpdateInput, RoutineHabitUncheckedUpdateInput>
  }

  /**
   * RoutineHabit delete
   */
  export type RoutineHabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitInclude<ExtArgs> | null
    /**
     * Filter which RoutineHabit to delete.
     */
    where: RoutineHabitWhereUniqueInput
  }

  /**
   * RoutineHabit deleteMany
   */
  export type RoutineHabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineHabits to delete
     */
    where?: RoutineHabitWhereInput
    /**
     * Limit how many RoutineHabits to delete.
     */
    limit?: number
  }

  /**
   * RoutineHabit without action
   */
  export type RoutineHabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHabit
     */
    select?: RoutineHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHabit
     */
    omit?: RoutineHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHabitInclude<ExtArgs> | null
  }


  /**
   * Model PostHabit
   */

  export type AggregatePostHabit = {
    _count: PostHabitCountAggregateOutputType | null
    _avg: PostHabitAvgAggregateOutputType | null
    _sum: PostHabitSumAggregateOutputType | null
    _min: PostHabitMinAggregateOutputType | null
    _max: PostHabitMaxAggregateOutputType | null
  }

  export type PostHabitAvgAggregateOutputType = {
    votesCount: number | null
  }

  export type PostHabitSumAggregateOutputType = {
    votesCount: number | null
  }

  export type PostHabitMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    cadence: string | null
    category: $Enums.HabitCategory | null
    habitId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    votesCount: number | null
  }

  export type PostHabitMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    cadence: string | null
    category: $Enums.HabitCategory | null
    habitId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    votesCount: number | null
  }

  export type PostHabitCountAggregateOutputType = {
    id: number
    title: number
    description: number
    cadence: number
    category: number
    habitId: number
    userId: number
    createdAt: number
    updatedAt: number
    votesCount: number
    _all: number
  }


  export type PostHabitAvgAggregateInputType = {
    votesCount?: true
  }

  export type PostHabitSumAggregateInputType = {
    votesCount?: true
  }

  export type PostHabitMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    cadence?: true
    category?: true
    habitId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    votesCount?: true
  }

  export type PostHabitMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    cadence?: true
    category?: true
    habitId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    votesCount?: true
  }

  export type PostHabitCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    cadence?: true
    category?: true
    habitId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    votesCount?: true
    _all?: true
  }

  export type PostHabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostHabit to aggregate.
     */
    where?: PostHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHabits to fetch.
     */
    orderBy?: PostHabitOrderByWithRelationInput | PostHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostHabits
    **/
    _count?: true | PostHabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostHabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostHabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostHabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostHabitMaxAggregateInputType
  }

  export type GetPostHabitAggregateType<T extends PostHabitAggregateArgs> = {
        [P in keyof T & keyof AggregatePostHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostHabit[P]>
      : GetScalarType<T[P], AggregatePostHabit[P]>
  }




  export type PostHabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHabitWhereInput
    orderBy?: PostHabitOrderByWithAggregationInput | PostHabitOrderByWithAggregationInput[]
    by: PostHabitScalarFieldEnum[] | PostHabitScalarFieldEnum
    having?: PostHabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostHabitCountAggregateInputType | true
    _avg?: PostHabitAvgAggregateInputType
    _sum?: PostHabitSumAggregateInputType
    _min?: PostHabitMinAggregateInputType
    _max?: PostHabitMaxAggregateInputType
  }

  export type PostHabitGroupByOutputType = {
    id: string
    title: string
    description: string | null
    cadence: string
    category: $Enums.HabitCategory
    habitId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    votesCount: number
    _count: PostHabitCountAggregateOutputType | null
    _avg: PostHabitAvgAggregateOutputType | null
    _sum: PostHabitSumAggregateOutputType | null
    _min: PostHabitMinAggregateOutputType | null
    _max: PostHabitMaxAggregateOutputType | null
  }

  type GetPostHabitGroupByPayload<T extends PostHabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostHabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostHabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostHabitGroupByOutputType[P]>
            : GetScalarType<T[P], PostHabitGroupByOutputType[P]>
        }
      >
    >


  export type PostHabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    cadence?: boolean
    category?: boolean
    habitId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    votesCount?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    votes?: boolean | PostHabit$votesArgs<ExtArgs>
    _count?: boolean | PostHabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHabit"]>

  export type PostHabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    cadence?: boolean
    category?: boolean
    habitId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    votesCount?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHabit"]>

  export type PostHabitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    cadence?: boolean
    category?: boolean
    habitId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    votesCount?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHabit"]>

  export type PostHabitSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    cadence?: boolean
    category?: boolean
    habitId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    votesCount?: boolean
  }

  export type PostHabitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "cadence" | "category" | "habitId" | "userId" | "createdAt" | "updatedAt" | "votesCount", ExtArgs["result"]["postHabit"]>
  export type PostHabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    votes?: boolean | PostHabit$votesArgs<ExtArgs>
    _count?: boolean | PostHabitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostHabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostHabitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostHabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostHabit"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      votes: Prisma.$PostHabitVotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      cadence: string
      category: $Enums.HabitCategory
      habitId: string
      userId: string
      createdAt: Date
      updatedAt: Date
      votesCount: number
    }, ExtArgs["result"]["postHabit"]>
    composites: {}
  }

  type PostHabitGetPayload<S extends boolean | null | undefined | PostHabitDefaultArgs> = $Result.GetResult<Prisma.$PostHabitPayload, S>

  type PostHabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostHabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostHabitCountAggregateInputType | true
    }

  export interface PostHabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostHabit'], meta: { name: 'PostHabit' } }
    /**
     * Find zero or one PostHabit that matches the filter.
     * @param {PostHabitFindUniqueArgs} args - Arguments to find a PostHabit
     * @example
     * // Get one PostHabit
     * const postHabit = await prisma.postHabit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostHabitFindUniqueArgs>(args: SelectSubset<T, PostHabitFindUniqueArgs<ExtArgs>>): Prisma__PostHabitClient<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostHabit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostHabitFindUniqueOrThrowArgs} args - Arguments to find a PostHabit
     * @example
     * // Get one PostHabit
     * const postHabit = await prisma.postHabit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostHabitFindUniqueOrThrowArgs>(args: SelectSubset<T, PostHabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostHabitClient<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostHabit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitFindFirstArgs} args - Arguments to find a PostHabit
     * @example
     * // Get one PostHabit
     * const postHabit = await prisma.postHabit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostHabitFindFirstArgs>(args?: SelectSubset<T, PostHabitFindFirstArgs<ExtArgs>>): Prisma__PostHabitClient<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostHabit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitFindFirstOrThrowArgs} args - Arguments to find a PostHabit
     * @example
     * // Get one PostHabit
     * const postHabit = await prisma.postHabit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostHabitFindFirstOrThrowArgs>(args?: SelectSubset<T, PostHabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostHabitClient<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostHabits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostHabits
     * const postHabits = await prisma.postHabit.findMany()
     * 
     * // Get first 10 PostHabits
     * const postHabits = await prisma.postHabit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postHabitWithIdOnly = await prisma.postHabit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostHabitFindManyArgs>(args?: SelectSubset<T, PostHabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostHabit.
     * @param {PostHabitCreateArgs} args - Arguments to create a PostHabit.
     * @example
     * // Create one PostHabit
     * const PostHabit = await prisma.postHabit.create({
     *   data: {
     *     // ... data to create a PostHabit
     *   }
     * })
     * 
     */
    create<T extends PostHabitCreateArgs>(args: SelectSubset<T, PostHabitCreateArgs<ExtArgs>>): Prisma__PostHabitClient<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostHabits.
     * @param {PostHabitCreateManyArgs} args - Arguments to create many PostHabits.
     * @example
     * // Create many PostHabits
     * const postHabit = await prisma.postHabit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostHabitCreateManyArgs>(args?: SelectSubset<T, PostHabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostHabits and returns the data saved in the database.
     * @param {PostHabitCreateManyAndReturnArgs} args - Arguments to create many PostHabits.
     * @example
     * // Create many PostHabits
     * const postHabit = await prisma.postHabit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostHabits and only return the `id`
     * const postHabitWithIdOnly = await prisma.postHabit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostHabitCreateManyAndReturnArgs>(args?: SelectSubset<T, PostHabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostHabit.
     * @param {PostHabitDeleteArgs} args - Arguments to delete one PostHabit.
     * @example
     * // Delete one PostHabit
     * const PostHabit = await prisma.postHabit.delete({
     *   where: {
     *     // ... filter to delete one PostHabit
     *   }
     * })
     * 
     */
    delete<T extends PostHabitDeleteArgs>(args: SelectSubset<T, PostHabitDeleteArgs<ExtArgs>>): Prisma__PostHabitClient<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostHabit.
     * @param {PostHabitUpdateArgs} args - Arguments to update one PostHabit.
     * @example
     * // Update one PostHabit
     * const postHabit = await prisma.postHabit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostHabitUpdateArgs>(args: SelectSubset<T, PostHabitUpdateArgs<ExtArgs>>): Prisma__PostHabitClient<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostHabits.
     * @param {PostHabitDeleteManyArgs} args - Arguments to filter PostHabits to delete.
     * @example
     * // Delete a few PostHabits
     * const { count } = await prisma.postHabit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostHabitDeleteManyArgs>(args?: SelectSubset<T, PostHabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostHabits
     * const postHabit = await prisma.postHabit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostHabitUpdateManyArgs>(args: SelectSubset<T, PostHabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostHabits and returns the data updated in the database.
     * @param {PostHabitUpdateManyAndReturnArgs} args - Arguments to update many PostHabits.
     * @example
     * // Update many PostHabits
     * const postHabit = await prisma.postHabit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostHabits and only return the `id`
     * const postHabitWithIdOnly = await prisma.postHabit.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostHabitUpdateManyAndReturnArgs>(args: SelectSubset<T, PostHabitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostHabit.
     * @param {PostHabitUpsertArgs} args - Arguments to update or create a PostHabit.
     * @example
     * // Update or create a PostHabit
     * const postHabit = await prisma.postHabit.upsert({
     *   create: {
     *     // ... data to create a PostHabit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostHabit we want to update
     *   }
     * })
     */
    upsert<T extends PostHabitUpsertArgs>(args: SelectSubset<T, PostHabitUpsertArgs<ExtArgs>>): Prisma__PostHabitClient<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitCountArgs} args - Arguments to filter PostHabits to count.
     * @example
     * // Count the number of PostHabits
     * const count = await prisma.postHabit.count({
     *   where: {
     *     // ... the filter for the PostHabits we want to count
     *   }
     * })
    **/
    count<T extends PostHabitCountArgs>(
      args?: Subset<T, PostHabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostHabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostHabitAggregateArgs>(args: Subset<T, PostHabitAggregateArgs>): Prisma.PrismaPromise<GetPostHabitAggregateType<T>>

    /**
     * Group by PostHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitGroupByArgs} args - Group by arguments.
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
      T extends PostHabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostHabitGroupByArgs['orderBy'] }
        : { orderBy?: PostHabitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostHabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostHabit model
   */
  readonly fields: PostHabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostHabit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostHabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends PostHabit$votesArgs<ExtArgs> = {}>(args?: Subset<T, PostHabit$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PostHabit model
   */
  interface PostHabitFieldRefs {
    readonly id: FieldRef<"PostHabit", 'String'>
    readonly title: FieldRef<"PostHabit", 'String'>
    readonly description: FieldRef<"PostHabit", 'String'>
    readonly cadence: FieldRef<"PostHabit", 'String'>
    readonly category: FieldRef<"PostHabit", 'HabitCategory'>
    readonly habitId: FieldRef<"PostHabit", 'String'>
    readonly userId: FieldRef<"PostHabit", 'String'>
    readonly createdAt: FieldRef<"PostHabit", 'DateTime'>
    readonly updatedAt: FieldRef<"PostHabit", 'DateTime'>
    readonly votesCount: FieldRef<"PostHabit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostHabit findUnique
   */
  export type PostHabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitInclude<ExtArgs> | null
    /**
     * Filter, which PostHabit to fetch.
     */
    where: PostHabitWhereUniqueInput
  }

  /**
   * PostHabit findUniqueOrThrow
   */
  export type PostHabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitInclude<ExtArgs> | null
    /**
     * Filter, which PostHabit to fetch.
     */
    where: PostHabitWhereUniqueInput
  }

  /**
   * PostHabit findFirst
   */
  export type PostHabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitInclude<ExtArgs> | null
    /**
     * Filter, which PostHabit to fetch.
     */
    where?: PostHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHabits to fetch.
     */
    orderBy?: PostHabitOrderByWithRelationInput | PostHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostHabits.
     */
    cursor?: PostHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHabits.
     */
    distinct?: PostHabitScalarFieldEnum | PostHabitScalarFieldEnum[]
  }

  /**
   * PostHabit findFirstOrThrow
   */
  export type PostHabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitInclude<ExtArgs> | null
    /**
     * Filter, which PostHabit to fetch.
     */
    where?: PostHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHabits to fetch.
     */
    orderBy?: PostHabitOrderByWithRelationInput | PostHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostHabits.
     */
    cursor?: PostHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHabits.
     */
    distinct?: PostHabitScalarFieldEnum | PostHabitScalarFieldEnum[]
  }

  /**
   * PostHabit findMany
   */
  export type PostHabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitInclude<ExtArgs> | null
    /**
     * Filter, which PostHabits to fetch.
     */
    where?: PostHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHabits to fetch.
     */
    orderBy?: PostHabitOrderByWithRelationInput | PostHabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostHabits.
     */
    cursor?: PostHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHabits.
     */
    distinct?: PostHabitScalarFieldEnum | PostHabitScalarFieldEnum[]
  }

  /**
   * PostHabit create
   */
  export type PostHabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitInclude<ExtArgs> | null
    /**
     * The data needed to create a PostHabit.
     */
    data: XOR<PostHabitCreateInput, PostHabitUncheckedCreateInput>
  }

  /**
   * PostHabit createMany
   */
  export type PostHabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostHabits.
     */
    data: PostHabitCreateManyInput | PostHabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostHabit createManyAndReturn
   */
  export type PostHabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * The data used to create many PostHabits.
     */
    data: PostHabitCreateManyInput | PostHabitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostHabit update
   */
  export type PostHabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitInclude<ExtArgs> | null
    /**
     * The data needed to update a PostHabit.
     */
    data: XOR<PostHabitUpdateInput, PostHabitUncheckedUpdateInput>
    /**
     * Choose, which PostHabit to update.
     */
    where: PostHabitWhereUniqueInput
  }

  /**
   * PostHabit updateMany
   */
  export type PostHabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostHabits.
     */
    data: XOR<PostHabitUpdateManyMutationInput, PostHabitUncheckedUpdateManyInput>
    /**
     * Filter which PostHabits to update
     */
    where?: PostHabitWhereInput
    /**
     * Limit how many PostHabits to update.
     */
    limit?: number
  }

  /**
   * PostHabit updateManyAndReturn
   */
  export type PostHabitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * The data used to update PostHabits.
     */
    data: XOR<PostHabitUpdateManyMutationInput, PostHabitUncheckedUpdateManyInput>
    /**
     * Filter which PostHabits to update
     */
    where?: PostHabitWhereInput
    /**
     * Limit how many PostHabits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostHabit upsert
   */
  export type PostHabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitInclude<ExtArgs> | null
    /**
     * The filter to search for the PostHabit to update in case it exists.
     */
    where: PostHabitWhereUniqueInput
    /**
     * In case the PostHabit found by the `where` argument doesn't exist, create a new PostHabit with this data.
     */
    create: XOR<PostHabitCreateInput, PostHabitUncheckedCreateInput>
    /**
     * In case the PostHabit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostHabitUpdateInput, PostHabitUncheckedUpdateInput>
  }

  /**
   * PostHabit delete
   */
  export type PostHabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitInclude<ExtArgs> | null
    /**
     * Filter which PostHabit to delete.
     */
    where: PostHabitWhereUniqueInput
  }

  /**
   * PostHabit deleteMany
   */
  export type PostHabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostHabits to delete
     */
    where?: PostHabitWhereInput
    /**
     * Limit how many PostHabits to delete.
     */
    limit?: number
  }

  /**
   * PostHabit.votes
   */
  export type PostHabit$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteInclude<ExtArgs> | null
    where?: PostHabitVoteWhereInput
    orderBy?: PostHabitVoteOrderByWithRelationInput | PostHabitVoteOrderByWithRelationInput[]
    cursor?: PostHabitVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostHabitVoteScalarFieldEnum | PostHabitVoteScalarFieldEnum[]
  }

  /**
   * PostHabit without action
   */
  export type PostHabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabit
     */
    select?: PostHabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabit
     */
    omit?: PostHabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitInclude<ExtArgs> | null
  }


  /**
   * Model PostHabitVote
   */

  export type AggregatePostHabitVote = {
    _count: PostHabitVoteCountAggregateOutputType | null
    _min: PostHabitVoteMinAggregateOutputType | null
    _max: PostHabitVoteMaxAggregateOutputType | null
  }

  export type PostHabitVoteMinAggregateOutputType = {
    id: string | null
    postHabitId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PostHabitVoteMaxAggregateOutputType = {
    id: string | null
    postHabitId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PostHabitVoteCountAggregateOutputType = {
    id: number
    postHabitId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PostHabitVoteMinAggregateInputType = {
    id?: true
    postHabitId?: true
    userId?: true
    createdAt?: true
  }

  export type PostHabitVoteMaxAggregateInputType = {
    id?: true
    postHabitId?: true
    userId?: true
    createdAt?: true
  }

  export type PostHabitVoteCountAggregateInputType = {
    id?: true
    postHabitId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PostHabitVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostHabitVote to aggregate.
     */
    where?: PostHabitVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHabitVotes to fetch.
     */
    orderBy?: PostHabitVoteOrderByWithRelationInput | PostHabitVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostHabitVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHabitVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHabitVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostHabitVotes
    **/
    _count?: true | PostHabitVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostHabitVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostHabitVoteMaxAggregateInputType
  }

  export type GetPostHabitVoteAggregateType<T extends PostHabitVoteAggregateArgs> = {
        [P in keyof T & keyof AggregatePostHabitVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostHabitVote[P]>
      : GetScalarType<T[P], AggregatePostHabitVote[P]>
  }




  export type PostHabitVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostHabitVoteWhereInput
    orderBy?: PostHabitVoteOrderByWithAggregationInput | PostHabitVoteOrderByWithAggregationInput[]
    by: PostHabitVoteScalarFieldEnum[] | PostHabitVoteScalarFieldEnum
    having?: PostHabitVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostHabitVoteCountAggregateInputType | true
    _min?: PostHabitVoteMinAggregateInputType
    _max?: PostHabitVoteMaxAggregateInputType
  }

  export type PostHabitVoteGroupByOutputType = {
    id: string
    postHabitId: string
    userId: string
    createdAt: Date
    _count: PostHabitVoteCountAggregateOutputType | null
    _min: PostHabitVoteMinAggregateOutputType | null
    _max: PostHabitVoteMaxAggregateOutputType | null
  }

  type GetPostHabitVoteGroupByPayload<T extends PostHabitVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostHabitVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostHabitVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostHabitVoteGroupByOutputType[P]>
            : GetScalarType<T[P], PostHabitVoteGroupByOutputType[P]>
        }
      >
    >


  export type PostHabitVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postHabitId?: boolean
    userId?: boolean
    createdAt?: boolean
    postHabit?: boolean | PostHabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHabitVote"]>

  export type PostHabitVoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postHabitId?: boolean
    userId?: boolean
    createdAt?: boolean
    postHabit?: boolean | PostHabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHabitVote"]>

  export type PostHabitVoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postHabitId?: boolean
    userId?: boolean
    createdAt?: boolean
    postHabit?: boolean | PostHabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postHabitVote"]>

  export type PostHabitVoteSelectScalar = {
    id?: boolean
    postHabitId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type PostHabitVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postHabitId" | "userId" | "createdAt", ExtArgs["result"]["postHabitVote"]>
  export type PostHabitVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postHabit?: boolean | PostHabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostHabitVoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postHabit?: boolean | PostHabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostHabitVoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postHabit?: boolean | PostHabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostHabitVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostHabitVote"
    objects: {
      postHabit: Prisma.$PostHabitPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postHabitId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["postHabitVote"]>
    composites: {}
  }

  type PostHabitVoteGetPayload<S extends boolean | null | undefined | PostHabitVoteDefaultArgs> = $Result.GetResult<Prisma.$PostHabitVotePayload, S>

  type PostHabitVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostHabitVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostHabitVoteCountAggregateInputType | true
    }

  export interface PostHabitVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostHabitVote'], meta: { name: 'PostHabitVote' } }
    /**
     * Find zero or one PostHabitVote that matches the filter.
     * @param {PostHabitVoteFindUniqueArgs} args - Arguments to find a PostHabitVote
     * @example
     * // Get one PostHabitVote
     * const postHabitVote = await prisma.postHabitVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostHabitVoteFindUniqueArgs>(args: SelectSubset<T, PostHabitVoteFindUniqueArgs<ExtArgs>>): Prisma__PostHabitVoteClient<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostHabitVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostHabitVoteFindUniqueOrThrowArgs} args - Arguments to find a PostHabitVote
     * @example
     * // Get one PostHabitVote
     * const postHabitVote = await prisma.postHabitVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostHabitVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, PostHabitVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostHabitVoteClient<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostHabitVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitVoteFindFirstArgs} args - Arguments to find a PostHabitVote
     * @example
     * // Get one PostHabitVote
     * const postHabitVote = await prisma.postHabitVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostHabitVoteFindFirstArgs>(args?: SelectSubset<T, PostHabitVoteFindFirstArgs<ExtArgs>>): Prisma__PostHabitVoteClient<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostHabitVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitVoteFindFirstOrThrowArgs} args - Arguments to find a PostHabitVote
     * @example
     * // Get one PostHabitVote
     * const postHabitVote = await prisma.postHabitVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostHabitVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, PostHabitVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostHabitVoteClient<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostHabitVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostHabitVotes
     * const postHabitVotes = await prisma.postHabitVote.findMany()
     * 
     * // Get first 10 PostHabitVotes
     * const postHabitVotes = await prisma.postHabitVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postHabitVoteWithIdOnly = await prisma.postHabitVote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostHabitVoteFindManyArgs>(args?: SelectSubset<T, PostHabitVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostHabitVote.
     * @param {PostHabitVoteCreateArgs} args - Arguments to create a PostHabitVote.
     * @example
     * // Create one PostHabitVote
     * const PostHabitVote = await prisma.postHabitVote.create({
     *   data: {
     *     // ... data to create a PostHabitVote
     *   }
     * })
     * 
     */
    create<T extends PostHabitVoteCreateArgs>(args: SelectSubset<T, PostHabitVoteCreateArgs<ExtArgs>>): Prisma__PostHabitVoteClient<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostHabitVotes.
     * @param {PostHabitVoteCreateManyArgs} args - Arguments to create many PostHabitVotes.
     * @example
     * // Create many PostHabitVotes
     * const postHabitVote = await prisma.postHabitVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostHabitVoteCreateManyArgs>(args?: SelectSubset<T, PostHabitVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostHabitVotes and returns the data saved in the database.
     * @param {PostHabitVoteCreateManyAndReturnArgs} args - Arguments to create many PostHabitVotes.
     * @example
     * // Create many PostHabitVotes
     * const postHabitVote = await prisma.postHabitVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostHabitVotes and only return the `id`
     * const postHabitVoteWithIdOnly = await prisma.postHabitVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostHabitVoteCreateManyAndReturnArgs>(args?: SelectSubset<T, PostHabitVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostHabitVote.
     * @param {PostHabitVoteDeleteArgs} args - Arguments to delete one PostHabitVote.
     * @example
     * // Delete one PostHabitVote
     * const PostHabitVote = await prisma.postHabitVote.delete({
     *   where: {
     *     // ... filter to delete one PostHabitVote
     *   }
     * })
     * 
     */
    delete<T extends PostHabitVoteDeleteArgs>(args: SelectSubset<T, PostHabitVoteDeleteArgs<ExtArgs>>): Prisma__PostHabitVoteClient<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostHabitVote.
     * @param {PostHabitVoteUpdateArgs} args - Arguments to update one PostHabitVote.
     * @example
     * // Update one PostHabitVote
     * const postHabitVote = await prisma.postHabitVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostHabitVoteUpdateArgs>(args: SelectSubset<T, PostHabitVoteUpdateArgs<ExtArgs>>): Prisma__PostHabitVoteClient<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostHabitVotes.
     * @param {PostHabitVoteDeleteManyArgs} args - Arguments to filter PostHabitVotes to delete.
     * @example
     * // Delete a few PostHabitVotes
     * const { count } = await prisma.postHabitVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostHabitVoteDeleteManyArgs>(args?: SelectSubset<T, PostHabitVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostHabitVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostHabitVotes
     * const postHabitVote = await prisma.postHabitVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostHabitVoteUpdateManyArgs>(args: SelectSubset<T, PostHabitVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostHabitVotes and returns the data updated in the database.
     * @param {PostHabitVoteUpdateManyAndReturnArgs} args - Arguments to update many PostHabitVotes.
     * @example
     * // Update many PostHabitVotes
     * const postHabitVote = await prisma.postHabitVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostHabitVotes and only return the `id`
     * const postHabitVoteWithIdOnly = await prisma.postHabitVote.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostHabitVoteUpdateManyAndReturnArgs>(args: SelectSubset<T, PostHabitVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostHabitVote.
     * @param {PostHabitVoteUpsertArgs} args - Arguments to update or create a PostHabitVote.
     * @example
     * // Update or create a PostHabitVote
     * const postHabitVote = await prisma.postHabitVote.upsert({
     *   create: {
     *     // ... data to create a PostHabitVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostHabitVote we want to update
     *   }
     * })
     */
    upsert<T extends PostHabitVoteUpsertArgs>(args: SelectSubset<T, PostHabitVoteUpsertArgs<ExtArgs>>): Prisma__PostHabitVoteClient<$Result.GetResult<Prisma.$PostHabitVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostHabitVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitVoteCountArgs} args - Arguments to filter PostHabitVotes to count.
     * @example
     * // Count the number of PostHabitVotes
     * const count = await prisma.postHabitVote.count({
     *   where: {
     *     // ... the filter for the PostHabitVotes we want to count
     *   }
     * })
    **/
    count<T extends PostHabitVoteCountArgs>(
      args?: Subset<T, PostHabitVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostHabitVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostHabitVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostHabitVoteAggregateArgs>(args: Subset<T, PostHabitVoteAggregateArgs>): Prisma.PrismaPromise<GetPostHabitVoteAggregateType<T>>

    /**
     * Group by PostHabitVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHabitVoteGroupByArgs} args - Group by arguments.
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
      T extends PostHabitVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostHabitVoteGroupByArgs['orderBy'] }
        : { orderBy?: PostHabitVoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostHabitVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostHabitVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostHabitVote model
   */
  readonly fields: PostHabitVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostHabitVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostHabitVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postHabit<T extends PostHabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostHabitDefaultArgs<ExtArgs>>): Prisma__PostHabitClient<$Result.GetResult<Prisma.$PostHabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostHabitVote model
   */
  interface PostHabitVoteFieldRefs {
    readonly id: FieldRef<"PostHabitVote", 'String'>
    readonly postHabitId: FieldRef<"PostHabitVote", 'String'>
    readonly userId: FieldRef<"PostHabitVote", 'String'>
    readonly createdAt: FieldRef<"PostHabitVote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostHabitVote findUnique
   */
  export type PostHabitVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostHabitVote to fetch.
     */
    where: PostHabitVoteWhereUniqueInput
  }

  /**
   * PostHabitVote findUniqueOrThrow
   */
  export type PostHabitVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostHabitVote to fetch.
     */
    where: PostHabitVoteWhereUniqueInput
  }

  /**
   * PostHabitVote findFirst
   */
  export type PostHabitVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostHabitVote to fetch.
     */
    where?: PostHabitVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHabitVotes to fetch.
     */
    orderBy?: PostHabitVoteOrderByWithRelationInput | PostHabitVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostHabitVotes.
     */
    cursor?: PostHabitVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHabitVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHabitVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHabitVotes.
     */
    distinct?: PostHabitVoteScalarFieldEnum | PostHabitVoteScalarFieldEnum[]
  }

  /**
   * PostHabitVote findFirstOrThrow
   */
  export type PostHabitVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostHabitVote to fetch.
     */
    where?: PostHabitVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHabitVotes to fetch.
     */
    orderBy?: PostHabitVoteOrderByWithRelationInput | PostHabitVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostHabitVotes.
     */
    cursor?: PostHabitVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHabitVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHabitVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHabitVotes.
     */
    distinct?: PostHabitVoteScalarFieldEnum | PostHabitVoteScalarFieldEnum[]
  }

  /**
   * PostHabitVote findMany
   */
  export type PostHabitVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostHabitVotes to fetch.
     */
    where?: PostHabitVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHabitVotes to fetch.
     */
    orderBy?: PostHabitVoteOrderByWithRelationInput | PostHabitVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostHabitVotes.
     */
    cursor?: PostHabitVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHabitVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHabitVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHabitVotes.
     */
    distinct?: PostHabitVoteScalarFieldEnum | PostHabitVoteScalarFieldEnum[]
  }

  /**
   * PostHabitVote create
   */
  export type PostHabitVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a PostHabitVote.
     */
    data: XOR<PostHabitVoteCreateInput, PostHabitVoteUncheckedCreateInput>
  }

  /**
   * PostHabitVote createMany
   */
  export type PostHabitVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostHabitVotes.
     */
    data: PostHabitVoteCreateManyInput | PostHabitVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostHabitVote createManyAndReturn
   */
  export type PostHabitVoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * The data used to create many PostHabitVotes.
     */
    data: PostHabitVoteCreateManyInput | PostHabitVoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostHabitVote update
   */
  export type PostHabitVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a PostHabitVote.
     */
    data: XOR<PostHabitVoteUpdateInput, PostHabitVoteUncheckedUpdateInput>
    /**
     * Choose, which PostHabitVote to update.
     */
    where: PostHabitVoteWhereUniqueInput
  }

  /**
   * PostHabitVote updateMany
   */
  export type PostHabitVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostHabitVotes.
     */
    data: XOR<PostHabitVoteUpdateManyMutationInput, PostHabitVoteUncheckedUpdateManyInput>
    /**
     * Filter which PostHabitVotes to update
     */
    where?: PostHabitVoteWhereInput
    /**
     * Limit how many PostHabitVotes to update.
     */
    limit?: number
  }

  /**
   * PostHabitVote updateManyAndReturn
   */
  export type PostHabitVoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * The data used to update PostHabitVotes.
     */
    data: XOR<PostHabitVoteUpdateManyMutationInput, PostHabitVoteUncheckedUpdateManyInput>
    /**
     * Filter which PostHabitVotes to update
     */
    where?: PostHabitVoteWhereInput
    /**
     * Limit how many PostHabitVotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostHabitVote upsert
   */
  export type PostHabitVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the PostHabitVote to update in case it exists.
     */
    where: PostHabitVoteWhereUniqueInput
    /**
     * In case the PostHabitVote found by the `where` argument doesn't exist, create a new PostHabitVote with this data.
     */
    create: XOR<PostHabitVoteCreateInput, PostHabitVoteUncheckedCreateInput>
    /**
     * In case the PostHabitVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostHabitVoteUpdateInput, PostHabitVoteUncheckedUpdateInput>
  }

  /**
   * PostHabitVote delete
   */
  export type PostHabitVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteInclude<ExtArgs> | null
    /**
     * Filter which PostHabitVote to delete.
     */
    where: PostHabitVoteWhereUniqueInput
  }

  /**
   * PostHabitVote deleteMany
   */
  export type PostHabitVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostHabitVotes to delete
     */
    where?: PostHabitVoteWhereInput
    /**
     * Limit how many PostHabitVotes to delete.
     */
    limit?: number
  }

  /**
   * PostHabitVote without action
   */
  export type PostHabitVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHabitVote
     */
    select?: PostHabitVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostHabitVote
     */
    omit?: PostHabitVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostHabitVoteInclude<ExtArgs> | null
  }


  /**
   * Model NotificationRead
   */

  export type AggregateNotificationRead = {
    _count: NotificationReadCountAggregateOutputType | null
    _min: NotificationReadMinAggregateOutputType | null
    _max: NotificationReadMaxAggregateOutputType | null
  }

  export type NotificationReadMinAggregateOutputType = {
    id: string | null
    userId: string | null
    notificationId: string | null
    createdAt: Date | null
  }

  export type NotificationReadMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    notificationId: string | null
    createdAt: Date | null
  }

  export type NotificationReadCountAggregateOutputType = {
    id: number
    userId: number
    notificationId: number
    createdAt: number
    _all: number
  }


  export type NotificationReadMinAggregateInputType = {
    id?: true
    userId?: true
    notificationId?: true
    createdAt?: true
  }

  export type NotificationReadMaxAggregateInputType = {
    id?: true
    userId?: true
    notificationId?: true
    createdAt?: true
  }

  export type NotificationReadCountAggregateInputType = {
    id?: true
    userId?: true
    notificationId?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationReadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationRead to aggregate.
     */
    where?: NotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReads to fetch.
     */
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationReads
    **/
    _count?: true | NotificationReadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationReadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationReadMaxAggregateInputType
  }

  export type GetNotificationReadAggregateType<T extends NotificationReadAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationRead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationRead[P]>
      : GetScalarType<T[P], AggregateNotificationRead[P]>
  }




  export type NotificationReadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationReadWhereInput
    orderBy?: NotificationReadOrderByWithAggregationInput | NotificationReadOrderByWithAggregationInput[]
    by: NotificationReadScalarFieldEnum[] | NotificationReadScalarFieldEnum
    having?: NotificationReadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationReadCountAggregateInputType | true
    _min?: NotificationReadMinAggregateInputType
    _max?: NotificationReadMaxAggregateInputType
  }

  export type NotificationReadGroupByOutputType = {
    id: string
    userId: string
    notificationId: string
    createdAt: Date
    _count: NotificationReadCountAggregateOutputType | null
    _min: NotificationReadMinAggregateOutputType | null
    _max: NotificationReadMaxAggregateOutputType | null
  }

  type GetNotificationReadGroupByPayload<T extends NotificationReadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationReadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationReadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationReadGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationReadGroupByOutputType[P]>
        }
      >
    >


  export type NotificationReadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationRead"]>

  export type NotificationReadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationRead"]>

  export type NotificationReadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    notificationId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationRead"]>

  export type NotificationReadSelectScalar = {
    id?: boolean
    userId?: boolean
    notificationId?: boolean
    createdAt?: boolean
  }

  export type NotificationReadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "notificationId" | "createdAt", ExtArgs["result"]["notificationRead"]>
  export type NotificationReadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationReadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationReadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationReadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationRead"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      notificationId: string
      createdAt: Date
    }, ExtArgs["result"]["notificationRead"]>
    composites: {}
  }

  type NotificationReadGetPayload<S extends boolean | null | undefined | NotificationReadDefaultArgs> = $Result.GetResult<Prisma.$NotificationReadPayload, S>

  type NotificationReadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationReadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationReadCountAggregateInputType | true
    }

  export interface NotificationReadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationRead'], meta: { name: 'NotificationRead' } }
    /**
     * Find zero or one NotificationRead that matches the filter.
     * @param {NotificationReadFindUniqueArgs} args - Arguments to find a NotificationRead
     * @example
     * // Get one NotificationRead
     * const notificationRead = await prisma.notificationRead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationReadFindUniqueArgs>(args: SelectSubset<T, NotificationReadFindUniqueArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationRead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationReadFindUniqueOrThrowArgs} args - Arguments to find a NotificationRead
     * @example
     * // Get one NotificationRead
     * const notificationRead = await prisma.notificationRead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationReadFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationReadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationRead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadFindFirstArgs} args - Arguments to find a NotificationRead
     * @example
     * // Get one NotificationRead
     * const notificationRead = await prisma.notificationRead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationReadFindFirstArgs>(args?: SelectSubset<T, NotificationReadFindFirstArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationRead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadFindFirstOrThrowArgs} args - Arguments to find a NotificationRead
     * @example
     * // Get one NotificationRead
     * const notificationRead = await prisma.notificationRead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationReadFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationReadFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationReads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationReads
     * const notificationReads = await prisma.notificationRead.findMany()
     * 
     * // Get first 10 NotificationReads
     * const notificationReads = await prisma.notificationRead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationReadWithIdOnly = await prisma.notificationRead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationReadFindManyArgs>(args?: SelectSubset<T, NotificationReadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationRead.
     * @param {NotificationReadCreateArgs} args - Arguments to create a NotificationRead.
     * @example
     * // Create one NotificationRead
     * const NotificationRead = await prisma.notificationRead.create({
     *   data: {
     *     // ... data to create a NotificationRead
     *   }
     * })
     * 
     */
    create<T extends NotificationReadCreateArgs>(args: SelectSubset<T, NotificationReadCreateArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationReads.
     * @param {NotificationReadCreateManyArgs} args - Arguments to create many NotificationReads.
     * @example
     * // Create many NotificationReads
     * const notificationRead = await prisma.notificationRead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationReadCreateManyArgs>(args?: SelectSubset<T, NotificationReadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationReads and returns the data saved in the database.
     * @param {NotificationReadCreateManyAndReturnArgs} args - Arguments to create many NotificationReads.
     * @example
     * // Create many NotificationReads
     * const notificationRead = await prisma.notificationRead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationReads and only return the `id`
     * const notificationReadWithIdOnly = await prisma.notificationRead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationReadCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationReadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationRead.
     * @param {NotificationReadDeleteArgs} args - Arguments to delete one NotificationRead.
     * @example
     * // Delete one NotificationRead
     * const NotificationRead = await prisma.notificationRead.delete({
     *   where: {
     *     // ... filter to delete one NotificationRead
     *   }
     * })
     * 
     */
    delete<T extends NotificationReadDeleteArgs>(args: SelectSubset<T, NotificationReadDeleteArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationRead.
     * @param {NotificationReadUpdateArgs} args - Arguments to update one NotificationRead.
     * @example
     * // Update one NotificationRead
     * const notificationRead = await prisma.notificationRead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationReadUpdateArgs>(args: SelectSubset<T, NotificationReadUpdateArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationReads.
     * @param {NotificationReadDeleteManyArgs} args - Arguments to filter NotificationReads to delete.
     * @example
     * // Delete a few NotificationReads
     * const { count } = await prisma.notificationRead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationReadDeleteManyArgs>(args?: SelectSubset<T, NotificationReadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationReads
     * const notificationRead = await prisma.notificationRead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationReadUpdateManyArgs>(args: SelectSubset<T, NotificationReadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationReads and returns the data updated in the database.
     * @param {NotificationReadUpdateManyAndReturnArgs} args - Arguments to update many NotificationReads.
     * @example
     * // Update many NotificationReads
     * const notificationRead = await prisma.notificationRead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationReads and only return the `id`
     * const notificationReadWithIdOnly = await prisma.notificationRead.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationReadUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationReadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationRead.
     * @param {NotificationReadUpsertArgs} args - Arguments to update or create a NotificationRead.
     * @example
     * // Update or create a NotificationRead
     * const notificationRead = await prisma.notificationRead.upsert({
     *   create: {
     *     // ... data to create a NotificationRead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationRead we want to update
     *   }
     * })
     */
    upsert<T extends NotificationReadUpsertArgs>(args: SelectSubset<T, NotificationReadUpsertArgs<ExtArgs>>): Prisma__NotificationReadClient<$Result.GetResult<Prisma.$NotificationReadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadCountArgs} args - Arguments to filter NotificationReads to count.
     * @example
     * // Count the number of NotificationReads
     * const count = await prisma.notificationRead.count({
     *   where: {
     *     // ... the filter for the NotificationReads we want to count
     *   }
     * })
    **/
    count<T extends NotificationReadCountArgs>(
      args?: Subset<T, NotificationReadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationReadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationReadAggregateArgs>(args: Subset<T, NotificationReadAggregateArgs>): Prisma.PrismaPromise<GetNotificationReadAggregateType<T>>

    /**
     * Group by NotificationRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationReadGroupByArgs} args - Group by arguments.
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
      T extends NotificationReadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationReadGroupByArgs['orderBy'] }
        : { orderBy?: NotificationReadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationReadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationReadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationRead model
   */
  readonly fields: NotificationReadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationRead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationReadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the NotificationRead model
   */
  interface NotificationReadFieldRefs {
    readonly id: FieldRef<"NotificationRead", 'String'>
    readonly userId: FieldRef<"NotificationRead", 'String'>
    readonly notificationId: FieldRef<"NotificationRead", 'String'>
    readonly createdAt: FieldRef<"NotificationRead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationRead findUnique
   */
  export type NotificationReadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationRead to fetch.
     */
    where: NotificationReadWhereUniqueInput
  }

  /**
   * NotificationRead findUniqueOrThrow
   */
  export type NotificationReadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationRead to fetch.
     */
    where: NotificationReadWhereUniqueInput
  }

  /**
   * NotificationRead findFirst
   */
  export type NotificationReadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationRead to fetch.
     */
    where?: NotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReads to fetch.
     */
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationReads.
     */
    cursor?: NotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationReads.
     */
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * NotificationRead findFirstOrThrow
   */
  export type NotificationReadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationRead to fetch.
     */
    where?: NotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReads to fetch.
     */
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationReads.
     */
    cursor?: NotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationReads.
     */
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * NotificationRead findMany
   */
  export type NotificationReadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter, which NotificationReads to fetch.
     */
    where?: NotificationReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationReads to fetch.
     */
    orderBy?: NotificationReadOrderByWithRelationInput | NotificationReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationReads.
     */
    cursor?: NotificationReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationReads.
     */
    distinct?: NotificationReadScalarFieldEnum | NotificationReadScalarFieldEnum[]
  }

  /**
   * NotificationRead create
   */
  export type NotificationReadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationRead.
     */
    data: XOR<NotificationReadCreateInput, NotificationReadUncheckedCreateInput>
  }

  /**
   * NotificationRead createMany
   */
  export type NotificationReadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationReads.
     */
    data: NotificationReadCreateManyInput | NotificationReadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationRead createManyAndReturn
   */
  export type NotificationReadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationReads.
     */
    data: NotificationReadCreateManyInput | NotificationReadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationRead update
   */
  export type NotificationReadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationRead.
     */
    data: XOR<NotificationReadUpdateInput, NotificationReadUncheckedUpdateInput>
    /**
     * Choose, which NotificationRead to update.
     */
    where: NotificationReadWhereUniqueInput
  }

  /**
   * NotificationRead updateMany
   */
  export type NotificationReadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationReads.
     */
    data: XOR<NotificationReadUpdateManyMutationInput, NotificationReadUncheckedUpdateManyInput>
    /**
     * Filter which NotificationReads to update
     */
    where?: NotificationReadWhereInput
    /**
     * Limit how many NotificationReads to update.
     */
    limit?: number
  }

  /**
   * NotificationRead updateManyAndReturn
   */
  export type NotificationReadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * The data used to update NotificationReads.
     */
    data: XOR<NotificationReadUpdateManyMutationInput, NotificationReadUncheckedUpdateManyInput>
    /**
     * Filter which NotificationReads to update
     */
    where?: NotificationReadWhereInput
    /**
     * Limit how many NotificationReads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationRead upsert
   */
  export type NotificationReadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationRead to update in case it exists.
     */
    where: NotificationReadWhereUniqueInput
    /**
     * In case the NotificationRead found by the `where` argument doesn't exist, create a new NotificationRead with this data.
     */
    create: XOR<NotificationReadCreateInput, NotificationReadUncheckedCreateInput>
    /**
     * In case the NotificationRead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationReadUpdateInput, NotificationReadUncheckedUpdateInput>
  }

  /**
   * NotificationRead delete
   */
  export type NotificationReadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
    /**
     * Filter which NotificationRead to delete.
     */
    where: NotificationReadWhereUniqueInput
  }

  /**
   * NotificationRead deleteMany
   */
  export type NotificationReadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationReads to delete
     */
    where?: NotificationReadWhereInput
    /**
     * Limit how many NotificationReads to delete.
     */
    limit?: number
  }

  /**
   * NotificationRead without action
   */
  export type NotificationReadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRead
     */
    select?: NotificationReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRead
     */
    omit?: NotificationReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationReadInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    streakGoalDays: 'streakGoalDays',
    privateAccount: 'privateAccount',
    username: 'username',
    focusArea: 'focusArea',
    bio: 'bio',
    location: 'location',
    bannerColor: 'bannerColor'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const TodoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    priority: 'priority',
    status: 'status',
    dueAt: 'dueAt',
    scheduledTime: 'scheduledTime',
    durationMinutes: 'durationMinutes',
    location: 'location',
    reminder: 'reminder',
    recurrence: 'recurrence',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    iconColor: 'iconColor',
    iconName: 'iconName',
    archived: 'archived'
  };

  export type TodoScalarFieldEnum = (typeof TodoScalarFieldEnum)[keyof typeof TodoScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const CollectionTodoScalarFieldEnum: {
    id: 'id',
    collectionId: 'collectionId',
    todoId: 'todoId',
    createdAt: 'createdAt'
  };

  export type CollectionTodoScalarFieldEnum = (typeof CollectionTodoScalarFieldEnum)[keyof typeof CollectionTodoScalarFieldEnum]


  export const HabitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    cadence: 'cadence',
    startDate: 'startDate',
    timeWindow: 'timeWindow',
    goalAmount: 'goalAmount',
    goalUnit: 'goalUnit',
    goalUnitCategory: 'goalUnitCategory',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    sourcePopularPostId: 'sourcePopularPostId',
    dailyProgress: 'dailyProgress'
  };

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const HabitDailyProgressScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    date: 'date',
    progress: 'progress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HabitDailyProgressScalarFieldEnum = (typeof HabitDailyProgressScalarFieldEnum)[keyof typeof HabitDailyProgressScalarFieldEnum]


  export const RoutineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    anchor: 'anchor',
    notes: 'notes',
    timeWindow: 'timeWindow',
    isDefault: 'isDefault',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoutineScalarFieldEnum = (typeof RoutineScalarFieldEnum)[keyof typeof RoutineScalarFieldEnum]


  export const RoutineHabitScalarFieldEnum: {
    id: 'id',
    routineId: 'routineId',
    habitId: 'habitId',
    position: 'position',
    createdAt: 'createdAt'
  };

  export type RoutineHabitScalarFieldEnum = (typeof RoutineHabitScalarFieldEnum)[keyof typeof RoutineHabitScalarFieldEnum]


  export const PostHabitScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    cadence: 'cadence',
    category: 'category',
    habitId: 'habitId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    votesCount: 'votesCount'
  };

  export type PostHabitScalarFieldEnum = (typeof PostHabitScalarFieldEnum)[keyof typeof PostHabitScalarFieldEnum]


  export const PostHabitVoteScalarFieldEnum: {
    id: 'id',
    postHabitId: 'postHabitId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PostHabitVoteScalarFieldEnum = (typeof PostHabitVoteScalarFieldEnum)[keyof typeof PostHabitVoteScalarFieldEnum]


  export const NotificationReadScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    notificationId: 'notificationId',
    createdAt: 'createdAt'
  };

  export type NotificationReadScalarFieldEnum = (typeof NotificationReadScalarFieldEnum)[keyof typeof NotificationReadScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TodoPriority'
   */
  export type EnumTodoPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TodoPriority'>
    


  /**
   * Reference to a field of type 'TodoPriority[]'
   */
  export type ListEnumTodoPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TodoPriority[]'>
    


  /**
   * Reference to a field of type 'TodoStatus'
   */
  export type EnumTodoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TodoStatus'>
    


  /**
   * Reference to a field of type 'TodoStatus[]'
   */
  export type ListEnumTodoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TodoStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RoutineTimeWindow'
   */
  export type EnumRoutineTimeWindowFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoutineTimeWindow'>
    


  /**
   * Reference to a field of type 'RoutineTimeWindow[]'
   */
  export type ListEnumRoutineTimeWindowFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoutineTimeWindow[]'>
    


  /**
   * Reference to a field of type 'HabitCategory'
   */
  export type EnumHabitCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitCategory'>
    


  /**
   * Reference to a field of type 'HabitCategory[]'
   */
  export type ListEnumHabitCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitCategory[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    streakGoalDays?: IntNullableFilter<"User"> | number | null
    privateAccount?: BoolFilter<"User"> | boolean
    username?: StringNullableFilter<"User"> | string | null
    focusArea?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    bannerColor?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    collections?: CollectionListRelationFilter
    habits?: HabitListRelationFilter
    notification_read?: NotificationReadListRelationFilter
    postHabits?: PostHabitListRelationFilter
    postHabitVotes?: PostHabitVoteListRelationFilter
    routines?: RoutineListRelationFilter
    sessions?: SessionListRelationFilter
    todos?: TodoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    streakGoalDays?: SortOrderInput | SortOrder
    privateAccount?: SortOrder
    username?: SortOrderInput | SortOrder
    focusArea?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    bannerColor?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    collections?: CollectionOrderByRelationAggregateInput
    habits?: HabitOrderByRelationAggregateInput
    notification_read?: NotificationReadOrderByRelationAggregateInput
    postHabits?: PostHabitOrderByRelationAggregateInput
    postHabitVotes?: PostHabitVoteOrderByRelationAggregateInput
    routines?: RoutineOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    todos?: TodoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    streakGoalDays?: IntNullableFilter<"User"> | number | null
    privateAccount?: BoolFilter<"User"> | boolean
    focusArea?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    bannerColor?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    collections?: CollectionListRelationFilter
    habits?: HabitListRelationFilter
    notification_read?: NotificationReadListRelationFilter
    postHabits?: PostHabitListRelationFilter
    postHabitVotes?: PostHabitVoteListRelationFilter
    routines?: RoutineListRelationFilter
    sessions?: SessionListRelationFilter
    todos?: TodoListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    streakGoalDays?: SortOrderInput | SortOrder
    privateAccount?: SortOrder
    username?: SortOrderInput | SortOrder
    focusArea?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    bannerColor?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    streakGoalDays?: IntNullableWithAggregatesFilter<"User"> | number | null
    privateAccount?: BoolWithAggregatesFilter<"User"> | boolean
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    focusArea?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    bannerColor?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type TodoWhereInput = {
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    id?: StringFilter<"Todo"> | string
    title?: StringFilter<"Todo"> | string
    description?: StringNullableFilter<"Todo"> | string | null
    category?: StringNullableFilter<"Todo"> | string | null
    priority?: EnumTodoPriorityFilter<"Todo"> | $Enums.TodoPriority
    status?: EnumTodoStatusFilter<"Todo"> | $Enums.TodoStatus
    dueAt?: DateTimeNullableFilter<"Todo"> | Date | string | null
    scheduledTime?: StringNullableFilter<"Todo"> | string | null
    durationMinutes?: IntNullableFilter<"Todo"> | number | null
    location?: StringNullableFilter<"Todo"> | string | null
    reminder?: StringNullableFilter<"Todo"> | string | null
    recurrence?: StringNullableFilter<"Todo"> | string | null
    tags?: StringNullableFilter<"Todo"> | string | null
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
    userId?: StringFilter<"Todo"> | string
    iconColor?: StringFilter<"Todo"> | string
    iconName?: StringFilter<"Todo"> | string
    archived?: BoolFilter<"Todo"> | boolean
    collections?: CollectionTodoListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TodoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueAt?: SortOrderInput | SortOrder
    scheduledTime?: SortOrderInput | SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    reminder?: SortOrderInput | SortOrder
    recurrence?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    iconColor?: SortOrder
    iconName?: SortOrder
    archived?: SortOrder
    collections?: CollectionTodoOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type TodoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    id_userId?: TodoIdUserIdCompoundUniqueInput
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    title?: StringFilter<"Todo"> | string
    description?: StringNullableFilter<"Todo"> | string | null
    category?: StringNullableFilter<"Todo"> | string | null
    priority?: EnumTodoPriorityFilter<"Todo"> | $Enums.TodoPriority
    status?: EnumTodoStatusFilter<"Todo"> | $Enums.TodoStatus
    dueAt?: DateTimeNullableFilter<"Todo"> | Date | string | null
    scheduledTime?: StringNullableFilter<"Todo"> | string | null
    durationMinutes?: IntNullableFilter<"Todo"> | number | null
    location?: StringNullableFilter<"Todo"> | string | null
    reminder?: StringNullableFilter<"Todo"> | string | null
    recurrence?: StringNullableFilter<"Todo"> | string | null
    tags?: StringNullableFilter<"Todo"> | string | null
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
    userId?: StringFilter<"Todo"> | string
    iconColor?: StringFilter<"Todo"> | string
    iconName?: StringFilter<"Todo"> | string
    archived?: BoolFilter<"Todo"> | boolean
    collections?: CollectionTodoListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id_userId">

  export type TodoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueAt?: SortOrderInput | SortOrder
    scheduledTime?: SortOrderInput | SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    reminder?: SortOrderInput | SortOrder
    recurrence?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    iconColor?: SortOrder
    iconName?: SortOrder
    archived?: SortOrder
    _count?: TodoCountOrderByAggregateInput
    _avg?: TodoAvgOrderByAggregateInput
    _max?: TodoMaxOrderByAggregateInput
    _min?: TodoMinOrderByAggregateInput
    _sum?: TodoSumOrderByAggregateInput
  }

  export type TodoScalarWhereWithAggregatesInput = {
    AND?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    OR?: TodoScalarWhereWithAggregatesInput[]
    NOT?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Todo"> | string
    title?: StringWithAggregatesFilter<"Todo"> | string
    description?: StringNullableWithAggregatesFilter<"Todo"> | string | null
    category?: StringNullableWithAggregatesFilter<"Todo"> | string | null
    priority?: EnumTodoPriorityWithAggregatesFilter<"Todo"> | $Enums.TodoPriority
    status?: EnumTodoStatusWithAggregatesFilter<"Todo"> | $Enums.TodoStatus
    dueAt?: DateTimeNullableWithAggregatesFilter<"Todo"> | Date | string | null
    scheduledTime?: StringNullableWithAggregatesFilter<"Todo"> | string | null
    durationMinutes?: IntNullableWithAggregatesFilter<"Todo"> | number | null
    location?: StringNullableWithAggregatesFilter<"Todo"> | string | null
    reminder?: StringNullableWithAggregatesFilter<"Todo"> | string | null
    recurrence?: StringNullableWithAggregatesFilter<"Todo"> | string | null
    tags?: StringNullableWithAggregatesFilter<"Todo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
    userId?: StringWithAggregatesFilter<"Todo"> | string
    iconColor?: StringWithAggregatesFilter<"Todo"> | string
    iconName?: StringWithAggregatesFilter<"Todo"> | string
    archived?: BoolWithAggregatesFilter<"Todo"> | boolean
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    userId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: CollectionTodoListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: CollectionTodoOrderByRelationAggregateInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    name?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    userId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: CollectionTodoListRelationFilter
  }, "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collection"> | string
    name?: StringWithAggregatesFilter<"Collection"> | string
    description?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    userId?: StringWithAggregatesFilter<"Collection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
  }

  export type CollectionTodoWhereInput = {
    AND?: CollectionTodoWhereInput | CollectionTodoWhereInput[]
    OR?: CollectionTodoWhereInput[]
    NOT?: CollectionTodoWhereInput | CollectionTodoWhereInput[]
    id?: StringFilter<"CollectionTodo"> | string
    collectionId?: StringFilter<"CollectionTodo"> | string
    todoId?: StringFilter<"CollectionTodo"> | string
    createdAt?: DateTimeFilter<"CollectionTodo"> | Date | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    todo?: XOR<TodoScalarRelationFilter, TodoWhereInput>
  }

  export type CollectionTodoOrderByWithRelationInput = {
    id?: SortOrder
    collectionId?: SortOrder
    todoId?: SortOrder
    createdAt?: SortOrder
    collection?: CollectionOrderByWithRelationInput
    todo?: TodoOrderByWithRelationInput
  }

  export type CollectionTodoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    collectionId_todoId?: CollectionTodoCollectionId_todoIdCompoundUniqueInput
    AND?: CollectionTodoWhereInput | CollectionTodoWhereInput[]
    OR?: CollectionTodoWhereInput[]
    NOT?: CollectionTodoWhereInput | CollectionTodoWhereInput[]
    collectionId?: StringFilter<"CollectionTodo"> | string
    todoId?: StringFilter<"CollectionTodo"> | string
    createdAt?: DateTimeFilter<"CollectionTodo"> | Date | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    todo?: XOR<TodoScalarRelationFilter, TodoWhereInput>
  }, "id" | "collectionId_todoId">

  export type CollectionTodoOrderByWithAggregationInput = {
    id?: SortOrder
    collectionId?: SortOrder
    todoId?: SortOrder
    createdAt?: SortOrder
    _count?: CollectionTodoCountOrderByAggregateInput
    _max?: CollectionTodoMaxOrderByAggregateInput
    _min?: CollectionTodoMinOrderByAggregateInput
  }

  export type CollectionTodoScalarWhereWithAggregatesInput = {
    AND?: CollectionTodoScalarWhereWithAggregatesInput | CollectionTodoScalarWhereWithAggregatesInput[]
    OR?: CollectionTodoScalarWhereWithAggregatesInput[]
    NOT?: CollectionTodoScalarWhereWithAggregatesInput | CollectionTodoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollectionTodo"> | string
    collectionId?: StringWithAggregatesFilter<"CollectionTodo"> | string
    todoId?: StringWithAggregatesFilter<"CollectionTodo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CollectionTodo"> | Date | string
  }

  export type HabitWhereInput = {
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    id?: StringFilter<"Habit"> | string
    name?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    cadence?: StringFilter<"Habit"> | string
    startDate?: DateTimeFilter<"Habit"> | Date | string
    timeWindow?: StringNullableFilter<"Habit"> | string | null
    goalAmount?: FloatFilter<"Habit"> | number
    goalUnit?: StringFilter<"Habit"> | string
    goalUnitCategory?: StringFilter<"Habit"> | string
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    userId?: StringFilter<"Habit"> | string
    sourcePopularPostId?: StringNullableFilter<"Habit"> | string | null
    dailyProgress?: FloatFilter<"Habit"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dailyProgressEntries?: HabitDailyProgressListRelationFilter
    post_habit?: PostHabitListRelationFilter
    routineHabits?: RoutineHabitListRelationFilter
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    cadence?: SortOrder
    startDate?: SortOrder
    timeWindow?: SortOrderInput | SortOrder
    goalAmount?: SortOrder
    goalUnit?: SortOrder
    goalUnitCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    sourcePopularPostId?: SortOrderInput | SortOrder
    dailyProgress?: SortOrder
    user?: UserOrderByWithRelationInput
    dailyProgressEntries?: HabitDailyProgressOrderByRelationAggregateInput
    post_habit?: PostHabitOrderByRelationAggregateInput
    routineHabits?: RoutineHabitOrderByRelationAggregateInput
  }

  export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    id_userId?: HabitIdUserIdCompoundUniqueInput
    userId_sourcePopularPostId?: HabitUserIdSourcePopularPostIdCompoundUniqueInput
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    name?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    cadence?: StringFilter<"Habit"> | string
    startDate?: DateTimeFilter<"Habit"> | Date | string
    timeWindow?: StringNullableFilter<"Habit"> | string | null
    goalAmount?: FloatFilter<"Habit"> | number
    goalUnit?: StringFilter<"Habit"> | string
    goalUnitCategory?: StringFilter<"Habit"> | string
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    userId?: StringFilter<"Habit"> | string
    sourcePopularPostId?: StringNullableFilter<"Habit"> | string | null
    dailyProgress?: FloatFilter<"Habit"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dailyProgressEntries?: HabitDailyProgressListRelationFilter
    post_habit?: PostHabitListRelationFilter
    routineHabits?: RoutineHabitListRelationFilter
  }, "id" | "id_userId" | "userId_sourcePopularPostId">

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    cadence?: SortOrder
    startDate?: SortOrder
    timeWindow?: SortOrderInput | SortOrder
    goalAmount?: SortOrder
    goalUnit?: SortOrder
    goalUnitCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    sourcePopularPostId?: SortOrderInput | SortOrder
    dailyProgress?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _avg?: HabitAvgOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
    _sum?: HabitSumOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    OR?: HabitScalarWhereWithAggregatesInput[]
    NOT?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Habit"> | string
    name?: StringWithAggregatesFilter<"Habit"> | string
    description?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    cadence?: StringWithAggregatesFilter<"Habit"> | string
    startDate?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    timeWindow?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    goalAmount?: FloatWithAggregatesFilter<"Habit"> | number
    goalUnit?: StringWithAggregatesFilter<"Habit"> | string
    goalUnitCategory?: StringWithAggregatesFilter<"Habit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    userId?: StringWithAggregatesFilter<"Habit"> | string
    sourcePopularPostId?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    dailyProgress?: FloatWithAggregatesFilter<"Habit"> | number
  }

  export type HabitDailyProgressWhereInput = {
    AND?: HabitDailyProgressWhereInput | HabitDailyProgressWhereInput[]
    OR?: HabitDailyProgressWhereInput[]
    NOT?: HabitDailyProgressWhereInput | HabitDailyProgressWhereInput[]
    id?: StringFilter<"HabitDailyProgress"> | string
    habitId?: StringFilter<"HabitDailyProgress"> | string
    date?: DateTimeFilter<"HabitDailyProgress"> | Date | string
    progress?: FloatFilter<"HabitDailyProgress"> | number
    createdAt?: DateTimeFilter<"HabitDailyProgress"> | Date | string
    updatedAt?: DateTimeFilter<"HabitDailyProgress"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
  }

  export type HabitDailyProgressOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    habit?: HabitOrderByWithRelationInput
  }

  export type HabitDailyProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    habitId_date?: HabitDailyProgressHabitIdDateCompoundUniqueInput
    AND?: HabitDailyProgressWhereInput | HabitDailyProgressWhereInput[]
    OR?: HabitDailyProgressWhereInput[]
    NOT?: HabitDailyProgressWhereInput | HabitDailyProgressWhereInput[]
    habitId?: StringFilter<"HabitDailyProgress"> | string
    date?: DateTimeFilter<"HabitDailyProgress"> | Date | string
    progress?: FloatFilter<"HabitDailyProgress"> | number
    createdAt?: DateTimeFilter<"HabitDailyProgress"> | Date | string
    updatedAt?: DateTimeFilter<"HabitDailyProgress"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
  }, "id" | "habitId_date">

  export type HabitDailyProgressOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HabitDailyProgressCountOrderByAggregateInput
    _avg?: HabitDailyProgressAvgOrderByAggregateInput
    _max?: HabitDailyProgressMaxOrderByAggregateInput
    _min?: HabitDailyProgressMinOrderByAggregateInput
    _sum?: HabitDailyProgressSumOrderByAggregateInput
  }

  export type HabitDailyProgressScalarWhereWithAggregatesInput = {
    AND?: HabitDailyProgressScalarWhereWithAggregatesInput | HabitDailyProgressScalarWhereWithAggregatesInput[]
    OR?: HabitDailyProgressScalarWhereWithAggregatesInput[]
    NOT?: HabitDailyProgressScalarWhereWithAggregatesInput | HabitDailyProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HabitDailyProgress"> | string
    habitId?: StringWithAggregatesFilter<"HabitDailyProgress"> | string
    date?: DateTimeWithAggregatesFilter<"HabitDailyProgress"> | Date | string
    progress?: FloatWithAggregatesFilter<"HabitDailyProgress"> | number
    createdAt?: DateTimeWithAggregatesFilter<"HabitDailyProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HabitDailyProgress"> | Date | string
  }

  export type RoutineWhereInput = {
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    id?: StringFilter<"Routine"> | string
    name?: StringFilter<"Routine"> | string
    anchor?: StringNullableFilter<"Routine"> | string | null
    notes?: StringNullableFilter<"Routine"> | string | null
    timeWindow?: EnumRoutineTimeWindowFilter<"Routine"> | $Enums.RoutineTimeWindow
    isDefault?: BoolFilter<"Routine"> | boolean
    userId?: StringFilter<"Routine"> | string
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    habits?: RoutineHabitListRelationFilter
  }

  export type RoutineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    anchor?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    timeWindow?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    habits?: RoutineHabitOrderByRelationAggregateInput
  }

  export type RoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    name?: StringFilter<"Routine"> | string
    anchor?: StringNullableFilter<"Routine"> | string | null
    notes?: StringNullableFilter<"Routine"> | string | null
    timeWindow?: EnumRoutineTimeWindowFilter<"Routine"> | $Enums.RoutineTimeWindow
    isDefault?: BoolFilter<"Routine"> | boolean
    userId?: StringFilter<"Routine"> | string
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    habits?: RoutineHabitListRelationFilter
  }, "id">

  export type RoutineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    anchor?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    timeWindow?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoutineCountOrderByAggregateInput
    _max?: RoutineMaxOrderByAggregateInput
    _min?: RoutineMinOrderByAggregateInput
  }

  export type RoutineScalarWhereWithAggregatesInput = {
    AND?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    OR?: RoutineScalarWhereWithAggregatesInput[]
    NOT?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Routine"> | string
    name?: StringWithAggregatesFilter<"Routine"> | string
    anchor?: StringNullableWithAggregatesFilter<"Routine"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Routine"> | string | null
    timeWindow?: EnumRoutineTimeWindowWithAggregatesFilter<"Routine"> | $Enums.RoutineTimeWindow
    isDefault?: BoolWithAggregatesFilter<"Routine"> | boolean
    userId?: StringWithAggregatesFilter<"Routine"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Routine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Routine"> | Date | string
  }

  export type RoutineHabitWhereInput = {
    AND?: RoutineHabitWhereInput | RoutineHabitWhereInput[]
    OR?: RoutineHabitWhereInput[]
    NOT?: RoutineHabitWhereInput | RoutineHabitWhereInput[]
    id?: StringFilter<"RoutineHabit"> | string
    routineId?: StringFilter<"RoutineHabit"> | string
    habitId?: StringFilter<"RoutineHabit"> | string
    position?: IntFilter<"RoutineHabit"> | number
    createdAt?: DateTimeFilter<"RoutineHabit"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
  }

  export type RoutineHabitOrderByWithRelationInput = {
    id?: SortOrder
    routineId?: SortOrder
    habitId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    habit?: HabitOrderByWithRelationInput
    routine?: RoutineOrderByWithRelationInput
  }

  export type RoutineHabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    routineId_habitId?: RoutineHabitRoutineIdHabitIdCompoundUniqueInput
    AND?: RoutineHabitWhereInput | RoutineHabitWhereInput[]
    OR?: RoutineHabitWhereInput[]
    NOT?: RoutineHabitWhereInput | RoutineHabitWhereInput[]
    routineId?: StringFilter<"RoutineHabit"> | string
    habitId?: StringFilter<"RoutineHabit"> | string
    position?: IntFilter<"RoutineHabit"> | number
    createdAt?: DateTimeFilter<"RoutineHabit"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
  }, "id" | "routineId_habitId">

  export type RoutineHabitOrderByWithAggregationInput = {
    id?: SortOrder
    routineId?: SortOrder
    habitId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    _count?: RoutineHabitCountOrderByAggregateInput
    _avg?: RoutineHabitAvgOrderByAggregateInput
    _max?: RoutineHabitMaxOrderByAggregateInput
    _min?: RoutineHabitMinOrderByAggregateInput
    _sum?: RoutineHabitSumOrderByAggregateInput
  }

  export type RoutineHabitScalarWhereWithAggregatesInput = {
    AND?: RoutineHabitScalarWhereWithAggregatesInput | RoutineHabitScalarWhereWithAggregatesInput[]
    OR?: RoutineHabitScalarWhereWithAggregatesInput[]
    NOT?: RoutineHabitScalarWhereWithAggregatesInput | RoutineHabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoutineHabit"> | string
    routineId?: StringWithAggregatesFilter<"RoutineHabit"> | string
    habitId?: StringWithAggregatesFilter<"RoutineHabit"> | string
    position?: IntWithAggregatesFilter<"RoutineHabit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RoutineHabit"> | Date | string
  }

  export type PostHabitWhereInput = {
    AND?: PostHabitWhereInput | PostHabitWhereInput[]
    OR?: PostHabitWhereInput[]
    NOT?: PostHabitWhereInput | PostHabitWhereInput[]
    id?: StringFilter<"PostHabit"> | string
    title?: StringFilter<"PostHabit"> | string
    description?: StringNullableFilter<"PostHabit"> | string | null
    cadence?: StringFilter<"PostHabit"> | string
    category?: EnumHabitCategoryFilter<"PostHabit"> | $Enums.HabitCategory
    habitId?: StringFilter<"PostHabit"> | string
    userId?: StringFilter<"PostHabit"> | string
    createdAt?: DateTimeFilter<"PostHabit"> | Date | string
    updatedAt?: DateTimeFilter<"PostHabit"> | Date | string
    votesCount?: IntFilter<"PostHabit"> | number
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    votes?: PostHabitVoteListRelationFilter
  }

  export type PostHabitOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    cadence?: SortOrder
    category?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    votesCount?: SortOrder
    habit?: HabitOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    votes?: PostHabitVoteOrderByRelationAggregateInput
  }

  export type PostHabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostHabitWhereInput | PostHabitWhereInput[]
    OR?: PostHabitWhereInput[]
    NOT?: PostHabitWhereInput | PostHabitWhereInput[]
    title?: StringFilter<"PostHabit"> | string
    description?: StringNullableFilter<"PostHabit"> | string | null
    cadence?: StringFilter<"PostHabit"> | string
    category?: EnumHabitCategoryFilter<"PostHabit"> | $Enums.HabitCategory
    habitId?: StringFilter<"PostHabit"> | string
    userId?: StringFilter<"PostHabit"> | string
    createdAt?: DateTimeFilter<"PostHabit"> | Date | string
    updatedAt?: DateTimeFilter<"PostHabit"> | Date | string
    votesCount?: IntFilter<"PostHabit"> | number
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    votes?: PostHabitVoteListRelationFilter
  }, "id">

  export type PostHabitOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    cadence?: SortOrder
    category?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    votesCount?: SortOrder
    _count?: PostHabitCountOrderByAggregateInput
    _avg?: PostHabitAvgOrderByAggregateInput
    _max?: PostHabitMaxOrderByAggregateInput
    _min?: PostHabitMinOrderByAggregateInput
    _sum?: PostHabitSumOrderByAggregateInput
  }

  export type PostHabitScalarWhereWithAggregatesInput = {
    AND?: PostHabitScalarWhereWithAggregatesInput | PostHabitScalarWhereWithAggregatesInput[]
    OR?: PostHabitScalarWhereWithAggregatesInput[]
    NOT?: PostHabitScalarWhereWithAggregatesInput | PostHabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostHabit"> | string
    title?: StringWithAggregatesFilter<"PostHabit"> | string
    description?: StringNullableWithAggregatesFilter<"PostHabit"> | string | null
    cadence?: StringWithAggregatesFilter<"PostHabit"> | string
    category?: EnumHabitCategoryWithAggregatesFilter<"PostHabit"> | $Enums.HabitCategory
    habitId?: StringWithAggregatesFilter<"PostHabit"> | string
    userId?: StringWithAggregatesFilter<"PostHabit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostHabit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostHabit"> | Date | string
    votesCount?: IntWithAggregatesFilter<"PostHabit"> | number
  }

  export type PostHabitVoteWhereInput = {
    AND?: PostHabitVoteWhereInput | PostHabitVoteWhereInput[]
    OR?: PostHabitVoteWhereInput[]
    NOT?: PostHabitVoteWhereInput | PostHabitVoteWhereInput[]
    id?: StringFilter<"PostHabitVote"> | string
    postHabitId?: StringFilter<"PostHabitVote"> | string
    userId?: StringFilter<"PostHabitVote"> | string
    createdAt?: DateTimeFilter<"PostHabitVote"> | Date | string
    postHabit?: XOR<PostHabitScalarRelationFilter, PostHabitWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostHabitVoteOrderByWithRelationInput = {
    id?: SortOrder
    postHabitId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    postHabit?: PostHabitOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PostHabitVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postHabitId_userId?: PostHabitVotePostHabitId_userIdCompoundUniqueInput
    AND?: PostHabitVoteWhereInput | PostHabitVoteWhereInput[]
    OR?: PostHabitVoteWhereInput[]
    NOT?: PostHabitVoteWhereInput | PostHabitVoteWhereInput[]
    postHabitId?: StringFilter<"PostHabitVote"> | string
    userId?: StringFilter<"PostHabitVote"> | string
    createdAt?: DateTimeFilter<"PostHabitVote"> | Date | string
    postHabit?: XOR<PostHabitScalarRelationFilter, PostHabitWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "postHabitId_userId">

  export type PostHabitVoteOrderByWithAggregationInput = {
    id?: SortOrder
    postHabitId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: PostHabitVoteCountOrderByAggregateInput
    _max?: PostHabitVoteMaxOrderByAggregateInput
    _min?: PostHabitVoteMinOrderByAggregateInput
  }

  export type PostHabitVoteScalarWhereWithAggregatesInput = {
    AND?: PostHabitVoteScalarWhereWithAggregatesInput | PostHabitVoteScalarWhereWithAggregatesInput[]
    OR?: PostHabitVoteScalarWhereWithAggregatesInput[]
    NOT?: PostHabitVoteScalarWhereWithAggregatesInput | PostHabitVoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostHabitVote"> | string
    postHabitId?: StringWithAggregatesFilter<"PostHabitVote"> | string
    userId?: StringWithAggregatesFilter<"PostHabitVote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostHabitVote"> | Date | string
  }

  export type NotificationReadWhereInput = {
    AND?: NotificationReadWhereInput | NotificationReadWhereInput[]
    OR?: NotificationReadWhereInput[]
    NOT?: NotificationReadWhereInput | NotificationReadWhereInput[]
    id?: StringFilter<"NotificationRead"> | string
    userId?: StringFilter<"NotificationRead"> | string
    notificationId?: StringFilter<"NotificationRead"> | string
    createdAt?: DateTimeFilter<"NotificationRead"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationReadOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationReadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_notificationId?: NotificationReadUserIdNotificationIdCompoundUniqueInput
    AND?: NotificationReadWhereInput | NotificationReadWhereInput[]
    OR?: NotificationReadWhereInput[]
    NOT?: NotificationReadWhereInput | NotificationReadWhereInput[]
    userId?: StringFilter<"NotificationRead"> | string
    notificationId?: StringFilter<"NotificationRead"> | string
    createdAt?: DateTimeFilter<"NotificationRead"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_notificationId">

  export type NotificationReadOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationReadCountOrderByAggregateInput
    _max?: NotificationReadMaxOrderByAggregateInput
    _min?: NotificationReadMinOrderByAggregateInput
  }

  export type NotificationReadScalarWhereWithAggregatesInput = {
    AND?: NotificationReadScalarWhereWithAggregatesInput | NotificationReadScalarWhereWithAggregatesInput[]
    OR?: NotificationReadScalarWhereWithAggregatesInput[]
    NOT?: NotificationReadScalarWhereWithAggregatesInput | NotificationReadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationRead"> | string
    userId?: StringWithAggregatesFilter<"NotificationRead"> | string
    notificationId?: StringWithAggregatesFilter<"NotificationRead"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NotificationRead"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadCreateNestedManyWithoutUserInput
    postHabits?: PostHabitCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
    postHabits?: PostHabitUncheckedCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUncheckedUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    priority?: $Enums.TodoPriority
    status?: $Enums.TodoStatus
    dueAt?: Date | string | null
    scheduledTime?: string | null
    durationMinutes?: number | null
    location?: string | null
    reminder?: string | null
    recurrence?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    iconColor?: string
    iconName?: string
    archived?: boolean
    collections?: CollectionTodoCreateNestedManyWithoutTodoInput
    user: UserCreateNestedOneWithoutTodosInput
  }

  export type TodoUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    priority?: $Enums.TodoPriority
    status?: $Enums.TodoStatus
    dueAt?: Date | string | null
    scheduledTime?: string | null
    durationMinutes?: number | null
    location?: string | null
    reminder?: string | null
    recurrence?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    iconColor?: string
    iconName?: string
    archived?: boolean
    collections?: CollectionTodoUncheckedCreateNestedManyWithoutTodoInput
  }

  export type TodoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTodoPriorityFieldUpdateOperationsInput | $Enums.TodoPriority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    collections?: CollectionTodoUpdateManyWithoutTodoNestedInput
    user?: UserUpdateOneRequiredWithoutTodosNestedInput
  }

  export type TodoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTodoPriorityFieldUpdateOperationsInput | $Enums.TodoPriority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    collections?: CollectionTodoUncheckedUpdateManyWithoutTodoNestedInput
  }

  export type TodoCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    priority?: $Enums.TodoPriority
    status?: $Enums.TodoStatus
    dueAt?: Date | string | null
    scheduledTime?: string | null
    durationMinutes?: number | null
    location?: string | null
    reminder?: string | null
    recurrence?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    iconColor?: string
    iconName?: string
    archived?: boolean
  }

  export type TodoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTodoPriorityFieldUpdateOperationsInput | $Enums.TodoPriority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TodoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTodoPriorityFieldUpdateOperationsInput | $Enums.TodoPriority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CollectionCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
    items?: CollectionTodoCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CollectionTodoUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
    items?: CollectionTodoUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CollectionTodoUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionTodoCreateInput = {
    id?: string
    createdAt?: Date | string
    collection: CollectionCreateNestedOneWithoutItemsInput
    todo: TodoCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionTodoUncheckedCreateInput = {
    id?: string
    collectionId: string
    todoId: string
    createdAt?: Date | string
  }

  export type CollectionTodoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutItemsNestedInput
    todo?: TodoUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionTodoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    todoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionTodoCreateManyInput = {
    id?: string
    collectionId: string
    todoId: string
    createdAt?: Date | string
  }

  export type CollectionTodoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionTodoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    todoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCreateInput = {
    id?: string
    name: string
    description?: string | null
    cadence: string
    startDate: Date | string
    timeWindow?: string | null
    goalAmount?: number
    goalUnit?: string
    goalUnitCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourcePopularPostId?: string | null
    dailyProgress?: number
    user: UserCreateNestedOneWithoutHabitsInput
    dailyProgressEntries?: HabitDailyProgressCreateNestedManyWithoutHabitInput
    post_habit?: PostHabitCreateNestedManyWithoutHabitInput
    routineHabits?: RoutineHabitCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    cadence: string
    startDate: Date | string
    timeWindow?: string | null
    goalAmount?: number
    goalUnit?: string
    goalUnitCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    sourcePopularPostId?: string | null
    dailyProgress?: number
    dailyProgressEntries?: HabitDailyProgressUncheckedCreateNestedManyWithoutHabitInput
    post_habit?: PostHabitUncheckedCreateNestedManyWithoutHabitInput
    routineHabits?: RoutineHabitUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    dailyProgressEntries?: HabitDailyProgressUpdateManyWithoutHabitNestedInput
    post_habit?: PostHabitUpdateManyWithoutHabitNestedInput
    routineHabits?: RoutineHabitUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
    dailyProgressEntries?: HabitDailyProgressUncheckedUpdateManyWithoutHabitNestedInput
    post_habit?: PostHabitUncheckedUpdateManyWithoutHabitNestedInput
    routineHabits?: RoutineHabitUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    cadence: string
    startDate: Date | string
    timeWindow?: string | null
    goalAmount?: number
    goalUnit?: string
    goalUnitCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    sourcePopularPostId?: string | null
    dailyProgress?: number
  }

  export type HabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
  }

  export type HabitDailyProgressCreateInput = {
    id?: string
    date: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    habit: HabitCreateNestedOneWithoutDailyProgressEntriesInput
  }

  export type HabitDailyProgressUncheckedCreateInput = {
    id?: string
    habitId: string
    date: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitDailyProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutDailyProgressEntriesNestedInput
  }

  export type HabitDailyProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitDailyProgressCreateManyInput = {
    id?: string
    habitId: string
    date: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitDailyProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitDailyProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineCreateInput = {
    id?: string
    name: string
    anchor?: string | null
    notes?: string | null
    timeWindow?: $Enums.RoutineTimeWindow
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutinesInput
    habits?: RoutineHabitCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateInput = {
    id?: string
    name: string
    anchor?: string | null
    notes?: string | null
    timeWindow?: $Enums.RoutineTimeWindow
    isDefault?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: RoutineHabitUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timeWindow?: EnumRoutineTimeWindowFieldUpdateOperationsInput | $Enums.RoutineTimeWindow
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutinesNestedInput
    habits?: RoutineHabitUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timeWindow?: EnumRoutineTimeWindowFieldUpdateOperationsInput | $Enums.RoutineTimeWindow
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: RoutineHabitUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineCreateManyInput = {
    id?: string
    name: string
    anchor?: string | null
    notes?: string | null
    timeWindow?: $Enums.RoutineTimeWindow
    isDefault?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timeWindow?: EnumRoutineTimeWindowFieldUpdateOperationsInput | $Enums.RoutineTimeWindow
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timeWindow?: EnumRoutineTimeWindowFieldUpdateOperationsInput | $Enums.RoutineTimeWindow
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineHabitCreateInput = {
    id?: string
    position?: number
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutRoutineHabitsInput
    routine: RoutineCreateNestedOneWithoutHabitsInput
  }

  export type RoutineHabitUncheckedCreateInput = {
    id?: string
    routineId: string
    habitId: string
    position?: number
    createdAt?: Date | string
  }

  export type RoutineHabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutRoutineHabitsNestedInput
    routine?: RoutineUpdateOneRequiredWithoutHabitsNestedInput
  }

  export type RoutineHabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineHabitCreateManyInput = {
    id?: string
    routineId: string
    habitId: string
    position?: number
    createdAt?: Date | string
  }

  export type RoutineHabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineHabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHabitCreateInput = {
    id?: string
    title: string
    description?: string | null
    cadence: string
    category: $Enums.HabitCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    votesCount?: number
    habit: HabitCreateNestedOneWithoutPost_habitInput
    user: UserCreateNestedOneWithoutPostHabitsInput
    votes?: PostHabitVoteCreateNestedManyWithoutPostHabitInput
  }

  export type PostHabitUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    cadence: string
    category: $Enums.HabitCategory
    habitId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votesCount?: number
    votes?: PostHabitVoteUncheckedCreateNestedManyWithoutPostHabitInput
  }

  export type PostHabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    category?: EnumHabitCategoryFieldUpdateOperationsInput | $Enums.HabitCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votesCount?: IntFieldUpdateOperationsInput | number
    habit?: HabitUpdateOneRequiredWithoutPost_habitNestedInput
    user?: UserUpdateOneRequiredWithoutPostHabitsNestedInput
    votes?: PostHabitVoteUpdateManyWithoutPostHabitNestedInput
  }

  export type PostHabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    category?: EnumHabitCategoryFieldUpdateOperationsInput | $Enums.HabitCategory
    habitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votesCount?: IntFieldUpdateOperationsInput | number
    votes?: PostHabitVoteUncheckedUpdateManyWithoutPostHabitNestedInput
  }

  export type PostHabitCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    cadence: string
    category: $Enums.HabitCategory
    habitId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votesCount?: number
  }

  export type PostHabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    category?: EnumHabitCategoryFieldUpdateOperationsInput | $Enums.HabitCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votesCount?: IntFieldUpdateOperationsInput | number
  }

  export type PostHabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    category?: EnumHabitCategoryFieldUpdateOperationsInput | $Enums.HabitCategory
    habitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votesCount?: IntFieldUpdateOperationsInput | number
  }

  export type PostHabitVoteCreateInput = {
    id?: string
    createdAt?: Date | string
    postHabit: PostHabitCreateNestedOneWithoutVotesInput
    user: UserCreateNestedOneWithoutPostHabitVotesInput
  }

  export type PostHabitVoteUncheckedCreateInput = {
    id?: string
    postHabitId: string
    userId: string
    createdAt?: Date | string
  }

  export type PostHabitVoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postHabit?: PostHabitUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneRequiredWithoutPostHabitVotesNestedInput
  }

  export type PostHabitVoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postHabitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHabitVoteCreateManyInput = {
    id?: string
    postHabitId: string
    userId: string
    createdAt?: Date | string
  }

  export type PostHabitVoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHabitVoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postHabitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadCreateInput = {
    id: string
    notificationId: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotification_readInput
  }

  export type NotificationReadUncheckedCreateInput = {
    id: string
    userId: string
    notificationId: string
    createdAt?: Date | string
  }

  export type NotificationReadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotification_readNestedInput
  }

  export type NotificationReadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadCreateManyInput = {
    id: string
    userId: string
    notificationId: string
    createdAt?: Date | string
  }

  export type NotificationReadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput
    some?: CollectionWhereInput
    none?: CollectionWhereInput
  }

  export type HabitListRelationFilter = {
    every?: HabitWhereInput
    some?: HabitWhereInput
    none?: HabitWhereInput
  }

  export type NotificationReadListRelationFilter = {
    every?: NotificationReadWhereInput
    some?: NotificationReadWhereInput
    none?: NotificationReadWhereInput
  }

  export type PostHabitListRelationFilter = {
    every?: PostHabitWhereInput
    some?: PostHabitWhereInput
    none?: PostHabitWhereInput
  }

  export type PostHabitVoteListRelationFilter = {
    every?: PostHabitVoteWhereInput
    some?: PostHabitVoteWhereInput
    none?: PostHabitVoteWhereInput
  }

  export type RoutineListRelationFilter = {
    every?: RoutineWhereInput
    some?: RoutineWhereInput
    none?: RoutineWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type TodoListRelationFilter = {
    every?: TodoWhereInput
    some?: TodoWhereInput
    none?: TodoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationReadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostHabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostHabitVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TodoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    streakGoalDays?: SortOrder
    privateAccount?: SortOrder
    username?: SortOrder
    focusArea?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    bannerColor?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    streakGoalDays?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    streakGoalDays?: SortOrder
    privateAccount?: SortOrder
    username?: SortOrder
    focusArea?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    bannerColor?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    streakGoalDays?: SortOrder
    privateAccount?: SortOrder
    username?: SortOrder
    focusArea?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    bannerColor?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    streakGoalDays?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTodoPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoPriority | EnumTodoPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TodoPriority[] | ListEnumTodoPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoPriority[] | ListEnumTodoPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoPriorityFilter<$PrismaModel> | $Enums.TodoPriority
  }

  export type EnumTodoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoStatus | EnumTodoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoStatusFilter<$PrismaModel> | $Enums.TodoStatus
  }

  export type CollectionTodoListRelationFilter = {
    every?: CollectionTodoWhereInput
    some?: CollectionTodoWhereInput
    none?: CollectionTodoWhereInput
  }

  export type CollectionTodoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TodoIdUserIdCompoundUniqueInput = {
    id: string
    userId: string
  }

  export type TodoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueAt?: SortOrder
    scheduledTime?: SortOrder
    durationMinutes?: SortOrder
    location?: SortOrder
    reminder?: SortOrder
    recurrence?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    iconColor?: SortOrder
    iconName?: SortOrder
    archived?: SortOrder
  }

  export type TodoAvgOrderByAggregateInput = {
    durationMinutes?: SortOrder
  }

  export type TodoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueAt?: SortOrder
    scheduledTime?: SortOrder
    durationMinutes?: SortOrder
    location?: SortOrder
    reminder?: SortOrder
    recurrence?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    iconColor?: SortOrder
    iconName?: SortOrder
    archived?: SortOrder
  }

  export type TodoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueAt?: SortOrder
    scheduledTime?: SortOrder
    durationMinutes?: SortOrder
    location?: SortOrder
    reminder?: SortOrder
    recurrence?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    iconColor?: SortOrder
    iconName?: SortOrder
    archived?: SortOrder
  }

  export type TodoSumOrderByAggregateInput = {
    durationMinutes?: SortOrder
  }

  export type EnumTodoPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoPriority | EnumTodoPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TodoPriority[] | ListEnumTodoPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoPriority[] | ListEnumTodoPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TodoPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTodoPriorityFilter<$PrismaModel>
    _max?: NestedEnumTodoPriorityFilter<$PrismaModel>
  }

  export type EnumTodoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoStatus | EnumTodoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoStatusWithAggregatesFilter<$PrismaModel> | $Enums.TodoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTodoStatusFilter<$PrismaModel>
    _max?: NestedEnumTodoStatusFilter<$PrismaModel>
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionScalarRelationFilter = {
    is?: CollectionWhereInput
    isNot?: CollectionWhereInput
  }

  export type TodoScalarRelationFilter = {
    is?: TodoWhereInput
    isNot?: TodoWhereInput
  }

  export type CollectionTodoCollectionId_todoIdCompoundUniqueInput = {
    collectionId: string
    todoId: string
  }

  export type CollectionTodoCountOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    todoId?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionTodoMaxOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    todoId?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionTodoMinOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    todoId?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type HabitDailyProgressListRelationFilter = {
    every?: HabitDailyProgressWhereInput
    some?: HabitDailyProgressWhereInput
    none?: HabitDailyProgressWhereInput
  }

  export type RoutineHabitListRelationFilter = {
    every?: RoutineHabitWhereInput
    some?: RoutineHabitWhereInput
    none?: RoutineHabitWhereInput
  }

  export type HabitDailyProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineHabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitIdUserIdCompoundUniqueInput = {
    id: string
    userId: string
  }

  export type HabitUserIdSourcePopularPostIdCompoundUniqueInput = {
    userId: string
    sourcePopularPostId: string
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cadence?: SortOrder
    startDate?: SortOrder
    timeWindow?: SortOrder
    goalAmount?: SortOrder
    goalUnit?: SortOrder
    goalUnitCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    sourcePopularPostId?: SortOrder
    dailyProgress?: SortOrder
  }

  export type HabitAvgOrderByAggregateInput = {
    goalAmount?: SortOrder
    dailyProgress?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cadence?: SortOrder
    startDate?: SortOrder
    timeWindow?: SortOrder
    goalAmount?: SortOrder
    goalUnit?: SortOrder
    goalUnitCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    sourcePopularPostId?: SortOrder
    dailyProgress?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cadence?: SortOrder
    startDate?: SortOrder
    timeWindow?: SortOrder
    goalAmount?: SortOrder
    goalUnit?: SortOrder
    goalUnitCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    sourcePopularPostId?: SortOrder
    dailyProgress?: SortOrder
  }

  export type HabitSumOrderByAggregateInput = {
    goalAmount?: SortOrder
    dailyProgress?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type HabitScalarRelationFilter = {
    is?: HabitWhereInput
    isNot?: HabitWhereInput
  }

  export type HabitDailyProgressHabitIdDateCompoundUniqueInput = {
    habitId: string
    date: Date | string
  }

  export type HabitDailyProgressCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitDailyProgressAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type HabitDailyProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitDailyProgressMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitDailyProgressSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type EnumRoutineTimeWindowFilter<$PrismaModel = never> = {
    equals?: $Enums.RoutineTimeWindow | EnumRoutineTimeWindowFieldRefInput<$PrismaModel>
    in?: $Enums.RoutineTimeWindow[] | ListEnumRoutineTimeWindowFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoutineTimeWindow[] | ListEnumRoutineTimeWindowFieldRefInput<$PrismaModel>
    not?: NestedEnumRoutineTimeWindowFilter<$PrismaModel> | $Enums.RoutineTimeWindow
  }

  export type RoutineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    anchor?: SortOrder
    notes?: SortOrder
    timeWindow?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    anchor?: SortOrder
    notes?: SortOrder
    timeWindow?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    anchor?: SortOrder
    notes?: SortOrder
    timeWindow?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoutineTimeWindowWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoutineTimeWindow | EnumRoutineTimeWindowFieldRefInput<$PrismaModel>
    in?: $Enums.RoutineTimeWindow[] | ListEnumRoutineTimeWindowFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoutineTimeWindow[] | ListEnumRoutineTimeWindowFieldRefInput<$PrismaModel>
    not?: NestedEnumRoutineTimeWindowWithAggregatesFilter<$PrismaModel> | $Enums.RoutineTimeWindow
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoutineTimeWindowFilter<$PrismaModel>
    _max?: NestedEnumRoutineTimeWindowFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RoutineScalarRelationFilter = {
    is?: RoutineWhereInput
    isNot?: RoutineWhereInput
  }

  export type RoutineHabitRoutineIdHabitIdCompoundUniqueInput = {
    routineId: string
    habitId: string
  }

  export type RoutineHabitCountOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    habitId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type RoutineHabitAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type RoutineHabitMaxOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    habitId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type RoutineHabitMinOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    habitId?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type RoutineHabitSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumHabitCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitCategory | EnumHabitCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.HabitCategory[] | ListEnumHabitCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitCategory[] | ListEnumHabitCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitCategoryFilter<$PrismaModel> | $Enums.HabitCategory
  }

  export type PostHabitCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    cadence?: SortOrder
    category?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    votesCount?: SortOrder
  }

  export type PostHabitAvgOrderByAggregateInput = {
    votesCount?: SortOrder
  }

  export type PostHabitMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    cadence?: SortOrder
    category?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    votesCount?: SortOrder
  }

  export type PostHabitMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    cadence?: SortOrder
    category?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    votesCount?: SortOrder
  }

  export type PostHabitSumOrderByAggregateInput = {
    votesCount?: SortOrder
  }

  export type EnumHabitCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitCategory | EnumHabitCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.HabitCategory[] | ListEnumHabitCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitCategory[] | ListEnumHabitCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitCategoryWithAggregatesFilter<$PrismaModel> | $Enums.HabitCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHabitCategoryFilter<$PrismaModel>
    _max?: NestedEnumHabitCategoryFilter<$PrismaModel>
  }

  export type PostHabitScalarRelationFilter = {
    is?: PostHabitWhereInput
    isNot?: PostHabitWhereInput
  }

  export type PostHabitVotePostHabitId_userIdCompoundUniqueInput = {
    postHabitId: string
    userId: string
  }

  export type PostHabitVoteCountOrderByAggregateInput = {
    id?: SortOrder
    postHabitId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostHabitVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    postHabitId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostHabitVoteMinOrderByAggregateInput = {
    id?: SortOrder
    postHabitId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationReadUserIdNotificationIdCompoundUniqueInput = {
    userId: string
    notificationId: string
  }

  export type NotificationReadCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationReadMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationReadMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    notificationId?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CollectionCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type HabitCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type NotificationReadCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationReadCreateWithoutUserInput, NotificationReadUncheckedCreateWithoutUserInput> | NotificationReadCreateWithoutUserInput[] | NotificationReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutUserInput | NotificationReadCreateOrConnectWithoutUserInput[]
    createMany?: NotificationReadCreateManyUserInputEnvelope
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
  }

  export type PostHabitCreateNestedManyWithoutUserInput = {
    create?: XOR<PostHabitCreateWithoutUserInput, PostHabitUncheckedCreateWithoutUserInput> | PostHabitCreateWithoutUserInput[] | PostHabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostHabitCreateOrConnectWithoutUserInput | PostHabitCreateOrConnectWithoutUserInput[]
    createMany?: PostHabitCreateManyUserInputEnvelope
    connect?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
  }

  export type PostHabitVoteCreateNestedManyWithoutUserInput = {
    create?: XOR<PostHabitVoteCreateWithoutUserInput, PostHabitVoteUncheckedCreateWithoutUserInput> | PostHabitVoteCreateWithoutUserInput[] | PostHabitVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostHabitVoteCreateOrConnectWithoutUserInput | PostHabitVoteCreateOrConnectWithoutUserInput[]
    createMany?: PostHabitVoteCreateManyUserInputEnvelope
    connect?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
  }

  export type RoutineCreateNestedManyWithoutUserInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TodoCreateNestedManyWithoutUserInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type HabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type NotificationReadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationReadCreateWithoutUserInput, NotificationReadUncheckedCreateWithoutUserInput> | NotificationReadCreateWithoutUserInput[] | NotificationReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutUserInput | NotificationReadCreateOrConnectWithoutUserInput[]
    createMany?: NotificationReadCreateManyUserInputEnvelope
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
  }

  export type PostHabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostHabitCreateWithoutUserInput, PostHabitUncheckedCreateWithoutUserInput> | PostHabitCreateWithoutUserInput[] | PostHabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostHabitCreateOrConnectWithoutUserInput | PostHabitCreateOrConnectWithoutUserInput[]
    createMany?: PostHabitCreateManyUserInputEnvelope
    connect?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
  }

  export type PostHabitVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostHabitVoteCreateWithoutUserInput, PostHabitVoteUncheckedCreateWithoutUserInput> | PostHabitVoteCreateWithoutUserInput[] | PostHabitVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostHabitVoteCreateOrConnectWithoutUserInput | PostHabitVoteCreateOrConnectWithoutUserInput[]
    createMany?: PostHabitVoteCreateManyUserInputEnvelope
    connect?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
  }

  export type RoutineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TodoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CollectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type HabitUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type NotificationReadUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationReadCreateWithoutUserInput, NotificationReadUncheckedCreateWithoutUserInput> | NotificationReadCreateWithoutUserInput[] | NotificationReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutUserInput | NotificationReadCreateOrConnectWithoutUserInput[]
    upsert?: NotificationReadUpsertWithWhereUniqueWithoutUserInput | NotificationReadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationReadCreateManyUserInputEnvelope
    set?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    disconnect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    delete?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    update?: NotificationReadUpdateWithWhereUniqueWithoutUserInput | NotificationReadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationReadUpdateManyWithWhereWithoutUserInput | NotificationReadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
  }

  export type PostHabitUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostHabitCreateWithoutUserInput, PostHabitUncheckedCreateWithoutUserInput> | PostHabitCreateWithoutUserInput[] | PostHabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostHabitCreateOrConnectWithoutUserInput | PostHabitCreateOrConnectWithoutUserInput[]
    upsert?: PostHabitUpsertWithWhereUniqueWithoutUserInput | PostHabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostHabitCreateManyUserInputEnvelope
    set?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    disconnect?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    delete?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    connect?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    update?: PostHabitUpdateWithWhereUniqueWithoutUserInput | PostHabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostHabitUpdateManyWithWhereWithoutUserInput | PostHabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostHabitScalarWhereInput | PostHabitScalarWhereInput[]
  }

  export type PostHabitVoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostHabitVoteCreateWithoutUserInput, PostHabitVoteUncheckedCreateWithoutUserInput> | PostHabitVoteCreateWithoutUserInput[] | PostHabitVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostHabitVoteCreateOrConnectWithoutUserInput | PostHabitVoteCreateOrConnectWithoutUserInput[]
    upsert?: PostHabitVoteUpsertWithWhereUniqueWithoutUserInput | PostHabitVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostHabitVoteCreateManyUserInputEnvelope
    set?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    disconnect?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    delete?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    connect?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    update?: PostHabitVoteUpdateWithWhereUniqueWithoutUserInput | PostHabitVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostHabitVoteUpdateManyWithWhereWithoutUserInput | PostHabitVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostHabitVoteScalarWhereInput | PostHabitVoteScalarWhereInput[]
  }

  export type RoutineUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutUserInput | RoutineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutUserInput | RoutineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutUserInput | RoutineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TodoUpdateManyWithoutUserNestedInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutUserInput | TodoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutUserInput | TodoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutUserInput | TodoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type HabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type NotificationReadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationReadCreateWithoutUserInput, NotificationReadUncheckedCreateWithoutUserInput> | NotificationReadCreateWithoutUserInput[] | NotificationReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationReadCreateOrConnectWithoutUserInput | NotificationReadCreateOrConnectWithoutUserInput[]
    upsert?: NotificationReadUpsertWithWhereUniqueWithoutUserInput | NotificationReadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationReadCreateManyUserInputEnvelope
    set?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    disconnect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    delete?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    connect?: NotificationReadWhereUniqueInput | NotificationReadWhereUniqueInput[]
    update?: NotificationReadUpdateWithWhereUniqueWithoutUserInput | NotificationReadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationReadUpdateManyWithWhereWithoutUserInput | NotificationReadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
  }

  export type PostHabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostHabitCreateWithoutUserInput, PostHabitUncheckedCreateWithoutUserInput> | PostHabitCreateWithoutUserInput[] | PostHabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostHabitCreateOrConnectWithoutUserInput | PostHabitCreateOrConnectWithoutUserInput[]
    upsert?: PostHabitUpsertWithWhereUniqueWithoutUserInput | PostHabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostHabitCreateManyUserInputEnvelope
    set?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    disconnect?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    delete?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    connect?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    update?: PostHabitUpdateWithWhereUniqueWithoutUserInput | PostHabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostHabitUpdateManyWithWhereWithoutUserInput | PostHabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostHabitScalarWhereInput | PostHabitScalarWhereInput[]
  }

  export type PostHabitVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostHabitVoteCreateWithoutUserInput, PostHabitVoteUncheckedCreateWithoutUserInput> | PostHabitVoteCreateWithoutUserInput[] | PostHabitVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostHabitVoteCreateOrConnectWithoutUserInput | PostHabitVoteCreateOrConnectWithoutUserInput[]
    upsert?: PostHabitVoteUpsertWithWhereUniqueWithoutUserInput | PostHabitVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostHabitVoteCreateManyUserInputEnvelope
    set?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    disconnect?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    delete?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    connect?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    update?: PostHabitVoteUpdateWithWhereUniqueWithoutUserInput | PostHabitVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostHabitVoteUpdateManyWithWhereWithoutUserInput | PostHabitVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostHabitVoteScalarWhereInput | PostHabitVoteScalarWhereInput[]
  }

  export type RoutineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutUserInput | RoutineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutUserInput | RoutineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutUserInput | RoutineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TodoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutUserInput | TodoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutUserInput | TodoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutUserInput | TodoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type CollectionTodoCreateNestedManyWithoutTodoInput = {
    create?: XOR<CollectionTodoCreateWithoutTodoInput, CollectionTodoUncheckedCreateWithoutTodoInput> | CollectionTodoCreateWithoutTodoInput[] | CollectionTodoUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: CollectionTodoCreateOrConnectWithoutTodoInput | CollectionTodoCreateOrConnectWithoutTodoInput[]
    createMany?: CollectionTodoCreateManyTodoInputEnvelope
    connect?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTodosInput = {
    create?: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput
    connect?: UserWhereUniqueInput
  }

  export type CollectionTodoUncheckedCreateNestedManyWithoutTodoInput = {
    create?: XOR<CollectionTodoCreateWithoutTodoInput, CollectionTodoUncheckedCreateWithoutTodoInput> | CollectionTodoCreateWithoutTodoInput[] | CollectionTodoUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: CollectionTodoCreateOrConnectWithoutTodoInput | CollectionTodoCreateOrConnectWithoutTodoInput[]
    createMany?: CollectionTodoCreateManyTodoInputEnvelope
    connect?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
  }

  export type EnumTodoPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TodoPriority
  }

  export type EnumTodoStatusFieldUpdateOperationsInput = {
    set?: $Enums.TodoStatus
  }

  export type CollectionTodoUpdateManyWithoutTodoNestedInput = {
    create?: XOR<CollectionTodoCreateWithoutTodoInput, CollectionTodoUncheckedCreateWithoutTodoInput> | CollectionTodoCreateWithoutTodoInput[] | CollectionTodoUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: CollectionTodoCreateOrConnectWithoutTodoInput | CollectionTodoCreateOrConnectWithoutTodoInput[]
    upsert?: CollectionTodoUpsertWithWhereUniqueWithoutTodoInput | CollectionTodoUpsertWithWhereUniqueWithoutTodoInput[]
    createMany?: CollectionTodoCreateManyTodoInputEnvelope
    set?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    disconnect?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    delete?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    connect?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    update?: CollectionTodoUpdateWithWhereUniqueWithoutTodoInput | CollectionTodoUpdateWithWhereUniqueWithoutTodoInput[]
    updateMany?: CollectionTodoUpdateManyWithWhereWithoutTodoInput | CollectionTodoUpdateManyWithWhereWithoutTodoInput[]
    deleteMany?: CollectionTodoScalarWhereInput | CollectionTodoScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutTodosNestedInput = {
    create?: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput
    upsert?: UserUpsertWithoutTodosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTodosInput, UserUpdateWithoutTodosInput>, UserUncheckedUpdateWithoutTodosInput>
  }

  export type CollectionTodoUncheckedUpdateManyWithoutTodoNestedInput = {
    create?: XOR<CollectionTodoCreateWithoutTodoInput, CollectionTodoUncheckedCreateWithoutTodoInput> | CollectionTodoCreateWithoutTodoInput[] | CollectionTodoUncheckedCreateWithoutTodoInput[]
    connectOrCreate?: CollectionTodoCreateOrConnectWithoutTodoInput | CollectionTodoCreateOrConnectWithoutTodoInput[]
    upsert?: CollectionTodoUpsertWithWhereUniqueWithoutTodoInput | CollectionTodoUpsertWithWhereUniqueWithoutTodoInput[]
    createMany?: CollectionTodoCreateManyTodoInputEnvelope
    set?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    disconnect?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    delete?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    connect?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    update?: CollectionTodoUpdateWithWhereUniqueWithoutTodoInput | CollectionTodoUpdateWithWhereUniqueWithoutTodoInput[]
    updateMany?: CollectionTodoUpdateManyWithWhereWithoutTodoInput | CollectionTodoUpdateManyWithWhereWithoutTodoInput[]
    deleteMany?: CollectionTodoScalarWhereInput | CollectionTodoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    connect?: UserWhereUniqueInput
  }

  export type CollectionTodoCreateNestedManyWithoutCollectionInput = {
    create?: XOR<CollectionTodoCreateWithoutCollectionInput, CollectionTodoUncheckedCreateWithoutCollectionInput> | CollectionTodoCreateWithoutCollectionInput[] | CollectionTodoUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionTodoCreateOrConnectWithoutCollectionInput | CollectionTodoCreateOrConnectWithoutCollectionInput[]
    createMany?: CollectionTodoCreateManyCollectionInputEnvelope
    connect?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
  }

  export type CollectionTodoUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<CollectionTodoCreateWithoutCollectionInput, CollectionTodoUncheckedCreateWithoutCollectionInput> | CollectionTodoCreateWithoutCollectionInput[] | CollectionTodoUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionTodoCreateOrConnectWithoutCollectionInput | CollectionTodoCreateOrConnectWithoutCollectionInput[]
    createMany?: CollectionTodoCreateManyCollectionInputEnvelope
    connect?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    upsert?: UserUpsertWithoutCollectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionsInput, UserUpdateWithoutCollectionsInput>, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type CollectionTodoUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<CollectionTodoCreateWithoutCollectionInput, CollectionTodoUncheckedCreateWithoutCollectionInput> | CollectionTodoCreateWithoutCollectionInput[] | CollectionTodoUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionTodoCreateOrConnectWithoutCollectionInput | CollectionTodoCreateOrConnectWithoutCollectionInput[]
    upsert?: CollectionTodoUpsertWithWhereUniqueWithoutCollectionInput | CollectionTodoUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: CollectionTodoCreateManyCollectionInputEnvelope
    set?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    disconnect?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    delete?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    connect?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    update?: CollectionTodoUpdateWithWhereUniqueWithoutCollectionInput | CollectionTodoUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: CollectionTodoUpdateManyWithWhereWithoutCollectionInput | CollectionTodoUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: CollectionTodoScalarWhereInput | CollectionTodoScalarWhereInput[]
  }

  export type CollectionTodoUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<CollectionTodoCreateWithoutCollectionInput, CollectionTodoUncheckedCreateWithoutCollectionInput> | CollectionTodoCreateWithoutCollectionInput[] | CollectionTodoUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionTodoCreateOrConnectWithoutCollectionInput | CollectionTodoCreateOrConnectWithoutCollectionInput[]
    upsert?: CollectionTodoUpsertWithWhereUniqueWithoutCollectionInput | CollectionTodoUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: CollectionTodoCreateManyCollectionInputEnvelope
    set?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    disconnect?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    delete?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    connect?: CollectionTodoWhereUniqueInput | CollectionTodoWhereUniqueInput[]
    update?: CollectionTodoUpdateWithWhereUniqueWithoutCollectionInput | CollectionTodoUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: CollectionTodoUpdateManyWithWhereWithoutCollectionInput | CollectionTodoUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: CollectionTodoScalarWhereInput | CollectionTodoScalarWhereInput[]
  }

  export type CollectionCreateNestedOneWithoutItemsInput = {
    create?: XOR<CollectionCreateWithoutItemsInput, CollectionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutItemsInput
    connect?: CollectionWhereUniqueInput
  }

  export type TodoCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<TodoCreateWithoutCollectionsInput, TodoUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: TodoCreateOrConnectWithoutCollectionsInput
    connect?: TodoWhereUniqueInput
  }

  export type CollectionUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CollectionCreateWithoutItemsInput, CollectionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutItemsInput
    upsert?: CollectionUpsertWithoutItemsInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutItemsInput, CollectionUpdateWithoutItemsInput>, CollectionUncheckedUpdateWithoutItemsInput>
  }

  export type TodoUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<TodoCreateWithoutCollectionsInput, TodoUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: TodoCreateOrConnectWithoutCollectionsInput
    upsert?: TodoUpsertWithoutCollectionsInput
    connect?: TodoWhereUniqueInput
    update?: XOR<XOR<TodoUpdateToOneWithWhereWithoutCollectionsInput, TodoUpdateWithoutCollectionsInput>, TodoUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserCreateNestedOneWithoutHabitsInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    connect?: UserWhereUniqueInput
  }

  export type HabitDailyProgressCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitDailyProgressCreateWithoutHabitInput, HabitDailyProgressUncheckedCreateWithoutHabitInput> | HabitDailyProgressCreateWithoutHabitInput[] | HabitDailyProgressUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitDailyProgressCreateOrConnectWithoutHabitInput | HabitDailyProgressCreateOrConnectWithoutHabitInput[]
    createMany?: HabitDailyProgressCreateManyHabitInputEnvelope
    connect?: HabitDailyProgressWhereUniqueInput | HabitDailyProgressWhereUniqueInput[]
  }

  export type PostHabitCreateNestedManyWithoutHabitInput = {
    create?: XOR<PostHabitCreateWithoutHabitInput, PostHabitUncheckedCreateWithoutHabitInput> | PostHabitCreateWithoutHabitInput[] | PostHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PostHabitCreateOrConnectWithoutHabitInput | PostHabitCreateOrConnectWithoutHabitInput[]
    createMany?: PostHabitCreateManyHabitInputEnvelope
    connect?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
  }

  export type RoutineHabitCreateNestedManyWithoutHabitInput = {
    create?: XOR<RoutineHabitCreateWithoutHabitInput, RoutineHabitUncheckedCreateWithoutHabitInput> | RoutineHabitCreateWithoutHabitInput[] | RoutineHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: RoutineHabitCreateOrConnectWithoutHabitInput | RoutineHabitCreateOrConnectWithoutHabitInput[]
    createMany?: RoutineHabitCreateManyHabitInputEnvelope
    connect?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
  }

  export type HabitDailyProgressUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitDailyProgressCreateWithoutHabitInput, HabitDailyProgressUncheckedCreateWithoutHabitInput> | HabitDailyProgressCreateWithoutHabitInput[] | HabitDailyProgressUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitDailyProgressCreateOrConnectWithoutHabitInput | HabitDailyProgressCreateOrConnectWithoutHabitInput[]
    createMany?: HabitDailyProgressCreateManyHabitInputEnvelope
    connect?: HabitDailyProgressWhereUniqueInput | HabitDailyProgressWhereUniqueInput[]
  }

  export type PostHabitUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<PostHabitCreateWithoutHabitInput, PostHabitUncheckedCreateWithoutHabitInput> | PostHabitCreateWithoutHabitInput[] | PostHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PostHabitCreateOrConnectWithoutHabitInput | PostHabitCreateOrConnectWithoutHabitInput[]
    createMany?: PostHabitCreateManyHabitInputEnvelope
    connect?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
  }

  export type RoutineHabitUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<RoutineHabitCreateWithoutHabitInput, RoutineHabitUncheckedCreateWithoutHabitInput> | RoutineHabitCreateWithoutHabitInput[] | RoutineHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: RoutineHabitCreateOrConnectWithoutHabitInput | RoutineHabitCreateOrConnectWithoutHabitInput[]
    createMany?: RoutineHabitCreateManyHabitInputEnvelope
    connect?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    upsert?: UserUpsertWithoutHabitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHabitsInput, UserUpdateWithoutHabitsInput>, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type HabitDailyProgressUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitDailyProgressCreateWithoutHabitInput, HabitDailyProgressUncheckedCreateWithoutHabitInput> | HabitDailyProgressCreateWithoutHabitInput[] | HabitDailyProgressUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitDailyProgressCreateOrConnectWithoutHabitInput | HabitDailyProgressCreateOrConnectWithoutHabitInput[]
    upsert?: HabitDailyProgressUpsertWithWhereUniqueWithoutHabitInput | HabitDailyProgressUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitDailyProgressCreateManyHabitInputEnvelope
    set?: HabitDailyProgressWhereUniqueInput | HabitDailyProgressWhereUniqueInput[]
    disconnect?: HabitDailyProgressWhereUniqueInput | HabitDailyProgressWhereUniqueInput[]
    delete?: HabitDailyProgressWhereUniqueInput | HabitDailyProgressWhereUniqueInput[]
    connect?: HabitDailyProgressWhereUniqueInput | HabitDailyProgressWhereUniqueInput[]
    update?: HabitDailyProgressUpdateWithWhereUniqueWithoutHabitInput | HabitDailyProgressUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitDailyProgressUpdateManyWithWhereWithoutHabitInput | HabitDailyProgressUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitDailyProgressScalarWhereInput | HabitDailyProgressScalarWhereInput[]
  }

  export type PostHabitUpdateManyWithoutHabitNestedInput = {
    create?: XOR<PostHabitCreateWithoutHabitInput, PostHabitUncheckedCreateWithoutHabitInput> | PostHabitCreateWithoutHabitInput[] | PostHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PostHabitCreateOrConnectWithoutHabitInput | PostHabitCreateOrConnectWithoutHabitInput[]
    upsert?: PostHabitUpsertWithWhereUniqueWithoutHabitInput | PostHabitUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: PostHabitCreateManyHabitInputEnvelope
    set?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    disconnect?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    delete?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    connect?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    update?: PostHabitUpdateWithWhereUniqueWithoutHabitInput | PostHabitUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: PostHabitUpdateManyWithWhereWithoutHabitInput | PostHabitUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: PostHabitScalarWhereInput | PostHabitScalarWhereInput[]
  }

  export type RoutineHabitUpdateManyWithoutHabitNestedInput = {
    create?: XOR<RoutineHabitCreateWithoutHabitInput, RoutineHabitUncheckedCreateWithoutHabitInput> | RoutineHabitCreateWithoutHabitInput[] | RoutineHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: RoutineHabitCreateOrConnectWithoutHabitInput | RoutineHabitCreateOrConnectWithoutHabitInput[]
    upsert?: RoutineHabitUpsertWithWhereUniqueWithoutHabitInput | RoutineHabitUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: RoutineHabitCreateManyHabitInputEnvelope
    set?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    disconnect?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    delete?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    connect?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    update?: RoutineHabitUpdateWithWhereUniqueWithoutHabitInput | RoutineHabitUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: RoutineHabitUpdateManyWithWhereWithoutHabitInput | RoutineHabitUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: RoutineHabitScalarWhereInput | RoutineHabitScalarWhereInput[]
  }

  export type HabitDailyProgressUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitDailyProgressCreateWithoutHabitInput, HabitDailyProgressUncheckedCreateWithoutHabitInput> | HabitDailyProgressCreateWithoutHabitInput[] | HabitDailyProgressUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitDailyProgressCreateOrConnectWithoutHabitInput | HabitDailyProgressCreateOrConnectWithoutHabitInput[]
    upsert?: HabitDailyProgressUpsertWithWhereUniqueWithoutHabitInput | HabitDailyProgressUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitDailyProgressCreateManyHabitInputEnvelope
    set?: HabitDailyProgressWhereUniqueInput | HabitDailyProgressWhereUniqueInput[]
    disconnect?: HabitDailyProgressWhereUniqueInput | HabitDailyProgressWhereUniqueInput[]
    delete?: HabitDailyProgressWhereUniqueInput | HabitDailyProgressWhereUniqueInput[]
    connect?: HabitDailyProgressWhereUniqueInput | HabitDailyProgressWhereUniqueInput[]
    update?: HabitDailyProgressUpdateWithWhereUniqueWithoutHabitInput | HabitDailyProgressUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitDailyProgressUpdateManyWithWhereWithoutHabitInput | HabitDailyProgressUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitDailyProgressScalarWhereInput | HabitDailyProgressScalarWhereInput[]
  }

  export type PostHabitUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<PostHabitCreateWithoutHabitInput, PostHabitUncheckedCreateWithoutHabitInput> | PostHabitCreateWithoutHabitInput[] | PostHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: PostHabitCreateOrConnectWithoutHabitInput | PostHabitCreateOrConnectWithoutHabitInput[]
    upsert?: PostHabitUpsertWithWhereUniqueWithoutHabitInput | PostHabitUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: PostHabitCreateManyHabitInputEnvelope
    set?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    disconnect?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    delete?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    connect?: PostHabitWhereUniqueInput | PostHabitWhereUniqueInput[]
    update?: PostHabitUpdateWithWhereUniqueWithoutHabitInput | PostHabitUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: PostHabitUpdateManyWithWhereWithoutHabitInput | PostHabitUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: PostHabitScalarWhereInput | PostHabitScalarWhereInput[]
  }

  export type RoutineHabitUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<RoutineHabitCreateWithoutHabitInput, RoutineHabitUncheckedCreateWithoutHabitInput> | RoutineHabitCreateWithoutHabitInput[] | RoutineHabitUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: RoutineHabitCreateOrConnectWithoutHabitInput | RoutineHabitCreateOrConnectWithoutHabitInput[]
    upsert?: RoutineHabitUpsertWithWhereUniqueWithoutHabitInput | RoutineHabitUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: RoutineHabitCreateManyHabitInputEnvelope
    set?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    disconnect?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    delete?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    connect?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    update?: RoutineHabitUpdateWithWhereUniqueWithoutHabitInput | RoutineHabitUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: RoutineHabitUpdateManyWithWhereWithoutHabitInput | RoutineHabitUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: RoutineHabitScalarWhereInput | RoutineHabitScalarWhereInput[]
  }

  export type HabitCreateNestedOneWithoutDailyProgressEntriesInput = {
    create?: XOR<HabitCreateWithoutDailyProgressEntriesInput, HabitUncheckedCreateWithoutDailyProgressEntriesInput>
    connectOrCreate?: HabitCreateOrConnectWithoutDailyProgressEntriesInput
    connect?: HabitWhereUniqueInput
  }

  export type HabitUpdateOneRequiredWithoutDailyProgressEntriesNestedInput = {
    create?: XOR<HabitCreateWithoutDailyProgressEntriesInput, HabitUncheckedCreateWithoutDailyProgressEntriesInput>
    connectOrCreate?: HabitCreateOrConnectWithoutDailyProgressEntriesInput
    upsert?: HabitUpsertWithoutDailyProgressEntriesInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutDailyProgressEntriesInput, HabitUpdateWithoutDailyProgressEntriesInput>, HabitUncheckedUpdateWithoutDailyProgressEntriesInput>
  }

  export type UserCreateNestedOneWithoutRoutinesInput = {
    create?: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput
    connect?: UserWhereUniqueInput
  }

  export type RoutineHabitCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineHabitCreateWithoutRoutineInput, RoutineHabitUncheckedCreateWithoutRoutineInput> | RoutineHabitCreateWithoutRoutineInput[] | RoutineHabitUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineHabitCreateOrConnectWithoutRoutineInput | RoutineHabitCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineHabitCreateManyRoutineInputEnvelope
    connect?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
  }

  export type RoutineHabitUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineHabitCreateWithoutRoutineInput, RoutineHabitUncheckedCreateWithoutRoutineInput> | RoutineHabitCreateWithoutRoutineInput[] | RoutineHabitUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineHabitCreateOrConnectWithoutRoutineInput | RoutineHabitCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineHabitCreateManyRoutineInputEnvelope
    connect?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
  }

  export type EnumRoutineTimeWindowFieldUpdateOperationsInput = {
    set?: $Enums.RoutineTimeWindow
  }

  export type UserUpdateOneRequiredWithoutRoutinesNestedInput = {
    create?: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput
    upsert?: UserUpsertWithoutRoutinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoutinesInput, UserUpdateWithoutRoutinesInput>, UserUncheckedUpdateWithoutRoutinesInput>
  }

  export type RoutineHabitUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineHabitCreateWithoutRoutineInput, RoutineHabitUncheckedCreateWithoutRoutineInput> | RoutineHabitCreateWithoutRoutineInput[] | RoutineHabitUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineHabitCreateOrConnectWithoutRoutineInput | RoutineHabitCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput | RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineHabitCreateManyRoutineInputEnvelope
    set?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    disconnect?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    delete?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    connect?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    update?: RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput | RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineHabitUpdateManyWithWhereWithoutRoutineInput | RoutineHabitUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineHabitScalarWhereInput | RoutineHabitScalarWhereInput[]
  }

  export type RoutineHabitUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineHabitCreateWithoutRoutineInput, RoutineHabitUncheckedCreateWithoutRoutineInput> | RoutineHabitCreateWithoutRoutineInput[] | RoutineHabitUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineHabitCreateOrConnectWithoutRoutineInput | RoutineHabitCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput | RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineHabitCreateManyRoutineInputEnvelope
    set?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    disconnect?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    delete?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    connect?: RoutineHabitWhereUniqueInput | RoutineHabitWhereUniqueInput[]
    update?: RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput | RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineHabitUpdateManyWithWhereWithoutRoutineInput | RoutineHabitUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineHabitScalarWhereInput | RoutineHabitScalarWhereInput[]
  }

  export type HabitCreateNestedOneWithoutRoutineHabitsInput = {
    create?: XOR<HabitCreateWithoutRoutineHabitsInput, HabitUncheckedCreateWithoutRoutineHabitsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutRoutineHabitsInput
    connect?: HabitWhereUniqueInput
  }

  export type RoutineCreateNestedOneWithoutHabitsInput = {
    create?: XOR<RoutineCreateWithoutHabitsInput, RoutineUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutHabitsInput
    connect?: RoutineWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HabitUpdateOneRequiredWithoutRoutineHabitsNestedInput = {
    create?: XOR<HabitCreateWithoutRoutineHabitsInput, HabitUncheckedCreateWithoutRoutineHabitsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutRoutineHabitsInput
    upsert?: HabitUpsertWithoutRoutineHabitsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutRoutineHabitsInput, HabitUpdateWithoutRoutineHabitsInput>, HabitUncheckedUpdateWithoutRoutineHabitsInput>
  }

  export type RoutineUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<RoutineCreateWithoutHabitsInput, RoutineUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutHabitsInput
    upsert?: RoutineUpsertWithoutHabitsInput
    connect?: RoutineWhereUniqueInput
    update?: XOR<XOR<RoutineUpdateToOneWithWhereWithoutHabitsInput, RoutineUpdateWithoutHabitsInput>, RoutineUncheckedUpdateWithoutHabitsInput>
  }

  export type HabitCreateNestedOneWithoutPost_habitInput = {
    create?: XOR<HabitCreateWithoutPost_habitInput, HabitUncheckedCreateWithoutPost_habitInput>
    connectOrCreate?: HabitCreateOrConnectWithoutPost_habitInput
    connect?: HabitWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostHabitsInput = {
    create?: XOR<UserCreateWithoutPostHabitsInput, UserUncheckedCreateWithoutPostHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostHabitsInput
    connect?: UserWhereUniqueInput
  }

  export type PostHabitVoteCreateNestedManyWithoutPostHabitInput = {
    create?: XOR<PostHabitVoteCreateWithoutPostHabitInput, PostHabitVoteUncheckedCreateWithoutPostHabitInput> | PostHabitVoteCreateWithoutPostHabitInput[] | PostHabitVoteUncheckedCreateWithoutPostHabitInput[]
    connectOrCreate?: PostHabitVoteCreateOrConnectWithoutPostHabitInput | PostHabitVoteCreateOrConnectWithoutPostHabitInput[]
    createMany?: PostHabitVoteCreateManyPostHabitInputEnvelope
    connect?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
  }

  export type PostHabitVoteUncheckedCreateNestedManyWithoutPostHabitInput = {
    create?: XOR<PostHabitVoteCreateWithoutPostHabitInput, PostHabitVoteUncheckedCreateWithoutPostHabitInput> | PostHabitVoteCreateWithoutPostHabitInput[] | PostHabitVoteUncheckedCreateWithoutPostHabitInput[]
    connectOrCreate?: PostHabitVoteCreateOrConnectWithoutPostHabitInput | PostHabitVoteCreateOrConnectWithoutPostHabitInput[]
    createMany?: PostHabitVoteCreateManyPostHabitInputEnvelope
    connect?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
  }

  export type EnumHabitCategoryFieldUpdateOperationsInput = {
    set?: $Enums.HabitCategory
  }

  export type HabitUpdateOneRequiredWithoutPost_habitNestedInput = {
    create?: XOR<HabitCreateWithoutPost_habitInput, HabitUncheckedCreateWithoutPost_habitInput>
    connectOrCreate?: HabitCreateOrConnectWithoutPost_habitInput
    upsert?: HabitUpsertWithoutPost_habitInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutPost_habitInput, HabitUpdateWithoutPost_habitInput>, HabitUncheckedUpdateWithoutPost_habitInput>
  }

  export type UserUpdateOneRequiredWithoutPostHabitsNestedInput = {
    create?: XOR<UserCreateWithoutPostHabitsInput, UserUncheckedCreateWithoutPostHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostHabitsInput
    upsert?: UserUpsertWithoutPostHabitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostHabitsInput, UserUpdateWithoutPostHabitsInput>, UserUncheckedUpdateWithoutPostHabitsInput>
  }

  export type PostHabitVoteUpdateManyWithoutPostHabitNestedInput = {
    create?: XOR<PostHabitVoteCreateWithoutPostHabitInput, PostHabitVoteUncheckedCreateWithoutPostHabitInput> | PostHabitVoteCreateWithoutPostHabitInput[] | PostHabitVoteUncheckedCreateWithoutPostHabitInput[]
    connectOrCreate?: PostHabitVoteCreateOrConnectWithoutPostHabitInput | PostHabitVoteCreateOrConnectWithoutPostHabitInput[]
    upsert?: PostHabitVoteUpsertWithWhereUniqueWithoutPostHabitInput | PostHabitVoteUpsertWithWhereUniqueWithoutPostHabitInput[]
    createMany?: PostHabitVoteCreateManyPostHabitInputEnvelope
    set?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    disconnect?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    delete?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    connect?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    update?: PostHabitVoteUpdateWithWhereUniqueWithoutPostHabitInput | PostHabitVoteUpdateWithWhereUniqueWithoutPostHabitInput[]
    updateMany?: PostHabitVoteUpdateManyWithWhereWithoutPostHabitInput | PostHabitVoteUpdateManyWithWhereWithoutPostHabitInput[]
    deleteMany?: PostHabitVoteScalarWhereInput | PostHabitVoteScalarWhereInput[]
  }

  export type PostHabitVoteUncheckedUpdateManyWithoutPostHabitNestedInput = {
    create?: XOR<PostHabitVoteCreateWithoutPostHabitInput, PostHabitVoteUncheckedCreateWithoutPostHabitInput> | PostHabitVoteCreateWithoutPostHabitInput[] | PostHabitVoteUncheckedCreateWithoutPostHabitInput[]
    connectOrCreate?: PostHabitVoteCreateOrConnectWithoutPostHabitInput | PostHabitVoteCreateOrConnectWithoutPostHabitInput[]
    upsert?: PostHabitVoteUpsertWithWhereUniqueWithoutPostHabitInput | PostHabitVoteUpsertWithWhereUniqueWithoutPostHabitInput[]
    createMany?: PostHabitVoteCreateManyPostHabitInputEnvelope
    set?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    disconnect?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    delete?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    connect?: PostHabitVoteWhereUniqueInput | PostHabitVoteWhereUniqueInput[]
    update?: PostHabitVoteUpdateWithWhereUniqueWithoutPostHabitInput | PostHabitVoteUpdateWithWhereUniqueWithoutPostHabitInput[]
    updateMany?: PostHabitVoteUpdateManyWithWhereWithoutPostHabitInput | PostHabitVoteUpdateManyWithWhereWithoutPostHabitInput[]
    deleteMany?: PostHabitVoteScalarWhereInput | PostHabitVoteScalarWhereInput[]
  }

  export type PostHabitCreateNestedOneWithoutVotesInput = {
    create?: XOR<PostHabitCreateWithoutVotesInput, PostHabitUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PostHabitCreateOrConnectWithoutVotesInput
    connect?: PostHabitWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostHabitVotesInput = {
    create?: XOR<UserCreateWithoutPostHabitVotesInput, UserUncheckedCreateWithoutPostHabitVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostHabitVotesInput
    connect?: UserWhereUniqueInput
  }

  export type PostHabitUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<PostHabitCreateWithoutVotesInput, PostHabitUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PostHabitCreateOrConnectWithoutVotesInput
    upsert?: PostHabitUpsertWithoutVotesInput
    connect?: PostHabitWhereUniqueInput
    update?: XOR<XOR<PostHabitUpdateToOneWithWhereWithoutVotesInput, PostHabitUpdateWithoutVotesInput>, PostHabitUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateOneRequiredWithoutPostHabitVotesNestedInput = {
    create?: XOR<UserCreateWithoutPostHabitVotesInput, UserUncheckedCreateWithoutPostHabitVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostHabitVotesInput
    upsert?: UserUpsertWithoutPostHabitVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostHabitVotesInput, UserUpdateWithoutPostHabitVotesInput>, UserUncheckedUpdateWithoutPostHabitVotesInput>
  }

  export type UserCreateNestedOneWithoutNotification_readInput = {
    create?: XOR<UserCreateWithoutNotification_readInput, UserUncheckedCreateWithoutNotification_readInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotification_readInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotification_readNestedInput = {
    create?: XOR<UserCreateWithoutNotification_readInput, UserUncheckedCreateWithoutNotification_readInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotification_readInput
    upsert?: UserUpsertWithoutNotification_readInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotification_readInput, UserUpdateWithoutNotification_readInput>, UserUncheckedUpdateWithoutNotification_readInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTodoPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoPriority | EnumTodoPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TodoPriority[] | ListEnumTodoPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoPriority[] | ListEnumTodoPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoPriorityFilter<$PrismaModel> | $Enums.TodoPriority
  }

  export type NestedEnumTodoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoStatus | EnumTodoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoStatusFilter<$PrismaModel> | $Enums.TodoStatus
  }

  export type NestedEnumTodoPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoPriority | EnumTodoPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TodoPriority[] | ListEnumTodoPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoPriority[] | ListEnumTodoPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TodoPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTodoPriorityFilter<$PrismaModel>
    _max?: NestedEnumTodoPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTodoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoStatus | EnumTodoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoStatusWithAggregatesFilter<$PrismaModel> | $Enums.TodoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTodoStatusFilter<$PrismaModel>
    _max?: NestedEnumTodoStatusFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRoutineTimeWindowFilter<$PrismaModel = never> = {
    equals?: $Enums.RoutineTimeWindow | EnumRoutineTimeWindowFieldRefInput<$PrismaModel>
    in?: $Enums.RoutineTimeWindow[] | ListEnumRoutineTimeWindowFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoutineTimeWindow[] | ListEnumRoutineTimeWindowFieldRefInput<$PrismaModel>
    not?: NestedEnumRoutineTimeWindowFilter<$PrismaModel> | $Enums.RoutineTimeWindow
  }

  export type NestedEnumRoutineTimeWindowWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoutineTimeWindow | EnumRoutineTimeWindowFieldRefInput<$PrismaModel>
    in?: $Enums.RoutineTimeWindow[] | ListEnumRoutineTimeWindowFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoutineTimeWindow[] | ListEnumRoutineTimeWindowFieldRefInput<$PrismaModel>
    not?: NestedEnumRoutineTimeWindowWithAggregatesFilter<$PrismaModel> | $Enums.RoutineTimeWindow
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoutineTimeWindowFilter<$PrismaModel>
    _max?: NestedEnumRoutineTimeWindowFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumHabitCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitCategory | EnumHabitCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.HabitCategory[] | ListEnumHabitCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitCategory[] | ListEnumHabitCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitCategoryFilter<$PrismaModel> | $Enums.HabitCategory
  }

  export type NestedEnumHabitCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitCategory | EnumHabitCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.HabitCategory[] | ListEnumHabitCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitCategory[] | ListEnumHabitCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitCategoryWithAggregatesFilter<$PrismaModel> | $Enums.HabitCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHabitCategoryFilter<$PrismaModel>
    _max?: NestedEnumHabitCategoryFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CollectionCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CollectionTodoCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CollectionTodoUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutUserInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionCreateManyUserInputEnvelope = {
    data: CollectionCreateManyUserInput | CollectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HabitCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    cadence: string
    startDate: Date | string
    timeWindow?: string | null
    goalAmount?: number
    goalUnit?: string
    goalUnitCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourcePopularPostId?: string | null
    dailyProgress?: number
    dailyProgressEntries?: HabitDailyProgressCreateNestedManyWithoutHabitInput
    post_habit?: PostHabitCreateNestedManyWithoutHabitInput
    routineHabits?: RoutineHabitCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    cadence: string
    startDate: Date | string
    timeWindow?: string | null
    goalAmount?: number
    goalUnit?: string
    goalUnitCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourcePopularPostId?: string | null
    dailyProgress?: number
    dailyProgressEntries?: HabitDailyProgressUncheckedCreateNestedManyWithoutHabitInput
    post_habit?: PostHabitUncheckedCreateNestedManyWithoutHabitInput
    routineHabits?: RoutineHabitUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutUserInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitCreateManyUserInputEnvelope = {
    data: HabitCreateManyUserInput | HabitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationReadCreateWithoutUserInput = {
    id: string
    notificationId: string
    createdAt?: Date | string
  }

  export type NotificationReadUncheckedCreateWithoutUserInput = {
    id: string
    notificationId: string
    createdAt?: Date | string
  }

  export type NotificationReadCreateOrConnectWithoutUserInput = {
    where: NotificationReadWhereUniqueInput
    create: XOR<NotificationReadCreateWithoutUserInput, NotificationReadUncheckedCreateWithoutUserInput>
  }

  export type NotificationReadCreateManyUserInputEnvelope = {
    data: NotificationReadCreateManyUserInput | NotificationReadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostHabitCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    cadence: string
    category: $Enums.HabitCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    votesCount?: number
    habit: HabitCreateNestedOneWithoutPost_habitInput
    votes?: PostHabitVoteCreateNestedManyWithoutPostHabitInput
  }

  export type PostHabitUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    cadence: string
    category: $Enums.HabitCategory
    habitId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votesCount?: number
    votes?: PostHabitVoteUncheckedCreateNestedManyWithoutPostHabitInput
  }

  export type PostHabitCreateOrConnectWithoutUserInput = {
    where: PostHabitWhereUniqueInput
    create: XOR<PostHabitCreateWithoutUserInput, PostHabitUncheckedCreateWithoutUserInput>
  }

  export type PostHabitCreateManyUserInputEnvelope = {
    data: PostHabitCreateManyUserInput | PostHabitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostHabitVoteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    postHabit: PostHabitCreateNestedOneWithoutVotesInput
  }

  export type PostHabitVoteUncheckedCreateWithoutUserInput = {
    id?: string
    postHabitId: string
    createdAt?: Date | string
  }

  export type PostHabitVoteCreateOrConnectWithoutUserInput = {
    where: PostHabitVoteWhereUniqueInput
    create: XOR<PostHabitVoteCreateWithoutUserInput, PostHabitVoteUncheckedCreateWithoutUserInput>
  }

  export type PostHabitVoteCreateManyUserInputEnvelope = {
    data: PostHabitVoteCreateManyUserInput | PostHabitVoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoutineCreateWithoutUserInput = {
    id?: string
    name: string
    anchor?: string | null
    notes?: string | null
    timeWindow?: $Enums.RoutineTimeWindow
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: RoutineHabitCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    anchor?: string | null
    notes?: string | null
    timeWindow?: $Enums.RoutineTimeWindow
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: RoutineHabitUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutUserInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput>
  }

  export type RoutineCreateManyUserInputEnvelope = {
    data: RoutineCreateManyUserInput | RoutineCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TodoCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    priority?: $Enums.TodoPriority
    status?: $Enums.TodoStatus
    dueAt?: Date | string | null
    scheduledTime?: string | null
    durationMinutes?: number | null
    location?: string | null
    reminder?: string | null
    recurrence?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    iconColor?: string
    iconName?: string
    archived?: boolean
    collections?: CollectionTodoCreateNestedManyWithoutTodoInput
  }

  export type TodoUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    priority?: $Enums.TodoPriority
    status?: $Enums.TodoStatus
    dueAt?: Date | string | null
    scheduledTime?: string | null
    durationMinutes?: number | null
    location?: string | null
    reminder?: string | null
    recurrence?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    iconColor?: string
    iconName?: string
    archived?: boolean
    collections?: CollectionTodoUncheckedCreateNestedManyWithoutTodoInput
  }

  export type TodoCreateOrConnectWithoutUserInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput>
  }

  export type TodoCreateManyUserInputEnvelope = {
    data: TodoCreateManyUserInput | TodoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
  }

  export type CollectionUpdateManyWithWhereWithoutUserInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutUserInput>
  }

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    OR?: CollectionScalarWhereInput[]
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    id?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    userId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
  }

  export type HabitUpsertWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    update: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitUpdateWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    data: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
  }

  export type HabitUpdateManyWithWhereWithoutUserInput = {
    where: HabitScalarWhereInput
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyWithoutUserInput>
  }

  export type HabitScalarWhereInput = {
    AND?: HabitScalarWhereInput | HabitScalarWhereInput[]
    OR?: HabitScalarWhereInput[]
    NOT?: HabitScalarWhereInput | HabitScalarWhereInput[]
    id?: StringFilter<"Habit"> | string
    name?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    cadence?: StringFilter<"Habit"> | string
    startDate?: DateTimeFilter<"Habit"> | Date | string
    timeWindow?: StringNullableFilter<"Habit"> | string | null
    goalAmount?: FloatFilter<"Habit"> | number
    goalUnit?: StringFilter<"Habit"> | string
    goalUnitCategory?: StringFilter<"Habit"> | string
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    userId?: StringFilter<"Habit"> | string
    sourcePopularPostId?: StringNullableFilter<"Habit"> | string | null
    dailyProgress?: FloatFilter<"Habit"> | number
  }

  export type NotificationReadUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationReadWhereUniqueInput
    update: XOR<NotificationReadUpdateWithoutUserInput, NotificationReadUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationReadCreateWithoutUserInput, NotificationReadUncheckedCreateWithoutUserInput>
  }

  export type NotificationReadUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationReadWhereUniqueInput
    data: XOR<NotificationReadUpdateWithoutUserInput, NotificationReadUncheckedUpdateWithoutUserInput>
  }

  export type NotificationReadUpdateManyWithWhereWithoutUserInput = {
    where: NotificationReadScalarWhereInput
    data: XOR<NotificationReadUpdateManyMutationInput, NotificationReadUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationReadScalarWhereInput = {
    AND?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
    OR?: NotificationReadScalarWhereInput[]
    NOT?: NotificationReadScalarWhereInput | NotificationReadScalarWhereInput[]
    id?: StringFilter<"NotificationRead"> | string
    userId?: StringFilter<"NotificationRead"> | string
    notificationId?: StringFilter<"NotificationRead"> | string
    createdAt?: DateTimeFilter<"NotificationRead"> | Date | string
  }

  export type PostHabitUpsertWithWhereUniqueWithoutUserInput = {
    where: PostHabitWhereUniqueInput
    update: XOR<PostHabitUpdateWithoutUserInput, PostHabitUncheckedUpdateWithoutUserInput>
    create: XOR<PostHabitCreateWithoutUserInput, PostHabitUncheckedCreateWithoutUserInput>
  }

  export type PostHabitUpdateWithWhereUniqueWithoutUserInput = {
    where: PostHabitWhereUniqueInput
    data: XOR<PostHabitUpdateWithoutUserInput, PostHabitUncheckedUpdateWithoutUserInput>
  }

  export type PostHabitUpdateManyWithWhereWithoutUserInput = {
    where: PostHabitScalarWhereInput
    data: XOR<PostHabitUpdateManyMutationInput, PostHabitUncheckedUpdateManyWithoutUserInput>
  }

  export type PostHabitScalarWhereInput = {
    AND?: PostHabitScalarWhereInput | PostHabitScalarWhereInput[]
    OR?: PostHabitScalarWhereInput[]
    NOT?: PostHabitScalarWhereInput | PostHabitScalarWhereInput[]
    id?: StringFilter<"PostHabit"> | string
    title?: StringFilter<"PostHabit"> | string
    description?: StringNullableFilter<"PostHabit"> | string | null
    cadence?: StringFilter<"PostHabit"> | string
    category?: EnumHabitCategoryFilter<"PostHabit"> | $Enums.HabitCategory
    habitId?: StringFilter<"PostHabit"> | string
    userId?: StringFilter<"PostHabit"> | string
    createdAt?: DateTimeFilter<"PostHabit"> | Date | string
    updatedAt?: DateTimeFilter<"PostHabit"> | Date | string
    votesCount?: IntFilter<"PostHabit"> | number
  }

  export type PostHabitVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: PostHabitVoteWhereUniqueInput
    update: XOR<PostHabitVoteUpdateWithoutUserInput, PostHabitVoteUncheckedUpdateWithoutUserInput>
    create: XOR<PostHabitVoteCreateWithoutUserInput, PostHabitVoteUncheckedCreateWithoutUserInput>
  }

  export type PostHabitVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: PostHabitVoteWhereUniqueInput
    data: XOR<PostHabitVoteUpdateWithoutUserInput, PostHabitVoteUncheckedUpdateWithoutUserInput>
  }

  export type PostHabitVoteUpdateManyWithWhereWithoutUserInput = {
    where: PostHabitVoteScalarWhereInput
    data: XOR<PostHabitVoteUpdateManyMutationInput, PostHabitVoteUncheckedUpdateManyWithoutUserInput>
  }

  export type PostHabitVoteScalarWhereInput = {
    AND?: PostHabitVoteScalarWhereInput | PostHabitVoteScalarWhereInput[]
    OR?: PostHabitVoteScalarWhereInput[]
    NOT?: PostHabitVoteScalarWhereInput | PostHabitVoteScalarWhereInput[]
    id?: StringFilter<"PostHabitVote"> | string
    postHabitId?: StringFilter<"PostHabitVote"> | string
    userId?: StringFilter<"PostHabitVote"> | string
    createdAt?: DateTimeFilter<"PostHabitVote"> | Date | string
  }

  export type RoutineUpsertWithWhereUniqueWithoutUserInput = {
    where: RoutineWhereUniqueInput
    update: XOR<RoutineUpdateWithoutUserInput, RoutineUncheckedUpdateWithoutUserInput>
    create: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput>
  }

  export type RoutineUpdateWithWhereUniqueWithoutUserInput = {
    where: RoutineWhereUniqueInput
    data: XOR<RoutineUpdateWithoutUserInput, RoutineUncheckedUpdateWithoutUserInput>
  }

  export type RoutineUpdateManyWithWhereWithoutUserInput = {
    where: RoutineScalarWhereInput
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyWithoutUserInput>
  }

  export type RoutineScalarWhereInput = {
    AND?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    OR?: RoutineScalarWhereInput[]
    NOT?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    id?: StringFilter<"Routine"> | string
    name?: StringFilter<"Routine"> | string
    anchor?: StringNullableFilter<"Routine"> | string | null
    notes?: StringNullableFilter<"Routine"> | string | null
    timeWindow?: EnumRoutineTimeWindowFilter<"Routine"> | $Enums.RoutineTimeWindow
    isDefault?: BoolFilter<"Routine"> | boolean
    userId?: StringFilter<"Routine"> | string
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type TodoUpsertWithWhereUniqueWithoutUserInput = {
    where: TodoWhereUniqueInput
    update: XOR<TodoUpdateWithoutUserInput, TodoUncheckedUpdateWithoutUserInput>
    create: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput>
  }

  export type TodoUpdateWithWhereUniqueWithoutUserInput = {
    where: TodoWhereUniqueInput
    data: XOR<TodoUpdateWithoutUserInput, TodoUncheckedUpdateWithoutUserInput>
  }

  export type TodoUpdateManyWithWhereWithoutUserInput = {
    where: TodoScalarWhereInput
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyWithoutUserInput>
  }

  export type TodoScalarWhereInput = {
    AND?: TodoScalarWhereInput | TodoScalarWhereInput[]
    OR?: TodoScalarWhereInput[]
    NOT?: TodoScalarWhereInput | TodoScalarWhereInput[]
    id?: StringFilter<"Todo"> | string
    title?: StringFilter<"Todo"> | string
    description?: StringNullableFilter<"Todo"> | string | null
    category?: StringNullableFilter<"Todo"> | string | null
    priority?: EnumTodoPriorityFilter<"Todo"> | $Enums.TodoPriority
    status?: EnumTodoStatusFilter<"Todo"> | $Enums.TodoStatus
    dueAt?: DateTimeNullableFilter<"Todo"> | Date | string | null
    scheduledTime?: StringNullableFilter<"Todo"> | string | null
    durationMinutes?: IntNullableFilter<"Todo"> | number | null
    location?: StringNullableFilter<"Todo"> | string | null
    reminder?: StringNullableFilter<"Todo"> | string | null
    recurrence?: StringNullableFilter<"Todo"> | string | null
    tags?: StringNullableFilter<"Todo"> | string | null
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
    userId?: StringFilter<"Todo"> | string
    iconColor?: StringFilter<"Todo"> | string
    iconName?: StringFilter<"Todo"> | string
    archived?: BoolFilter<"Todo"> | boolean
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadCreateNestedManyWithoutUserInput
    postHabits?: PostHabitCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
    postHabits?: PostHabitUncheckedCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUncheckedUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    collections?: CollectionCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadCreateNestedManyWithoutUserInput
    postHabits?: PostHabitCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
    postHabits?: PostHabitUncheckedCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    collections?: CollectionUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUncheckedUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CollectionTodoCreateWithoutTodoInput = {
    id?: string
    createdAt?: Date | string
    collection: CollectionCreateNestedOneWithoutItemsInput
  }

  export type CollectionTodoUncheckedCreateWithoutTodoInput = {
    id?: string
    collectionId: string
    createdAt?: Date | string
  }

  export type CollectionTodoCreateOrConnectWithoutTodoInput = {
    where: CollectionTodoWhereUniqueInput
    create: XOR<CollectionTodoCreateWithoutTodoInput, CollectionTodoUncheckedCreateWithoutTodoInput>
  }

  export type CollectionTodoCreateManyTodoInputEnvelope = {
    data: CollectionTodoCreateManyTodoInput | CollectionTodoCreateManyTodoInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTodosInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadCreateNestedManyWithoutUserInput
    postHabits?: PostHabitCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTodosInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
    postHabits?: PostHabitUncheckedCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTodosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
  }

  export type CollectionTodoUpsertWithWhereUniqueWithoutTodoInput = {
    where: CollectionTodoWhereUniqueInput
    update: XOR<CollectionTodoUpdateWithoutTodoInput, CollectionTodoUncheckedUpdateWithoutTodoInput>
    create: XOR<CollectionTodoCreateWithoutTodoInput, CollectionTodoUncheckedCreateWithoutTodoInput>
  }

  export type CollectionTodoUpdateWithWhereUniqueWithoutTodoInput = {
    where: CollectionTodoWhereUniqueInput
    data: XOR<CollectionTodoUpdateWithoutTodoInput, CollectionTodoUncheckedUpdateWithoutTodoInput>
  }

  export type CollectionTodoUpdateManyWithWhereWithoutTodoInput = {
    where: CollectionTodoScalarWhereInput
    data: XOR<CollectionTodoUpdateManyMutationInput, CollectionTodoUncheckedUpdateManyWithoutTodoInput>
  }

  export type CollectionTodoScalarWhereInput = {
    AND?: CollectionTodoScalarWhereInput | CollectionTodoScalarWhereInput[]
    OR?: CollectionTodoScalarWhereInput[]
    NOT?: CollectionTodoScalarWhereInput | CollectionTodoScalarWhereInput[]
    id?: StringFilter<"CollectionTodo"> | string
    collectionId?: StringFilter<"CollectionTodo"> | string
    todoId?: StringFilter<"CollectionTodo"> | string
    createdAt?: DateTimeFilter<"CollectionTodo"> | Date | string
  }

  export type UserUpsertWithoutTodosInput = {
    update: XOR<UserUpdateWithoutTodosInput, UserUncheckedUpdateWithoutTodosInput>
    create: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTodosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTodosInput, UserUncheckedUpdateWithoutTodosInput>
  }

  export type UserUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUncheckedUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCollectionsInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadCreateNestedManyWithoutUserInput
    postHabits?: PostHabitCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollectionsInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
    postHabits?: PostHabitUncheckedCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
  }

  export type CollectionTodoCreateWithoutCollectionInput = {
    id?: string
    createdAt?: Date | string
    todo: TodoCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionTodoUncheckedCreateWithoutCollectionInput = {
    id?: string
    todoId: string
    createdAt?: Date | string
  }

  export type CollectionTodoCreateOrConnectWithoutCollectionInput = {
    where: CollectionTodoWhereUniqueInput
    create: XOR<CollectionTodoCreateWithoutCollectionInput, CollectionTodoUncheckedCreateWithoutCollectionInput>
  }

  export type CollectionTodoCreateManyCollectionInputEnvelope = {
    data: CollectionTodoCreateManyCollectionInput | CollectionTodoCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCollectionsInput = {
    update: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUncheckedUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CollectionTodoUpsertWithWhereUniqueWithoutCollectionInput = {
    where: CollectionTodoWhereUniqueInput
    update: XOR<CollectionTodoUpdateWithoutCollectionInput, CollectionTodoUncheckedUpdateWithoutCollectionInput>
    create: XOR<CollectionTodoCreateWithoutCollectionInput, CollectionTodoUncheckedCreateWithoutCollectionInput>
  }

  export type CollectionTodoUpdateWithWhereUniqueWithoutCollectionInput = {
    where: CollectionTodoWhereUniqueInput
    data: XOR<CollectionTodoUpdateWithoutCollectionInput, CollectionTodoUncheckedUpdateWithoutCollectionInput>
  }

  export type CollectionTodoUpdateManyWithWhereWithoutCollectionInput = {
    where: CollectionTodoScalarWhereInput
    data: XOR<CollectionTodoUpdateManyMutationInput, CollectionTodoUncheckedUpdateManyWithoutCollectionInput>
  }

  export type CollectionCreateWithoutItemsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionCreateOrConnectWithoutItemsInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutItemsInput, CollectionUncheckedCreateWithoutItemsInput>
  }

  export type TodoCreateWithoutCollectionsInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    priority?: $Enums.TodoPriority
    status?: $Enums.TodoStatus
    dueAt?: Date | string | null
    scheduledTime?: string | null
    durationMinutes?: number | null
    location?: string | null
    reminder?: string | null
    recurrence?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    iconColor?: string
    iconName?: string
    archived?: boolean
    user: UserCreateNestedOneWithoutTodosInput
  }

  export type TodoUncheckedCreateWithoutCollectionsInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    priority?: $Enums.TodoPriority
    status?: $Enums.TodoStatus
    dueAt?: Date | string | null
    scheduledTime?: string | null
    durationMinutes?: number | null
    location?: string | null
    reminder?: string | null
    recurrence?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    iconColor?: string
    iconName?: string
    archived?: boolean
  }

  export type TodoCreateOrConnectWithoutCollectionsInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutCollectionsInput, TodoUncheckedCreateWithoutCollectionsInput>
  }

  export type CollectionUpsertWithoutItemsInput = {
    update: XOR<CollectionUpdateWithoutItemsInput, CollectionUncheckedUpdateWithoutItemsInput>
    create: XOR<CollectionCreateWithoutItemsInput, CollectionUncheckedCreateWithoutItemsInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutItemsInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutItemsInput, CollectionUncheckedUpdateWithoutItemsInput>
  }

  export type CollectionUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUpsertWithoutCollectionsInput = {
    update: XOR<TodoUpdateWithoutCollectionsInput, TodoUncheckedUpdateWithoutCollectionsInput>
    create: XOR<TodoCreateWithoutCollectionsInput, TodoUncheckedCreateWithoutCollectionsInput>
    where?: TodoWhereInput
  }

  export type TodoUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: TodoWhereInput
    data: XOR<TodoUpdateWithoutCollectionsInput, TodoUncheckedUpdateWithoutCollectionsInput>
  }

  export type TodoUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTodoPriorityFieldUpdateOperationsInput | $Enums.TodoPriority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTodosNestedInput
  }

  export type TodoUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTodoPriorityFieldUpdateOperationsInput | $Enums.TodoPriority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutHabitsInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadCreateNestedManyWithoutUserInput
    postHabits?: PostHabitCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHabitsInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
    postHabits?: PostHabitUncheckedCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHabitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
  }

  export type HabitDailyProgressCreateWithoutHabitInput = {
    id?: string
    date: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitDailyProgressUncheckedCreateWithoutHabitInput = {
    id?: string
    date: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitDailyProgressCreateOrConnectWithoutHabitInput = {
    where: HabitDailyProgressWhereUniqueInput
    create: XOR<HabitDailyProgressCreateWithoutHabitInput, HabitDailyProgressUncheckedCreateWithoutHabitInput>
  }

  export type HabitDailyProgressCreateManyHabitInputEnvelope = {
    data: HabitDailyProgressCreateManyHabitInput | HabitDailyProgressCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type PostHabitCreateWithoutHabitInput = {
    id?: string
    title: string
    description?: string | null
    cadence: string
    category: $Enums.HabitCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    votesCount?: number
    user: UserCreateNestedOneWithoutPostHabitsInput
    votes?: PostHabitVoteCreateNestedManyWithoutPostHabitInput
  }

  export type PostHabitUncheckedCreateWithoutHabitInput = {
    id?: string
    title: string
    description?: string | null
    cadence: string
    category: $Enums.HabitCategory
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votesCount?: number
    votes?: PostHabitVoteUncheckedCreateNestedManyWithoutPostHabitInput
  }

  export type PostHabitCreateOrConnectWithoutHabitInput = {
    where: PostHabitWhereUniqueInput
    create: XOR<PostHabitCreateWithoutHabitInput, PostHabitUncheckedCreateWithoutHabitInput>
  }

  export type PostHabitCreateManyHabitInputEnvelope = {
    data: PostHabitCreateManyHabitInput | PostHabitCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type RoutineHabitCreateWithoutHabitInput = {
    id?: string
    position?: number
    createdAt?: Date | string
    routine: RoutineCreateNestedOneWithoutHabitsInput
  }

  export type RoutineHabitUncheckedCreateWithoutHabitInput = {
    id?: string
    routineId: string
    position?: number
    createdAt?: Date | string
  }

  export type RoutineHabitCreateOrConnectWithoutHabitInput = {
    where: RoutineHabitWhereUniqueInput
    create: XOR<RoutineHabitCreateWithoutHabitInput, RoutineHabitUncheckedCreateWithoutHabitInput>
  }

  export type RoutineHabitCreateManyHabitInputEnvelope = {
    data: RoutineHabitCreateManyHabitInput | RoutineHabitCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHabitsInput = {
    update: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHabitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type UserUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUncheckedUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitDailyProgressUpsertWithWhereUniqueWithoutHabitInput = {
    where: HabitDailyProgressWhereUniqueInput
    update: XOR<HabitDailyProgressUpdateWithoutHabitInput, HabitDailyProgressUncheckedUpdateWithoutHabitInput>
    create: XOR<HabitDailyProgressCreateWithoutHabitInput, HabitDailyProgressUncheckedCreateWithoutHabitInput>
  }

  export type HabitDailyProgressUpdateWithWhereUniqueWithoutHabitInput = {
    where: HabitDailyProgressWhereUniqueInput
    data: XOR<HabitDailyProgressUpdateWithoutHabitInput, HabitDailyProgressUncheckedUpdateWithoutHabitInput>
  }

  export type HabitDailyProgressUpdateManyWithWhereWithoutHabitInput = {
    where: HabitDailyProgressScalarWhereInput
    data: XOR<HabitDailyProgressUpdateManyMutationInput, HabitDailyProgressUncheckedUpdateManyWithoutHabitInput>
  }

  export type HabitDailyProgressScalarWhereInput = {
    AND?: HabitDailyProgressScalarWhereInput | HabitDailyProgressScalarWhereInput[]
    OR?: HabitDailyProgressScalarWhereInput[]
    NOT?: HabitDailyProgressScalarWhereInput | HabitDailyProgressScalarWhereInput[]
    id?: StringFilter<"HabitDailyProgress"> | string
    habitId?: StringFilter<"HabitDailyProgress"> | string
    date?: DateTimeFilter<"HabitDailyProgress"> | Date | string
    progress?: FloatFilter<"HabitDailyProgress"> | number
    createdAt?: DateTimeFilter<"HabitDailyProgress"> | Date | string
    updatedAt?: DateTimeFilter<"HabitDailyProgress"> | Date | string
  }

  export type PostHabitUpsertWithWhereUniqueWithoutHabitInput = {
    where: PostHabitWhereUniqueInput
    update: XOR<PostHabitUpdateWithoutHabitInput, PostHabitUncheckedUpdateWithoutHabitInput>
    create: XOR<PostHabitCreateWithoutHabitInput, PostHabitUncheckedCreateWithoutHabitInput>
  }

  export type PostHabitUpdateWithWhereUniqueWithoutHabitInput = {
    where: PostHabitWhereUniqueInput
    data: XOR<PostHabitUpdateWithoutHabitInput, PostHabitUncheckedUpdateWithoutHabitInput>
  }

  export type PostHabitUpdateManyWithWhereWithoutHabitInput = {
    where: PostHabitScalarWhereInput
    data: XOR<PostHabitUpdateManyMutationInput, PostHabitUncheckedUpdateManyWithoutHabitInput>
  }

  export type RoutineHabitUpsertWithWhereUniqueWithoutHabitInput = {
    where: RoutineHabitWhereUniqueInput
    update: XOR<RoutineHabitUpdateWithoutHabitInput, RoutineHabitUncheckedUpdateWithoutHabitInput>
    create: XOR<RoutineHabitCreateWithoutHabitInput, RoutineHabitUncheckedCreateWithoutHabitInput>
  }

  export type RoutineHabitUpdateWithWhereUniqueWithoutHabitInput = {
    where: RoutineHabitWhereUniqueInput
    data: XOR<RoutineHabitUpdateWithoutHabitInput, RoutineHabitUncheckedUpdateWithoutHabitInput>
  }

  export type RoutineHabitUpdateManyWithWhereWithoutHabitInput = {
    where: RoutineHabitScalarWhereInput
    data: XOR<RoutineHabitUpdateManyMutationInput, RoutineHabitUncheckedUpdateManyWithoutHabitInput>
  }

  export type RoutineHabitScalarWhereInput = {
    AND?: RoutineHabitScalarWhereInput | RoutineHabitScalarWhereInput[]
    OR?: RoutineHabitScalarWhereInput[]
    NOT?: RoutineHabitScalarWhereInput | RoutineHabitScalarWhereInput[]
    id?: StringFilter<"RoutineHabit"> | string
    routineId?: StringFilter<"RoutineHabit"> | string
    habitId?: StringFilter<"RoutineHabit"> | string
    position?: IntFilter<"RoutineHabit"> | number
    createdAt?: DateTimeFilter<"RoutineHabit"> | Date | string
  }

  export type HabitCreateWithoutDailyProgressEntriesInput = {
    id?: string
    name: string
    description?: string | null
    cadence: string
    startDate: Date | string
    timeWindow?: string | null
    goalAmount?: number
    goalUnit?: string
    goalUnitCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourcePopularPostId?: string | null
    dailyProgress?: number
    user: UserCreateNestedOneWithoutHabitsInput
    post_habit?: PostHabitCreateNestedManyWithoutHabitInput
    routineHabits?: RoutineHabitCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutDailyProgressEntriesInput = {
    id?: string
    name: string
    description?: string | null
    cadence: string
    startDate: Date | string
    timeWindow?: string | null
    goalAmount?: number
    goalUnit?: string
    goalUnitCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    sourcePopularPostId?: string | null
    dailyProgress?: number
    post_habit?: PostHabitUncheckedCreateNestedManyWithoutHabitInput
    routineHabits?: RoutineHabitUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutDailyProgressEntriesInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutDailyProgressEntriesInput, HabitUncheckedCreateWithoutDailyProgressEntriesInput>
  }

  export type HabitUpsertWithoutDailyProgressEntriesInput = {
    update: XOR<HabitUpdateWithoutDailyProgressEntriesInput, HabitUncheckedUpdateWithoutDailyProgressEntriesInput>
    create: XOR<HabitCreateWithoutDailyProgressEntriesInput, HabitUncheckedCreateWithoutDailyProgressEntriesInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutDailyProgressEntriesInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutDailyProgressEntriesInput, HabitUncheckedUpdateWithoutDailyProgressEntriesInput>
  }

  export type HabitUpdateWithoutDailyProgressEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    post_habit?: PostHabitUpdateManyWithoutHabitNestedInput
    routineHabits?: RoutineHabitUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutDailyProgressEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
    post_habit?: PostHabitUncheckedUpdateManyWithoutHabitNestedInput
    routineHabits?: RoutineHabitUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type UserCreateWithoutRoutinesInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadCreateNestedManyWithoutUserInput
    postHabits?: PostHabitCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoutinesInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
    postHabits?: PostHabitUncheckedCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoutinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
  }

  export type RoutineHabitCreateWithoutRoutineInput = {
    id?: string
    position?: number
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutRoutineHabitsInput
  }

  export type RoutineHabitUncheckedCreateWithoutRoutineInput = {
    id?: string
    habitId: string
    position?: number
    createdAt?: Date | string
  }

  export type RoutineHabitCreateOrConnectWithoutRoutineInput = {
    where: RoutineHabitWhereUniqueInput
    create: XOR<RoutineHabitCreateWithoutRoutineInput, RoutineHabitUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineHabitCreateManyRoutineInputEnvelope = {
    data: RoutineHabitCreateManyRoutineInput | RoutineHabitCreateManyRoutineInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoutinesInput = {
    update: XOR<UserUpdateWithoutRoutinesInput, UserUncheckedUpdateWithoutRoutinesInput>
    create: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoutinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoutinesInput, UserUncheckedUpdateWithoutRoutinesInput>
  }

  export type UserUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUncheckedUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput = {
    where: RoutineHabitWhereUniqueInput
    update: XOR<RoutineHabitUpdateWithoutRoutineInput, RoutineHabitUncheckedUpdateWithoutRoutineInput>
    create: XOR<RoutineHabitCreateWithoutRoutineInput, RoutineHabitUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput = {
    where: RoutineHabitWhereUniqueInput
    data: XOR<RoutineHabitUpdateWithoutRoutineInput, RoutineHabitUncheckedUpdateWithoutRoutineInput>
  }

  export type RoutineHabitUpdateManyWithWhereWithoutRoutineInput = {
    where: RoutineHabitScalarWhereInput
    data: XOR<RoutineHabitUpdateManyMutationInput, RoutineHabitUncheckedUpdateManyWithoutRoutineInput>
  }

  export type HabitCreateWithoutRoutineHabitsInput = {
    id?: string
    name: string
    description?: string | null
    cadence: string
    startDate: Date | string
    timeWindow?: string | null
    goalAmount?: number
    goalUnit?: string
    goalUnitCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourcePopularPostId?: string | null
    dailyProgress?: number
    user: UserCreateNestedOneWithoutHabitsInput
    dailyProgressEntries?: HabitDailyProgressCreateNestedManyWithoutHabitInput
    post_habit?: PostHabitCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutRoutineHabitsInput = {
    id?: string
    name: string
    description?: string | null
    cadence: string
    startDate: Date | string
    timeWindow?: string | null
    goalAmount?: number
    goalUnit?: string
    goalUnitCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    sourcePopularPostId?: string | null
    dailyProgress?: number
    dailyProgressEntries?: HabitDailyProgressUncheckedCreateNestedManyWithoutHabitInput
    post_habit?: PostHabitUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutRoutineHabitsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutRoutineHabitsInput, HabitUncheckedCreateWithoutRoutineHabitsInput>
  }

  export type RoutineCreateWithoutHabitsInput = {
    id?: string
    name: string
    anchor?: string | null
    notes?: string | null
    timeWindow?: $Enums.RoutineTimeWindow
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutinesInput
  }

  export type RoutineUncheckedCreateWithoutHabitsInput = {
    id?: string
    name: string
    anchor?: string | null
    notes?: string | null
    timeWindow?: $Enums.RoutineTimeWindow
    isDefault?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineCreateOrConnectWithoutHabitsInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutHabitsInput, RoutineUncheckedCreateWithoutHabitsInput>
  }

  export type HabitUpsertWithoutRoutineHabitsInput = {
    update: XOR<HabitUpdateWithoutRoutineHabitsInput, HabitUncheckedUpdateWithoutRoutineHabitsInput>
    create: XOR<HabitCreateWithoutRoutineHabitsInput, HabitUncheckedCreateWithoutRoutineHabitsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutRoutineHabitsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutRoutineHabitsInput, HabitUncheckedUpdateWithoutRoutineHabitsInput>
  }

  export type HabitUpdateWithoutRoutineHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    dailyProgressEntries?: HabitDailyProgressUpdateManyWithoutHabitNestedInput
    post_habit?: PostHabitUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutRoutineHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
    dailyProgressEntries?: HabitDailyProgressUncheckedUpdateManyWithoutHabitNestedInput
    post_habit?: PostHabitUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type RoutineUpsertWithoutHabitsInput = {
    update: XOR<RoutineUpdateWithoutHabitsInput, RoutineUncheckedUpdateWithoutHabitsInput>
    create: XOR<RoutineCreateWithoutHabitsInput, RoutineUncheckedCreateWithoutHabitsInput>
    where?: RoutineWhereInput
  }

  export type RoutineUpdateToOneWithWhereWithoutHabitsInput = {
    where?: RoutineWhereInput
    data: XOR<RoutineUpdateWithoutHabitsInput, RoutineUncheckedUpdateWithoutHabitsInput>
  }

  export type RoutineUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timeWindow?: EnumRoutineTimeWindowFieldUpdateOperationsInput | $Enums.RoutineTimeWindow
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutinesNestedInput
  }

  export type RoutineUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timeWindow?: EnumRoutineTimeWindowFieldUpdateOperationsInput | $Enums.RoutineTimeWindow
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCreateWithoutPost_habitInput = {
    id?: string
    name: string
    description?: string | null
    cadence: string
    startDate: Date | string
    timeWindow?: string | null
    goalAmount?: number
    goalUnit?: string
    goalUnitCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourcePopularPostId?: string | null
    dailyProgress?: number
    user: UserCreateNestedOneWithoutHabitsInput
    dailyProgressEntries?: HabitDailyProgressCreateNestedManyWithoutHabitInput
    routineHabits?: RoutineHabitCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutPost_habitInput = {
    id?: string
    name: string
    description?: string | null
    cadence: string
    startDate: Date | string
    timeWindow?: string | null
    goalAmount?: number
    goalUnit?: string
    goalUnitCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    sourcePopularPostId?: string | null
    dailyProgress?: number
    dailyProgressEntries?: HabitDailyProgressUncheckedCreateNestedManyWithoutHabitInput
    routineHabits?: RoutineHabitUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutPost_habitInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutPost_habitInput, HabitUncheckedCreateWithoutPost_habitInput>
  }

  export type UserCreateWithoutPostHabitsInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostHabitsInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostHabitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostHabitsInput, UserUncheckedCreateWithoutPostHabitsInput>
  }

  export type PostHabitVoteCreateWithoutPostHabitInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostHabitVotesInput
  }

  export type PostHabitVoteUncheckedCreateWithoutPostHabitInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type PostHabitVoteCreateOrConnectWithoutPostHabitInput = {
    where: PostHabitVoteWhereUniqueInput
    create: XOR<PostHabitVoteCreateWithoutPostHabitInput, PostHabitVoteUncheckedCreateWithoutPostHabitInput>
  }

  export type PostHabitVoteCreateManyPostHabitInputEnvelope = {
    data: PostHabitVoteCreateManyPostHabitInput | PostHabitVoteCreateManyPostHabitInput[]
    skipDuplicates?: boolean
  }

  export type HabitUpsertWithoutPost_habitInput = {
    update: XOR<HabitUpdateWithoutPost_habitInput, HabitUncheckedUpdateWithoutPost_habitInput>
    create: XOR<HabitCreateWithoutPost_habitInput, HabitUncheckedCreateWithoutPost_habitInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutPost_habitInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutPost_habitInput, HabitUncheckedUpdateWithoutPost_habitInput>
  }

  export type HabitUpdateWithoutPost_habitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    dailyProgressEntries?: HabitDailyProgressUpdateManyWithoutHabitNestedInput
    routineHabits?: RoutineHabitUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutPost_habitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
    dailyProgressEntries?: HabitDailyProgressUncheckedUpdateManyWithoutHabitNestedInput
    routineHabits?: RoutineHabitUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type UserUpsertWithoutPostHabitsInput = {
    update: XOR<UserUpdateWithoutPostHabitsInput, UserUncheckedUpdateWithoutPostHabitsInput>
    create: XOR<UserCreateWithoutPostHabitsInput, UserUncheckedCreateWithoutPostHabitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostHabitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostHabitsInput, UserUncheckedUpdateWithoutPostHabitsInput>
  }

  export type UserUpdateWithoutPostHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostHabitVoteUpsertWithWhereUniqueWithoutPostHabitInput = {
    where: PostHabitVoteWhereUniqueInput
    update: XOR<PostHabitVoteUpdateWithoutPostHabitInput, PostHabitVoteUncheckedUpdateWithoutPostHabitInput>
    create: XOR<PostHabitVoteCreateWithoutPostHabitInput, PostHabitVoteUncheckedCreateWithoutPostHabitInput>
  }

  export type PostHabitVoteUpdateWithWhereUniqueWithoutPostHabitInput = {
    where: PostHabitVoteWhereUniqueInput
    data: XOR<PostHabitVoteUpdateWithoutPostHabitInput, PostHabitVoteUncheckedUpdateWithoutPostHabitInput>
  }

  export type PostHabitVoteUpdateManyWithWhereWithoutPostHabitInput = {
    where: PostHabitVoteScalarWhereInput
    data: XOR<PostHabitVoteUpdateManyMutationInput, PostHabitVoteUncheckedUpdateManyWithoutPostHabitInput>
  }

  export type PostHabitCreateWithoutVotesInput = {
    id?: string
    title: string
    description?: string | null
    cadence: string
    category: $Enums.HabitCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    votesCount?: number
    habit: HabitCreateNestedOneWithoutPost_habitInput
    user: UserCreateNestedOneWithoutPostHabitsInput
  }

  export type PostHabitUncheckedCreateWithoutVotesInput = {
    id?: string
    title: string
    description?: string | null
    cadence: string
    category: $Enums.HabitCategory
    habitId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votesCount?: number
  }

  export type PostHabitCreateOrConnectWithoutVotesInput = {
    where: PostHabitWhereUniqueInput
    create: XOR<PostHabitCreateWithoutVotesInput, PostHabitUncheckedCreateWithoutVotesInput>
  }

  export type UserCreateWithoutPostHabitVotesInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadCreateNestedManyWithoutUserInput
    postHabits?: PostHabitCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostHabitVotesInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    notification_read?: NotificationReadUncheckedCreateNestedManyWithoutUserInput
    postHabits?: PostHabitUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostHabitVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostHabitVotesInput, UserUncheckedCreateWithoutPostHabitVotesInput>
  }

  export type PostHabitUpsertWithoutVotesInput = {
    update: XOR<PostHabitUpdateWithoutVotesInput, PostHabitUncheckedUpdateWithoutVotesInput>
    create: XOR<PostHabitCreateWithoutVotesInput, PostHabitUncheckedCreateWithoutVotesInput>
    where?: PostHabitWhereInput
  }

  export type PostHabitUpdateToOneWithWhereWithoutVotesInput = {
    where?: PostHabitWhereInput
    data: XOR<PostHabitUpdateWithoutVotesInput, PostHabitUncheckedUpdateWithoutVotesInput>
  }

  export type PostHabitUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    category?: EnumHabitCategoryFieldUpdateOperationsInput | $Enums.HabitCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votesCount?: IntFieldUpdateOperationsInput | number
    habit?: HabitUpdateOneRequiredWithoutPost_habitNestedInput
    user?: UserUpdateOneRequiredWithoutPostHabitsNestedInput
  }

  export type PostHabitUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    category?: EnumHabitCategoryFieldUpdateOperationsInput | $Enums.HabitCategory
    habitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votesCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutPostHabitVotesInput = {
    update: XOR<UserUpdateWithoutPostHabitVotesInput, UserUncheckedUpdateWithoutPostHabitVotesInput>
    create: XOR<UserCreateWithoutPostHabitVotesInput, UserUncheckedCreateWithoutPostHabitVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostHabitVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostHabitVotesInput, UserUncheckedUpdateWithoutPostHabitVotesInput>
  }

  export type UserUpdateWithoutPostHabitVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostHabitVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    notification_read?: NotificationReadUncheckedUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotification_readInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    postHabits?: PostHabitCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotification_readInput = {
    id: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streakGoalDays?: number | null
    privateAccount?: boolean
    username?: string | null
    focusArea?: string | null
    bio?: string | null
    location?: string | null
    bannerColor?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    postHabits?: PostHabitUncheckedCreateNestedManyWithoutUserInput
    postHabitVotes?: PostHabitVoteUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotification_readInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotification_readInput, UserUncheckedCreateWithoutNotification_readInput>
  }

  export type UserUpsertWithoutNotification_readInput = {
    update: XOR<UserUpdateWithoutNotification_readInput, UserUncheckedUpdateWithoutNotification_readInput>
    create: XOR<UserCreateWithoutNotification_readInput, UserUncheckedCreateWithoutNotification_readInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotification_readInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotification_readInput, UserUncheckedUpdateWithoutNotification_readInput>
  }

  export type UserUpdateWithoutNotification_readInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotification_readInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streakGoalDays?: NullableIntFieldUpdateOperationsInput | number | null
    privateAccount?: BoolFieldUpdateOperationsInput | boolean
    username?: NullableStringFieldUpdateOperationsInput | string | null
    focusArea?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bannerColor?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    postHabits?: PostHabitUncheckedUpdateManyWithoutUserNestedInput
    postHabitVotes?: PostHabitVoteUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    cadence: string
    startDate: Date | string
    timeWindow?: string | null
    goalAmount?: number
    goalUnit?: string
    goalUnitCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourcePopularPostId?: string | null
    dailyProgress?: number
  }

  export type NotificationReadCreateManyUserInput = {
    id: string
    notificationId: string
    createdAt?: Date | string
  }

  export type PostHabitCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    cadence: string
    category: $Enums.HabitCategory
    habitId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votesCount?: number
  }

  export type PostHabitVoteCreateManyUserInput = {
    id?: string
    postHabitId: string
    createdAt?: Date | string
  }

  export type RoutineCreateManyUserInput = {
    id?: string
    name: string
    anchor?: string | null
    notes?: string | null
    timeWindow?: $Enums.RoutineTimeWindow
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type TodoCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    category?: string | null
    priority?: $Enums.TodoPriority
    status?: $Enums.TodoStatus
    dueAt?: Date | string | null
    scheduledTime?: string | null
    durationMinutes?: number | null
    location?: string | null
    reminder?: string | null
    recurrence?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    iconColor?: string
    iconName?: string
    archived?: boolean
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CollectionTodoUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CollectionTodoUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
    dailyProgressEntries?: HabitDailyProgressUpdateManyWithoutHabitNestedInput
    post_habit?: PostHabitUpdateManyWithoutHabitNestedInput
    routineHabits?: RoutineHabitUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
    dailyProgressEntries?: HabitDailyProgressUncheckedUpdateManyWithoutHabitNestedInput
    post_habit?: PostHabitUncheckedUpdateManyWithoutHabitNestedInput
    routineHabits?: RoutineHabitUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timeWindow?: NullableStringFieldUpdateOperationsInput | string | null
    goalAmount?: FloatFieldUpdateOperationsInput | number
    goalUnit?: StringFieldUpdateOperationsInput | string
    goalUnitCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourcePopularPostId?: NullableStringFieldUpdateOperationsInput | string | null
    dailyProgress?: FloatFieldUpdateOperationsInput | number
  }

  export type NotificationReadUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationReadUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHabitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    category?: EnumHabitCategoryFieldUpdateOperationsInput | $Enums.HabitCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votesCount?: IntFieldUpdateOperationsInput | number
    habit?: HabitUpdateOneRequiredWithoutPost_habitNestedInput
    votes?: PostHabitVoteUpdateManyWithoutPostHabitNestedInput
  }

  export type PostHabitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    category?: EnumHabitCategoryFieldUpdateOperationsInput | $Enums.HabitCategory
    habitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votesCount?: IntFieldUpdateOperationsInput | number
    votes?: PostHabitVoteUncheckedUpdateManyWithoutPostHabitNestedInput
  }

  export type PostHabitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    category?: EnumHabitCategoryFieldUpdateOperationsInput | $Enums.HabitCategory
    habitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votesCount?: IntFieldUpdateOperationsInput | number
  }

  export type PostHabitVoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postHabit?: PostHabitUpdateOneRequiredWithoutVotesNestedInput
  }

  export type PostHabitVoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postHabitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHabitVoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postHabitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timeWindow?: EnumRoutineTimeWindowFieldUpdateOperationsInput | $Enums.RoutineTimeWindow
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: RoutineHabitUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timeWindow?: EnumRoutineTimeWindowFieldUpdateOperationsInput | $Enums.RoutineTimeWindow
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: RoutineHabitUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    anchor?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timeWindow?: EnumRoutineTimeWindowFieldUpdateOperationsInput | $Enums.RoutineTimeWindow
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TodoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTodoPriorityFieldUpdateOperationsInput | $Enums.TodoPriority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    collections?: CollectionTodoUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTodoPriorityFieldUpdateOperationsInput | $Enums.TodoPriority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    collections?: CollectionTodoUncheckedUpdateManyWithoutTodoNestedInput
  }

  export type TodoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTodoPriorityFieldUpdateOperationsInput | $Enums.TodoPriority
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iconColor?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CollectionTodoCreateManyTodoInput = {
    id?: string
    collectionId: string
    createdAt?: Date | string
  }

  export type CollectionTodoUpdateWithoutTodoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CollectionTodoUncheckedUpdateWithoutTodoInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionTodoUncheckedUpdateManyWithoutTodoInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionTodoCreateManyCollectionInput = {
    id?: string
    todoId: string
    createdAt?: Date | string
  }

  export type CollectionTodoUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todo?: TodoUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionTodoUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    todoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionTodoUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    todoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitDailyProgressCreateManyHabitInput = {
    id?: string
    date: Date | string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostHabitCreateManyHabitInput = {
    id?: string
    title: string
    description?: string | null
    cadence: string
    category: $Enums.HabitCategory
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    votesCount?: number
  }

  export type RoutineHabitCreateManyHabitInput = {
    id?: string
    routineId: string
    position?: number
    createdAt?: Date | string
  }

  export type HabitDailyProgressUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitDailyProgressUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitDailyProgressUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHabitUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    category?: EnumHabitCategoryFieldUpdateOperationsInput | $Enums.HabitCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votesCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPostHabitsNestedInput
    votes?: PostHabitVoteUpdateManyWithoutPostHabitNestedInput
  }

  export type PostHabitUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    category?: EnumHabitCategoryFieldUpdateOperationsInput | $Enums.HabitCategory
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votesCount?: IntFieldUpdateOperationsInput | number
    votes?: PostHabitVoteUncheckedUpdateManyWithoutPostHabitNestedInput
  }

  export type PostHabitUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cadence?: StringFieldUpdateOperationsInput | string
    category?: EnumHabitCategoryFieldUpdateOperationsInput | $Enums.HabitCategory
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votesCount?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineHabitUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routine?: RoutineUpdateOneRequiredWithoutHabitsNestedInput
  }

  export type RoutineHabitUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineHabitUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineHabitCreateManyRoutineInput = {
    id?: string
    habitId: string
    position?: number
    createdAt?: Date | string
  }

  export type RoutineHabitUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutRoutineHabitsNestedInput
  }

  export type RoutineHabitUncheckedUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineHabitUncheckedUpdateManyWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHabitVoteCreateManyPostHabitInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type PostHabitVoteUpdateWithoutPostHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostHabitVotesNestedInput
  }

  export type PostHabitVoteUncheckedUpdateWithoutPostHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostHabitVoteUncheckedUpdateManyWithoutPostHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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