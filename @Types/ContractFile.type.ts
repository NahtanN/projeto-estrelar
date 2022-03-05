export type ContracType = {
  _format: string;
  contractName: string;
  sourceName: string;
  abi: [
    {
      anonymous: boolean;
      inputs: [
        {
          indexed: boolean;
          internalType: string;
          name: string;
          type: string;
        },
        {
          indexed: boolean;
          internalType: string;
          name: string;
          type: string;
        },
        {
          indexed: boolean;
          internalType: string;
          name: string;
          type: string;
        }
      ];
      name: string;
      type: string;
    },
    {
      inputs: [];
      name: string;
      outputs: [
        {
          internalType: string;
          name: string;
          type: string;
        }
      ];
      stateMutability: string;
      type: string;
    },
    {
      inputs: [];
      name: string;
      outputs: [
        {
          components: [
            {
              internalType: string;
              name: string;
              type: string;
            },
            {
              internalType: string;
              name: string;
              type: string;
            },
            {
              internalType: string;
              name: string;
              type: string;
            }
          ];
          internalType: string;
          name: string;
          type: string;
        }
      ];
      stateMutability: string;
      type: string;
    },
    {
      inputs: [];
      name: string;
      outputs: [
        {
          internalType: string;
          name: string;
          type: string;
        }
      ];
      stateMutability: string;
      type: string;
    },
    {
      inputs: [];
      name: string;
      outputs: [];
      stateMutability: string;
      type: string;
    },
    {
      inputs: [
        {
          internalType: string;
          name: string;
          type: string;
        }
      ];
      name: string;
      outputs: [];
      stateMutability: string;
      type: string;
    }
  ];
  bytecode: string;
  deployedBytecode: string;
  linkReferences: {};
  deployedLinkReferences: {};
};
