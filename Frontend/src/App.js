import { Admin, Resource, List, Datagrid, TextField, Create, SimpleForm, TextInput } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider('http://securestack-insight-env.us-east-1.elasticbeanstalk.com');
// Asset List Component
const AssetsList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
      <TextField source="status" />
      <TextField source="notes" />
    </Datagrid>
  </List>
);

// Asset Create Component
const AssetsCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="type" />
      <TextInput source="status" />
      <TextInput source="notes" multiline />
    </SimpleForm>
  </Create>
);

const App = () => (
  <Admin dataProvider={dataProvider} title="SecureStack Insight">
    <Resource name="assets" list={AssetsList} create={AssetsCreate} />
  </Admin>
);

export default App;