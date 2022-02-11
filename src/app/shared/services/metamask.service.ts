import { Injectable } from '@angular/core';

@Injectable()
export class MetamaskService {
  public window = window;
  constructor() {}

  public async connectMetamask(): Promise<void> {
    const accounts = await this.window.ethereum?.request({
      method: 'eth_requestAccounts',
    });
    console.log(accounts);
  }
}
