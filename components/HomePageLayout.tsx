import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import clsx from "clsx";
import React, { FC } from "react";

type HomePageProps = {
  title: string;
  description: string;
  rating?: number;
  dappImage: string;
  tag: string;
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const HomePageLayout: FC<HomePageProps> = ({
  dappImage,
  title,
  description,
  rating,
  tag,
  tab1,
  tab2,
  tab3,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="tw-animate-smooth-appear">
      <p className="tw-text-white tw-text-3xl tw-font-bold tw-mb-8">{title}</p>
      <div
        style={{
          backgroundColor: "#202a30",
          display: "block",
        }}
        className="tw-relative tw-rounded-2xl tw-bg-card-blue tw-text-soft-white tw-text-lg tw-font-normal tw-shadow-xl tw-mb-6"
      >
        <div
          className="tw-absolute tw-top-2 tw-right-2 tw-px-2 tw-py-1 tw-rounded-lg tw-z-40"
          style={{ backgroundColor: "#232627" }}
        >
          <p className="tw-text-sm tw-text-white tw-m-0">{tag}</p>
        </div>

        <div
          className="tw-block tw-relative tw-rounded-xl tw-overflow-hidden tw-bg-contain tw-bg-no-repeat"
          title="Equilibrium"
          style={{
            backgroundImage: `url(${dappImage})`,
            backgroundSize: "100%",
            height: 240,
          }}
        />

        <div
          className="tw-px-4 tw-py-4 tw-absolute tw-bottom-0 tw-rounded-b-xl tw-flex tw-justify-between tw-items-center"
          style={{
            width: "100%",
            backgroundColor: "rgba(0,0,0, 0.85)",
          }}
        >
          <div>
            <p
              className="text-white tw-tracking-wide tw-m-0 tw-text-base"
              style={{ maxWidth: 300 }}
            >
              {description}
            </p>
            <p
              className={clsx(
                "tw-font-semibold tw-transition-colors tw-duration-1000 tw-m-0 tw-text-xl tw-mt-2",
                rating ? "tw-text-green-550" : "tw-text-red-500"
              )}
            >
              {rating ? `My rating: ${rating}` : "No rating"}
            </p>
          </div>
          <div className="tw-flex tw-text-base">
            <a
              className="tw-px-4 tw-py-2 tw-rounded-md tw-bg-slate-700 tw-transition-all"
              href="#"
            >
              OpenSea
            </a>
            <a
              className="tw-ml-3 tw-px-4 tw-py-2 tw-rounded-md tw-bg-slate-700 tw-transition-all"
              href="#"
            >
              My NFT
            </a>
          </div>
        </div>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{ borderBottom: 1, borderColor: "white", color: "white" }}
          style={{ padding: 0 }}
        >
          <Tabs
            indicatorColor="secondary"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab className="text-white" label="Feed" {...a11yProps(0)} />
            <Tab className="text-white" label="Ranking" {...a11yProps(1)} />
            {/* <Tab className="text-white" label="NFTs" {...a11yProps(2)} /> */}
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
