/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  NetworkManagerCommit,
  NetworkManagerCommitsPostOptionalParams,
  NetworkManagerCommitsPostResponse,
} from "../models";

/** Interface representing a NetworkManagerCommits. */
export interface NetworkManagerCommits {
  /**
   * Post a Network Manager Commit.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param parameters Parameters supplied to specify which Managed Network commit is.
   * @param options The options parameters.
   */
  beginPost(
    resourceGroupName: string,
    networkManagerName: string,
    parameters: NetworkManagerCommit,
    options?: NetworkManagerCommitsPostOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkManagerCommitsPostResponse>,
      NetworkManagerCommitsPostResponse
    >
  >;
  /**
   * Post a Network Manager Commit.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param parameters Parameters supplied to specify which Managed Network commit is.
   * @param options The options parameters.
   */
  beginPostAndWait(
    resourceGroupName: string,
    networkManagerName: string,
    parameters: NetworkManagerCommit,
    options?: NetworkManagerCommitsPostOptionalParams,
  ): Promise<NetworkManagerCommitsPostResponse>;
}
