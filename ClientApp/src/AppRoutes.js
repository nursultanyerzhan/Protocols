import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Modal } from "./components/Modal/Modal";
import { ProtocolDocuments } from "./components/ProtocolDocuments";
import { TestForm } from "./components/TestForm";
import { Eastern } from "./components/Eastern/Eastern";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/documentsPath',
    element: <ProtocolDocuments />
  },
  {
    path: '/testForm',
    element: <TestForm />
  }
  ,
  {
    path: '/testModal',
    element: <Modal />
  },
  {
    path: '/eastern',
    element: <Eastern />
  }
];

export default AppRoutes;
