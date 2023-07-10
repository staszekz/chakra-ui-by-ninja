import {Tab, TabList, TabPanel, TabPanels, Tabs, List, ListIcon, ListItem} from '@chakra-ui/react';
import {AtSignIcon, CalendarIcon, EditIcon} from '@chakra-ui/icons';
import {NavLink} from 'react-router-dom';

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme='purple' variant="enclosed">
      <TabList>
        <Tab _selected={{color: 'white', bg: 'purple.400'}}>Account Info</Tab>
        <Tab _selected={{color: 'white', bg: 'purple.400'}}>Task History</Tab>

      </TabList>

      <TabPanels>
        <TabPanel>
          <List color="purple" fontSize={"1.2em"} spacing="1.2">
            <ListItem>
              <ListIcon as={CalendarIcon} color="purple" />
              Dashboard
            </ListItem>
            <ListItem>
              <ListIcon as={EditIcon} color="purple" />New Task
            </ListItem>
            <ListItem>
              <ListIcon as={AtSignIcon} color="purple" />Profile
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List color="teal.400" fontSize={"1.2em"} spacing="1.2">
            <ListItem>
              <ListIcon as={CalendarIcon} color="teal.400" />
              Dashboard
            </ListItem>
            <ListItem>
              <ListIcon as={EditIcon} color="teal.400" />New Task
            </ListItem>
            <ListItem>
              <ListIcon as={AtSignIcon} color="teal.400" />Profile
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
