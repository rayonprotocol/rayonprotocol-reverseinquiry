export interface RayonEventResponse<T> {
  logIndex: number;
  transactionIndex: number;
  transactionHash: string;
  blockHash: string;
  blockNumber: number;
  address: string;
  type: string;
  event: string;
  args: T;
}

/*
  event
  */
export enum RayonEvent {
  LogSignUpUser = 1,
}

const rayonEventNames = ['NONE', 'LogSignUpUser'];

export namespace RayonEvent {
  export function getRayonEventName(eventType: number) {
    return rayonEventNames[eventType];
  }
}

/*
  Event Respond and Event Arguments interface
*/

export interface LogSignUpEventArgs {
  userAddress: string;
  userName: string;
  isBorrower: boolean;
}

export enum LogSignUpEventArgsIndex {
  userName,
  isBorrower,
}