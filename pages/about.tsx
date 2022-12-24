import { FC } from "react";

const About: FC = () => {
  return (
    <div>
      <p className="tw-text-white tw-text-3xl tw-font-bold tw-mb-8">About</p>
      <p className="tw-mb-3">
        Reputy is a Web3 framework that allows you to create reputation system
        for your own Decentralized Application.
      </p>
      <p className="tw-mb-3">
        We deploy a smart contract for you which you can then integrate with
        your DApp to rate users based on the actions they perform in your
        application. On the main page, you can see some of the applications that
        already integrated our solution!
      </p>
      <p className="tw-mb-3">
        As a killer feature, our deployed smart contract automatically creates
        on-chain generated NFTs with 5 levels of rarity for your users!
      </p>
      <p className="tw-mb-3">
        This project was created as a submission to BNB Blockchain Hackathon
        held in Astana IT university.
      </p>
      <p className="tw-mb-3">
        Please visit our{" "}
        <a
          href="https://github.com/ironsoul0/Reputy"
          className="tw-underline"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        for more information.
      </p>
      <p className="tw-mb-3">
        Much love, <br />
        Akezhan & Timka
      </p>
    </div>
  );
};

export default About;
