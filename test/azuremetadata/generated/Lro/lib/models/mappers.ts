/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Product: msRest.CompositeMapper = {
  serializedName: "Product",
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      ...Resource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      provisioningStateValues: {
        readOnly: true,
        serializedName: "properties.provisioningStateValues",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubResource: msRest.CompositeMapper = {
  serializedName: "SubResource",
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubProduct: msRest.CompositeMapper = {
  serializedName: "SubProduct",
  type: {
    name: "Composite",
    className: "SubProduct",
    modelProperties: {
      ...SubResource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      provisioningStateValues: {
        readOnly: true,
        serializedName: "properties.provisioningStateValues",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResultError: msRest.CompositeMapper = {
  serializedName: "OperationResult_error",
  type: {
    name: "Composite",
    className: "OperationResultError",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResult: msRest.CompositeMapper = {
  serializedName: "OperationResult",
  type: {
    name: "Composite",
    className: "OperationResult",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "OperationResultError"
        }
      }
    }
  }
};

export const LROsPutNoHeaderInRetryHeaders: msRest.CompositeMapper = {
  serializedName: "lros-putnoheaderinretry-headers",
  type: {
    name: "Composite",
    className: "LROsPutNoHeaderInRetryHeaders",
    modelProperties: {
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LROsPutAsyncRetrySucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lros-putasyncretrysucceeded-headers",
  type: {
    name: "Composite",
    className: "LROsPutAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsPutAsyncNoRetrySucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lros-putasyncnoretrysucceeded-headers",
  type: {
    name: "Composite",
    className: "LROsPutAsyncNoRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LROsPutAsyncRetryFailedHeaders: msRest.CompositeMapper = {
  serializedName: "lros-putasyncretryfailed-headers",
  type: {
    name: "Composite",
    className: "LROsPutAsyncRetryFailedHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsPutAsyncNoRetrycanceledHeaders: msRest.CompositeMapper = {
  serializedName: "lros-putasyncnoretrycanceled-headers",
  type: {
    name: "Composite",
    className: "LROsPutAsyncNoRetrycanceledHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LROsPutAsyncNoHeaderInRetryHeaders: msRest.CompositeMapper = {
  serializedName: "lros-putasyncnoheaderinretry-headers",
  type: {
    name: "Composite",
    className: "LROsPutAsyncNoHeaderInRetryHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LROsDeleteProvisioning202Accepted200SucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lros-deleteprovisioning202accepted200succeeded-headers",
  type: {
    name: "Composite",
    className: "LROsDeleteProvisioning202Accepted200SucceededHeaders",
    modelProperties: {
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsDeleteProvisioning202DeletingFailed200Headers: msRest.CompositeMapper = {
  serializedName: "lros-deleteprovisioning202deletingfailed200-headers",
  type: {
    name: "Composite",
    className: "LROsDeleteProvisioning202DeletingFailed200Headers",
    modelProperties: {
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsDeleteProvisioning202Deletingcanceled200Headers: msRest.CompositeMapper = {
  serializedName: "lros-deleteprovisioning202deletingcanceled200-headers",
  type: {
    name: "Composite",
    className: "LROsDeleteProvisioning202Deletingcanceled200Headers",
    modelProperties: {
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsDelete202Retry200Headers: msRest.CompositeMapper = {
  serializedName: "lros-delete202retry200-headers",
  type: {
    name: "Composite",
    className: "LROsDelete202Retry200Headers",
    modelProperties: {
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsDelete202NoRetry204Headers: msRest.CompositeMapper = {
  serializedName: "lros-delete202noretry204-headers",
  type: {
    name: "Composite",
    className: "LROsDelete202NoRetry204Headers",
    modelProperties: {
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsDeleteNoHeaderInRetryHeaders: msRest.CompositeMapper = {
  serializedName: "lros-deletenoheaderinretry-headers",
  type: {
    name: "Composite",
    className: "LROsDeleteNoHeaderInRetryHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LROsDeleteAsyncNoHeaderInRetryHeaders: msRest.CompositeMapper = {
  serializedName: "lros-deleteasyncnoheaderinretry-headers",
  type: {
    name: "Composite",
    className: "LROsDeleteAsyncNoHeaderInRetryHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LROsDeleteAsyncRetrySucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lros-deleteasyncretrysucceeded-headers",
  type: {
    name: "Composite",
    className: "LROsDeleteAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsDeleteAsyncNoRetrySucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lros-deleteasyncnoretrysucceeded-headers",
  type: {
    name: "Composite",
    className: "LROsDeleteAsyncNoRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsDeleteAsyncRetryFailedHeaders: msRest.CompositeMapper = {
  serializedName: "lros-deleteasyncretryfailed-headers",
  type: {
    name: "Composite",
    className: "LROsDeleteAsyncRetryFailedHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsDeleteAsyncRetrycanceledHeaders: msRest.CompositeMapper = {
  serializedName: "lros-deleteasyncretrycanceled-headers",
  type: {
    name: "Composite",
    className: "LROsDeleteAsyncRetrycanceledHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsPost202Retry200Headers: msRest.CompositeMapper = {
  serializedName: "lros-post202retry200-headers",
  type: {
    name: "Composite",
    className: "LROsPost202Retry200Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsPost202NoRetry204Headers: msRest.CompositeMapper = {
  serializedName: "lros-post202noretry204-headers",
  type: {
    name: "Composite",
    className: "LROsPost202NoRetry204Headers",
    modelProperties: {
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsPostAsyncRetrySucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lros-postasyncretrysucceeded-headers",
  type: {
    name: "Composite",
    className: "LROsPostAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsPostAsyncNoRetrySucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lros-postasyncnoretrysucceeded-headers",
  type: {
    name: "Composite",
    className: "LROsPostAsyncNoRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsPostAsyncRetryFailedHeaders: msRest.CompositeMapper = {
  serializedName: "lros-postasyncretryfailed-headers",
  type: {
    name: "Composite",
    className: "LROsPostAsyncRetryFailedHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsPostAsyncRetrycanceledHeaders: msRest.CompositeMapper = {
  serializedName: "lros-postasyncretrycanceled-headers",
  type: {
    name: "Composite",
    className: "LROsPostAsyncRetrycanceledHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LRORetrysPutAsyncRelativeRetrySucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lroretrys-putasyncrelativeretrysucceeded-headers",
  type: {
    name: "Composite",
    className: "LRORetrysPutAsyncRelativeRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LRORetrysDeleteProvisioning202Accepted200SucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lroretrys-deleteprovisioning202accepted200succeeded-headers",
  type: {
    name: "Composite",
    className: "LRORetrysDeleteProvisioning202Accepted200SucceededHeaders",
    modelProperties: {
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LRORetrysDelete202Retry200Headers: msRest.CompositeMapper = {
  serializedName: "lroretrys-delete202retry200-headers",
  type: {
    name: "Composite",
    className: "LRORetrysDelete202Retry200Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LRORetrysDeleteAsyncRelativeRetrySucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lroretrys-deleteasyncrelativeretrysucceeded-headers",
  type: {
    name: "Composite",
    className: "LRORetrysDeleteAsyncRelativeRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LRORetrysPost202Retry200Headers: msRest.CompositeMapper = {
  serializedName: "lroretrys-post202retry200-headers",
  type: {
    name: "Composite",
    className: "LRORetrysPost202Retry200Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LRORetrysPostAsyncRelativeRetrySucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lroretrys-postasyncrelativeretrysucceeded-headers",
  type: {
    name: "Composite",
    className: "LRORetrysPostAsyncRelativeRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPutAsyncRelativeRetry400Headers: msRest.CompositeMapper = {
  serializedName: "lrosads-putasyncrelativeretry400-headers",
  type: {
    name: "Composite",
    className: "LROSADsPutAsyncRelativeRetry400Headers",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsDeleteNonRetry400Headers: msRest.CompositeMapper = {
  serializedName: "lrosads-deletenonretry400-headers",
  type: {
    name: "Composite",
    className: "LROSADsDeleteNonRetry400Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsDelete202NonRetry400Headers: msRest.CompositeMapper = {
  serializedName: "lrosads-delete202nonretry400-headers",
  type: {
    name: "Composite",
    className: "LROSADsDelete202NonRetry400Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsDeleteAsyncRelativeRetry400Headers: msRest.CompositeMapper = {
  serializedName: "lrosads-deleteasyncrelativeretry400-headers",
  type: {
    name: "Composite",
    className: "LROSADsDeleteAsyncRelativeRetry400Headers",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPostNonRetry400Headers: msRest.CompositeMapper = {
  serializedName: "lrosads-postnonretry400-headers",
  type: {
    name: "Composite",
    className: "LROSADsPostNonRetry400Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPost202NonRetry400Headers: msRest.CompositeMapper = {
  serializedName: "lrosads-post202nonretry400-headers",
  type: {
    name: "Composite",
    className: "LROSADsPost202NonRetry400Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPostAsyncRelativeRetry400Headers: msRest.CompositeMapper = {
  serializedName: "lrosads-postasyncrelativeretry400-headers",
  type: {
    name: "Composite",
    className: "LROSADsPostAsyncRelativeRetry400Headers",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPutAsyncRelativeRetryNoStatusHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-putasyncrelativeretrynostatus-headers",
  type: {
    name: "Composite",
    className: "LROSADsPutAsyncRelativeRetryNoStatusHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPutAsyncRelativeRetryNoStatusPayloadHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-putasyncrelativeretrynostatuspayload-headers",
  type: {
    name: "Composite",
    className: "LROSADsPutAsyncRelativeRetryNoStatusPayloadHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsDeleteAsyncRelativeRetryNoStatusHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-deleteasyncrelativeretrynostatus-headers",
  type: {
    name: "Composite",
    className: "LROSADsDeleteAsyncRelativeRetryNoStatusHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPost202NoLocationHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-post202nolocation-headers",
  type: {
    name: "Composite",
    className: "LROSADsPost202NoLocationHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPostAsyncRelativeRetryNoPayloadHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-postasyncrelativeretrynopayload-headers",
  type: {
    name: "Composite",
    className: "LROSADsPostAsyncRelativeRetryNoPayloadHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPutAsyncRelativeRetryInvalidHeaderHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-putasyncrelativeretryinvalidheader-headers",
  type: {
    name: "Composite",
    className: "LROSADsPutAsyncRelativeRetryInvalidHeaderHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPutAsyncRelativeRetryInvalidJsonPollingHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-putasyncrelativeretryinvalidjsonpolling-headers",
  type: {
    name: "Composite",
    className: "LROSADsPutAsyncRelativeRetryInvalidJsonPollingHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsDelete202RetryInvalidHeaderHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-delete202retryinvalidheader-headers",
  type: {
    name: "Composite",
    className: "LROSADsDelete202RetryInvalidHeaderHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsDeleteAsyncRelativeRetryInvalidHeaderHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-deleteasyncrelativeretryinvalidheader-headers",
  type: {
    name: "Composite",
    className: "LROSADsDeleteAsyncRelativeRetryInvalidHeaderHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsDeleteAsyncRelativeRetryInvalidJsonPollingHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-deleteasyncrelativeretryinvalidjsonpolling-headers",
  type: {
    name: "Composite",
    className: "LROSADsDeleteAsyncRelativeRetryInvalidJsonPollingHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPost202RetryInvalidHeaderHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-post202retryinvalidheader-headers",
  type: {
    name: "Composite",
    className: "LROSADsPost202RetryInvalidHeaderHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPostAsyncRelativeRetryInvalidHeaderHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-postasyncrelativeretryinvalidheader-headers",
  type: {
    name: "Composite",
    className: "LROSADsPostAsyncRelativeRetryInvalidHeaderHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROSADsPostAsyncRelativeRetryInvalidJsonPollingHeaders: msRest.CompositeMapper = {
  serializedName: "lrosads-postasyncrelativeretryinvalidjsonpolling-headers",
  type: {
    name: "Composite",
    className: "LROSADsPostAsyncRelativeRetryInvalidJsonPollingHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsCustomHeaderPutAsyncRetrySucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lroscustomheader-putasyncretrysucceeded-headers",
  type: {
    name: "Composite",
    className: "LROsCustomHeaderPutAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      locationHeader: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsCustomHeaderPost202Retry200Headers: msRest.CompositeMapper = {
  serializedName: "lroscustomheader-post202retry200-headers",
  type: {
    name: "Composite",
    className: "LROsCustomHeaderPost202Retry200Headers",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LROsCustomHeaderPostAsyncRetrySucceededHeaders: msRest.CompositeMapper = {
  serializedName: "lroscustomheader-postasyncretrysucceeded-headers",
  type: {
    name: "Composite",
    className: "LROsCustomHeaderPostAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};
