// import React, { useState, ReactNode } from 'react';

// interface TabProps {
//   label: string;
//   children: ReactNode;
// }

// const Tab: React.FC<TabProps> = ({ children }) => {
//   return <>{children}</>;
// };

// interface TabsProps {
//   children: ReactNode;
// }

// const Tabs: React.FC<TabsProps> = ({ children }) => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div>
//       <div className="tab-header">
//         {React.Children.map(children, (child, index) => {
//           if (React.isValidElement(child)) {
//             return (
//               <div
//                 className={`tab-item ${index === activeTab ? 'active' : ''}`}
//                 onClick={() => setActiveTab(index)}
//               >
//                 {child.props.label}
//               </div>
//             );
//           }
//         })}
//       </div>
//       <div className="tab-content">
//         {React.Children.map(children, (child, index) => {
//           if (index === activeTab) {
//             return <>{child}</>;
//           }
//         })}
//       </div>
//     </div>
//   );
// };

// const Dummy: React.FC = () => {
//   return (
//     <Tabs>
//       <Tab label="Tab 1">
//         <div>Contenido de la pestaña 1</div>
//       </Tab>
//       <Tab label="Tab 2">
//         <div>Contenido de la pestaña 2</div>
//       </Tab>
//       <Tab label="Tab 3">
//         <div>Contenido de la pestaña 3</div>
//       </Tab>
//     </Tabs>
//   );
// };

// export default Dummy;


// import React, { Component, ErrorInfo, ReactNode } from 'react';

// interface ErrorBoundaryProps {
//   renderError: (error: Error, errorInfo: ErrorInfo) => ReactNode;
// }

// interface ErrorBoundaryState {
//   hasError: boolean;
//   error: Error | null;
//   errorInfo: ErrorInfo | null;
// }

// class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     this.state = {
//       hasError: false,
//       error: null,
//       errorInfo: null,
//     };
//   }

//   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//     this.setState({
//       hasError: true,
//       error: error,
//       errorInfo: errorInfo,
//     });
//   }

//   render() {
//     const { renderError, children } = this.props;
//     const { hasError, error, errorInfo } = this.state;

//     if (hasError) {
//       return renderError(error!, errorInfo!);
//     }

//     return children;
//   }
// }

// const Dummy: React.FC = () => {
//   const renderError = (error: Error, errorInfo: ErrorInfo) => {
//     return (
//       <div>
//         <h2>Something went wrong.</h2>
//         <details style={{ whiteSpace: 'pre-wrap' }}>
//           {error && error.toString()}
//           <br />
//           {errorInfo.componentStack}
//         </details>
//       </div>
//     );
//   };

//   return (
//     <ErrorBoundary renderError={renderError}>
//       {/* Componentes envueltos por el ErrorBoundary */}
//       <div>
//         <h1>Welcome to My App</h1>
//         <p>This is a sample application.</p>
//         {/* Simulando un error */}
//         <button onClick={() => { throw new Error('An unexpected error occurred.'); }}>
//           Trigger Error
//         </button>
//       </div>
//     </ErrorBoundary>
//   );
// };

// export default Dummy;


import React, { useState } from 'react';

interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ value, onChange }) => {
  const handleClick = () => {
    onChange(!value);
  };

  return (
    <button onClick={handleClick}>
      {value ? 'On' : 'Off'}
    </button>
  );
};

// Usage of the Toggle component controlled by props
const Dummy: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleChange = (value: boolean) => {
    setIsToggled(value);
  };

  return (
    <div>
      <h1>Control Props Example</h1>
      <Toggle value={isToggled} onChange={handleToggleChange} />
      <p>The current state is: {isToggled ? 'On' : 'Off'}</p>
    </div>
  );
};

export default Dummy;