import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface ClickCount_Key {
  id: UUIDString;
  __typename?: 'ClickCount_Key';
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  authId: string;
  username?: string | null;
}

export interface GetUserData {
  user?: {
    id: UUIDString;
    authId: string;
    username?: string | null;
    createdAt: TimestampString;
  } & User_Key;
}

export interface ListRewardsData {
  rewards: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    iconUrl?: string | null;
    clickThreshold: number;
  } & Reward_Key)[];
}

export interface Reward_Key {
  id: UUIDString;
  __typename?: 'Reward_Key';
}

export interface UnlockedReward_Key {
  userId: UUIDString;
  rewardId: UUIDString;
  __typename?: 'UnlockedReward_Key';
}

export interface UpdateClickCountData {
  clickCount_upsert: ClickCount_Key;
}

export interface UpdateClickCountVariables {
  userId: UUIDString;
  totalClicks: number;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect): QueryPromise<GetUserData, undefined>;

interface UpdateClickCountRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateClickCountVariables): MutationRef<UpdateClickCountData, UpdateClickCountVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateClickCountVariables): MutationRef<UpdateClickCountData, UpdateClickCountVariables>;
  operationName: string;
}
export const updateClickCountRef: UpdateClickCountRef;

export function updateClickCount(vars: UpdateClickCountVariables): MutationPromise<UpdateClickCountData, UpdateClickCountVariables>;
export function updateClickCount(dc: DataConnect, vars: UpdateClickCountVariables): MutationPromise<UpdateClickCountData, UpdateClickCountVariables>;

interface ListRewardsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListRewardsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListRewardsData, undefined>;
  operationName: string;
}
export const listRewardsRef: ListRewardsRef;

export function listRewards(): QueryPromise<ListRewardsData, undefined>;
export function listRewards(dc: DataConnect): QueryPromise<ListRewardsData, undefined>;

