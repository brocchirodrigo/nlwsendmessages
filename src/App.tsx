import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { useContext } from 'react';
import { AuthContext } from './contexts/auth';
import { SendMessageForm } from './components/SendMessageForm';

import styles from './App.module.scss';

import { Toaster } from './components/ToastNotify/Toast'; 

function App() {

  const { user } = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <Toaster />
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox /> }
    </main>
  )
}

export { App } 
