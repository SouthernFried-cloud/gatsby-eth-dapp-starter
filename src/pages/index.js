// Frameworks
import React from 'react';
import { Link } from 'gatsby';
import { Heading, Button, Text, Box } from 'rimble-ui';

// Layout Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Static Route
const IndexPage = () => {
    const githubRepo = 'https://github.com/robsecord/gatsby-eth-dapp-starter';

    const _openLink = (linkUrl) => () => {
        window.open(linkUrl);
    };

    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

            <Heading as={"h2"}>
                Welcome to the CryptoWaggles Official Dapp!
            </Heading>
            <Box mt={4}>
                <Text.p>
                     To See Waggles Available Now for Purchase go to <Link to="/page-2/">Page 2.</Link>
                </Text.p>
                <Text.p>
                    To use our Official Dapp with <b>Web3 Authentication</b>:
                </Text.p>
                <Text.p>
                    <Button size="small" as="a" href="/app/">DAPP</Button>
                </Text.p>
            </Box>
            <hr/>

            <Box mt={4}>
                <Text.p>To go directly to our MarketPlace--
                    <Button size="small" onClick={_openLink(marketplace)}>MARKETPLACE</Button>&nbsp;&nbsp;--&nbsp;&nbsp;<small><b>{githubRepo}</b></small>
                </Text.p>
            </Box>
            <hr/>

            <Heading as={"h3"}>
                WE ARE CURRENTLY UNDER CONSTRUCTION! We apologise for any inconvience and plan to be completing this project Q3-2021
            </Heading>
            <Box mt={3}>
                <ul className="clean-list">
                    <li>
                        Waggle Facts
                        <ul>
                            <li>Waggles live on Ethereum and IPFS blockchains.</li>
                            <li>Waggles are unique and the only one of its kind.</li>
                        </ul>
                    </li>
                    <li>
                        To participate we are integrating the following wallets:
                        <ul>
                            <li>Fortmatic</li>
                            <li>Torus</li>
                            <li>Portis</li>
                            <li>Uport</li>
                            <li>Authereum</li>
                            <li>Bitski</li>
                            <li>SquareLink</li>
                            <li>Arkane Network</li>
                        </ul>
                    </li>
                    <li>
                       These are our Browser Wallets:
                        <ul>
                            <li>MetaMask</li>
                            <li>Native (Brave, Opera, Toshi, Cipher, Status, etc..)</li>
                        </ul>
                    </li>
                    <li>
                        We are also lauching our DeFi ERC20 token August 2021:
                        <ul>
                            <li>Users will be able to stake the Waggle ERC20 token to earn Extremely RARE NFTs</li>
                            <li>Users will be able to also remove thier liquidity by burning thier NFTs</li>
                        </ul>
                    </li>
                </ul>
            </Box>

            <Heading as={"h3"}>
               STAY Tuned! START collecting Waggle NFTs at the Marketplace and be looking for our ICO ERC20 AIRDROP in JULY 2021
            </Heading>
        </Layout>
    );
};

export default IndexPage;
