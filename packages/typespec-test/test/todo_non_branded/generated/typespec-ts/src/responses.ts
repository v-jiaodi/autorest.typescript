// Licensed under the MIT license.

import { HttpResponse } from "@typespec/ts-http-runtime";
import {
  UserCreatedResponseOutput,
  ErrorModelOutput,
  TodoPageOutput,
  TodoItemOutput,
  TodoAttachmentOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface UsersCreate200Response extends HttpResponse {
  status: "200";
  body: UserCreatedResponseOutput;
}

/** The request conflicts with the current state of the server. */
export interface UsersCreate409Response extends HttpResponse {
  status: "409";
  body: ErrorModelOutput;
}

/** Client error */
export interface UsersCreate422Response extends HttpResponse {
  status: "422";
  body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface UsersValidate200Response extends HttpResponse {
  status: "200";
}

/** Client error */
export interface UsersValidate422Response extends HttpResponse {
  status: "422";
  body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface UsersLogin200Response extends HttpResponse {
  status: "200";
}

/** Access is unauthorized. */
export interface UsersLogin401Response extends HttpResponse {
  status: "401";
}

/** The request has succeeded. */
export interface UsersLogout200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface UsersForgotPassword200Response extends HttpResponse {
  status: "200";
}

/** The server cannot find the requested resource. */
export interface UsersForgotPassword404Response extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface UsersResetPassword200Response extends HttpResponse {
  status: "200";
}

/** The server cannot find the requested resource. */
export interface UsersResetPassword404Response extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface TodoItemsList200Response extends HttpResponse {
  status: "200";
  body: TodoPageOutput;
}

/** The request has succeeded. */
export interface TodoItemsCreateJson200Response extends HttpResponse {
  status: "200";
  body: TodoItemOutput;
}

/** Client error */
export interface TodoItemsCreateJson422Response extends HttpResponse {
  status: "422";
  body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface TodoItemsCreateForm200Response extends HttpResponse {
  status: "200";
  body: TodoItemOutput;
}

/** Client error */
export interface TodoItemsCreateForm422Response extends HttpResponse {
  status: "422";
  body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface TodoItemsGet200Response extends HttpResponse {
  status: "200";
  body: TodoItemOutput;
}

/** The server cannot find the requested resource. */
export interface TodoItemsGet404Response extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface TodoItemsUpdate200Response extends HttpResponse {
  status: "200";
  body: TodoItemOutput;
}

/** The request has succeeded. */
export interface TodoItemsDeleteOperation200Response extends HttpResponse {
  status: "200";
}

/** The server cannot find the requested resource. */
export interface TodoItemsDeleteOperation404Response extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface TodoItemsAttachmentsList200Response extends HttpResponse {
  status: "200";
  body: TodoAttachmentOutput[];
}

/** The server cannot find the requested resource. */
export interface TodoItemsAttachmentsList404Response extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface TodoItemsAttachmentsCreateUrlAttachment200Response
  extends HttpResponse {
  status: "200";
}

/** The server cannot find the requested resource. */
export interface TodoItemsAttachmentsCreateUrlAttachment404Response
  extends HttpResponse {
  status: "404";
}

/** The request has succeeded. */
export interface TodoItemsAttachmentsCreateFileAttachment200Response
  extends HttpResponse {
  status: "200";
}

/** The server cannot find the requested resource. */
export interface TodoItemsAttachmentsCreateFileAttachment404Response
  extends HttpResponse {
  status: "404";
}
