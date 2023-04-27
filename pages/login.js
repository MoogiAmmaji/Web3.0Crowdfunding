import styles from "../style/login.module.css"
import Image from "next/image";
import icon from "../components/images/MetaMask_Fox.svg.png";
import {useState ,useEffect} from 'react';
import Web3 from 'web3';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from "styled-components";



const login = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");
  const Router = useRouter();
  
  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };
  const onConnect = async() => {
    try {
      const currentProvider = detectCurrentProvider();
      if(currentProvider) {
        await currentProvider.request({method: 'eth_requestAccounts'});
        const web3 = new Web3(currentProvider);
        const userAccount  =await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        setEthBalance(ethBalance);
        setIsConnected(true);
      }
    } catch(err) {
      console.log(err);
    }
  }
  
  const onDisconnect = () => {
    setIsConnected(false);
  }

  return (
    <div className={styles.login}>
     <div className={styles.loginheader}>
      <h1>Welcome to Decentralized application!!!</h1>
      <h2>CROWDFUNDING</h2>
     </div>
     <div className={styles.loginwrapper}>
     <Image src={icon} width={200} height={200} />
     </div> 
      {!isConnected && (
        <div >
             <button className={styles.appbuttons__login} onClick={onConnect}> LOGIN WITH METAMASK </button>
        </div>
      )}
    {isConnected && (
        <div>
          <div>
            <h1 >  You are connected to Metamask.  </h1>
             <div  className={styles.appbalance}>
               <h3> Balance: 
               {ethBalance} </h3>
              <button className={styles.appbuttons__logout} onClick={onDisconnect}>
               Disconnect
              </button>
              <a passHref href={'/createcampaign'}>
                <button className={styles.appbuttons__createcampaign}>CREATE CAMPAGIN</button> 
              </a>
            </div>
          </div>
          </div>
      )}
    </div>
  );
 }

  
export default login