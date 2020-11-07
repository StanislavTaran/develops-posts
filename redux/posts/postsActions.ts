import {createAction} from '@reduxjs/toolkit'
import withPayloadType from "../../helpers/redux/withPayloadType";
import { SinglePost, SinglePostWithComments, SinglePostWithoutId } from "../../types/postsTypes";

export const fetchPostsRequest = createAction('FETCH_POSTS_REQUEST')
export const fetchPostsSuccess = createAction('FETCH_POSTS_SUCCESS', withPayloadType<SinglePost[]>())
export const fetchPostsError = createAction('FETCH_POSTS_ERROR',withPayloadType<string>())

export const fetchSinglePostRequest = createAction('FETCH_POST_REQUEST',withPayloadType<number>())
export const fetchSinglePostSuccess = createAction('FETCH_POST_SUCCESS',withPayloadType<SinglePostWithComments>())
export const fetchSinglePostError = createAction('FETCH_POST_ERROR',withPayloadType<string>())

export const createPostRequest = createAction('CREATE_POST_REQUEST',withPayloadType<SinglePostWithoutId>())
export const createPostSuccess = createAction('CREATE_POST_SUCCESS',withPayloadType<SinglePost>())
export const createPostError = createAction('CREATE_POST_ERROR',withPayloadType<string>())