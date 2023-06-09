import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SensoryToys from "./SensoryToys";
import CognitiveToys from "./CognitiveToys";
import MotorToys from "./MotorToys";
import { useContext } from "react";
import { UserContext } from "../../../providers/AuthProvider";

const ToysTabs = () => {
const {loading} = useContext(UserContext)

const handleLoad = () => {
  <progress className="progress w-56"></progress>
}
  
  return (
    <div>
        {
          loading ? handleLoad :
          <div>
        <div>
            <h3 className="text-4xl font-extrabold text-center mb-6"> Educational Baby Toys</h3>
        </div>
      <Tabs>
        <TabList className='text-center font-bold text-rose-500'>
          <Tab>Sensory Development Toys</Tab>
          <Tab>Cognitive Development Toys</Tab>
          <Tab>Motor Skills Development Toys</Tab>
        </TabList>

        <TabPanel>
          <div>
            <SensoryToys></SensoryToys>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <CognitiveToys></CognitiveToys>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <MotorToys></MotorToys>
          </div>
        </TabPanel>
      </Tabs>

            </div>
        }
    </div>
  );
};

export default ToysTabs;
