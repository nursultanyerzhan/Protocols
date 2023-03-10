import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Modal } from "./components/Modal/Modal";
import { ProtocolDocuments } from "./components/ProtocolDocuments";
import { TestForm } from "./components/TestForm";
import { Eastern } from "./components/Eastern/Eastern";
import { ProtocolDocument } from "./components/ProtocolDocument/ProtocolDocument";
import { RtqSample } from "./components/RtqSample/RtqSample";

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
  },
  {
    path: '/rtqSample',
    element: <RtqSample />
  },
  {
    path: '/protocolDocument',
    element: <ProtocolDocument />
  }
];

export default AppRoutes;
