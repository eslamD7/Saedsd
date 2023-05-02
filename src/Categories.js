import React from "react";
import "./Categories.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon, StarIcon } from "@chakra-ui/icons";
import NeededCases from "./NeededCases";
import GivingCases from "./GivingCases";
import Volunteers from "./Volunteers";

function Categories() {
  return (
    <div className="categories">
      <Tabs
        variant="soft-rounded"
        className="categoriesTabs"
        colorScheme="blue"
        align="center"
      >
        <TabList>
          <Tab className="categoriesTabsSingleTab">
            <h4>
              الحالات ( احتياج ) &nbsp;
              <TriangleDownIcon />
            </h4>
          </Tab>
          <Tab className="categoriesTabsSingleTab">
            <h4>
              الحالات ( فائض ) &nbsp;
              <TriangleUpIcon />
            </h4>
          </Tab>
          <Tab className="categoriesTabsSingleTab">
            <h4>
              المتطوعين &nbsp;
              <StarIcon />
            </h4>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <NeededCases />
          </TabPanel>
          <TabPanel>
            <GivingCases />
          </TabPanel>
          <TabPanel>
            <Volunteers />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Categories;
