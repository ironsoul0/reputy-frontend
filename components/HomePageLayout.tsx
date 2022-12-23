import React, { FC } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FeedCard, NFTCard } from "../components";

type HomePageProps = {
  title: string;
  description: string;
  dappImage: string;
  tab1: React.ReactElement;
  tab2: React.ReactElement;
  tab3: React.ReactElement;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export const HomePageLayout: FC<HomePageProps> = ({ dappImage, title, description, tab1, tab2, tab3 }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="container tw-my-12">
      <img alt="dao" src={dappImage} style={{ maxWidth: 150, maxHeight: 150, borderRadius: '50%' }} />
      <p className="text-white tw-font-bold tw-text-2xl mt-4">{title}</p>
      <p className="text-white">{description}</p>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "white", color: "white" }}>
          <Tabs
            indicatorColor="secondary"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab className="text-white" label="Feed" {...a11yProps(0)} />
            <Tab className="text-white" label="Ranking" {...a11yProps(1)} />
            <Tab className="text-white" label="NFTs" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {tab1}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {tab2}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {tab3}
        </TabPanel>
      </Box>
    </div>
  );
};
