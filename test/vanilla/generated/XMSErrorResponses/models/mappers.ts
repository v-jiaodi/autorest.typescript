/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const Animal: msRest.CompositeMapper = {
  serializedName: "Animal",
  type: {
    name: "Composite",
    className: "Animal",
    modelProperties: {
      aniType: {
        serializedName: "aniType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Pet: msRest.CompositeMapper = {
  serializedName: "Pet",
  type: {
    name: "Composite",
    className: "Pet",
    modelProperties: {
      ...Animal.type.modelProperties,
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

export const BaseError: msRest.CompositeMapper = {
  serializedName: "BaseError",
  type: {
    name: "Composite",
    className: "BaseError",
    modelProperties: {
      someBaseProp: {
        serializedName: "someBaseProp",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotFoundErrorBase: msRest.CompositeMapper = {
  serializedName: "NotFoundErrorBase",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "whatNotFound",
      clientName: "whatNotFound"
    },
    uberParent: "NotFoundErrorBase",
    className: "NotFoundErrorBase",
    modelProperties: {
      ...BaseError.type.modelProperties,
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      whatNotFound: {
        required: true,
        serializedName: "whatNotFound",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkNotFound: msRest.CompositeMapper = {
  serializedName: "InvalidResourceLink",
  type: {
    name: "Composite",
    className: "LinkNotFound",
    modelProperties: {
      ...NotFoundErrorBase.type.modelProperties,
      whatSubAddress: {
        serializedName: "whatSubAddress",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnimalNotFound: msRest.CompositeMapper = {
  serializedName: "AnimalNotFound",
  type: {
    name: "Composite",
    className: "AnimalNotFound",
    modelProperties: {
      ...NotFoundErrorBase.type.modelProperties,
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PetAction: msRest.CompositeMapper = {
  serializedName: "PetAction",
  type: {
    name: "Composite",
    className: "PetAction",
    modelProperties: {
      actionResponse: {
        serializedName: "actionResponse",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PetActionError: msRest.CompositeMapper = {
  serializedName: "PetActionError",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "errorType",
      clientName: "errorType"
    },
    uberParent: "PetActionError",
    className: "PetActionError",
    modelProperties: {
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "String"
        }
      },
      errorType: {
        required: true,
        serializedName: "errorType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PetSadError: msRest.CompositeMapper = {
  serializedName: "PetSadError",
  type: {
    name: "Composite",
    polymorphicDiscriminator: PetActionError.type.polymorphicDiscriminator,
    uberParent: "PetActionError",
    className: "PetSadError",
    modelProperties: {
      ...PetActionError.type.modelProperties,
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PetHungryOrThirstyError: msRest.CompositeMapper = {
  serializedName: "PetHungryOrThirstyError",
  type: {
    name: "Composite",
    polymorphicDiscriminator: PetActionError.type.polymorphicDiscriminator,
    uberParent: "PetActionError",
    className: "PetHungryOrThirstyError",
    modelProperties: {
      ...PetSadError.type.modelProperties,
      hungryOrThirsty: {
        serializedName: "hungryOrThirsty",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const discriminators = {
  'BaseError.NotFoundErrorBase' : NotFoundErrorBase,
  'BaseError.InvalidResourceLink' : LinkNotFound,
  'BaseError.AnimalNotFound' : AnimalNotFound,
  'PetActionError' : PetActionError,
  'PetActionError.PetSadError' : PetSadError,
  'PetActionError.PetHungryOrThirstyError' : PetHungryOrThirstyError

};
