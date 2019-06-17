import * as React from 'react'; 
import {web3, ethereum} from './web3';

// the clock's state has one field: The current time, based upon the
// JavaScript class Date
type FooterState = {
  account: string,
  accounts: string[],
  error: boolean,
}

class Footer extends React.Component<{}, FooterState> {

  state : FooterState = {
    account: '',
    accounts: [],
    error: false,
  }

  async componentDidMount() {
    await ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    this.setState({
      account: accounts[0],
      accounts,
      error: !accounts.length,
    })
  }

  // render will know everything!
  render() {
    const { account, error } = this.state;

    return (
      <footer>
        <hr />
        <span>Current Account: {error ? 'Please enable MetaMask' : account}</span>
      </footer>
    )
  }
}

export default Footer;