import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type DeletionResult = {
  __typename?: 'DeletionResult';
  deleted?: Maybe<Array<Scalars['String']>>;
};

export type Favorite = {
  __typename?: 'Favorite';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  tweet?: Maybe<Post>;
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
};

export type HashtagTrend = {
  __typename?: 'HashtagTrend';
  hashtag: Scalars['String'];
  tweetCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFavorite: Favorite;
  createPost: Post;
  deleteFavorite: Favorite;
};


export type MutationCreateFavoriteArgs = {
  tweetId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreatePostArgs = {
  body: Scalars['String'];
  title: Scalars['String'];
};


export type MutationDeleteFavoriteArgs = {
  tweetId: Scalars['String'];
  userId: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  body: Scalars['String'];
  createdAt: Scalars['String'];
  favorites?: Maybe<Array<Favorite>>;
  id: Scalars['String'];
  stats?: Maybe<TweetStats>;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  posts?: Maybe<Array<Post>>;
  suggestions?: Maybe<Array<Suggestion>>;
  trends?: Maybe<Array<Trend>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Retweet = {
  __typename?: 'Retweet';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  tweet?: Maybe<Post>;
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
};

export type Suggestion = {
  __typename?: 'Suggestion';
  avatarUrl: Scalars['String'];
  handle: Scalars['String'];
  name: Scalars['String'];
  reason: Scalars['String'];
};

export type TopicTrend = {
  __typename?: 'TopicTrend';
  quote?: Maybe<TopicTrendQuote>;
  topic: Scalars['String'];
  tweetCount: Scalars['Int'];
};

export type TopicTrendQuote = {
  __typename?: 'TopicTrendQuote';
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  title: Scalars['String'];
};

export type Trend = HashtagTrend | TopicTrend;

export type TweetStats = {
  __typename?: 'TweetStats';
  commentCount: Scalars['Int'];
  favoriteCount: Scalars['Int'];
  retweetCount: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  avatarUrl: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  stats?: Maybe<UserStats>;
  updatedAt: Scalars['String'];
};

export type UserStats = {
  __typename?: 'UserStats';
  followerCount: Scalars['Int'];
  followingCount: Scalars['Int'];
  tweetCount: Scalars['Int'];
  user: User;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DeletionResult: ResolverTypeWrapper<DeletionResult>;
  Favorite: ResolverTypeWrapper<Favorite>;
  HashtagTrend: ResolverTypeWrapper<HashtagTrend>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  Query: ResolverTypeWrapper<{}>;
  Retweet: ResolverTypeWrapper<Retweet>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Suggestion: ResolverTypeWrapper<Suggestion>;
  TopicTrend: ResolverTypeWrapper<TopicTrend>;
  TopicTrendQuote: ResolverTypeWrapper<TopicTrendQuote>;
  Trend: ResolversTypes['HashtagTrend'] | ResolversTypes['TopicTrend'];
  TweetStats: ResolverTypeWrapper<TweetStats>;
  User: ResolverTypeWrapper<User>;
  UserStats: ResolverTypeWrapper<UserStats>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  DeletionResult: DeletionResult;
  Favorite: Favorite;
  HashtagTrend: HashtagTrend;
  Int: Scalars['Int'];
  Mutation: {};
  Post: Post;
  Query: {};
  Retweet: Retweet;
  String: Scalars['String'];
  Suggestion: Suggestion;
  TopicTrend: TopicTrend;
  TopicTrendQuote: TopicTrendQuote;
  Trend: ResolversParentTypes['HashtagTrend'] | ResolversParentTypes['TopicTrend'];
  TweetStats: TweetStats;
  User: User;
  UserStats: UserStats;
};

export type DeletionResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletionResult'] = ResolversParentTypes['DeletionResult']> = {
  deleted?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FavoriteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Favorite'] = ResolversParentTypes['Favorite']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tweet?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HashtagTrendResolvers<ContextType = any, ParentType extends ResolversParentTypes['HashtagTrend'] = ResolversParentTypes['HashtagTrend']> = {
  hashtag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tweetCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createFavorite?: Resolver<ResolversTypes['Favorite'], ParentType, ContextType, RequireFields<MutationCreateFavoriteArgs, 'tweetId' | 'userId'>>;
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'body' | 'title'>>;
  deleteFavorite?: Resolver<ResolversTypes['Favorite'], ParentType, ContextType, RequireFields<MutationDeleteFavoriteArgs, 'tweetId' | 'userId'>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  favorites?: Resolver<Maybe<Array<ResolversTypes['Favorite']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['TweetStats']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  currentUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<ResolversTypes['Post']>>, ParentType, ContextType>;
  suggestions?: Resolver<Maybe<Array<ResolversTypes['Suggestion']>>, ParentType, ContextType>;
  trends?: Resolver<Maybe<Array<ResolversTypes['Trend']>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type RetweetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Retweet'] = ResolversParentTypes['Retweet']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tweet?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuggestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Suggestion'] = ResolversParentTypes['Suggestion']> = {
  avatarUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicTrendResolvers<ContextType = any, ParentType extends ResolversParentTypes['TopicTrend'] = ResolversParentTypes['TopicTrend']> = {
  quote?: Resolver<Maybe<ResolversTypes['TopicTrendQuote']>, ParentType, ContextType>;
  topic?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tweetCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicTrendQuoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['TopicTrendQuote'] = ResolversParentTypes['TopicTrendQuote']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrendResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trend'] = ResolversParentTypes['Trend']> = {
  __resolveType: TypeResolveFn<'HashtagTrend' | 'TopicTrend', ParentType, ContextType>;
};

export type TweetStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TweetStats'] = ResolversParentTypes['TweetStats']> = {
  commentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  favoriteCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  retweetCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatarUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<ResolversTypes['Post']>>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['UserStats']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStats'] = ResolversParentTypes['UserStats']> = {
  followerCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  followingCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tweetCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DeletionResult?: DeletionResultResolvers<ContextType>;
  Favorite?: FavoriteResolvers<ContextType>;
  HashtagTrend?: HashtagTrendResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Retweet?: RetweetResolvers<ContextType>;
  Suggestion?: SuggestionResolvers<ContextType>;
  TopicTrend?: TopicTrendResolvers<ContextType>;
  TopicTrendQuote?: TopicTrendQuoteResolvers<ContextType>;
  Trend?: TrendResolvers<ContextType>;
  TweetStats?: TweetStatsResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserStats?: UserStatsResolvers<ContextType>;
};

